const checkWinner = (houses: any, firstHouse: number,secondHouse: number, thirdHouse: number) => {
if (houses[firstHouse] === 1) return false
if (houses[firstHouse] !== houses[secondHouse]) return false
if (houses[firstHouse] !== houses[thirdHouse]) return false
return "WON"
}
    
    export default checkWinner