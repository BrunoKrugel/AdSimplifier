export const ironOptions = {
  cookieName: 'AUTHENTICATION_COOKIE',
  password: 'passwordpasswordpasswordpassword',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production' ? true : false,
  },
};
