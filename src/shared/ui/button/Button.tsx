import { COLORS } from '@shared/constants/colors'
import classes from './style.module.css'

interface ButtonInterface {
  children: React.ReactNode
  color?: string
  fontSize?: string
  fontWeight?: '500' | '600' | '700' | '800'
  gap?: string
  onClick?: () => void
  padding?: string
  border?: string | 'def'
  bgColor?: string
  borderRadius?: string
}

export const Button: React.FC<ButtonInterface> = ({
  children,
  color = COLORS.GREY,
  fontSize,
  fontWeight,
  gap,
  onClick,
  padding,
  border = 'none',
  bgColor = COLORS.WHITE,
  borderRadius,
}) => {
  const styleBtn = {
    color,
    fontSize,
    fontWeight,
    gap,
    padding,
    border: border === 'def' ? '1px solid #787486' : border,
    backgroundColor: bgColor,
    borderRadius,
  }
  return (
    <button className={classes.button} style={styleBtn} onClick={onClick}>
      {children}
    </button>
  )
}
