var async = require('async');

console.log("\n------------------task => array---------------------\n");

async.parallel([
        function(callback){
            callback(null, 'one');
        },
        function(callback){
            callback(null, 'two');
        }
    ],
    function(err, results){
        console.log(results);
    });

console.log("\n------------------task => object---------------------\n");

async.parallel({
        one:function(callback){
            callback(null, 'one');
        },
        two:function(callback){
            callback(null, 'two');
        }
    },
    function(err, results){
        console.log(results);
    });

console.log("\n------------------tasks => 第一个出错---------------------\n");

async.parallel([
        function(callback){
            console.log('这是第一个');
            callback('this is error','one');
        },
        function(callback){
            console.log('这是第二个');
            callback(null, 'two');
        }
    ],
    function(err, results){
        console.log(err);
        console.log(results);
    });


console.log("\n------------------tasks => --------并发执行-------------\n");

async.parallel({
        one:function(callback){
            callback(null, 'one');
            console.log("这是第一个");
        },
        two:function(callback){
            // console.log("这是第二个");
            callback(null, 'two');
            console.log("这是第二个");
        }
    },
    function(err, results){
        console.log(results);
    });
