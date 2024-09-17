/* Server side to do shrink and repair database */
db = new Mongo('localhost').getDB('test')

var collection = 'rides'
var storage = db.getCollection(collection).storageSize();
var total = db.getCollection(collection).totalSize();

print('Storage Size: ' + tojson(storage));
print('TotalSize: ' + tojson(total));

print('Running db.repairDatabase()');

//This may take a few minutes
// Run repair
db.repairDatabase()

// Get new collection sizes.
var storageAfter = db.getCollection(collection).storageSize();
var totalAfter = db.getCollection(collection).totalSize();

print('Storage Size: ' + tojson(storageAfter));
print('TotalSize: ' + tojson(totalAfter));
