const User = require('../models/User');
const {getUser} = require('../services/userService');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const loginHanlder = async (req, res) => {
    const { email, password } = req.body;
    if(!email || !password) return res.status(400).json({message:'Please enter all fields'})
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Password is incorrect' });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });
        res.status(200).json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const registerHanlder = async (req, res) => {
    const { name, email, password } = req.body;
    if(!name || !email || !password) return res.status(400).json({message:'Please enter all fields'})
    try {
        const user= await User.findOne({ email });
        if(user){
            return res.status(400).json({message:'User already exists'})
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { loginHanlder, registerHanlder };