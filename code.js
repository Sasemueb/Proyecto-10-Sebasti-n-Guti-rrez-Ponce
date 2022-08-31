var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["81bb0bf1-ac22-4cc5-93e1-7c6ad6f412d0","7e704e32-ac57-4b8e-ada3-b6fd47e01eb9","7544042e-460e-485a-ac7c-c1fd4d7b0363","ae6d6dd1-31d6-4e49-87e7-dd761bc7b960","2f062489-5c47-4b93-b202-a0dc976d24a8","09dae620-f075-4764-8ff3-95036e2ba9ed"],"propsByKey":{"81bb0bf1-ac22-4cc5-93e1-7c6ad6f412d0":{"name":"Pacman","sourceUrl":"assets/v3/animations/f3lClETGpfStTBlpzc8naU175fAtoD_fuWOGEDBhB6w/81bb0bf1-ac22-4cc5-93e1-7c6ad6f412d0.png","frameSize":{"x":1944,"y":2048},"frameCount":1,"looping":true,"frameDelay":4,"version":"S0Idr5P5j9eOVNj.DOwhpadgjEWbBgPB","loadedFromSource":true,"saved":true,"sourceSize":{"x":1944,"y":2048},"rootRelativePath":"assets/v3/animations/f3lClETGpfStTBlpzc8naU175fAtoD_fuWOGEDBhB6w/81bb0bf1-ac22-4cc5-93e1-7c6ad6f412d0.png"},"7e704e32-ac57-4b8e-ada3-b6fd47e01eb9":{"name":"pinky","sourceUrl":"assets/v3/animations/f3lClETGpfStTBlpzc8naU175fAtoD_fuWOGEDBhB6w/7e704e32-ac57-4b8e-ada3-b6fd47e01eb9.png","frameSize":{"x":240,"y":240},"frameCount":1,"looping":true,"frameDelay":4,"version":"Q6DoiASh5j.i6FPnmnrdlmu.ipZsOUBM","loadedFromSource":true,"saved":true,"sourceSize":{"x":240,"y":240},"rootRelativePath":"assets/v3/animations/f3lClETGpfStTBlpzc8naU175fAtoD_fuWOGEDBhB6w/7e704e32-ac57-4b8e-ada3-b6fd47e01eb9.png"},"7544042e-460e-485a-ac7c-c1fd4d7b0363":{"name":"blinky","sourceUrl":"assets/v3/animations/f3lClETGpfStTBlpzc8naU175fAtoD_fuWOGEDBhB6w/7544042e-460e-485a-ac7c-c1fd4d7b0363.png","frameSize":{"x":360,"y":360},"frameCount":1,"looping":true,"frameDelay":4,"version":"NxGD3PO61uytXjpHV3QfeQAF77edT9ik","loadedFromSource":true,"saved":true,"sourceSize":{"x":360,"y":360},"rootRelativePath":"assets/v3/animations/f3lClETGpfStTBlpzc8naU175fAtoD_fuWOGEDBhB6w/7544042e-460e-485a-ac7c-c1fd4d7b0363.png"},"ae6d6dd1-31d6-4e49-87e7-dd761bc7b960":{"name":"winky","sourceUrl":"assets/v3/animations/f3lClETGpfStTBlpzc8naU175fAtoD_fuWOGEDBhB6w/ae6d6dd1-31d6-4e49-87e7-dd761bc7b960.png","frameSize":{"x":600,"y":600},"frameCount":1,"looping":true,"frameDelay":4,"version":"M8veVsKvvJdlHe2nTzzDcGPeiD3xr2ca","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":600},"rootRelativePath":"assets/v3/animations/f3lClETGpfStTBlpzc8naU175fAtoD_fuWOGEDBhB6w/ae6d6dd1-31d6-4e49-87e7-dd761bc7b960.png"},"2f062489-5c47-4b93-b202-a0dc976d24a8":{"name":"twinky","sourceUrl":"assets/v3/animations/f3lClETGpfStTBlpzc8naU175fAtoD_fuWOGEDBhB6w/2f062489-5c47-4b93-b202-a0dc976d24a8.png","frameSize":{"x":920,"y":600},"frameCount":1,"looping":true,"frameDelay":4,"version":"4n4dOQ6gZvEY64xkFNG.3vaG8Uig53tL","loadedFromSource":true,"saved":true,"sourceSize":{"x":920,"y":600},"rootRelativePath":"assets/v3/animations/f3lClETGpfStTBlpzc8naU175fAtoD_fuWOGEDBhB6w/2f062489-5c47-4b93-b202-a0dc976d24a8.png"},"09dae620-f075-4764-8ff3-95036e2ba9ed":{"name":"retro_coin_1","sourceUrl":"assets/api/v1/animation-library/gamelab/yyMkmGM.lMnt0PF6R49LlyGX9vMPtDav/category_retro/retro_coin.png","frameSize":{"x":95,"y":113},"frameCount":1,"looping":true,"frameDelay":2,"version":"yyMkmGM.lMnt0PF6R49LlyGX9vMPtDav","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":95,"y":113},"rootRelativePath":"assets/api/v1/animation-library/gamelab/yyMkmGM.lMnt0PF6R49LlyGX9vMPtDav/category_retro/retro_coin.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var puntos=0;

