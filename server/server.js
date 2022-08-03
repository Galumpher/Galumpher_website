const express = require('express');
const path = require('path');

const app = express();
const PORT = 3333;



app.use(express.static(path.resolve(__dirname, '../dist')));

// app.use('/', (req, res) => {
//   return res.status(200).sendFile(path.resolve(__dirname, '../stc/client/styles.css'))});

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, '../src/index.html'));
  });
  

app.use('*', (req, res) => {
    res.status(404);
  });


app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occured' }
    };
    const errorObj = Object.assign(defaultErr, err);
    console.log(errorObj);
    return res.status((errorObj.status)).json(errorObj.message);
  });
  
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });