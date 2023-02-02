import clientPromise from '@/lib/mongo/mongo';
import { status } from '@/constants/constants';

async function authenticate(req, res) {
  return new Promise((resolve, reject) => {
    clientPromise
      .then((client) => {
        client
          .db('account')
          .collection('user')
          .findOne(
            {
              username: req.body.username,
              password: req.body.password,
            },
            function (err, result) {
              if (err || !result) {
                status.code = 403;
                status.message = 'Usuário não existe';
                res.send(status);
                resolve();
              } else {
                status.code = 200;
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

export { authenticate };
