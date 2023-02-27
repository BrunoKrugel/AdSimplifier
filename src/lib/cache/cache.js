import keyv from '@/lib/cache/keyv';

async function cacheDate(initial, end) {
  try {
    const clientCache = await keyv;
    await clientCache.set('initialDate', initial);
    await clientCache.set('endDate', end);
  } catch (error) {
    console.error(`Error storing dates: ${error}`);
  }
}

async function createCache(array, key) {
  try {
    const clientCache = await keyv;
    await clientCache.set(key, array);
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

async function isCached(key) {
  try {
    const clientCache = await keyv;
    const sales = await clientCache.get(key);
    return Boolean(sales);
  } catch (error) {
    console.error(`Error checking sales cache: ${error}`);
    return false;
  }
}

async function getCache(key) {
  try {
    const clientCache = await keyv;
    const sales = await clientCache.get(key);
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

export { cacheDate, createCache, isDateCached, isCached, getCache, ClearCache };
