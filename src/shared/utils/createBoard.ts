import uniqid from 'uniqid'
import { getColor } from '.'

export const createBoard = () => {
  return { title: '', color: getColor() as string, id: uniqid() }
}
