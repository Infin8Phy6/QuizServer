const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Enable CORS if needed
app.use(cors());

// Define a simple route
app.get('/data', (req, res) => {
  res.json({ message: 'Hello from the server!', data: [
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
    {
      "topic": "Quadrilaterals",
      "question": "What is a quadrilateral with opposite sides parallel and equal in length?",
      "choices": ["Square", "Rectangle", "Rhombus", "Parallelogram"],
      "correctAnswer": "Parallelogram"
    },
    {
      "topic": "Quadrilaterals",
      "question": "Which quadrilateral always has diagonals that bisect each other at right angles?",
      "choices": ["Square", "Rectangle", "Trapezoid", "Parallelogram"],
      "correctAnswer": "Square"
    },
    {
      "topic": "Quadrilaterals",
      "question": "What is a four-sided polygon called?",
      "choices": ["Triangle", "Pentagon", "Quadrilateral", "Hexagon"],
      "correctAnswer": "Quadrilateral"
    },
    {
      "topic": "Quadrilaterals",
      "question": "What is a property of the diagonals of a rectangle?",
      "choices": ["They bisect each other", "They are perpendicular", "They are equal in length", "They do not intersect"],
      "correctAnswer": "They are equal in length"
    },
    {
      "topic": "Quadrilaterals",
      "question": "Which quadrilateral has all four angles as right angles but not all sides equal?",
      "choices": ["Square", "Rectangle", "Rhombus", "Trapezoid"],
      "correctAnswer": "Rectangle"
    },
    {
      "topic": "Quadrilaterals",
      "question": "Which shape is a type of parallelogram with four equal sides but not necessarily equal angles?",
      "choices": ["Rectangle", "Square", "Rhombus", "Trapezoid"],
      "correctAnswer": "Rhombus"
    },
    {
      "topic": "Quadrilaterals",
      "question": "What property does a trapezoid have?",
      "choices": ["One pair of parallel sides", "All sides equal", "Diagonals bisect each other", "Two pairs of parallel sides"],
      "correctAnswer": "One pair of parallel sides"
    },
    
    {
      "topic": "Triangles",
      "question": "What is the sum of the interior angles of a triangle?",
      "choices": ["90 degrees", "180 degrees", "360 degrees", "540 degrees"],
      "correctAnswer": "180 degrees"
    },
    {
      "topic": "Triangles",
      "question": "What type of triangle has all sides equal?",
      "choices": ["Equilateral", "Isosceles", "Scalene", "Right"],
      "correctAnswer": "Equilateral"
    },
    {
      "topic": "Triangles",
      "question": "What type of triangle has one angle greater than 90 degrees?",
      "choices": ["Acute", "Right", "Obtuse", "Equilateral"],
      "correctAnswer": "Obtuse"
    },
    {
      "topic": "Triangles",
      "question": "What type of triangle has all angles less than 90 degrees?",
      "choices": ["Acute", "Right", "Obtuse", "Isosceles"],
      "correctAnswer": "Acute"
    },
    {
      "topic": "Triangles",
      "question": "Which triangle has two sides equal and one side different?",
      "choices": ["Scalene", "Isosceles", "Equilateral", "Right"],
      "correctAnswer": "Isosceles"
    },
    {
      "topic": "Triangles",
      "question": "In a right triangle, what is the side opposite the right angle called?",
      "choices": ["Base", "Height", "Hypotenuse", "Leg"],
      "correctAnswer": "Hypotenuse"
    },
    {
      "topic": "Triangles",
      "question": "What is the longest side of a right triangle?",
      "choices": ["Base", "Height", "Leg", "Hypotenuse"],
      "correctAnswer": "Hypotenuse"
    },
    {
      "topic": "Triangles",
      "question": "What kind of triangle has all sides different lengths?",
      "choices": ["Isosceles", "Scalene", "Equilateral", "Right"],
      "correctAnswer": "Scalene"
    },
    {
      "topic": "Triangles",
      "question": "What is true about the angles of an equilateral triangle?",
      "choices": ["They are all 90 degrees", "They are all 120 degrees", "They are all 60 degrees", "They are different"],
      "correctAnswer": "They are all 60 degrees"
    },
    {
      "topic": "Triangles",
      "question": "Which type of triangle has one 90-degree angle?",
      "choices": ["Right", "Acute", "Obtuse", "Scalene"],
      "correctAnswer": "Right"
    }
  ]
   });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
