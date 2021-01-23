class Game {
  constructor(){}
  
  getState(){
   var gameStateref=database .ref("gameState")
   gameStateref.on("value",function(data){
     gameState=data.val();
   })
   
  }

  update(State){
    database.ref("/").update({
      gameState:State
    });
  }

  start(){
    if(gameState===0){
player=new Player()
form=new Form()
form.display();
player.getCount();
    }
  }
}
