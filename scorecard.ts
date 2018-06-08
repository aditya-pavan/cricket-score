import {Batsman} from './batsman'
export class Scorecard {
    batsmanOnStrike: Batsman|null;
    listOfBatsmen : Array<Batsman>;
    totalScore : number;
    constructor(){
        this.batsmanOnStrike = null;
        this.totalScore = 0;
        this.listOfBatsmen= [];
    }
    addBatsman(batsman : Batsman) {
        this.listOfBatsmen.push(batsman);
    }
    changeStrike() {
        if(this.batsmanOnStrike === this.listOfBatsmen[0])
            this.batsmanOnStrike = this.listOfBatsmen[1];
        else
        this.batsmanOnStrike = this.listOfBatsmen[0];
    }
    calculateScore(arr: Array<number>){
        this.batsmanOnStrike = this.listOfBatsmen[0];
        arr.forEach((runsScored,ballNumber) => {
            if(runsScored % 2 === 1){
                this.batsmanOnStrike.addRuns(runsScored);
                this.changeStrike();
            }
            else {
                this.batsmanOnStrike.addRuns(runsScored);
            }
            this.totalScore += runsScored;
            if((ballNumber+1) % 6 === 0)
                this.changeStrike();
        })
    }
    printScore() {
        console.log(`Total score: ${this.totalScore}`);
        this.listOfBatsmen.forEach(batsman => {
            console.log(`${batsman.playerName} scored ${batsman.numberOfRunsScored}`);
        })
    }
}