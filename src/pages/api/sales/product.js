import clientPromise from '@/lib/mongo/mongo';
import {
  cacheDate,
  createCache,
  isDateCached,
  isCached,
  getCache,
} from '@/lib/cache/cache';
import { encodeBase64 } from '@/lib/string/base64';

export default async function getProduct(req, res) {
  try {
    if (await isDateCached(req.body.initialDate, req.body.endDate)) {
      if (await isCached('product')) {
        const data = await getCache('product');
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
        { $match: { userid: encodeBase64(req.body.user_id) } },
        {
          $group: {
            _id: '$productname',
            commission: { $first: '$commission' },
            date: { $first: '$date' },
          },
        },
      ])
      .toArray();
    await createCache(data, 'product');
    res.status(200).json(data);
  } catch (error) {
    console.error(`Error retrieving data from database: ${error}`);
    res.status(500).json({ message: 'Error retrieving data from database' });
  }
}
