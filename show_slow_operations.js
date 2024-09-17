/* ID shows running operations over x seconds */

db = new Mongo('localhost').getDB('test')

var secs_limit = 10

db.currentOp().inprog.forEach(
    function(d){
        if(d.active && d.secs_running > secs_limit){
            printjson(d)
        }
    }
)
