require('dotenv').config(); 

const config = {
  apiKey: process.env.API_KEY || 'default-api-key', 
  serverSecret: process.env.SERVER_SECRET || 'default-secret',
  isKalvian: process.env.IS_KALVIAN === 'true',
};

module.exports = config;
