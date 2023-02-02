import clientPromise from '@/lib/mongo/mongo';
import { status } from '@/constants/constants';
import { encodeBase64 } from '@/lib/string/base64';

function persistUser(req) {
  return new Promise((resolve, reject) => {
    clientPromise
      .then((client) => {
        client
          .db('account')
          .collection('user')
          .insertOne(
            {
              accountid: encodeBase64(req.body.username),
              username: req.body.username,
              password: req.body.password,
              email: req.body.email,
            },
            function (err, result) {
              if (err || !result) {
                reject();
              } else {
                resolve();
              }
            }
          );
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export default async function user(req, res) {
  return new Promise((resolve, reject) => {
    clientPromise
      .then((client) => {
        client
          .db('account')
          .collection('user')
          .findOne(
            {
              username: req.body.username,
            },
            function (err, result) {
              if (err || !result) {
                persistUser(req).then((_res) => {
                  res.status(201).send(status);
                  resolve();
                });
              } else {
                res.status(403).send(status);
                reject();
              }
            }
          );
      })
      .catch((err) => {
        reject(err);
      });
  });
}
