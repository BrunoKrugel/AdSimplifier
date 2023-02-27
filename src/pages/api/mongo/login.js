import clientPromise from '@/lib/mongo/mongo';

export default async function authenticate(req, res) {
  try {
    const client = await clientPromise;
    const isAuthPromise = await client
      .db('account')
      .collection('user')
      .findOne({
        username: req.body.username,
        password: req.body.password,
      });

    if (!isAuthPromise) {
      return res.status(404).json({ error: 'User not found' });
    }
    return res.status(200).json({ message: 'User found' });
  } catch (error) {
    return res.status(500).json({ error: 'Error checking user' });
  }
}
