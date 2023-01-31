function encodeBase64(str) {
    return Buffer.from(str).toString('base64');
}

function decodeBase64(str) {
    return Buffer.from(str, 'base64').toString('ascii')
}

export { encodeBase64, decodeBase64 };