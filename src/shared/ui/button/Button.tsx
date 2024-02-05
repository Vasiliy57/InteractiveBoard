import classes from './style.module.css'

interface ButtonInterface {
  children: React.ReactNode
  color?: string | 'purpure' | 'grey'
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
  color,
  fontSize,
  fontWeight,
  gap,
  onClick,
  padding,
  border,
  bgColor,
  borderRadius,
}) => {
  const styleBtn = {
    color: color === 'purpure' ? '#5030E5' : color ? color : '#787486',
    fontSize,
    fontWeight,
    gap,
    padding,
    border: border === 'def' ? '1px solid #787486' : border ? border : 'none',
    backgroundColor: bgColor ?? '#fff',
    borderRadius,
  }
  return (
    <button className={classes.button} style={styleBtn} onClick={onClick}>
      {children}
    </button>
  )
}
