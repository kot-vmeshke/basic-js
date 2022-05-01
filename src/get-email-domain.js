const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let emailParts = email.split('@');
  let domain = emailParts[emailParts.length - 1];
  return domain;
}

module.exports = {
  getEmailDomain
};
