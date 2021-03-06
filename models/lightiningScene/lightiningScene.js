const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const LightiningScene = mongoose.model('LightiningScenes', new mongoose.Schema({
    source: {
        type: String, 
        enum: ['seapod','user'], 
        required: true
    },
    seapodId: {
        type:mongoose.Schema.Types.ObjectId
    },
    userId: {
        type:mongoose.Schema.Types.ObjectId
    },  
    sceneName: {
        type: String,
        minlength: 3,
        maxlength: 50,
        required: true
    },
    rooms: {
        type: [{
            label: {
                type: String,
                minlength: 3,
                maxlength: 50,
                required: true
            },
            moodes: {
                type: [{
                    lightName: {
                        type: String,
                        minlength: 3,
                        maxlength: 50,
                        required: true,
                    },
                    lightColor: {
                        type: String,
                        match: /^(0xFF|0xff)([0-9A-Fa-f]{8}|[0-9A-Fa-f]{6})$/,
                        required: true,
                    },
                    status: {
                        type: Boolean,
                        default: true,
                        required: true,
                    },
                    intensity: {
                        type: Number,
                        min: 0,
                        max: 100,
                        default: 50,
                        required: true,
                    }
                }]
            },
        }],
        require: true
    }
}));

function validateLightScenes(lightScene) {
    const schema = Joi.object({
        sceneName: Joi.string().min(3).max(50).required(),
        rooms: Joi.required(),
    }).unknown();

    return schema.validate(lightScene);
}

exports.LightiningScene = LightiningScene;
exports.validateLightScenes = validateLightScenes;