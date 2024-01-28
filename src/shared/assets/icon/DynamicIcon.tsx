interface DynamicIconProps {
  color: string
  name: 'plus'
  size: string
}
export const DynamicIcon: React.FC<DynamicIconProps> = ({
  color,
  name,
  size,
}) => {
  switch (name) {
    case 'plus':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 4.25H5.75V1C5.75 0.59 5.41 0.25 5 0.25C4.59 0.25 4.25 0.59 4.25 1V4.25H1C0.59 4.25 0.25 4.59 0.25 5C0.25 5.41 0.59 5.75 1 5.75H4.25V9C4.25 9.41 4.59 9.75 5 9.75C5.41 9.75 5.75 9.41 5.75 9V5.75H9C9.41 5.75 9.75 5.41 9.75 5C9.75 4.59 9.41 4.25 9 4.25Z"
            fill={color}
          />
        </svg>
      )

    default:
      break
  }
}