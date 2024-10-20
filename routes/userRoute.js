const express = require('express');
const router = express.Router();
const { senddata, messagedata } = require("./userSchema")

router.post("/storeuserdata", async (req, res) => {
    try{
        const newUser = await senddata({...req.body});

        await newUser.save();
        res.status(200).send({message: "user data saved succesfully", data: newUser});
    }catch (error){
        console.error("user data not saved", error);
    };
})

router.post("/getuserdata", async (req, res) => {
    try{
            const { username, password } = req.body;

            const user = await senddata.findOne({password})


        if (user){
            if(username === user.username && password === user.password){
                res.status(200).send({ message: "User data retrieved successfully", data: user });
                window.location.href = "";
            }else{
                res.status(404).send({message: "username or password is incorrect!"});
            }
        }else{
            res.status(404).send({ message: "User not found" });
        }
        
    }catch (error) {
        console.error("Error retrieving user data", error);
        res.status(500).send({ message: "Error retrieving user data" });
    }
})

router.post("/sendmessage", async (req, res) => {
    try{
        const newMessage = await messagedata({...req.body});

        await newMessage.save()
        res.status(200).send({message: "user data saved succesfully", data: newMessage});

    }catch(error){
        console.error("user data not saved", error);
    }
})

router.get("/sendingmessage", async (req, res) => {
    try{
        const { receiver } = req.query;
        const message = await messagedata.findOne({id});
        if (message){
            res.status(200).json({message: message});
        }
    }catch (error){
        console.log(error);
    }
})

module.exports = router;