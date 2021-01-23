class Form {
  constructor() {
    
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
    var input = createInput("Name");
    var button = createButton('Play');
    
    input.position(130, 160);
    button.position(250, 200);

    
    button.mousePressed(function(){
      input.hide();
      button.hide();
      var greeting = createElement('h3');
      greeting.position(130, 160)
      var name=input.value();
      playerCount+=1;
      player.update(name);
      player.updateCount(playerCount);
      greeting.html("hello"+name);
    })  
   
    

  }
}
