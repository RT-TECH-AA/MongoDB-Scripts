# MongoDB Scripts Collection For MongoDB Database Administration

Useful scripts for administrate and operate MongoDB.
## Show collections size in MB <br>
**show_collections_size.js** <br>
Replace to your database name.<br>
Example: 
```
mongo get_collections_size.js
```
## Show operations running over x seconds.<br>
**show_slow_operations.js** <br>
Example: 
```
mongo show_slow_operations.js
```
## Finds a random document according to a number of records in a collection.<br>
**find_random_document.js**<br>

## Kill all operations running over x seconds.<br>
**kill_slow_operations.js**<br>
Example: 
```
mongo kill_slow_operations.js
```

## Show all MongoDB parameters.<br>
**show_parameters.js**<br>
Example: 
```
mongo show_parameters.js
```

## Sets verbosity of the logging, specifying an integer between 0 and 5  where 5 is the most verbose.<br>
**set_parameter_loglevel.js**<br>
Example: 
```
mongo set_parameter_loglevel.js
```

## Server side to do shrink and repair database. <br>
**repair_database.js** <br>
Replace to your database and collection names.<br>
Example: 
```
mongo repair_database.js
```

## Show all paramaters and stats from database.<br>
**show_all_dbstats.js** <br>
Example: 
```
mongo show_all_dbstats.js > all_stats.log
```
## Copies the indexes from one instance to another.<br>
**index_replicate.js** <br>
Set variables: <br>

```
drop_indexes_before = [bool];
host_name_master = [host_from];
db_name_master = [db_from];
host_name_replica = [host_to];
db_name_replica = [db_to];
```
Example: 
```
mongo index_replicate.js
```

## Invert hidden/votes/priority members in a replica set
**invert_hidden_members.js** <br>
<br>
members DC1: {"hidden" : false, "priority" : 1, "votes" : 1}<br>
members DC2: {"hidden" : true, "priority" : 0, "votes" : 0}<br>
Example:
```
mongo --host  mongodbhost:27017 -u gedi -p #### invert_hidden_members.js
```

