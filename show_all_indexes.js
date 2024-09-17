db.getCollectionNames().forEach(
    function(c){
        indexes = db.getCollection(c).getIndexes();
        newIndexes = [];
        for(x in indexes){
            if(indexes[x]['name'] != '_id_'){
                delete indexes[x]['v'];
                delete indexes[x]['ns'];
                delete indexes[x]['background'];
                newIndexes.push(indexes[x]);
            }
        }
        print("\n/*"+c+"*/");
        if(typeof newIndexes[0] !== 'undefined') {
            print("db.runCommand(");
            printjson({"createIndexes": c, "indexes": newIndexes});
            print(");");
        }
    }
)
