const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Enable CORS if needed
app.use(cors());

// Define a simple route
app.get('/data', (req, res) => {
  res.json({ message: 'Hello from the server!', data: [1, 2, 3, 4] });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
