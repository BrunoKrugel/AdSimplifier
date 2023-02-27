import clientPromise from '@/lib/mongo/mongo';
import {
  cacheDate,
  createCache,
  isDateCached,
  isCached,
  getCache,
} from '@/lib/cache/cache';
import { encodeBase64 } from '@/lib/string/base64';

export default async function getPaymentInfo(req, res) {
  try {
    if (await isDateCached(req.body.initialDate, req.body.endDate)) {
      if (await isCached('payment')) {
        const data = await getCache('payment');
        res.status(200).json(data);
        return;
      }
    } else {
      await cacheDate(req.body.initialDate, req.body.endDate);
    }
    const client = await clientPromise;
    const data = await client
      .db('kiwify-pro')
      .collection('sales_info')
      .aggregate([
        {
          $match: {
            user_id: encodeBase64(req.body.user_id),
            date: {
              $gte: new Date(req.body.initialDate + 'T00:00:00.000Z'),
              $lt: new Date(req.body.endDate + 'T00:00:01.000Z'),
            },
          },
        },
        {
          $group: {
            _id: '$paymentmethod',
            count: { $sum: 1 },
          },
        },
      ])
      .toArray();
    await createCache(data, 'payment');
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.error(`Error retrieving data from database: ${error}`);
    res.status(500).json({ message: 'Error retrieving data from database' });
  }
}
