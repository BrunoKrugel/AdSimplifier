import { encodeBase64 } from '@/lib/string/base64';

function generateEndpoint(user) {
  let endpointRaw = process.env.NEXT_PUBLIC_ENDPOINT_BFF;
  if (!endpointRaw) {
    endpointRaw = 'http://localhost:3000/';
  }
  return endpointRaw + encodeBase64(user);
}

export { generateEndpoint };
