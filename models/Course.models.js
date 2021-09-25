const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, 'please add a course title']
    },
    description: {
        type: String,
        required: [true, 'Please ass a description']
    },
    weeks: {
        type: String,
        required: [true, 'Please add number of weeks']
    },
    tution: {
        type: number,
        required: [true, 'please add a tuition cost']
    },
    minimumSkill: {
        type: String,
        required: [true, 'please add a minimum skill'],
        enum: ['beginner', 'intermediate', 'advanced']
    },
    scholarshipAvailable: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: date,
        default: Date.now
    },
    bootcamp: {
        type: mongoose.Schema.ObjectId,
        ref: 'bootcamp',
        required: true
    }
});

module.exports = mongoose.model('Course', CourseSchema);
