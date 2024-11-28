const userService = require('../services/user_service');


class UserController{

    async getAllUsers(req,res){
        try{
            const users= await userService.getAllusers();
            res.status(200).json(users);
        }
        catch(error) {
            res.status(500).json({error : error, message});
        }
    }


    async getUser(req,res){
    try{
        const { username }=req.params;
        const user=await userService.getUerbyUsername(use)
        res.status(200).json(user);
    }
    catch(error){
        res.status(404).json({ error: error.message });
    }
    }

    async createUser(req,res){
        try {
            const userData = req.body;
            const user = await userService.createUser(userData);
        }
        catch(error) {
            res.status(400).json({error : error.message});
        }

    }
    async loginUser(req,res){
        try {
            const {email, password} = req.body;
            const user = await userService.loginUser(email, password);
            res.status(200).json({message: 'Login successful'});
        }
       catch(error) {
        res.status(401).json({error : error.message});
       }
    }
    async followUser(req,res){
       
    }

    async unfollowUser(req,res){

    }
    async getfollowers(req,res){

    }
    async getfollowing(req,res){

    }
}

module.exports = new UserController();