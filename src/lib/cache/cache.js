import keyv from '@/lib/cache/keyv';

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
      clientCache.get('endDate'),
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

async function getSales() {
  try {
    const clientCache = await keyv;
    const sales = await clientCache.get('sales');
    return sales;
  } catch (error) {
    console.error(`Error getting sales from cache: ${error}`);
    return false;
  }
}

async function ClearCache() {
  try {
    const clientCache = await keyv;
    await clientCache.clear();
  } catch (error) {
    console.error(`Error clearing cache: ${error}`);
  }
}

export { storeDate, storeArray, isDateCached, isCached, getSales, ClearCache };
