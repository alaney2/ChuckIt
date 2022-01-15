const express = require('express');
const cors = require('cors');

const app = express();

let corsOptions = {
  origin: 'http://localhost:8000'
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Chuck It backend' });
});

require('./routes/website.routes')(app);

let PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});