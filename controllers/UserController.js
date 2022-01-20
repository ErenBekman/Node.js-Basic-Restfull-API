const User = require('../models/User');

const index = async (req, res, next) => {
    try {
        const allUser = await User.find({})
        res.json(allUser)
    } catch (error) {
        next(error)
    }
}

const show = async (req, res) => {
    try {
        const result = await User.find({_id: req.params.id})
        res.json(result)
    } catch (error) {
        next(error)
    }
}

const create = async (req, res,next) => {
    try {
       const addUser = new User(req.body)
       const result = await addUser.save()
       res.json(result)
    } catch (error) { 
        next(error)
    }
}

const update = async (req,res,next) => {
    try {
        const result = await User.findByIdAndUpdate({_id: req.params.id}, req.body, { new : true })
        res.json(result)
    } catch (error) {
        next(error)
    }
}

const destroy = async (req,res, next) => {
    try {
        const result = await User.findByIdAndDelete({ _id: req.params.id })
        if (result) {
            return res.json({msg:"user have deleted"})
        } else {     
            // return res.status(404).json({msg: 'user not found'})
            throw new Error('user not found')
        }
    } catch (error) {
       next(error)
    }
}

module.exports = {index,show,create,update,destroy}