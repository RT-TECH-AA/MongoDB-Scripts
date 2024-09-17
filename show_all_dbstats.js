/* Show Paramaters and DB info */

db = new Mongo('localhost').getDB('admin');

print('\ngetCmdLineOpts');
printjson(db.runCommand('getCmdLineOpts'));
print('\ngetParameter');
printjson(db.runCommand({getParameter:'*'}));
print('\nhostInfo');
printjson(db.hostInfo());
print('\ndb.version');
printjson(db.version());
print('\nprintSlaveReplicationInfo');
printjson(rs.printSlaveReplicationInfo());
print('\nlistDatabases');
db.adminCommand({ listDatabases: 1 }).databases.forEach(
	function (dbname) { 
		printjson(db.getSiblingDB(dbname.name).stats()); 
		db.getSiblingDB(dbname.name).getCollectionNames().forEach(
			function (cname) {
				printjson(db.getSiblingDB(dbname.name).getCollection(cname).stats())
			}
			)
	}
)