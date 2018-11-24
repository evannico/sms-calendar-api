const userCoordinator = require('../coordinators/users');
const oauthCoordinator = require('../coordinators/oauth');

module.exports.inboundGet = async (event, context, callback) => {
  try {
    const text = event.queryStringParameters.text;
    const phone = event.queryStringParameters.msisdn;
    console.info(`Phone: ${phone}`);
    console.info(`Text: ${text}`);
    const user = await userCoordinator.getUserByPhone(phone);

    if (!user) {
      // generate a url that asks permissions for Google Calendar scopes
      const url = oauthCoordinator.getAuthURL(phone);
      console.log('url: ', url);
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(user),
    };
    callback(null, response);
    return Promise.resolve();
  } catch (error) {
    console.error(error);
    callback(null, {
      statusCode: error.statusCode || 501,
      headers: {
        'Content-Type': 'text/plain',
      },
      body: `Couldn't fetch account by phone ${from}`,
    });
    return Promise.reject();
  }
};
