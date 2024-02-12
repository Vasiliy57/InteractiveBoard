import { createPortal } from 'react-dom'
import { Icon } from '@shared/assets'
import { ICON_NAMES } from '@shared/constants'

import classes from './style.module.css'

interface ModalProps {
  children: JSX.Element
  isModal: boolean
  setIsModal: (isOpen: boolean) => void
  title?: string
}

export const Modal: React.FC<ModalProps> = ({
  children,
  setIsModal,
  isModal,
  title,
}) => {
  const onCloseModal = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    setIsModal(false)
  }

  const onHandlerContent = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
  }

  return (
    <>
      {isModal &&
        createPortal(
          <div className={classes.modal} onClick={onCloseModal}>
            <div className={classes.content} onClick={onHandlerContent}>
              <div className={classes.btnBack} onClick={onCloseModal}>
                <Icon name={ICON_NAMES.ARROW_LEFT} size="17px" />
              </div>
              {title && <h2 className={classes.title}>{title}</h2>}
              {children}
            </div>
          </div>,
          document.body
        )}
    </>
  )
}
