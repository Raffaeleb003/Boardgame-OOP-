const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

const player1 = {
    name: 'John',
    color: 'red',
    position: 0,
    cash: 1000
}

const player2 = {
    name: 'Paul',
    color: 'blue',
    position: 0,
    cash: 1000
}

const player3 = {
    name: 'George',
    color: 'green',
    position: 0,
    cash: 1000
}

let dice;

// Turn of player

// Rolling the dice
dice = 1 + Math.floor(6 * Math.random())
console.log(dice)

// Moving the player
player1.position = (player1.position + dice) % squares.length;
// Updating the cash
player1.cash += squares[player1.position]
console.log(player1.cash)
console.log(player1.position)

class Player {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.position = 0;
        this.cash = 1000
    }
    move() {
        dice = 1 + Math.floor(6 * Math.random())
        this.position = (this.position + dice) % squares.length;
        this.cash += squares[this.position]
        if (this.cash <= 0) {
            console.log('game over for ' + this.name)
        }
    }
}

const newPlayer = new Player('Ringo', 'black');
console.log(newPlayer)
newPlayer.move()