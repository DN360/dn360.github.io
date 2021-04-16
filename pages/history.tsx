import React from 'react';
import classes from 'styles//history.module.scss';
import {NextPage} from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const HistoryPage: NextPage<{}> = () => {
  return (
    <div className={classes.root}>
      <Head>
        <title>Monbrand software | History</title>
      </Head>
      <Link href="/">
        <a>
          <div className={classes.iconButton}>
            <FontAwesomeIcon icon={faArrowLeft} />
            go back to top page
          </div>
        </a>
      </Link>
      <p>
        まだ書いている途中です。ちょっとまっててね。
      </p>
    </div>
  );
};

export default HistoryPage;
