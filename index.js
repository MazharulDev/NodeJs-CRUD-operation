const express = require('express');
const cors = require('cors');
const port = 5000;
const app = express();
const userRoute = require('./routes/user.route.js')

//middleware
app.use(cors());
app.use(express.json());


app.use('/user', userRoute)

app.get('/', (req, res) => {
    res.send('running test')
})

app.listen(port, () => {
    console.log("Listening to port", port);
})