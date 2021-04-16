import {APIGatewayProxyHandler} from 'aws-lambda';
const AWS = require('aws-sdk');
import 'source-map-support/register';

AWS.config.region = 'ap-northeast-1';
const ses = new AWS.SES({
  apiVersion: '2010-12-01',
});

export type SendEmailBody = {
  type: 'new-lesson';
  name: string;
  address: string;
  contactType: '体験予約' | 'レンタルスタジオ' | 'その他お問い合わせ';
  contact: string;
} | {
  type: 'lesson';
  typeClass: string;
  famName: string;
  fstName: string;
  famKana: string;
  fstKana: string;
  grade: string;
  gender: string;
  contact: string;
  contactText: string;
  question: string;
} | {
  type: 'study';
  name: string;
  question: string;
  subject: string;
} | {
  type: 'kids-mob';
  name: string;
  email: string;
  phoneNumber: string;
  description: string;
} | {
  type: 'other';
  typeClass: string;
  famName: string;
  fstName: string;
  contact: string;
  contactText: string;
  question: string;
}

export type SendMailResponse = {
  status: 'success' | 'error',
  body: 'メールの送信に成功しました。' | 'メールの送信に失敗しました。',
  err: Error,
}

export const sendMail: APIGatewayProxyHandler = async (event, _context) => {
  const body = JSON.parse(event.body) as SendEmailBody;
  const mailBody = () => {
    if (body.type === 'new-lesson') {
      return `
      ルナスタジオへのお問い合わせです。
      お名前: ${body.name}
      ご住所: ${body.address}
      お問い合わせ内容: ${body.contactType}
      -------------------------------------
      お問い合わせ内容
      ${body.contact}
                `;
    } else if (body.type === 'lesson') {
      return `
体験レッスンの申込みです。
希望コース: ${body.typeClass}
お名前: ${body.famName} ${body.fstName} (カナ: ${body.famKana} ${body.fstKana})
年齢もしくは学年: ${body.grade}
性別: ${body.gender}
${body.contact === 'phone' ? '電話番号' : 'メールアドレス'}: ${body.contactText}
お問い合わせ内容
${body.question}
          `;
    } else if (body.type === 'study') {
      return `
Luna Studyへのお問い合わせです。
お問い合わせした方のお名前: ${body.name}
お問い合わせ内容
${body.question}
          `;
    } else if (body.type === 'kids-mob') {
      return `
Kids-mobへのお問い合わせです。
お問い合わせした方のお名前: ${body.name}
お問い合わせした方のメールアドレス: ${body.email}
お問い合わせした方の電話番号: ${body.phoneNumber}
お問い合わせ内容
${body.description}
          `;
    } else {
      return `
お問い合わせです。
現段階での希望コース: ${body.typeClass}
お問い合わせした方のお名前: ${body.famName} ${body.fstName}
${body.contact === 'phone' ? '電話番号' : 'メールアドレス'}: ${body.contactText}
お問い合わせ内容
${body.question}
          `;
    }
  };
  const emailParams = (() => {
    if (body.type === 'kids-mob') {
      return {
        source: 'support@kids-mob.com',
        subject: 'キッズモブへのお問い合わせ',
        destination: 'support@kids-mob.com',
      };
    }
    if (body.type === 'lesson') {
      return {
        source: 'lesson.subscribe@lunastudio.jp',
        subject: '体験レッスンの申込み',
        destination: 'lunastudio.support@kids-mob.com',
      };
    }
    if (body.type === 'new-lesson') {
      if (body.contactType === '体験予約') {
        return {
          source: 'lesson.subscribe@lunastudio.jp',
          subject: '体験レッスンの申込み',
          destination: 'lunastudio.support@kids-mob.com',
        };
      }
      if (body.contactType === 'レンタルスタジオ') {
        return {
          source: 'info@lunastudio.jp',
          subject: 'レンタルスタジオについてのお問い合わせ',
          destination: 'lunastudio.support@kids-mob.com',
        };
      }
    }
    if (body.type === 'study') {
      return {
        source: 'study@lunastudio.jp',
        subject: body.subject,
        destination: 'lunastudy.support@kids-mob.com',
      };
    }
    return {
      source: 'info@lunastudio.jp',
      subject: 'お問い合わせ',
      destination: 'lunastudio.support@kids-mob.com',
    };
  })();
  const email = {
    Source: emailParams.source,

    Destination: {ToAddresses: [emailParams.destination]},

    Message: {
      Subject: {
        Data: emailParams.subject,
      },

      Body: {
        Text: {Data: mailBody()},
      },
    },
  };
  let err = null;
  const _res = await ses
      .sendEmail(email)
      .promise()
      .then(() => true)
      .catch((error) => {
        err = error;
        return false;
      });

  const response = {
    status: _res ? 'success' : 'error',
    body: _res ?
      'メールの送信に成功しました。' :
      'メールの送信に失敗しました。',
    err,
  };

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify(response, null, 2),
  };
};
