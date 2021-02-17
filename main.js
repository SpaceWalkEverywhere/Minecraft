canvas=new fabric.Canvas("mc");
biw=50;
bih=50;
px=10;
py=10;
blockSelected="wall.jpg";
var playerobj="";
function player_update() {
    fabric.Image.fromURL("player.png",function(img){
        playerobj=img;
        playerobj.scaleToWidth(150);
        playerobj.scaleToHeight(150);
        playerobj.set({
            top:py,
            left:px
        });
        canvas.add(playerobj);
    });
}
function Block_update(block_img) {
    fabric.Image.fromURL(block_img,function(img){
        block_obj=img;
        block_obj.scaleToWidth(biw);
        block_obj.scaleToHeight(bih);
        block_obj.set({
            top:py,
            left:px
        });
        canvas.add(block_obj);
    });
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e) {
    keypressed=e.keyCode;
    console.log(keypressed+" is pressed");
    if (e.shiftKey===true && keypressed==80){
        console.log("P and Shift are pressed together");
        bih=bih+10;
        biw=biw+10;
        document.getElementById("cw").innerHTML=biw;
        document.getElementById("ch").innerHTML=bih;
    }
    if (e.shiftKey===true && keypressed==77){
        console.log("M and Shift are pressed together");
        bih=bih-10;
        biw=biw-10;
        document.getElementById("cw").innerHTML=biw;
        document.getElementById("ch").innerHTML=bih;
    }
    if (keypressed===87){
        console.log("W is pressed");
        up();
    }
    if (keypressed===83){
        console.log("S is pressed");
        down();
    }
    if (keypressed===68){
        console.log("D is pressed");
        right();
    }
    if (keypressed===65){
        console.log("A is pressed");
        left();
    }
    if (keypressed===49){
       blockSelected="wall.jpg";
       blockselupdate()
       document.getElementById("selname").innerHTML="wall";
    }
    if (keypressed===50){
        blockSelected="ground.png";
        blockselupdate()
        document.getElementById("selname").innerHTML="grass block";
    }
    if (keypressed===51){
        blockSelected="light_green.png";
        blockselupdate()
        document.getElementById("selname").innerHTML="light green wool";
    }
    if (keypressed===52){
        blockSelected="trunk.jpg";
        blockselupdate()
        document.getElementById("selname").innerHTML="wooden log";
    }
    if (keypressed===53){
        blockSelected="roof.jpg";
        blockselupdate()
        document.getElementById("selname").innerHTML="roof";
    }
    if (keypressed===54){
        blockSelected="yellow_wall.png";
        blockselupdate()
        document.getElementById("selname").innerHTML="yellow wall";
    }
    if (keypressed===55){
        blockSelected="dark_green.png";
        blockselupdate()
        document.getElementById("selname").innerHTML="dark green wool";
    }
    if (keypressed===56){
        blockSelected="unique.png";
        blockselupdate()
        document.getElementById("selname").innerHTML="glowstone";
    }
    if (keypressed===57){
        blockSelected="cloud.jpg";
        blockselupdate()
        document.getElementById("selname").innerHTML="cloud";
    }
    if (keypressed===81){
        Block_update(blockSelected);
    }
}
function blockselupdate(){
    document.getElementById("sel").src=blockSelected;
}
function up() {
    if (py>=0) {
        py=py-bih;
        console.log(py+"  "+bih);
        canvas.remove(playerobj);
        player_update();
    }
}
function down() {
    if (py<=450) {
        py=py+bih;
        console.log(py+"  "+bih);
        canvas.remove(playerobj);
        player_update();
    }
}
function left() {
    if (px>0) {
        px=px-biw;
        console.log(px+"  "+biw);
        canvas.remove(playerobj);
        player_update();
    }
}
function right() {
    if (px<=850) {
        px=px+biw;
        console.log(px+"  "+biw);
        canvas.remove(playerobj);
        player_update();
    }
}
