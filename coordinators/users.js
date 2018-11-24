const userService = require('../services/users');

function getUserByPhone(phone) {
  console.debug(`Getting user by phone ${phone}`);
  return userService.getUserByPhone(phone);
}

module.exports = {
  getUserByPhone,
};
