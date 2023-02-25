import clientPromise from '@/lib/mongo/mongo';
import keyv from '@/lib/cache/keyv';
import { encodeBase64 } from '@/lib/string/base64';

async function storeDate(initial, end) {
  try {
    const clientCache = await keyv;
    await clientCache.set('initialDate', initial);
    await clientCache.set('endDate', end);
  } catch (error) {
    console.error(`Error storing dates: ${error}`);
  }
}

async function storeArray(array) {
  try {
    const clientCache = await keyv;
    await clientCache.set('sales', array);
  } catch (error) {
    console.error(`Error storing array: ${error}`);
  }
}

async function isDateCached(initial, end) {
  try {
    const clientCache = await keyv;
    const [initialDate, endDate] = await Promise.all([
      clientCache.get('initialDate'),
      clientCache.get('endDate')
    ]);
    return initialDate === initial && endDate === end;
  } catch (error) {
    console.error(`Error checking date cache: ${error}`);
    return false;
  }
}

async function isCached() {
  try {
    const clientCache = await keyv;
    const sales = await clientCache.get('sales');
    return Boolean(sales);
  } catch (error) {
    console.error(`Error checking sales cache: ${error}`);
    return false;
  }
}

export default async function getSales(req, res) {
  try {
    if (await isDateCached(req.body.initialDate, req.body.endDate)) {
      if (await isCached()) {
        const clientCache = await keyv;
        const data = await clientCache.get('sales');
        res.status(200).json(data);
        return;
      }
    } else {
      await storeDate(req.body.initialDate, req.body.endDate);
    }
    const client = await clientPromise;
    const data = await client
      .db('kiwify-go')
      .collection('sales')
      .find({
        user_id: encodeBase64(req.body.user_id),
        date: {
          $gte: new Date(req.body.initialDate + 'T00:00:00.000Z'),
          $lt: new Date(req.body.endDate + 'T00:00:01.000Z'),
        },
      })
      .toArray();
    await storeArray(data);
    res.status(200).json(data);
  } catch (error) {
    console.error(`Error retrieving data from database: ${error}`);
    res.status(500).json({ message: 'Error retrieving data from database' });
  }
}
