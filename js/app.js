// Enemies our player must avoid
class Enemy {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y + 68;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png'
  };

  // Update the enemy's position
  // Parameter: dt, a time delta between ticks
  update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < 503) {
      //moves enemy across screen if not at the end
      this.x += this.speed * dt
    } else {
      //sets enemy back to start position
      this.x = -101;
    }
  };

  // Draw the enemy on the screen
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };
}

//Player character
class Character {
  constructor() {
    this.x = 200;
    this.y = 400;
    this.sprite = 'images/char-boy.png';
  }

  //Updates player positon
  // citation: Matthew Cranford  https://matthewcranford.com/arcade-game-walkthrough-part-6-collisions-win-conditions-and-game-resets/
  update() {
    //checks for enemy-player collisions
    for (let enemy of allEnemies) {
      //checks if enemy and player are within reasonable boundry of eachother for collision
      if (this.y === enemy.y && (enemy.x + 75 > this.x && enemy.x < this.x + 75) ) {
        //resets player position if hit
        this.x = 200;
        this.y = 400;
      }
    }
    //chacks for player win
    if (this.y === -15) {
      //shows modal
      document.getElementById('modal').classList.remove('hidden');
    }
  }

  //Draws player on screen
  render() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };

  //checks for user input to control player character
  handleInput(input) {
    //prevents player from stepping out of bounds
    if (input === 'up' && this.y >= 0) {
      this.y -= 83;
    } else if (input === 'right' && this.x < 402) {
      this.x += 101;
    } else if (input === 'down' && this.y < 400) {
      this.y += 83;
    } else if (input === 'left' && this.x >= 0) {
      this.x -= 101;
    }
  }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let allEnemies = [];
const player = new Character();
const bug1 = new Enemy(-101, 0, 400);
const bug2 = new Enemy(-101, 83, 100);
const bug3 = new Enemy(-101, 166, 300);
allEnemies.push(bug1, bug2, bug3);

// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
