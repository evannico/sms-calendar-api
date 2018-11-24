const {google} = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
    process.env.CAL_CLIENT_ID,
    process.env.CAL_CLIENT_SECRET,
    process.env.CAL_REDIRECT_URI,
);

function getAuthURL(phone) {
  // generate a url that asks permissions for Google Calendar scopes
  const url = oauth2Client.generateAuthUrl({
    // 'online' (default) or 'offline' (gets refresh_token)
    access_type: 'offline',
    scope: 'https://www.googleapis.com/auth/calendar',
    state: phone,
  });
  console.trace('url: ', url);

  return url;
}

module.exports = {
  getAuthURL,
};
