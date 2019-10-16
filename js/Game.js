let space = document.getElementById("space");
let score = document.getElementById("score");
let main = document.getElementById("main");
let play = document.getElementById("play");
let healt = document.getElementById("healt");
let game_over = document.getElementById('game_over'); 
let Stars = [];
let myBullets = [];
let enBullets = [];
let Enemys = [];
let Timer = 0;
let Bullet_t = 0 

//Creat image my spaceship
let imageShip = new Image();
imageShip.src = "img/sip2.png";

//Creat image enemy spaceship
let imageEnemy = new Image();
imageEnemy.src = "img/sip4.png";

const GameArea = {
  canvas: document.createElement("canvas"),
  start: function(hr) {
    this.status = 0;
    this.canvas.width = space.offsetWidth;
    this.canvas.height = hr;
    this.context = this.canvas.getContext("2d");
    space.appendChild(this.canvas);
    this.frameNo = 0;
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop: function() {
    clearInterval(this.interval);
  }
};

// Object star
function Star() {
  this.r = rnd(3);
  this.x = rnd(GameArea.canvas.width);
  this.y = -10;
  this.speedY = 1;
  this.rand = function(d) {
    return Math.random() * d;
  };
  this.newPos = function() {
    this.y = this.y + (this.speedY + myShip.speedY);
    return;
  };
  this.update = function() {
    this.newPos();
    ctx = GameArea.context;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.fillStyle = "#f1f1f1";
    ctx.fill();
    ctx.strokeStyle = "#222629";
    ctx.stroke();
  };
  this.hY = function() {
    return this.y;
  };
}

function eStars() {
  if (Stars.length < 900) {
    if (Timer > 2) {
      Stars.push(new Star());
      Timer = 0;
    } else {
      Timer += 1;
    }
  }
  for (i = 0; i < Stars.length; i++) {
    if (Stars[i].y < 1150) {
      Stars[i].update();
    } else {
      Stars.splice(i, 1);
    }
  }
}

function rnd(d) {
  return Math.random() * d;
}

//My spaceship
function Ship() {
  this.width = 50;
  this.height = 80;
  this.speedX = 0;
  this.speedY = 0;
  this.score = 0;
  this.healt = 100;
  this.x = GameArea.canvas.width / 2;
  this.y = GameArea.canvas.height - 100;
  this.update = function() {
    ctx = GameArea.context;
    ctx.drawImage(imageShip, this.x, this.y, this.width, this.height);
  };
  this.newPos = function() {
    this.Crash()
    this.x += this.speedX;
    this.moveLeft();
    this.moveRight();
  };
  this.moveLeft = function() {
    let left = GameArea.canvas.width - this.width;
    if (this.x > left) {
      this.x = left;
    }
  };
  this.moveRight = function() {
    let left = 0;
    if (this.x < left) {
      this.x = left;
    }
  };
  this.Crash = function() {
    let Mx = this.x + 50;
    for (i = 0; i < enBullets.length; i++) {
      if (
        enBullets[i].x > this.x &&
        enBullets[i].x < Mx &&
        enBullets[i].y > (GameArea.canvas.height - 100)
      ) {
        if (this.healt <= 0) {
          GameArea.canvas.status = 0; 
          game_over.style.display = "block"; 
          play.style.display = "block";
        } else {
          this.healt -= enBullets[i].bad;
          enBullets.splice(i, 1);
        }
      }
    }
    return;
  };
}

//Other ship
function EnemyShip(y) {
  this.width = 40;
  this.height = 50;
  this.speedX = 0;
  this.speedY = 20;
  this.x = GameArea.canvas.width / 2 - 25;
  this.y = y;
  this.health = 100;
  this.update = function() {
    this.newPos();
    this.Crash();
    ctx = GameArea.context;
    ctx.drawImage(imageEnemy, this.x, this.y, this.width, this.height);
  };
  this.newPos = function() {
    if (this.x > myShip.x + 1) {
      this.x -= 4;
    } else if (this.x + 1 < myShip.x) {
      this.x += 4;
    }
    if(this.y < 20) {
      this.y += 2; 
    } else { 
        if(Bullet_t > 16) {
          enBullets.push(new bullet(this.x -5, 35 ,4));
          Bullet_t = 0; 
        } else {
          Bullet_t += 1; 
        }
    }
  };
  this.Crash = function() {
    let Mx = this.x + 50;
    for (i = 0; i < myBullets.length; i++) {
      if (
        myBullets[i].x > this.x &&
        myBullets[i].x < Mx &&
        myBullets[i].y < 80
      ) {
        if (this.health <= 0) {
        } else {
          this.health -= myBullets[i].bad;
          myShip.score += myBullets[i].bad;
          myBullets.splice(i, 1);
        }
      }
    }
    return;
  };
}

function EShips() {
  if (Enemys.length == 0) {
    Enemys.push(new EnemyShip(-100));
  }
}

function EBullets() {
  for(i = 0; i < enBullets.length; i++) {
    enBullets[i].update(); 
  }
}

function writeText(txt) {
  ctx = GameArea.context;
  ctx.font = "20px Arial";
  ctx.fillStyle = "#66FCF1";
  ctx.fillText("Health:" + txt, 10, 25);
}

function startGame() {
  GameArea.start(650);
  myShip = new Ship();
  Enemys.push(new EnemyShip(-100));
}

function bullet(x ,y , speed) {
  this.width = 4;
  this.height = 4;
  this.x = x + 25;
  this.y = y;
  this.bad = 2;
  this.living = 0;
  this.update = function() {
    this.y += speed;
    ctx = GameArea.context;
    ctx.fillStyle = "#45A29E";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
}

function updateGameArea() {
  GameArea.clear();
  myShip.newPos();
  eStars();
  if (GameArea.canvas.status === 1) {
    healt.innerHTML = '<i class="fa fa-heartbeat"></i> ' + myShip.healt;
    EShips();
    myShip.update();
    for (i = 0; i < myBullets.length; i++) {
      if (myBullets[i].living < myBullets[i].y) {
        myBullets[i].update();
      } else {
        myBullets.splice(i, 1);
      }
    }
    for (i = 0; i < enBullets.length; i++) {
      if (GameArea.canvas.height > enBullets[i].y) {
        enBullets[i].update();
      } else {
        enBullets.splice(i, 1);
      }
    }
    for (i = 0; i < Enemys.length; i++) {
      if (Enemys[i].health <= 0) {
        Enemys.splice(i, 1);
      } else {
        Enemys[i].update();
      }
    }
    score.innerHTML = "Score: " + myShip.score;
    EBullets(); 
  }
}

startGame();

function playGame() {
  GameArea.canvas.status = 1;
  play.style.display = "none";
  game_over.style.display = "none"; 
  myShip.healt = 100
}

//Event list
document.addEventListener("keydown", function(event) {
  if (event.keyCode === 37) {
    myShip.speedX = -7;
  } else if (event.keyCode === 39) {
    myShip.speedX = 7;
  } else if (event.keyCode === 38) {
    if (myShip.speedY < 12) {
      myShip.speedY += 1;
    }
  } else if (event.keyCode == 40) {
    if (myShip.speedY > 0) {
      myShip.speedY -= 1;
    }
  }
});

document.addEventListener("keyup", function(event) {
  if (event.keyCode === 32) {
    myBullets.push(new bullet(myShip.x, GameArea.canvas.height - 90, -12));
  }

  document.addEventListener("keyup", function(event) {
    if (event.keyCode === 37 || event.keyCode === 39) {
      myShip.speedX = 0;
    }
  });
});

//Window size

let WinSize = {};

WinSize.Hsize = () => {
  return window.innerHeight - (20 - main.offsetHeight);
};
