
// Enemies our player must avoid
class Enemy{
    constructor({x,y}){
        // Variables applied to each of our instances go here,
        // we've provided one for you to get started
        this.x=x;
        this.y=y;
        this.speed=Math.random()*500;
        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.sprite = 'images/enemy-bug.png';
    }
    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt){
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.        
        this.x+=this.speed*dt;
        
    }
    // Draw the enemy on the screen, required method for game
    render(){        
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);    
    }
}



// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player{
    constructor(Character){
        this.x=200;
        this.y=400;
        this.sprite = Character;
    }
    update(){
        if(this.y===-50){
            modal.style.cssText = 'display:block;';
            modal.focus();
        }
    }
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    handleInput(keyPressed){
        if(keyPressed=='left'){
            if(this.x!=0){
                this.x-=100;
            }
        }else if(keyPressed=='up'){
            if(this.y!=-50){
                this.y-=90;
            }
        }else if(keyPressed=='right'){
            if(this.x!=400){
                this.x+=100;
            }            
        }else{
            if(this.y!=400){
                this.y+=90; 
            }   
        }
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

let enemyPositions=[{x:0,y:50},{x:0,y:140},{x:0,y:220}];
let player;
let allEnemies=[];
let modal = document.querySelector(".modal");

setInterval(()=>{
    allEnemies.push(new Enemy(enemyPositions[Math.floor(Math.random()*3)]));
},1500);



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

function playerChange(selectedCharacter){
    player.sprite=selectedCharacter.value;
}

function resetGame(){
    player=new Player(document.getElementById("CharacterSelect").value);
    modal.style.cssText = 'display:none;';
    
}