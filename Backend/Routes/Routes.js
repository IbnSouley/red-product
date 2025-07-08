const express = require('express')
// const { Route } = require('react-router-dom')
const { createRoutes, getRoute, getRoutes, deleteRoute, updateRoute

 } = require('../Controllers/Controllers')

const router = express.Router()

//Get all Routes
router.get('/', getRoutes)

//Get a single routes
router.get('/:id', getRoute)

//POST a new routes
router.post('/',createRoutes) 

//DELETE a routes
router.delete('/:id', deleteRoute)

//UPDATE a routes 
router.patch('/:id', updateRoute)


module.exports = router