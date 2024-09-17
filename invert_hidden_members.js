/*
Script to invert mongodb replica set with hidden members
Ex: replica set 6 nodes
3 members DC1: {"hidden" : false, "priority" : 1, "votes" : 1}
3 members DC2: {"hidden" : true, "priority" : 0, "votes" : 0}

$ mongo --host  mongodbhost:27017 -u user -p senha invert_hidden_members.js
*/


function main(){
    print("Initializing... (ctrl+c to cancel)")
    sleep(5000)
    var membersList = getReplicaSetMembers()
    print("Before conf " + new Date())
    printjson(membersList)
    if(hiddenCheck(membersList)){
        var invertedMembersList = invertMembers(membersList)
        print("After conf " + new Date())
        printjson(invertedMembersList)
        var op = rsReconfig(invertedMembersList)
        printjson(op)
        sleep(1000)
        printjson(rs.status())
    }
}

function getReplicaSetMembers(){
    var membersList = rs.conf().members
    return(membersList)
}


function hiddenCheck(membersList){
    var hasHidden = false
    for(h in membersList){
        if(membersList[h].hidden == true){
            hasHidden = true
        }
    }
    return(hasHidden)
}

function invertMembers(membersList){
    for(h in membersList){
        membersList[h] = invertHidden(membersList[h])
        membersList[h] = invertPriority(membersList[h])
        membersList[h] = invertVotes(membersList[h])
    }
    return(membersList)
}

function invertHidden(member){
    if(member.hidden == true){
        member.hidden = false
    }
    else{
        member.hidden = true
    }
    return(member)
}

function invertPriority(member){
    if(member.priority > 0){
        member.priority = 0
    }
    else{
        member.priority = 1
    }
    return(member)
}

function invertVotes(member){
    if(member.votes == 1){
        member.votes = 0
    }
    else{
        member.votes = 1
    }
    return(member)
}

function rsReconfig(membersList){
    var cfg = rs.conf()
    cfg.members = membersList
    var op = rs.reconfig(cfg, {force: true});
    return(op)
}

main()
