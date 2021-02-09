canvas=new fabric.Canvas("mc");
biw=30;
bih=30;
px=10;
py=10;
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
