import {Player} from './player'
export class Batsman extends Player{
    numberOfRuns:number;
    numberOfBalls:number;
    constructor(name: string){
        super(name);
        this.numberOfRuns=0;
        this.numberOfBalls=0;
    }
    get numberOfRunsScored() {
        return this.numberOfRuns;
    }
    get numberOfBallsFaced() {
        return this.numberOfBalls;
    }
    addRuns(run: number) {
        this.numberOfRuns += run;
    }
}