var coll = db.getCollectionNames();
for (var i in coll){
    var firstId = null;
    var lastId = null;
    db.getCollection(coll[i]).find({}, {_id: 1}).sort({_id: 1}).limit(1).forEach(
        function(f){
            try{
                firstId = f._id.getTimestamp() //.getFullYear() +'/'+ (f._id.getTimestamp().getMonth() + 1)
            }
            catch(e){}            
        });
    db.getCollection(coll[i]).find({}, {_id: 1}).sort({_id: -1}).limit(1).forEach(
        function(l){
            try{
                lastId = l._id.getTimestamp() //.getFullYear() +'/'+ (l._id.getTimestamp().getMonth() + 1)
            }
            catch(e){}
        });
    print(coll[i] +' - first: '+ firstId +' last: '+ lastId)
}
