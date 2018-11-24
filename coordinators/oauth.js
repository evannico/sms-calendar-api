const oauthService = require('../services/oauth');

function getAuthURL(phone) {
  console.debug('Getting auth url.');
  return oauthService.getAuthURL(phone);
}

module.exports = {
  getAuthURL,
};
