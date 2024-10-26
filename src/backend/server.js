var  express = require('express');
var app = express();
const bodyParser = require('body-parser');
// const React = require('react');
// const ReactDOMServer = require('react-dom/server');
// const { redirect } = require('react-router-dom');
// import { renderToString } from 'react-dom/server';
// import Failure from '../pages/Failure.js';
// require('@babel/register')({
//     presets: ['@babel/preset-env', '@babel/preset-react']
//   });


// const failurePage = Failure;
// const failHtml = ReactDOMServer.renderToString(failurePage);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
	console.log('At root route...');
});


app.post('/failure',(req,res)=>{
    const { transactionId, status, error } = req.body;
    console.error(`Payment failed for Transaction ID: ${transactionId}`);
    console.error(`Status: ${status}`);
    console.error(`Error: ${error}`);
	console.log('Failure: ',req.body);
    res.status(200).send('There was some error in processing the pament transaction. Please contact our support contact at the www.iskconjuhu.in page.'); // Responding to PayU

//     const reactElement = ReactDOMServer.renderToString(<Failure/>);
//   const html = `
//     <!DOCTYPE html>
//     <html lang="en">
//       <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>React SSR with Express</title>
//       </head>
//       <body>
//         <div id="app">${reactElement}</div>
//       </body>
//     </html>
//   `;
//   res.send(html);
});

app.post('/success',(req,res)=>{
	console.log('Success',req);
    const { transactionId, status, error } = req.body;
    console.error(`Payment failed for Transaction ID: ${transactionId}`);
    console.error(`Status: ${status}`);
    console.error(`Error: ${error}`);
	console.log('Failure: ',req.body);
    res.status(200).send('Hare Krishna! Thank you for your valuable contribution towards reaching out mercy of Lord Krishna in the for of His Prasadam to the needy. In case of any help, please contact our support contact at the www.iskconjuhu.in page.'); // Responding to PayU
});

app.listen(3000,()=>{
    console.log('App listening on port 3000!');
});
