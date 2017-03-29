module.exports = {
  'facebookAuth':
  {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.SITE_URL + 'auth/facebook/callback'
  }
}
