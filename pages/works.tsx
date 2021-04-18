import React from 'react';
import classes from 'styles//works.module.scss';
import {NextPage} from 'next';
import Head from 'next/head';
import {BackButton} from 'components/Buttons';
import Link from 'next/link';
import {Table} from 'components/Table';
import {TabLink} from 'components/TabLink';

const WorksPage: NextPage<{}> = () => {
  return (
    <div className={classes.root}>
      <Head>
        <title>Monbrand software | Works</title>
        <meta name="description" content="Monbrand Software 作品集"/>
        <meta property="og:description" content="Monbrand Software 作品集"/>
      </Head>
      <BackButton />
      <div className={classes.center}>
        <h1 className={classes.h5}>作品ページ</h1>
      </div>
      <p>
        DN360が個人で制作したページの数々です。
      </p>
      <Table>
        <tbody>
          <tr>
            <th><TabLink href="https://wiki.mbsoftware.tokyo/unity/usapon">うさぽんダッシュ</TabLink></th>
            <td>多摩美術大学のうさぽん展で展示していたうさぽんが主役のゲームです。</td>
          </tr>
          <tr>
            <th><Link href="/works/heartlight"><a>ミラクルハートライトコントローラー</a></Link></th>
            <td>ピューロランドで販売しているミラクルハートライトを制御するページです。</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default WorksPage;
