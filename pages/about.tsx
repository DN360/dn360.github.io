import React from 'react';
import classes from 'styles//about.module.scss';
import {NextPage} from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

const AboutPage: NextPage<{}> = () => {
  return (
    <div className={classes.root}>
      <Head>
        <title>Monbrand software | About</title>
      </Head>
      <Link href="/">
        <a>
          <div className={classes.iconButton}>
            <FontAwesomeIcon icon={faArrowLeft} />
            go back to top page
          </div>
        </a>
      </Link>
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
