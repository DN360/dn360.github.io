import React from 'react';
import classes from 'styles//works.module.scss';
import {NextPage} from 'next';
import Head from 'next/head';
import {BackButton} from 'components/Buttons';

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
    </div>
  );
};

export default WorksPage;
