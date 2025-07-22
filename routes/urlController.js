const express = require('express');
const router = express.Router();
const Url = require('../models/Url');
router.post('/', async (req, res) => {
  const { originalUrl } = req.body;
  if (!originalUrl) return res.status(400).json({ error: 'Original URL is required' });

  try {
    const shortCode = await generateShortCode();
    const urlDoc = new Url(originalUrl, shortCode);
    await db.collection('urls').insertOne(urlDoc);
    res.json({ shortCode });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to shorten URL' });
  }
});
router.get('/:shortCode', async (req, res) => {
  const { shortCode } = req.params;
  try {
    const urlDoc = await db.collection('urls').findOne({ shortCode });
    if (!urlDoc) return res.status(404).json({ error: 'URL not found' });
    res.redirect(urlDoc.url);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to retrieve URL' });
  }
});

router.get('/:shortCode/analytics', async (req, res) => {
  const { shortCode } = req.params;
  try {
    const urlDoc = await db.collection('urls').findOne({ shortCode });
    if (!urlDoc) return res.status(404).json({ error: 'URL not found' });

    const clicks = await getClicksForUrl(shortCode);
    res.json(clicks);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to retrieve analytics' });
  }
});

module.exports = router;