/* finds a random document according to a number of records in a collection */
db = new Mongo('localhost').getDB('test')
collection = 'mycoll';

db[collection].find().limit(-1).skip(Math.floor((Math.random() * db[collection].count()) + 1));
