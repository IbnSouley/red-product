// const { Routes } = require("react-router-dom")

const Models = require = ('../Models/Models')
const mongoose = require('mongoose')

// get all routes
const getRoutes = async (req, res) =>{
    const routes = await Routes.find({}).sort({createdAt: -1})

    res.status(200).json(routes)
}


// get a single routes
const getRoute = async (req, res) =>{
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such route'})
    }

    const route = await Routes.findById(id)

    if (!route) {
        return res.status(404).json({error: 'No such route'})
    }

    res.status(200).json(route)
}


//create new routes
const createRoutes = async (req, res) => {
    const {title, load, reps} = req.body

    // add doc to db
    try {
        const routes = await Routes.create({title, load, reps})
        res.status(200).json(routes)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a routes
const deleteRoute = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such route'})
    }

    const route = await Route.findOneAndDelete({_id: id})

    if (!route) {
        return res.status(400)
    }
}

// update a routes
const updateRoute = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such route'})
    }

    const route = await Route.findOneAndDelete({_id: id},{
         ...req.body
    })

    if (!route) {
        return res.status(400).json({error: 'No such route'})
    }

    res.status(200).json(route)
}

module.exports = {
    getRoute,
    getRoutes,
    createRoutes,
    deleteRoute,
    updateRoute

    

}