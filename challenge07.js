function getGiftsToRefill(a1, a2, a3) {
    const array = new Set([...a1, ...a2, ...a3])
    const arr = [...array]
     return arr.filter(e => {
       if(a1.includes(e) + a2.includes(e) + a3.includes(e) === 1)
       return e
     });
  }
export const runChallenge07 = () => {
    const a1 = ['bici', 'coche', 'bici', 'bici']
    const a2 = ['coche', 'bici', 'muñeca', 'coche']
    const a3 = ['bici', 'pc', 'pc']
    console.log(getGiftsToRefill(a1, a2, a3))
}