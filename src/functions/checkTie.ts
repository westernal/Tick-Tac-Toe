const checkTie = (houses: any) => {
   for (let i = 0; i < houses.length; i++) {
    if (houses[i] === 1) return false
   }

   return "TIED"
    }
    
    export default checkTie