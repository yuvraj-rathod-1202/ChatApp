const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());

const router = require('./routes/userRoute');
app.use("/api/user", router);



async function main() {
    mongoose.connect('mongodb+srv://rathodyuvraj1953:AGd0p1M9o8ABaZYD@cluster-chat.rol9m.mongodb.net/abcd?retryWrites=true&w=majority&appName=cluster-chat');
    app.use("/", (req, res) => {
        res.send("user data server is running");
    });
}

main().then(() => console.log("mongodb connected succesfully")).catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Example app listening on port https://localhost:${port}`);  // http://localhost:5000
})