/* Kill all queries with more than X secs running */
db = new Mongo('localhost').getDB('test')

var secs_limit = 10;
db.currentOp().inprog.forEach(
    function(d){
        if(d.active && d.op=="query" && d.secs_running>secs_limit){
                var op = db.killOp(d.opid);
                printjson({
                    "query": d.query,
                    "opid": d.opid,
                    "secs_running": d.secs_running,
                    "ns" : d.ns,
                    "killOp": op
                })
             }
        });
