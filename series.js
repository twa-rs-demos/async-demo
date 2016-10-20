var async = require('async');

console.log("\n-----------------tasks => object----------------------\n");
async.series({
    one: function (callback) {
        callback(null, 1);
    },
    two: function (callback) {
        callback(null, 2);
    }
}, function (err, results) {
    console.log(results);
});

console.log("\n-----------------tasks => array----------------------\n");

async.series([
    function (callback) {
        callback(null, 1);
    },
    function (callback) {
        callback(null, 2);
    }
], function (err, results) {
    console.log(results);
});

console.log("\n-----------------tasks => 第一个task出错----------------------\n");

async.series({
    one: function (callback) {
        console.log('这是第一个');
        callback('this is error', 1);
    },
    two: function (callback) {
        console.log('这是第二个');
        callback(null, 2);
    }
}, function (err, results) {
    console.log(err);
    console.log(results);
});

console.log("\n-----------------tasks => 按顺序执行----------------------\n");

async.series({
    one: function (callback) {
        console.log('这是第一个');
        callback(null, 1);

    },
    two: function (callback) {
        console.log('这是第二个');
        callback(null, 2);

    }
}, function (err, results) {
    console.log(results);
});