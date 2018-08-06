// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // x position
    //y position

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    //if enemy not oob
      //move foward
      //increment x by speed * dt
    //else reset pos to start (x)
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// player class
//constructor
class Character {
  constructor() {
    this.x = 200;
    this.y = 400;
    this.sprite = 'images/char-boy.png';
  }
    //methods
  //update position
  render() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };
  handleInput(input) {
    if (input === 'up' && this.y >= 0) {
      this.y -= 83;
    } else if (input === 'right' && this.x < 402) {
      this.x += 101;
    } else if (input === 'down' && this.y < 400) {
      this.y += 83;
    } else if (input === 'left' && this.x >= 0) {
      this.x -= 101;
    }
  //   return ('up' ? (this.y -= 20)
  //   : 'right' ? (this.x -= 20)
  //   : 'down' ? (this.y += 20)
  //   : 'left' ? (this.x += 20)
  // );
    // switch(input) {
    //   case 'left':
    //     this.x -= 20;
    //     break;
    //   case 'up':
    //     this.y -= 20;
    //     break;
    //   case 'right':
    //     this.x += 20;
    //     break;
    //   case 'down':
    //     this.y += 20;
    //     break;
    // }
    }
  }

          //check for collision
          //did player and enemy === xy
        //did player win?
          //win conditon
      //render sprite
        //draws sprite @ current xy pos
      //handle input
        //update xy by input


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let allEnemies = [];
const player = new Character();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
