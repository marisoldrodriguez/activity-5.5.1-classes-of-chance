class Casino {
    constructor(name, fake){
        this.name = name;
        this.timesPlayed = 0;
        this.isFakeCoin = fake;
    }
    playGame(betAmount){
        this.timesPlayed += 1
        let earnings = betAmount * (this.timesPlayed + 1)
        if (this.isFakeCoin === true){
            console.log(this.name + " " + "wins!")
        } else if (Math.random() <= .5){
            console.log(this.name + " " + "wins!")
        } else {
            console.log(`player wins ${earnings}`)
        }
    }  
};

// TESTS
const myCasino = new Casino("HackerU Casino", false);

console.log(myCasino);
myCasino.playGame(5);
myCasino.playGame(15);
myCasino.playGame(25);
myCasino.playGame(35);

// BONUS TESTS

const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);

