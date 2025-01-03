const fs = require('fs');
const path = require('path');

const buildDate = new Date().toISOString();
const filePath = path.join(__dirname, '../src/buildMetadata.json');

fs.writeFileSync(filePath, JSON.stringify({ buildDate }, null, 2), 'utf8');