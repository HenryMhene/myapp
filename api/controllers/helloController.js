'use strict';

let commithash = 'abc57858585';

require('child_process').exec('git rev-parse HEAD', function(err, res) {
    commithash = res;
});

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
                "description": "henry mhene`s technical test",
            }, {
                "lastcommitsha": commithash
            }
        ],
    };


    res.json(metadata);
};