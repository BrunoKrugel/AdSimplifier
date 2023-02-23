import clientPromise from '@/lib/mongo/mongo';
import { encodeBase64 } from '@/lib/string/base64';

// {$gte:ISODate(“2020-03-01”),$lt:ISODate(“2021-03-31”)}}
//date_created: {"$gte": new Date("2015-10-01T00:00:00.000Z") , "$lt": new Date("2017-03-13T16:17:36.470Z") }});
export default async function getSales(req, res) {
  const client = await clientPromise;
  try {
    const data = await client
      .db('kiwify-go')
      .collection('sales')
      .find({
        user_id: encodeBase64(req.body.user_id),
        date: {
          $gte: new Date(req.body.iniDate + 'T00:00:00.000Z'),
          $lt: new Date(req.body.endDate + 'T00:00:01.000Z'),
        },
      })
      .toArray();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error retrieving data from database' });
  }
}
