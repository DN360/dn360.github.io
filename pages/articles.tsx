import React, {useEffect, useState} from 'react';
import classes from 'styles//articles.module.scss';
import {NextPage} from 'next';
import Head from 'next/head';
import {BackButton, Button} from 'components/Buttons';
import {convertMiniArticle, getArticles, MiniArticle} from 'utils/articles';
import {Table} from 'components/Table';
import Link from 'next/link';
import * as qs from 'querystring';
import {Spacer} from 'components/Spacer';
import Router from 'next/router';

const ARTICLE_PER_PAGE = 10;

const ArticlesPage: NextPage<{articles?: MiniArticle[]}> = ({articles} = {articles: []}) => {
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  useEffect(() => {
    const query = qs.decode(location.search.slice(1));
    const page = Number(query?.page) || 1;
    setPage(page);
    setMaxPage((articles.length - articles.length % ARTICLE_PER_PAGE) / ARTICLE_PER_PAGE + 1);
  });
  return (
    <div className={classes.root}>
      <Head>
        <title>Monbrand Software | Articles</title>
        <meta property="og:title" content="Monbrand Software | Articles"/>
        <meta name="description" content="ブログ記事一覧"/>
        <meta property="og:description" content="ブログ記事一覧"/>
      </Head>
      <BackButton />
      <div className={classes.center}>
        <h1 className={classes.h5}>記事一覧</h1>
      </div>
      <p>
        雑記です。
      </p>
      <Table>
        <tbody>
          {
            articles.slice((page - 1) * ARTICLE_PER_PAGE, page * ARTICLE_PER_PAGE).map((article) => (
              <tr key={article.id}>
                <th><Link href={'/articles/' + article.id}><a>{article.dotDate}</a></Link></th>
                <td>{article.title}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
      <Spacer size="thin" />
      <div className={classes.pagerContainer}>
        <Button onClick={() => {
          if (page === 1) {
            return;
          }
          setPage((c) => c - 1);
          Router.push('?page=' + (page - 1));
        }}>
          {'<'}
        </Button>
        <Button>
          {page}
        </Button>
        <Button onClick={() => {
          if (page === maxPage) {
            return;
          }
          setPage((c) => c + 1);
          Router.push('?page=' + (page + 1));
        }}>
          {'>'}
        </Button>
      </div>
    </div>
  );
};

export const getStaticProps = () => {
  const articles = getArticles().map(convertMiniArticle);
  return {
    props: {
      articles: articles,
    },
  };
};


export default ArticlesPage;
