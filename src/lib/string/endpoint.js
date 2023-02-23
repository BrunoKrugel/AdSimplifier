import { encodeBase64 } from '@/lib/string/base64';

function generateEndpoint(user) {
  let endpointRaw = process.env.ENDPOINT_BFF
    ? process.env.ENDPOINT_BFF
    : 'http://localhost:3000/';
  return endpointRaw + encodeBase64(user);
}

export { generateEndpoint };
