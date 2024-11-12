const { text } = require("express");

document.getElementById('contact').addEventListener('submit', function (event) 
{
    event.preventDefault();

    const name = document.getElementById('Name').value;

    const email = document.getElementById('Email').value;

    const message = document.getElementById('text').value;

    fetch('/submitorm', 
        {
        method: 'POST',
        headers: { 'Content': 'application/json' },

        body: JSON.stringify({ name, email, text })
    })
    .then(response => response.json())

    .then(data => 
        
        {
        alert(data.message);
        this.reset();
    })




    .catch(error => console.error('Error:', error));



});

