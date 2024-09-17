/*
Set LogLevel
Available for both mongod and mongos.
Specify an integer between 0 and 5 signifying the verbosity of the logging, where 5 is the most verbose.
*/

db = new Mongo('localhost').getDB('admin')

//Integer between 0 and 5
var new_loglevel = 1

var op_set = db.runCommand ({setParameter: 1, logLevel: new_loglevel})
op_set["newLogLevel"] = new_loglevel
printjson(op_set)
