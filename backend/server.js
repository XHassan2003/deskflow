const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Use explicit DNS servers for Node's SRV resolution (workaround for local DNS/c-ares issues)
// This forces Node to query public resolvers so mongodb+srv lookups succeed in dev.
const dns = require('dns');
try {
  dns.setServers(['8.8.8.8','1.1.1.1']);
  console.log('DNS servers set to', dns.getServers());
} catch (err) {
  console.warn('Failed to set DNS servers:', err.message);
}

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:5173' })); // Vite dev server
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/spaces', require('./routes/spaces'));
app.use('/api/bookings', require('./routes/bookings'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'DeskFlow API is running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
