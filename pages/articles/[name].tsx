import React from 'react';
import classes from 'styles/articles.module.scss';
import {NextPage} from 'next';
import {SmartHead} from 'components/SmartHead';
import {Article, convertShortArticle, getArticle, getArticles} from 'utils/articles';
import {parseArticle} from 'utils/markdown';
import {BackButton} from 'components/Buttons';

const ArticlePage: NextPage<{article: Article}> = ({article}) => {
  return (
    <div className={classes.root}>
      <SmartHead
        title={'Monbrand Software | ' + article.title}
        description={article.title}
        type="article"
        uri={'/articles/' + article.id}
      />
      <BackButton to="/articles">
        go back to article list page
      </BackButton>
      <div className={classes.center}>
        <h1 className={classes.h5}>{article.title}</h1>
      </div>
      <div>
        {parseArticle(article.main)}
      </div>
    </div>
  );
};

export const getStaticPaths = () => {
  const articles = getArticles().map(convertShortArticle);
  return {
    paths: articles.map((x) => '/articles/' + x.id),
    fallback: false,
  };
};

export const getStaticProps = ({params}) => {
  const article = getArticle(params.name);
  return {
    props: {
      article,
    },
  };
};

export default ArticlePage;
