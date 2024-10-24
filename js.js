import { Position } from "kokopu";

const chess = new Position("r1b2rk1/pppp1ppp/6q1/1Bbnp3/1n2Q3/4PNN1/PP1P1PPP/R1B2RK1 w - - 2 15")


function omar(chess){
    chess.playNullMove()
}

omar(chess);
console.log(chess.fen())