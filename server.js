
// const path = require('path');

// app.use(express.static(path.join(__dirname, 'public')));


// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

import app from './app';

const port = process.env.PORT || 5000;

app.listen(port, () =>
  // eslint-disable-next-line no-console
  console.log(`Welcome to your application on port ${port}`));

