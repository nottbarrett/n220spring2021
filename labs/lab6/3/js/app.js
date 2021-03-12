var myBall = {
    size: 30,
    color: "#ffffff",
    xSpeed: 5,
    ySpeed: 5,
    xPos: 0,
    yPos: 100,
    update: function () {
        background(0)

        circle(this.xPos,this.yPos,this.size)

        this.xPos = this.xPos + this.xSpeed;
        this.yPos = this.yPos + this.ySpeed;
        
        if( this.yPos == height || this.yPos == 0 ){
            this.ySpeed = -this.ySpeed;
        }
        
        if ( this.xPos == width || this.xPos == 0 ){
            this.xSpeed = -this.xSpeed;
        }
        
        
    }
}

function setup(){
    createCanvas(800,600)
}

function draw(){

myBall.update();

}