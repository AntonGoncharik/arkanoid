class ObjectGame {
  constructor(imgX, imgY, canvasX, canvasY, imgWidth, imgHeight, canvasWidth, canvasHeight) {
    this.imgX = imgX;
    this.imgY = imgY;
    this.imgWidth = imgWidth;
    this.imgHeight = imgHeight;
    this.canvasX = canvasX;
    this.canvasY = canvasY;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
  }
}

class Brick extends ObjectGame {
  constructor(imgX, imgY, canvasX, canvasY, imgWidth, imgHeight, canvasWidth, canvasHeight) {
    super(imgX, imgY, canvasX, canvasY, imgWidth, imgHeight, canvasWidth, canvasHeight);
    this.visible = 1;
  }
}

class Ball extends ObjectGame {
  constructor(imgX, imgY, canvasX, canvasY, imgWidth, imgHeight, canvasWidth, canvasHeight, dx, dy) {
    super(imgX, imgY, canvasX, canvasY, imgWidth, imgHeight, canvasWidth, canvasHeight);
    this.dx = dx;
    this.dy = dy;
  }
}

class Platform extends ObjectGame {
  constructor(imgX, imgY, canvasX, canvasY, imgWidth, imgHeight, canvasWidth, canvasHeight) {
    super(imgX, imgY, canvasX, canvasY, imgWidth, imgHeight, canvasWidth, canvasHeight);
  }
}

class Game {
  constructor() {
    this.SCREEN_WIDTH = 1240;
    this.SCREEN_HEIGHT = 720;
    this.imgBackground = new Image();
    this.imgBackground.src = '/html, css, js/JS/arkanoid canvas/img/background_arkanoid.jpg';
    this.imgElements = new Image();
    this.imgElements.src = '/html, css, js/JS/arkanoid canvas/img/elements_arkanoid.png';
  }

  createGame() {
    let canvasGame = document.createElement('canvas');
    canvasGame.id = 'canvasGame';
    canvasGame.width = this.SCREEN_WIDTH;
    canvasGame.height = this.SCREEN_HEIGHT;
    document.body.appendChild(canvasGame);

    this.ctx = canvasGame.getContext('2d');

    let buttonStart = document.createElement('input');
    buttonStart.id = 'buttonStart';
    buttonStart.type = 'button';
    buttonStart.value = 'Start';
    document.body.appendChild(buttonStart);

    let buttonPause = document.createElement('input');
    buttonPause.id = 'buttonPause';
    buttonPause.type = 'button';
    buttonPause.value = 'Pause';
    document.body.appendChild(buttonPause);

    document.addEventListener('mousemove', game.movePlatform);
  }

  createBricks() {
    this.bricks = [];
    this.bricks.push(new Brick(0, 0, 44, 0, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 0, 108, 0, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 0, 172, 0, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 0, 236, 0, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 0, 300, 0, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 0, 364, 0, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 0, 428, 0, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 0, 492, 0, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 0, 556, 0, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 0, 620, 0, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 0, 684, 0, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 0, 748, 0, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 0, 812, 0, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 0, 876, 0, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 0, 940, 0, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 0, 1004, 0, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 0, 1068, 0, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 0, 1132, 0, 64, 32, 64, 32));

    this.bricks.push(new Brick(0, 32, 44, 32, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 32, 108, 32, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 32, 172, 32, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 32, 236, 32, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 32, 300, 32, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 32, 364, 32, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 32, 428, 32, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 32, 492, 32, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 32, 556, 32, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 32, 620, 32, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 32, 684, 32, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 32, 748, 32, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 32, 812, 32, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 32, 876, 32, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 32, 940, 32, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 32, 1004, 32, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 32, 1068, 32, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 32, 1132, 32, 64, 32, 64, 32));

    this.bricks.push(new Brick(0, 64, 44, 64, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 64, 108, 64, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 64, 172, 64, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 64, 236, 64, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 64, 300, 64, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 64, 364, 64, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 64, 428, 64, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 64, 492, 64, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 64, 556, 64, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 64, 620, 64, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 64, 684, 64, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 64, 748, 64, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 64, 812, 64, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 64, 876, 64, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 64, 940, 64, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 64, 1004, 64, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 64, 1068, 64, 64, 32, 64, 32));
    this.bricks.push(new Brick(0, 64, 1132, 64, 64, 32, 64, 32));

    this.bricks.push(new Brick(64, 0, 44, 96, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 0, 108, 96, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 0, 172, 96, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 0, 236, 96, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 0, 300, 96, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 0, 364, 96, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 0, 428, 96, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 0, 492, 96, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 0, 556, 96, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 0, 620, 96, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 0, 684, 96, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 0, 748, 96, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 0, 812, 96, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 0, 876, 96, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 0, 940, 96, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 0, 1004, 96, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 0, 1068, 96, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 0, 1132, 96, 64, 32, 64, 32));

    this.bricks.push(new Brick(64, 32, 44, 128, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 32, 108, 128, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 32, 172, 128, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 32, 236, 128, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 32, 300, 128, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 32, 364, 128, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 32, 428, 128, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 32, 492, 128, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 32, 556, 128, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 32, 620, 128, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 32, 684, 128, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 32, 748, 128, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 32, 812, 128, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 32, 876, 128, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 32, 940, 128, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 32, 1004, 128, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 32, 1068, 128, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 32, 1132, 128, 64, 32, 64, 32));

    this.bricks.push(new Brick(64, 64, 44, 160, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 64, 108, 160, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 64, 172, 160, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 64, 236, 160, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 64, 300, 160, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 64, 364, 160, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 64, 428, 160, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 64, 492, 160, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 64, 556, 160, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 64, 620, 160, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 64, 684, 160, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 64, 748, 160, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 64, 812, 160, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 64, 876, 160, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 64, 940, 160, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 64, 1004, 160, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 64, 1068, 160, 64, 32, 64, 32));
    this.bricks.push(new Brick(64, 64, 1132, 160, 64, 32, 64, 32));
  }

