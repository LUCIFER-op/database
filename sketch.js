var hypnoticball,database;
var position;

function setup(){
    database = firebase.database(); 
    createCanvas(500,500);
    
    hypnoticball = createSprite(250,250,10,10);
    hypnoticball.shapeColor = "red";


    var hypnoticballPosition = database.ref('ball/position');
  hypnoticballPosition.on("value",readPosition );
} 

function draw(){
    background("white");
    if(position !== undefined){
        if(keyDown(LEFT_ARROW)){
            writesposition (-1,0);
         }
         else if(keyDown(RIGHT_ARROW)){
            writesposition (1,0);
         }
         else if(keyDown(UP_ARROW)){
            writesposition (0,-1);
     
         }
         else if(keyDown(DOWN_ARROW)){
            writesposition (0,+1);
         }
         drawSprites();
     }} 







 



function readPosition(data)
{
 position = data.val()
 hypnoticball.x = position.x
 hypnoticball.y = position.y

    } 

    function writesposition(x,y)
    {
     database.ref('ball/position').set({
         x:position.x+x,
         y:position.y+y
     })


        }