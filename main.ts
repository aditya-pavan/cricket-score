import { Batsman } from './batsman';
import { Scorecard } from './scorecard';
const scorer = new Scorecard();
const player1 = new Batsman('Rohit Sharma');
const player2 = new Batsman('Shikhhar Dhawan');
scorer.addBatsman(player1);
scorer.addBatsman(player2);
scorer.calculateScore([1, 2, 0, 0, 4, 1, 6, 2, 1, 3]);
scorer.printScore();