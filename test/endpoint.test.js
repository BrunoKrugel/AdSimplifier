import { generateEndpoint } from '../src/lib/string/endpoint';
import { encodeBase64 } from '../src/lib/string/base64';

describe('endpoint', () => {
  it('it should generate endpoint', () => {
    const endpointRaw = process.env.NEXT_PUBLIC_ENDPOINT_BFF
      ? process.env.NEXT_PUBLIC_ENDPOINT_BFF
      : 'http://localhost:3000/';
    const endpointUrl = generateEndpoint('test');
    const decodedUser = encodeBase64('test');
    expect(endpointUrl).toEqual(endpointRaw + decodedUser);
  });
});
