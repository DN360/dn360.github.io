import React from 'react';
import classes from 'styles//history.module.scss';
import {NextPage} from 'next';
import Head from 'next/head';
import {BackButton} from 'components/Buttons';

const tableContents: string[][] = [
  ['2007-12-16', 'サークル発足'],
  ['---', '-----'],
  ['2017-09-11', 'ホームページ新設'],
  ['2017-11', 'うさぽんダッシュ設置'],
  ['2018-09', 'ホームページリフォーム終了'],
  ['2020-02', 'さらにリフォームし、相互リンクページを新設'],
  ['2020-02-28', 'ハートライトステッキ制御ページを改装'],
  ['2021-04-14', 'ホームページ改装スタート'],
  ['2021-04-18', '一旦github pagesに移行し、履歴ページまでを実装'],
].reverse();

const HistoryPage: NextPage<{}> = () => {
  return (
    <div className={classes.root}>
      <Head>
        <title>Monbrand software | History</title>
      </Head>
      <BackButton />
      <div className={classes.center}>
        <h1 className={classes.h5}>サイト更新履歴</h1>
      </div>
      <p>
        このサイトの更新履歴です。
      </p>
      <table className={classes.historyTable}>
        <tbody>
          {tableContents.map((toc, i) => (
            <tr key={'history-' + i}>
              <th>{toc[0]}</th>
              <td>{toc[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryPage;
