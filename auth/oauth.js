module.exports.oauth = async (event, context, callback) => {
  try {
    // create a response
    // const response = {
    //   statusCode: 200,
    //   body: JSON.stringify(user),
    // };
    // callback(null, response);
    console.log('event oauth: ', JSON.stringify(event));
    callback(null, {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
      body: 'Hit oauth route',
    });
    return Promise.resolve();
  } catch (error) {
    console.error(error);
    callback(null, {
      statusCode: error.statusCode || 501,
      headers: {
        'Content-Type': 'text/plain',
      },
      body: 'Could not hit oauth route',
    });
    return Promise.reject();
  }
};
