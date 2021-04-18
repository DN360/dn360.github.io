import React, {useState} from 'react';
import classes from 'styles/works/heartlight.module.scss';
import {NextPage} from 'next';
import Head from 'next/head';
import {BackButton, Button, ToggleButton} from 'components/Buttons';
import {cls} from 'utils';
import {Spacer} from 'components/Spacer';
import {Box, BoxContainer} from 'components/Box';
import {heartlightPatterns} from '../../utils/data';

const sleep = async (time: number) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(true);
  }, time);
});

const WorksHeartlightPage: NextPage<{}> = () => {
  const [notifyBeep, setBeep] = useState(true);

  const lightFireButtonOnClick = async (bitsStr) => {
    // 音を鳴らす部分
    const ctx = new AudioContext();
    const bufferSize = 1024;
    const inputChannel = 1;
    const outputChannel = 1;
    const node = ctx.createScriptProcessor(bufferSize, inputChannel, outputChannel);

    const gainNode = ctx.createGain();
    gainNode.gain.value = 1;

    let step = 0;
    let freq = 0;

    const freqArray = [18500, 18750, 19250, 19000, 19500];

    const stepMiliSec = 150;
    const waitMiliSec = 150;

    node.onaudioprocess = (e) => {
      const data = e.outputBuffer.getChannelData(0);

      for (let i = 0; i < data.length; i++) {
        data[i] = Math.sin(2 * Math.PI * step);
        step += freq / ctx.sampleRate;
      }
    };

    const playFreq = async (f, sec) => {
      console.log(f);
      node.disconnect();
      freq = f;
      node.connect(gainNode);
      gainNode.connect(ctx.destination);
      await sleep(sec);
    };

    const bits = bitsStr.split('').map((x) => Number(x));
    // 880Hzの音を流す
    if (notifyBeep) {
      await playFreq(880, waitMiliSec);
    }

    // ビットごとに再帰的に実行する
    const reFunc = async (bitIndex) => {
      if (bitIndex >= bits.length) {
        return;
      }

      const bit = bits[bitIndex];
      if (bitIndex === 0) {
        await playFreq(freqArray[0], stepMiliSec);
      } else if (bit === 0) {
        if (bitIndex % 2 === 1) {
          // 奇数の0
          await playFreq(freqArray[1], stepMiliSec);
        } else {
          // 偶数の0
          await playFreq(freqArray[3], stepMiliSec);
        }
      } else if (bit === 1) {
        if (bitIndex % 2 === 1) {
          // 奇数の1
          await playFreq(freqArray[2], stepMiliSec);
        } else {
          // 偶数の1
          await playFreq(freqArray[4], stepMiliSec);
        }
      }

      return reFunc(bitIndex + 1);
    };

    await reFunc(0);
    if (notifyBeep) {
      await playFreq(440, waitMiliSec);
    }

    node.disconnect();
  };

  return (
    <div className={classes.root}>
      <Head>
        <title>Monbrand Software | ミラクルハートライトコントローラー</title>
        <meta name="description" content="ミラクルハートライトの制御ページ"/>
        <meta property="og:description" content="ミラクルハートライトの制御ページ"/>
        <meta property="og:type" content="article"/>
      </Head>
      <BackButton to="/works">go back to works page</BackButton>
      <div className={classes.center}>
        <h1 className={classes.h5}>ミラクルハートライトコントローラー</h1>
      </div>
      <div className={classes.title}>
        ミラクルハートライトコントローラーとは？
      </div>
      <p>
        ピューロランドで販売しているミラクルハートライトは、可聴域ギリギリの高周波音で光を制御することができます。そのため、DVDなどにパレードの音声とともに映像をデータ圧縮して記録しても制御信号を記録することができます。<br />
        このページでは、パターンが書いてあるボタンを押すことで、ミラクルハートライトを制御する高周波音が出力されます。みんなも自分のミラクルハートライトをONにして遊んでみましょう！
      </p>
      <div className={cls(classes.title, classes.red)}>
        使用上の注意
      </div>
      <p>
        <span className={classes.redLine}>パレード中やショーの最中に流す</span>などの悪用はしないでください。私(DN360)はその際に発生した訴訟は問題などの責任は負いません。
      </p>
      <div className={classes.title}>
        パターン一覧
      </div>
      <Spacer size="thin" />
      <div className={classes.title}>
        <ToggleButton push={notifyBeep} onClick={() => {
          setBeep((c) => !c);
        }}>
          {notifyBeep ? 'クリックしてビープ音を消す' : 'クリックしてビープ音を出す'}
        </ToggleButton>
      </div>
      <Spacer size="thin" />
      <BoxContainer size="3">
        {[
          ...heartlightPatterns,
          ...new Array(heartlightPatterns.length % 3 + 1).fill({}).map((x, i) => ({bits: 'empty-button-' + i, patt: ''})),
        ].map((pattern) => (
          <Box size="1" key={pattern.bits} mode="fluid">
            {
              pattern.patt === '' ? <></> : (
                <Button className={classes.patternButton} onClick={() => lightFireButtonOnClick(pattern.bits)}>{pattern.patt}</Button>
              )
            }
          </Box>
        ))}
      </BoxContainer>
    </div>
  );
};

export default WorksHeartlightPage;
