class Player {
  constructor(){}

  getCount(){
    var Countref=database .ref("playerCount")
   Countref.on("value",function(data){
    playerCount=data.val();
   })
  }

  updateCount(count){
    database.ref("/").update({
   playerCount:count
    });
    
  }

  update(name){
    var away="player"+playerCount
    database.ref(away).set({
      name:name
    })
  }
}
