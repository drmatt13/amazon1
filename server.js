const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('request recieved');
  res.status(200).json({ success: true });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});