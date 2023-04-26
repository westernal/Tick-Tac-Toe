import checkTie from "./checkTie";
import checkWinner from "./checkWinner";


const checkGame = (houses: any) => {
return checkWinner(houses,0,1,2)  
||  checkWinner(houses,3,4,5) 
||  checkWinner(houses,6,7,8) 
||  checkWinner(houses,0,3,6)  
||  checkWinner(houses,1,4,7) 
||  checkWinner(houses,2,5,8) 
||  checkWinner(houses,0,4,8)  
||  checkWinner(houses,6,4,2)
||  checkTie(houses); 


}

export default checkGame