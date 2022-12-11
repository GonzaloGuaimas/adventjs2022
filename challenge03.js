function distributeGifts(packOfGifts, reindeers) {
    const weightGift = packOfGifts.reduce((sum, item) => {
     sum += item.length
     return sum
   } ,0)
   
   const capacityReindeers = reindeers.reduce((sum, item) => {
     sum += (item.length*2)
     return sum
   } ,0)
   return (Math.floor(capacityReindeers/weightGift))
 }

export const runChallenge03 = () => {
    const packOfGifts = ["book", "doll", "ball"]
    const reindeers = ["dasher", "dancer"]
    console.log(distributeGifts(packOfGifts, reindeers))
}