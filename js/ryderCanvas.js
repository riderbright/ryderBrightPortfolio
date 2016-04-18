
var canvas;
var myAudio
var context;
var bgImage;
var bgRange;
var bgReady;
var bgCloud;
var canvasReady;
var keysDown;


window.onload = function () {


    canvas = document.createElement("canvas");
    context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = 200;
    console.log(context);

    //document.body.appendChild(canvas);
    document.getElementById("header").appendChild(canvas);

    bgImage = new Image();
    bgImage.onload = function () {
        bgReady = true;

    };
    bgImage.src = "sprites/canvas_4.png";


    var SpaceShip = function (x, y, speed, src, gameMove) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.src = src;
        //this.src = valueAtIndexOf(i)
        this.gameMove = gameMove;
        this.image = new Image();
        this.image.src = src;
        this.image.onload = function () {
            canvasReady = true;
            console.log("red ready");
        };

    };



    //use speed * modifier


    var bgKillers = new SpaceShip(0, 7, 0, "sprites/ryder_wild.png", 10);
    var bgKillersTwo = new SpaceShip(-123, 10, 0, "sprites/ryder_wild.png", 10);
    var bgCloud = new SpaceShip(1400, 0, 0, "sprites/cloud_9.png", 10);
    var bgCloudZero = new SpaceShip(1400, 0, 0, "sprites/cloud_3.png", 10);
    var bgCloudNine = new SpaceShip(1400, 0, 0, "sprites/cloud_9.png", 10);
    var bgNebula = new SpaceShip(900, 70, 0, "sprites/cloud_gas.png", 10);
    var bgNebulaOne = new SpaceShip(1400, 66, 0, "sprites/cloud_gas.png", 10);
    var bgNebulaTwo = new SpaceShip(100, 68, 0, "sprites/cloud_gas.png", 10);
    var flashOne = new SpaceShip(0, 0, 0, "sprites/flash.png", 10);
    var flashTwo = new SpaceShip(-1200, 0, 0, "sprites/nebulous_gas.png", 10);
    var cashFan = new SpaceShip(-1055, 0, 0, "sprites/cash_wreath_ghost.png", 10);
    var cashFanTwo = new SpaceShip(510, 0, 0, "sprites/cash_wreath_ghost.png", 10);
    var cashFanThree = new SpaceShip(-300, -200, 0, "sprites/cash_wreath_ghostOne.png", 10);
    var cashFanFour = new SpaceShip(1300, -200, 0, "sprites/cash_wreath_ghostOne.png", 10);
    var lightning = function () {
        if (bgCloudZero.x % 6) {
            bgRange = true;
        }
        if (bgCloudZero.x % 1) {
            bgRange = false;
        }
    }


    keysDown = {}

    document.addEventListener("keydown", function (e) {
        keysDown[e.keyCode] = true

    }, false);

    document.addEventListener("keyup", function (e) {
        delete keysDown[e.keyCode];

    }, false);


    var update = function (modifier) {

        if (bgCloud.gameMove === 10) {
            bgCloud.x -= 1.8;
            bgCloudNine.x -= 2.4;
            bgKillers.x -= 1;
            bgNebulaTwo.x -= 1.2;
            bgNebulaOne.x -= 1.7;
            bgNebula.x -= 2.2;
            bgCloudZero.x -= .5;
            cashFan.x += .9;
            cashFanTwo.x += .9;
            cashFanThree.x += .9;
            cashFanFour.x += .9;
            canvas.width = window.innerWidth;

        }
        if (bgCloud.x < -2000) {
            bgCloud.x = 2100;
        }
        if (bgCloudNine.x < -1875) {
            bgCloudNine.x = 1950;
        }
        if (bgKillers.x < -3485) {
            bgKillers.x = 3450;
        }
        if (bgKillersTwo.x < -3485) {
            bgKillersTwo.x = 3450;
        }
        if (bgNebulaOne.x < -2002) {
            bgNebulaOne.x = 2000;
        }
        if (bgNebula.x < -2002) {
            bgNebula.x = 2000;
        }
        if (bgNebulaTwo.x < -2002) {
            bgNebulaTwo.x = 2000;
        }
        if (cashFan.x > 2020) {
            cashFan.x = -1060;
        }
        if (cashFanTwo.x > 2020) {
            cashFanTwo.x = -1060
        }
        if (cashFanThree.x > 2020) {
            cashFanThree.x = -1060
        }
        if (cashFanFour.x > 2020) {
            cashFanFour.x = -1060
        }
        if (bgKillers.x % 300) {
            lightning();
        }
    };


    var drawGame = function () {

        if (bgReady) {
            context.drawImage(bgImage, 0, 0);

        }
        if (bgRange) {
            context.drawImage(flashOne.image, flashOne.x, flashOne.y);


        }
        if (canvasReady) {
            context.drawImage(cashFan.image, cashFan.x, cashFan.y);
            context.drawImage(cashFanTwo.image, cashFanTwo.x, cashFanTwo.y);
            context.drawImage(cashFanThree.image, cashFanThree.x, cashFanThree.y);
            context.drawImage(cashFanFour.image, cashFanFour.x, cashFanFour.y);
            context.drawImage(bgCloud.image, bgCloud.x, bgCloud.y);
            context.drawImage(bgCloudNine.image, bgCloudNine.x, bgCloudNine.y);
            context.drawImage(bgNebula.image, bgNebula.x, bgNebula.y);
            //context.drawImage(bgCloudZero.image, bgCloudZero.x, bgCloudZero.y);
            context.drawImage(bgNebulaOne.image, bgNebulaOne.x, bgNebulaOne.y);
            context.drawImage(bgNebulaTwo.image, bgNebulaTwo.x, bgNebulaTwo.y);
            //context.drawImage(bgKillers.image, bgKillers.x, bgKillers.y);
            context.drawImage(bgKillersTwo.image, bgKillersTwo.x, bgKillersTwo.y);

        }

    }
    var tickTock = function () {
        var now = Date.now();
        var delta = now - then;

        update(delta / 1200);
        drawGame();
        then = now;
        requestAnimationFrame(tickTock);
    };

    var w = window;
    requestAnimationFrame =
        w.requestAnimationFrame ||
        w.webkitRequestAnimationFrame ||
        w.msRequestAnimationFrame ||
        w.mozRequestAnimationFrame;

    var then = Date.now();
    update();
    tickTock();


};

//.custom {
//   cursor: url(images/my-cursor.png), auto;
//}