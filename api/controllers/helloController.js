'use strict';

exports.hello_world = function (req, res) {
    res.json('hello world');
};

exports.healthcheck = function (req, res) {
    res.sendStatus(200)
};


exports.metadata = function (req, res) {
    var metadata = {
        myapplication: [{
                "version": "1.0"
            },
            {
                "description": "pre-interview technical test",
            }, {
                "lastcommitsha": "abc57858585"
            }
        ],
    };


    res.json(metadata);
};