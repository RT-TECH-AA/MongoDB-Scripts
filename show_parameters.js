/* Show all MongoDB parameters */

db = new Mongo('localhost').getDB('admin')

var op_get = db.runCommand ({getParameter: '*'})
printjson(op_get)
