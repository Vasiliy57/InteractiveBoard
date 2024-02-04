import uniqid from 'uniqid'
import { getColor } from '.'

export const createColumn = () => {
  return { title: '', color: getColor() as string, id: uniqid() }
}
