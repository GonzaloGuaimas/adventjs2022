function countHours(year, holidays) {
    const workingsDays = [1,2,3,4,5]
    return holidays.reduce((sum,holiday) => {
      var date = new Date(year+"/"+holiday);
      if(workingsDays.includes(date.getDay())){
        sum+=2
      }
      return sum; 
    }, 0)
}
export const runChallenge02 = () => {
    const year = 2022
    const holidays = ['01/06', '04/01', '12/25']
    console.log(countHours(year, holidays))
}