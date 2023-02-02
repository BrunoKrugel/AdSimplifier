import clientPromise from '@/lib/mongo/mongo';

export default async function authenticate(req, res) {
  const client = await clientPromise;
  const isAuthPromise = new Promise((resolve, reject) => {
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
            reject();
          } else {
            resolve();
          }
        }
      );
  });

  try {
    await isAuthPromise;
    res.status(200).send();
  } catch (error) {
    res.status(401).send();
  }
}
