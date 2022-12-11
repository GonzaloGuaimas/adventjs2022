function createCube(size) {
    let top = ''
   let bottom = ''
   for (let i = 1; i < size+1; i++){
     top += ' '.repeat(size-i)+'/\\'.repeat(i) + '_\\'.repeat(size)+'\n'
     bottom += ' '.repeat(i-1)+'\\/'.repeat((size+1)-i) + '_/'.repeat(size)+'\n'
   }
   bottom = bottom.substring(0, bottom.length-1)
   return top+bottom
 }

 export const runChallenge06 = () => {
    console.log(createCube(1))
    console.log(createCube(2))
    console.log(createCube(3))
}