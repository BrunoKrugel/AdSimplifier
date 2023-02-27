import clientPromise from '@/lib/mongo/mongo';
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
  try {
    const client = await clientPromise;
    const user = await client
      .db('account')
      .collection('user')
      .findOne({ username: req.body.username });

    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    persistUser(req);
    return res.status(200).json({ message: 'User created' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error creating user' });
  }
}
