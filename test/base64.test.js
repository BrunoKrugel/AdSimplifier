import { encodeBase64, decodeBase64 } from '../src/lib/string/base64';

describe('base64', () => {
  it('should encode and decode a string', () => {
    const str = 'hello world';
    const encoded = encodeBase64(str);
    const decoded = decodeBase64(encoded);
    expect(decoded).toEqual(str);
  });
});
