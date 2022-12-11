function wrapping(gifts) {
    return gifts.map((gift) => {
      var topBottomWrapping = '*'.repeat(gift.length+2)
      return [topBottomWrapping, `*${gift}*`,topBottomWrapping].join('\n')
    })
  }
  

export const runChallenge01 = () => {
    const gifts = ['book', 'game', 'socks']
    console.log(wrapping(gifts))
}