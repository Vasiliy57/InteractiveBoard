import { boardInterface } from '@shared/types'

type getColorType = string | null | (() => string | null)

const colors = [
  '#ff0003',
  '#03ff00',
  '#0003ff',
  '#ff4a00',
  '#00ff4a',
  '#4a00ff',
  '#ffc400',
  '#00ffc4',
  '#c400ff',
  '#00fffc',
  '#fc00ff',
  '#86ff00',
  '#0086ff',
  '#ff0086',
  '#00a23b',
  '#3b00a2',
  '#7ba200',
  '#007ba2',
  '#afee12',
  '#5030E5',
  '#FFA500',
  '#8BC48A',
  // '#',
  // '#',
  // '#',
  // '#',
]
const colorsUsed = new Set()

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min)
}

export const filterColor = (boardList: boardInterface[]) => {
  boardList.forEach((elem) => {
    colorsUsed.add(elem.color)
  })
}

export const getColor = (): getColorType => {
  const startSize = colorsUsed.size
  const color = colors[getRandomNumber(0, colors.length - 1)]

  colorsUsed.add(color)

  if (colorsUsed.size > 14) {
    console.log('Array crowded !!!')
    return null
  } else if (colorsUsed.size !== startSize) {
    return color
  } else {
    return getColor()
  }
}

export const getRandomColorRGB = () => {
  return `rgb(
  ${getRandomNumber(40, 200)},
  ${getRandomNumber(40, 200)},
  ${getRandomNumber(40, 200)}
  )`
}
