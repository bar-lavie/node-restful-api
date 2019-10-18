const express = require('express');
const app = express();


const home = require('./routes/home')
app.use(express.json())
app.use(express.static('public'))
app.use('/api/home/', home)



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})