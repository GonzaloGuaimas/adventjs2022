function fitsInOneBox(boxes) {
    const sortBoxes = boxes.sort((box1,box2) => {
      return ((box1.l+box1.w+box1.h)-(box2.l+box2.w+box2.h))
    })
    return sortBoxes.every((box, index) => {
      if (index === 0) return true;
      const prev = boxes[index - 1]
      return box.l > prev.l && box.w > prev.w && box.h > prev.h
    })
  }
export const runChallenge04 = () => {
    const boxes = [
        { l: 1, w: 1, h: 1 },
        { l: 3, w: 3, h: 3 },
        { l: 2, w: 2, h: 2 }
      ]
    console.log(fitsInOneBox(boxes))
}