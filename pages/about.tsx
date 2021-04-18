import React from 'react';
import classes from 'styles//about.module.scss';
import {NextPage} from 'next';
import {SmartHead} from 'components/SmartHead';
import {BackButton} from 'components/Buttons';
import {Table} from 'components/Table';

const AboutPage: NextPage<{}> = () => {
  return (
    <div className={classes.root}>
      <SmartHead
        title="Monbrand Software | About"
        description="Monbrand Softwareとは？"
        type="article"
        uri="/about"
      />
      <BackButton />
      <div className={classes.center}>
        <h1 className={classes.h5}>Monbrand Softwareとは？</h1>
      </div>
      <p>
        Monbrand Softwareはソフトウェアサークルです。主にウェブページの制作からAWSを用いたインフラ・バックエンドの開発などを行っています。
      </p>
      <Table>
        <tbody>
          <tr>
            <th>名前</th>
            <td colSpan={2}>もんぶらん</td>
          </tr>
          <tr>
            <th>Name</th>
            <td colSpan={2}>Monbrand Software</td>
          </tr>
          <tr>
            <th>創始者</th>
            <td>永田 門</td>
            <td>ニックネーム: DN360</td>
          </tr>
          <tr>
            <th>活動内容</th>
            <td colSpan={2}>ソフトウェアの開発・運用</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default AboutPage;
