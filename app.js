const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

const http = require('http').createServer(app);  // Creating HTTP server for both express and socket.io

const io = require("socket.io")(http, {
    cors: {
        origin: ["http://127.0.0.1:5500"],
    }
});

const router = require('./routes/userRoute');
app.use("/api/user", router);

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on("chat", (data)=>{
        socket.broadcast.emit("mes", data.message)
    })

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

async function main() {
    await mongoose.connect('mongodb+srv://rathodyuvraj1953:AGd0p1M9o8ABaZYD@cluster-chat.rol9m.mongodb.net/abcd?retryWrites=true&w=majority&appName=cluster-chat');
    app.use("/", (req, res) => {
        res.send("user data server is running");
    });
}

main().then(() => console.log("MongoDB connected successfully")).catch(err => console.log(err));

http.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