var pacman = createSprite(200,200,25,25);
pacman.setAnimation("Pacman");
pacman.scale=0.02;

var fantasma1 = createSprite(360,40,25,25);
fantasma1.setAnimation("blinky");
fantasma1.scale=0.1;
fantasma1.velocityY=8;
fantasma1.velocityX=-2;
var fantasma2 = createSprite(40,40,25,25);
fantasma2.setAnimation("winky");
fantasma2.scale=0.07;
fantasma2.velocityY=8;
fantasma2.velocityX=2;
var fantasma3 = createSprite(40,360,25,25);
fantasma3.setAnimation("pinky");
fantasma3.scale=0.13;
fantasma3.velocityY=-2;
fantasma3.velocityX=8;
var fantasma4 = createSprite(360,360,25,25);
fantasma4.setAnimation("winky");
fantasma4.scale=0.07;
fantasma4.velocityX=-8;
var fantasma5 = createSprite(50,200,25,25);
fantasma5.setAnimation("blinky");
fantasma5.scale=0.1;
fantasma5.velocityY=-2;
fantasma5.velocityX=8;
var fantasma6 = createSprite(350,200,25,25);
fantasma6.setAnimation("pinky");
fantasma6.scale=0.13;
fantasma6.velocityY=-2;
fantasma6.velocityX=-8;

var punto1 = createSprite(270,80,15,15);
punto1.setAnimation("retro_coin_1");
punto1.scale=0.25;
var punto2 = createSprite(150,20,15,15);
punto2.setAnimation("retro_coin_1");
punto2.scale=0.25;
var punto3 = createSprite(10,260,15,15);
punto3.setAnimation("retro_coin_1");
punto3.scale=0.25;
var punto4 = createSprite(169,320,15,15);
punto4.setAnimation("retro_coin_1");
punto4.scale=0.25;
var punto5 = createSprite(330,280,15,15);
punto5.setAnimation("retro_coin_1");
punto5.scale=0.25;

var gameState="start";


createEdgeSprites();

function draw() {
      background("lightblue");

  if (gameState == "start") {
    
 background("green");
 
textSize(14);
fill("black");
  text("Bienvenido... Estas listo? Presiona Enter para comenzar" ,30,100);
    text("Con las flechas puedes mover a Pacman" ,30,125);
      text("Tu objetivo es conseguir los 5 puntos" ,30,150);
      text("NO DEJES QUE TE TOQUEN LOS FANTASMAS" ,30,175);
      text("Este juego es dificil... podras conseguirlo?" ,30,200);

    if(keyDown("ENTER")) {
      
      gameState="play";
  }

  
}


  if (gameState == "play") {

    drawSprites();
    
    textSize(20);
  fill("red");
  stroke("blue");
    text("Puntuacion: "+puntos,10,25);
  
  pacman.bounceOff(edges);
    fantasma1.bounceOff(edges);
      fantasma2.bounceOff(edges);
        fantasma3.bounceOff(edges);
          fantasma4.bounceOff(edges);
                   fantasma5.bounceOff(edges);
                            fantasma6.bounceOff(edges);
          
          
  if (keyDown("down")) {
    pacman.y += 7;
  }
  
   if (keyDown("right")) {
    pacman.x += 7;
  }
  
  if (keyDown("up")) {
    pacman.y -= 7;
  }
  
   if (keyDown("left")) {
    pacman.x -= 7;
    
   }


 if (pacman.isTouching(punto1)) {
   punto1.destroy(pacman);
   puntos=puntos+1;
    
  }
  
   if (pacman.isTouching(punto2)) {
   punto2.destroy(pacman);
   puntos=puntos+1;
    
  }
  
   if (pacman.isTouching(punto3)) {
   punto3.destroy(pacman);
   puntos=puntos+1;
    
  }
  
   if (pacman.isTouching(punto4)) {
   punto4.destroy(pacman);
   puntos=puntos+1;
    
  }
  
   if (pacman.isTouching(punto5)) {
   punto5.destroy(pacman);
   puntos=puntos+1;
    
  }
  
  
if (fantasma1.isTouching(pacman)) {

    gameState= "end";
}

if (fantasma2.isTouching(pacman)) {

    gameState= "end";
}
  
  if (fantasma3.isTouching(pacman)) {

    gameState= "end";
}
  
  if (fantasma4.isTouching(pacman)) {

    gameState= "end";
}
  
  if (fantasma5.isTouching(pacman)) {

    gameState= "end";
}
  
  if (fantasma6.isTouching(pacman)) {


}
}    if (puntos == 5) {
gameState= "end";

  }

  if(gameState === "end"){
    fill("red");
  textSize(30);
  text("GAME OVER", 115,200); 
      text("Puntuacion: "+puntos,120,250);
  }
  
}
  



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
