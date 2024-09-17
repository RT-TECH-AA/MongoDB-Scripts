/* Show collections size in MB */
db = new Mongo('localhost').getDB('test')

db.getCollectionNames().forEach(
    function(c){
        print(c + ' -> ' + db.getCollection(c).stats(1024 * 1024).size + ' MB')
    }
)
