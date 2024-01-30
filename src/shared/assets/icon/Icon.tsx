import { ICON_NAMES } from '@shared/constants'
import searchIcon from './svg/search.svg'
import calendarIcon from './svg/calendar.svg'
import questionIcon from './svg/question.svg'
import notificationIcon from './svg/notification.svg'
import doubleArrowIcon from './svg/double-arrow.svg'
import homeIcon from './svg/home.svg'
import messagesIcon from './svg/message.svg'
import tasksIcon from './svg/tasks.svg'
import membersIcon from './svg/members.svg'
import settingsIcon from './svg/settings.svg'
import addIcon from './svg/add.svg'
import editIcon from './svg/edit.svg'
import linkIcon from './svg/link.svg'
import addPurpureIcon from './svg/add-purpure.svg'
import arrowDownIcon from './svg/arrow-down.svg'
import calendarNumberIcon from './svg/calendar-number.svg'
import filterIcon from './svg/filter.svg'
import arrowLeftIcon from './svg/arrow-left.svg'

interface IconInterface {
  name: keyof typeof ICON_NAMES
  height?: number
  width?: number
  size?: string
}

export const Icon: React.FC<IconInterface> = ({ name, size }) => {
  switch (name) {
    case ICON_NAMES.SEARCH:
      return <img src={searchIcon} alt={ICON_NAMES.SEARCH} />
    case ICON_NAMES.CALENDAR:
      return <img src={calendarIcon} alt={ICON_NAMES.CALENDAR} />
    case ICON_NAMES.NOTIFICATION:
      return <img src={notificationIcon} alt={ICON_NAMES.NOTIFICATION} />
    case ICON_NAMES.QUESTION:
      return <img src={questionIcon} alt={ICON_NAMES.QUESTION} />
    case ICON_NAMES.DOUBLE_ARROW:
      return <img src={doubleArrowIcon} alt={ICON_NAMES.DOUBLE_ARROW} />
    case ICON_NAMES.HOME:
      return <img src={homeIcon} alt={ICON_NAMES.HOME} />
    case ICON_NAMES.MESSAGES:
      return <img src={messagesIcon} alt={ICON_NAMES.MESSAGES} />
    case ICON_NAMES.TASKS:
      return <img src={tasksIcon} alt={ICON_NAMES.TASKS} />
    case ICON_NAMES.MEMBERS:
      return <img src={membersIcon} alt={ICON_NAMES.MEMBERS} />
    case ICON_NAMES.SETTINGS:
      return <img src={settingsIcon} alt={ICON_NAMES.SETTINGS} />
    case ICON_NAMES.ADD:
      return size ? (
        <img src={addIcon} alt={ICON_NAMES.ADD} height={size} width={size} />
      ) : (
        <img src={addIcon} alt={ICON_NAMES.ADD} />
      )
    case ICON_NAMES.ADD_PURPURE:
      return size ? (
        <img
          src={addPurpureIcon}
          alt={ICON_NAMES.ADD_PURPURE}
          height={size}
          width={size}
        />
      ) : (
        <img src={addPurpureIcon} alt={ICON_NAMES.ADD_PURPURE} />
      )
    case ICON_NAMES.EDIT:
      return <img src={editIcon} alt={ICON_NAMES.EDIT} />
    case ICON_NAMES.LINK:
      return <img src={linkIcon} alt={ICON_NAMES.LINK} />
    case ICON_NAMES.ARROW_DOWN:
      return <img src={arrowDownIcon} alt={ICON_NAMES.ARROW_DOWN} />
    case ICON_NAMES.CALENDAR_NUMBER:
      return <img src={calendarNumberIcon} alt={ICON_NAMES.CALENDAR_NUMBER} />
    case ICON_NAMES.FILTER:
      return <img src={filterIcon} alt={ICON_NAMES.FILTER} />
    case ICON_NAMES.ARROW_LEFT:
      return <img src={arrowLeftIcon} alt={ICON_NAMES.ARROW_LEFT} />
    default:
      break
  }
}
