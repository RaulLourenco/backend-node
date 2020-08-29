const express = require('express');

async function startServer() {

  const app = express();
  const port = process.env.PORT || 8080;

  app.listen(port, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Server is ready !`);
  });
}

startServer();

export default express;