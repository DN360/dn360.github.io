import React from 'react';
import classes from '../styles/index.module.scss';
import Head from 'next/head';
import {NextPage} from 'next';
import Link from 'next/link';
import {Box, BoxContainer} from 'components/Box';
import {TabLink} from 'components/TabLink';
import {Button} from 'components/Buttons';


const IndexPage: NextPage<{}> = () => {
  return (
    <div className={classes.root}>
      <Head>
        <title>Monbrand software | TOP</title>
      </Head>
      <div className={classes.center}>
        <h1 className={classes.h5}>Welcome to Monbrand Software!</h1>
      </div>
      <BoxContainer size="3" className={classes.boxContainer}>
        <Box size="2" mode="fluid">
          <Button><TabLink href="https://twitter.com/DN360">Twitter</TabLink></Button>
        </Box>
        <Box size="1" mode="fluid">
          <Button><TabLink href="https://github.com/DN360">Github</TabLink></Button>
        </Box>
      </BoxContainer>
      <BoxContainer size="2" className={classes.boxContainer}>
        <Box size="1" mode="fluid">
          <Button><Link href="/about"><a>About</a></Link></Button>
        </Box>
        <Box size="1" mode="fluid">
          <Button><Link href="/works"><a>Works</a></Link></Button>
        </Box>
        <Box size="1" mode="fluid">
          <Button><Link href="/links"><a>Links</a></Link></Button>
        </Box>
        <Box size="1" mode="fluid">
          <Button><Link href="/history"><a>History</a></Link></Button>
        </Box>
      </BoxContainer>
    </div>
  );
};

export default IndexPage;
