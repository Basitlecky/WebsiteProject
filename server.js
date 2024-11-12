const bodyParser = require('bodyparser');


const express = require('express');


const app = express();

const PORT = 3000;


app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());


app.use(express.static('public'));


app.post('/submitform', (req, res) => 
    {
    const { name, email, text} = req.body;

    if (!name || !email || !text) 
        {
        return res.status(400).json({ text: 'All fields are required for this function.' });
    }

    // In this section you can add logic to store form data in a database.
    res.json({ text: 'Submission successful' });
});

app.listen(3000, () => 

    {
    console.log(`This server is running on http://localhost:${3000}`);
});
