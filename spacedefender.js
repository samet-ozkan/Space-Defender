//Canvas
const myCanvas = document.getElementById("myCanvas");
myCanvas.width = 711;
myCanvas.height = 400;
const ctx = myCanvas.getContext("2d");

//Image Sources
const background = new Image();
background.src = "images/space.jpg"
const spaceshipSrc = "images/spaceship.png";
const targetSrc = "images/meteor.png";
const leftPanelSrc = "images/leftPanel.png";
const rightPanelSrc = "images/rightPanel.png";

//Game
let playing = false;
let hp = 100;
let bulletCount = 20;
let score = 0;

//Arrays
let bullets = [];
let meteors = [];

//Spaceship
const spaceshipWidth = myCanvas.width/10;
const spaceshipHeight = myCanvas.height/10;

let spaceship = {
    img: new Image(),
    width: spaceshipWidth,
    height: spaceshipHeight,
    degree: 0,
    x: myCanvas.width/2 - spaceshipWidth/2,
    y: myCanvas.height - spaceshipHeight,
    centerX: myCanvas.width/2,
    centerY:  myCanvas.height - spaceshipHeight/2,
    draw: function(){
        this.img.src = spaceshipSrc;
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    },
    update: function(){
        ctx.save();
        ctx.translate(this.centerX, this.centerY);
        ctx.rotate(spaceship.degree * Math.PI/180);
        ctx.drawImage(this.img, this.width/-2, this.height/-2, this.width, this.height);
        ctx.restore();
    }
}

spaceship.draw();

//Left Panel
let leftPanel = {
    width: myCanvas.width/30,
    height: myCanvas.height - 2 * myCanvas.height / 16,
    x: myCanvas.width/50,
    y: myCanvas.height / 16,
    draw: function(){
        ctx.fillStyle = "#cb3a3a";
        ctx.fillRect(this.x , this.y, this.width, this.height);
    }
}

