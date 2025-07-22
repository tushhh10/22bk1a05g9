const uuidv4 = require('uuid/v4');
const moment = require('moment');
function generateShortCode() {
  const shortCode = uuidv4();
  const now = moment().utc();
  const validUntil = now.add(30, 'days').toDate(); 
  return { shortCode, validUntil };
}
module.exports = generateShortCode;