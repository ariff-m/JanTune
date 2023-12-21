require('dotenv').config()
const PORT = process.env.PORT || 8000;
const express = require('express');
const usersAuth = require('./routes/auth');
const usersRoutes = require('./routes/identification');
const middlewareLogRequest = require('./middleware/logs');
const app = express();

app.use(middlewareLogRequest);
app.use(express.json());
app.use('/users', usersAuth);
app.use('/identification', usersRoutes);

app.use((err, req, res, next) => {
  res.json({
    message: err.message,
  })
});

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
}); 
