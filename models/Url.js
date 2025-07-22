class Url {
  constructor(originalUrl, shortCode, validUntil) {
    this.originalUrl = originalUrl;
    this.shortCode = shortCode;
    this.validUntil = validUntil;
    this.clicks = [];
  }
}
module.exports = Url;