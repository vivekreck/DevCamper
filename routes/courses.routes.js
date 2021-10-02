const express = require('express');
const controllers = require('../controllers/courses.controllers');

const router = express.Router({ mergeParams: true });

router
    .route('/')
    .get(controllers.getCourses)
    .post(controllers.addCourse);

router
    .route('/:id')
    .get(controllers.getCourse)
    .put(controllers.updateCourse)
    .delete(controllers.deleteCourse);

module.exports = router;
