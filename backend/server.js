const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// ✅ CORS Setup
const corsOptions = {
  origin: process.env.APPLICATION_URL, // e.g. https://your-frontend.vercel.app
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
};
app.use(cors(corsOptions));

app.use(express.json());

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// ✅ Routes
const formRoutes = require('./routes/routerForm');
app.use('/api/forms', formRoutes);

// ❌ Remove app.listen()
// ✅ Export app for Vercel
module.exports = app;
