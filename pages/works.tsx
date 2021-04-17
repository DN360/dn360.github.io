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
      </Head>
      <BackButton />
      <p>
        まだ書いている途中です。ちょっとまっててね。
      </p>
    </div>
  );
};

export default WorksPage;
