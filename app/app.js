const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());

app.get('/', (req, res) => {
    res.json({message: 'HI phani'});
});

app.listen(port, () => {
    console.log(`Server running at http://localhhost/${port}`);
});