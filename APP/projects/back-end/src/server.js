/*
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Simple request logger
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl}`);
  next();
});

// Routes
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Dream Atlas API' });
});

app.get('/health', (req, res) => {
  res.send('OK');
});

// Example POST endpoint
app.post('/echo', (req, res) => {
  res.json({ received: req.body });
});

// --- MongoDB connection and server start ---
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/dream-atlas';

mongoose.set('strictQuery', false);

let server = null;

async function startServer() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    server = app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
  }
}

// Listen for mongoose connection errors after initial connect
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Graceful shutdown
const shutdown = () => {
  console.log('Shutting down server...');
  if (server) {
    server.close(() => {
      console.log('HTTP server closed');
      mongoose.connection.close(false, () => {
        console.log('MongoDB connection closed');
        process.exit(0);
      });
    });

    // Force exit after timeout
    setTimeout(() => {
      console.error('Forcing shutdown');
      process.exit(1);
    }, 10000);
  } else {
    // If server not started, just close mongoose and exit
    mongoose.connection.close(false, () => {
      console.log('MongoDB connection closed (server not started)');
      process.exit(0);
    });
  }
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

// Start everything
startServer();

module.exports = app;
*/