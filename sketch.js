var garden, rabbit, leaves_img, leaves_img2, leaves_img3;
var gardenImg, rabbitImg, apple_img;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  apple_img = loadImage("apple.png")
}

function setup(){
  createCanvas(400,400);

  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);
  }

function draw() {
  background(0);
  rabbit.x = World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
  var choose = Math.floor(random(1,3))
  if (frameCount % 80 == 0 ) {
    if (choose == 1){
      create("apple", apple_img)
    }
    else {
      choose = Math.floor(random(1,4))
      if (choose == 1) {
        leaves_img = loadImage("leaf.png")
        create("leaf", leaves_img)
      }
      else if (choose == 2) {
        leaves_img2 = loadImage("orangeLeaf.png")
        create("leaf", leaves_img2)
      }
      else {
      leaves_img3 = loadImage("redImage.png")
      create("leaf", leaves_img3)
      }
    }
  }
  drawSprites();
}
function create(apple,apple_img) {
  apple = createSprite(random(50,350),40)
  apple.addImage(apple_img)
  apple.scale = 0.1
  apple.velocityY = 3
}