  createBall() {
    this.ball = new Ball(128, 24, 596, 640, 24, 24, 30, 30, 8, -8);
  }

  createPlatform() {
    this.platform = new Platform(128, 0, 540, 680, 115, 24, 160, 24);
  }

  renderGame() {
    // game.imgElements.onload = function() {
    //   game.imgBackground.onload = function() {
    // clear canvas
    game.ctx.clearRect(0, 0, game.ctx.canvas.width, game.ctx.canvas.height);

    // render background
    game.ctx.drawImage(game.imgBackground, 0, 0, 1920, 1080, 0, 0, 1240, 720);

    // render bricks
    for (let i = 0; i < game.bricks.length; i++) {
      let brick = game.bricks[i];
      if (brick.visible === 0) continue;
      game.ctx.drawImage(game.imgElements, brick.imgX, brick.imgY, brick.imgWidth, brick.imgHeight,
        brick.canvasX, brick.canvasY, brick.canvasWidth, brick.canvasHeight);
    }

    // render platform
    game.ctx.drawImage(game.imgElements, game.platform.imgX, game.platform.imgY, game.platform.imgWidth, game.platform.imgHeight,
      game.platform.canvasX, game.platform.canvasY, game.platform.canvasWidth, game.platform.canvasHeight);

    // render ball
    game.ctx.drawImage(game.imgElements, game.ball.imgX, game.ball.imgY, game.ball.imgWidth, game.ball.imgHeight,
      game.ball.canvasX, game.ball.canvasY, game.ball.canvasWidth, game.ball.canvasHeight);
  }

  moveBall() {
    // encounter with wall
    if (this.ball.canvasX + this.ball.canvasWidth > this.ctx.canvas.width || this.ball.canvasX < 0) {
      this.ball.dx = -this.ball.dx;
      this.playAudioBeatBall();
    }
    if (this.ball.canvasY < 0) {
      this.ball.dy = -this.ball.dy;
      this.playAudioBeatBall();
    }
    if (this.ball.canvasY + this.ball.canvasHeight > this.ctx.canvas.height) {
      //clearTimeout(this.IDtimer);
      cancelAnimationFrame(this.IDtimer);
      alert('GAME OVER');
      return;
    }

    // encounter with bricks
    for (let i = 0; i < this.bricks.length; i++) {
      let brick = this.bricks[i];
      if (brick.visible === 0) continue;
      if (this.ball.canvasX > brick.canvasX && this.ball.canvasX < brick.canvasX + brick.canvasWidth &&
        this.ball.canvasY > brick.canvasY && this.ball.canvasY < brick.canvasY + brick.canvasHeight) {
        this.ball.dy = -this.ball.dy;
        brick.visible = 0;
        this.playAudioBeatBrick();
      }
    }

    // encounter with platform
    if (this.ball.canvasX > this.platform.canvasX && this.ball.canvasX < this.platform.canvasX + this.platform.canvasWidth &&
      this.ball.canvasY + this.ball.canvasHeight > this.platform.canvasY &&
      this.ball.canvasY + this.ball.canvasHeight < this.platform.canvasY + this.platform.canvasHeight) {
      this.ball.dy = -this.ball.dy;
      this.playAudioBeatBall();
    }

    this.ball.canvasX += this.ball.dx;
    this.ball.canvasY += this.ball.dy;

    this.renderGame();
    this.IDtimer = requestAnimationFrame(() => this.moveBall());
    //this.IDtimer = setTimeout(() => this.moveBall(), 25);
  }

  movePlatform(e) {
    game.platform.canvasX = e.clientX - game.ctx.canvas.offsetLeft - game.platform.canvasWidth / 2;
  }

  playAudioBeatBrick() {
    let audio = new Audio();
    audio.src = '/E:/html, css, js/JS/arkanoid canvas/audio/song_beat_brick.mp3';
    audio.play();
  }

  playAudioBeatBall() {
    let audio = new Audio();
    audio.src = '/E:/html, css, js/JS/arkanoid canvas/audio/song_beat_ball.mp3';
    audio.play();
  }
}

let game = new Game();
game.createGame();
game.createBricks();
game.createBall();
game.createPlatform();
game.moveBall();