//Right Panel
let rightPanel = {
    width: myCanvas.width/30,
    height: myCanvas.height - 2 * myCanvas.height / 16,
    x: myCanvas.width - myCanvas.width/30 - myCanvas.width/50,
    y: myCanvas.height / 16,
    draw: function(){
        ctx.fillStyle = "#cb3a3a";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

//onKeyDown
document.onkeydown = onKeyDown;

function onKeyDown(e){

    if(!playing){
        playing = true;
        bullets = [];
        meteors = [];
        hp = 100;
        bulletCount = 20;
        score = 0;
        spaceship.degree = 0;
    }

    e = e || window.event;

    switch(e.keyCode){
        case 39: 
            console.log("Right arrow");
            if(spaceship.degree < 90)
                spaceship.degree += 5;
            break;
        case 37:
            console.log("Left arrow");
                if(spaceship.degree > -90){
                    spaceship.degree -= 5;
                }
            break;
        case 32:
            console.log("Space");
            if(bulletCount != 0){
                bullets.push(new Bullet());
                bulletCount--;
            }
            meteors.push(new Meteor());
            break;
        default:
            console.log("default");
    }
}

//Bullet
class Bullet {
    constructor() {
        this.status = true;
        this.active = false;
        this.radius = myCanvas.width / 80;
        this.centerX = spaceship.centerX + Math.cos((90 - spaceship.degree) * Math.PI / 180) * (spaceshipHeight / 2 + this.radius);
        this.centerY = spaceship.centerY - Math.sin((90 - spaceship.degree) * Math.PI / 180) * (spaceshipHeight / 2 + this.radius);
        this.velocityX = Math.cos((90 - spaceship.degree) * Math.PI / 180) * 5;
        this.velocityY = Math.sin((90 - spaceship.degree) * Math.PI / 180) * 5;
        this.draw = function () {
            if(this.active){
                ctx.fillStyle = "#cb3a3a"
            }
            else{
                ctx.fillStyle = "#3e3bba";
            }
            ctx.beginPath();
            ctx.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI, false);
            ctx.fill();
            this.centerX += this.velocityX;
            this.centerY -= this.velocityY;

            if(this.centerY - this.radius >= leftPanel.y && this.centerY - this.radius <= (leftPanel.y + leftPanel.height)){
                if((this.centerX - this.radius <= (leftPanel.x + leftPanel.width) && this.velocityX < 0) || (this.centerX + this.radius >= rightPanel.x && this.velocityX > 0)){
                    this.velocityX *= -1;
                    this.active = true;
                }
            }

            if (this.status && this.centerY + this.radius <= 0) {
                this.status = false;
            }

            if(this.active && meteors.length != 0){
                for(const t of meteors){
                    if(this.status && this.centerX > t.x && this.centerX < (t.x + t.width)
                && this.centerY > t.y && this.centerY < (t.y + t.height)){
                    this.status = false;
                    t.status = false;
                    bulletCount++;
                    score++;
                }
                }
            }
        };
    }
}

//Meteor
class Meteor {
    constructor() {
        this.status = true;
        this.img = new Image();
        this.img.src = targetSrc;
        this.width = myCanvas.width / 10;
        this.height = myCanvas.height / 10;
        this.x = leftPanel.width + Math.random() * (myCanvas.width - 2 * leftPanel.width - this.width);
        this.y = 0;
        this.velocityX = Math.cos((Math.random() * 180) * Math.PI / 180) * (Math.random() * 2);
        this.velocityY = Math.sin((Math.random() * 180) * Math.PI / 180) * (Math.random() * 2);
        this.draw = function(){
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
            this.x += this.velocityX;
            this.y += this.velocityY;

            if ((this.x <= (leftPanel.x + leftPanel.width) && this.velocityX < 0) || (this.x + this.width >= rightPanel.x && this.velocityX > 0)
            && (this.y + this.height) >= leftPanel.y && this.y <= (leftPanel.y + leftPanel.height)) {
                this.velocityX *= -1;
            }
    
            if (this.status && this.y >= myCanvas.height) {
                this.status = false;
                if(hp != 0){
                    hp -= 5;
                }
                else{
                    playing = false;
                }
            }

        }
       
    }
}

//Game
function draw(){
    ctx.drawImage(background, 0, 0, myCanvas.width, myCanvas.height);
    if(playing){
        ctx.fillStyle = "#00c8fa";
    leftPanel.draw();
    rightPanel.draw();
    if(meteors.length > 0){
        meteors.forEach(function(element,index){
            if(element.status == false){
                meteors.splice(index , 1);
            }
            element.draw();
        })
    }
    else{
        meteors.push(new Meteor());
    }
    if(bullets.length > 0){
        bullets.forEach(function(element,index){
            if(element.status == false){
                bullets.splice(index , 1);
            }
            element.draw();
        })
    }
    ctx.fillStyle = "#FFFFFF";
    ctx.font = myCanvas.width / 70 + "px Arial";
    ctx.textAlign = "center";
    ctx.fillText("HP: " + hp, myCanvas.width / 2, myCanvas.width / 70);
    ctx.fillText("Score: " + score, myCanvas.width / 2, 2 * myCanvas.width / 70);
    ctx.fillText("Bullet Count: " + bulletCount, myCanvas.width / 2, 3 * myCanvas.width / 70);
    spaceship.update();
    }

    else{
        ctx.fillStyle = "#000000";
        ctx.beginPath();
        ctx.arc(myCanvas.width/2, myCanvas.height/2, myCanvas.height/4, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.fillStyle = "#FFFFFF";
        ctx.font = myCanvas.width / 50 + "px Arial";
        ctx.textAlign = "center";
        console.log("score:  " + score);
        if(score != 0){
            ctx.fillText("Score: " + score, myCanvas.width/2, myCanvas.height/2 - myCanvas.width/50);
        }
            ctx.fillText("Press any key to play.", myCanvas.width/2, myCanvas.height/2);
    }
    requestAnimationFrame(draw);

}

draw();
