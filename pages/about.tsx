import React from 'react';
import classes from 'styles//about.module.scss';
import {NextPage} from 'next';
import Head from 'next/head';
import {BackButton} from 'components/Buttons';

const AboutPage: NextPage<{}> = () => {
  return (
    <div className={classes.root}>
      <Head>
        <title>Monbrand software | About</title>
        <meta name="description" content="Monbrand Softwareとは？"/>
        <meta property="og:description" content="Monbrand Softwareとは？"/>
      </Head>
      <BackButton />
      <div className={classes.center}>
        <h1 className={classes.h5}>Monbrand Softwareとは？</h1>
      </div>
      <p>
        Monbrand Softwareはソフトウェアサークルです。主にウェブページの制作からAWSを用いたインフラ・バックエンドの開発などを行っています。
      </p>
      <table className={classes.aboutTable}>
        <tbody>
          <tr>
            <th>名前</th>
            <td>もんぶらん</td>
          </tr>
          <tr>
            <th>Name</th>
            <td>Monbrand Software</td>
          </tr>
          <tr>
            <th>創始者</th>
            <td>永田 門</td>
          </tr>
          <tr>
            <th>活動内容</th>
            <td>ソフトウェアの開発・運用</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AboutPage;
