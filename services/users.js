const dbClient = require('./db');

async function getUserByPhone(phone) {
  try {
    const params = {
      TableName: process.env.DYNAMODB_TABLE,
      Key: {
        id: phone,
      },
    };

    const result = await dbClient.get(params).promise();
    return Promise.resolve(result.Item);
  } catch (error) {
    console.error(error);
    console.error(`Error getting user by phone ${phone}`);
    return Promise.reject(`Error getting user by phone ${phone}`);
  }
}

module.exports = {
  getUserByPhone,
};
