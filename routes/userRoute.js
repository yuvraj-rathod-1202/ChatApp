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
});

router.get("/getuserdata", async (req, res) => {
    try {
        const username = req.query.username;
        const password = req.query.password;

        const user = await senddata.findOne({ username, password });

        if (user) {
            res.status(200).json({ message: "User data retrieved successfully", data: user });
        } else {
            res.status(401).send({ message: "Invalid username or password!" });
        }
    } catch (error) {
        console.error("Error retrieving user data:", error);
        res.status(500).send({ message: "Error retrieving user data" });
    }
});

router.post("/sendmessage", async (req, res) => {
    try{
        const newMessage = await messagedata({...req.body});

        await newMessage.save()
        res.status(200).send({message: "user data saved succesfully", data: newMessage});

    }catch(error){
        console.error("user data not saved", error);
    }
});

router.get("/sendingmessage", async (req, res) => {
    try{
        const { sender, receiver } = req.query;
        const message = await messagedata.find({
            $or: [
                {sender: sender},
                {receiver: receiver}
            ]
        });
        if (message){
            res.status(200).json({messages: message});
        }
    }catch (error){
        console.log(error);
    }
});

router.delete("/deletemessage", async(req, res) => {
    try{
        const { id } = req.query;
        const deletemessage = await messagedata.findByIdAndDelete(id);
          
        if (!deletemessage) {
            return res.status(404).send({ message: 'Item not found' });
        }
      
        res.status(200).send({ message: 'Item deleted successfully', deletemessage });
    }catch (error) {
        res.status(500).send({ message: 'Error deleting item', error });
    }
});

router.get("/findfriend", async (req, res) => {
    try{
        const { friend } = req.query;

        const isUserExist = await senddata.findOne({username: friend});
        if (isUserExist){
            res.status(200).send({ message: "user find succesfully"});
        }else{
            res.status(404).send("user not found");
        }
    }catch(error){
        res.status(500).send({ message: "Error retrieving user data" });
    }
});

router.delete("/deleteallchat", async (req, res)=>{
    const { sender, receiver } = req.query;
    console.log("123")
    try{
    const response = await messagedata.deleteMany({
        $or: [
            {sender: sender},
            {receiver: receiver}
        ]
    });
    console.log(response);
    if (!response.ok){
        res.status(404).send("messages not found");
    }
    
    }catch(error){
        res.status(500).send("error", error);
    }
})

module.exports = router;