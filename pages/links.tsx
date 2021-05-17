import React from 'react';
import classes from 'styles//links.module.scss';
import {NextPage} from 'next';
import {BackButton} from 'components/Buttons';
import {TabLink} from 'components/TabLink';
import {Table} from 'components/Table';
import {SmartHead} from 'components/SmartHead';

const links: [
  string, string, string | Element | React.ReactFragment
][] = [
  ['アイマスPカード', 'https://wiki.mbsoftware.tokyo/card/', 'おひげPのアイマスPカードです、よろしくおねがいします。'],
  ['あずきノート', 'https://uxhpu.net/', (
    <span key="link-to-azuki">
      <TabLink className={classes.link} href="https://twitter.com/uxhpu">あずきちゃん</TabLink>のホームページです。
    </span>
  )],
  ['捻れたバベル', 'https://hutinoatari.github.io/', (
    <span key="link-to-atari">
      <TabLink className={classes.link} href="https://twitter.com/ebioishii_u">淵野アタリ</TabLink>くんのホームページです。が、どうやらリンク切れしています。
    </span>
  )],
  ['つまみネット', 'https://www.trpfrog.net/', (
    <span key="link-to-tsumami">
      <TabLink className={classes.link} href="https://twitter.com/TrpFrog">つまみ</TabLink>くんのホームページです。
    </span>
  )],
  ['あまくだｒｙ', 'https://amakuda.blogspot.com', (
    <span key="link-to-ond">
      <TabLink className={classes.link} href="https://twitter.com/ondamayadori">おんだ</TabLink>さんのホームページです。
    </span>
    )],
  ['エイエヌソフト わぁるど', 'http://ansoft1984.com/', (
    <span key="link-to-ansoft">
      This is my <TabLink className={classes.link} href="https://twitter.com/ANSoft1984">to-chang</TabLink>'s homepage.(急に音でるのでお気をつけて)
    </span>
    )],
];

const LinksPage: NextPage<{}> = () => {
  return (
    <div className={classes.root}>
      <SmartHead
        title="Monbrand Software | Links"
        description="リンク集"
        type="article"
        uri="/links"
      />
      <BackButton />
      <div className={classes.center}>
        <h1 className={classes.h5}>リンク集</h1>
      </div>
      <p>
        相互リンクをしている or していたリンク集です。相互リンクはお会いしたことがある方ならお気軽にご連絡をどうぞ。
      </p>
      <Table>
        <tbody>
          {links.map((link) => (
            <tr key={link[1]}>
              <th><TabLink href={link[1]}>{link[0]}</TabLink></th>
              <td>{link[2]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default LinksPage;
