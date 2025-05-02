const express = require('express');
const cors = require('cors');

const app = express();
const port = 8000;

// Enable CORS
app.use(cors());
app.use(express.json());

// Base route
app.get('/', (req, res) => {
  res.json({ message: 'Test server is running!' });
});

// Auth routes for testing
app.post('/api/auth/register', (req, res) => {
  console.log('Register request received:', req.body);
  res.json({ 
    success: true, 
    message: 'Test registration successful',
    token: 'test-token',
    user: {
      id: '123',
      firstName: req.body.firstName || 'Test',
      lastName: req.body.lastName || 'User',
      email: req.body.email || 'test@example.com',
      role: 'user'
    }
  });
});

app.post('/api/auth/login', (req, res) => {
  console.log('Login request received:', req.body);
  res.json({ 
    success: true, 
    message: 'Test login successful',
    token: 'test-token',
    user: {
      id: '123',
      firstName: 'Test',
      lastName: 'User',
      email: req.body.email || 'test@example.com',
      role: 'user'
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Test server running on port ${port}`);
}); 