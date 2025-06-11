const express = require('express');

const Port = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('Job Application Management API is running!');
});

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
