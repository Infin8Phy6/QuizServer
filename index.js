const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;

// Enable CORS if needed
app.use(cors());

// Endpoint to download file
app.get('/download', async (req, res) => {
  const url = 'https://raw.githubusercontent.com/Infin8Phy6/questions/main/questions.json'; // Replace with your actual URL
  const filePath = path.join(__dirname, 'questions.json'); // Save file in the same directory

  try {
    // Fetch the file
    const response = await axios.get(url, { responseType: 'arraybuffer' });

    // Save file to the server directory
    fs.writeFileSync(filePath, response.data);
    res.status(200).send({ message: 'File downloaded and saved successfully!', filePath: filePath });
  } catch (error) {
    console.error('Error downloading file:', error);
    res.status(500).send({ message: 'Error downloading file' });
  }
});

// Endpoint to serve quiz data
app.get('/data', (req, res) => {
  res.json({ 
    message: 'Hello from the server!', 
    data: [
      {
        "topic": "Quadrilaterals",
        "question": "What is the sum of the interior angles of a quadrilateral?",
        "choices": ["180 degrees", "360 degrees", "540 degrees", "720 degrees"],
        "correctAnswer": "360 degrees"
      },
      {
        "topic": "Quadrilaterals",
        "question": "Which quadrilateral has only one pair of parallel sides?",
        "choices": ["Rectangle", "Rhombus", "Trapezoid", "Square"],
        "correctAnswer": "Trapezoid"
      },
      {
        "topic": "Quadrilaterals",
        "question": "Which shape has all sides equal and all angles equal?",
        "choices": ["Rectangle", "Square", "Parallelogram", "Trapezoid"],
        "correctAnswer": "Square"
      },
      // Add more questions here as needed
    ]
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
