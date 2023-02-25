import Keyv from 'keyv';

if (!global._cacheKeyv) {
  global._cacheKeyv = new Keyv();
}
let cacheKeyv = global._cacheKeyv;

export default cacheKeyv;
