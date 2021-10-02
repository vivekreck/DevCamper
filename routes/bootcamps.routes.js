const express = require('express');
const router = express.Router();

const Controller = require('../controllers/bootcamps.controllers');

// Include other resource routers
const courseRouter = require('./courses.routes');

// Re-route into other resource routers
router.use('/:bootcampId/courses', courseRouter);

router
    .route('/')
    .get(Controller.getBootcamps)
    .post(Controller.createBootcamp)

router
    .route('/:id')
    .get(Controller.getBootcamp)
    .put(Controller.updateBootcamp)
    .delete(Controller.deleteBootcamp)

router
    .route('/radius/:zipcode/:distance')
    .get(Controller.getBootcampsInRadius)

module.exports = router;
