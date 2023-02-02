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
                status.code = 402;
                status.message = 'Erro durante criação do usuário';
                reject();
              } else {
                status.code = 201;
                status.message = 'Usuário criado com sucesso';
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
                  resolve();
                  res.send(status);
                });
              } else {
                status.code = 403;
                status.message = 'Usuário já existe';
                res.send(status);
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
