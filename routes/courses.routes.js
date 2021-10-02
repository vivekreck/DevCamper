const express = require('express');
const controllers = require('../controllers/courses.controllers');

const router = express.Router({ mergeParams: true });

router
    .route('/')
    .get(controllers.getCourses)
    .post(controllers.addCourse);

router
    .route('/:id')
    .get(controllers.getCourse);

module.exports = router;
