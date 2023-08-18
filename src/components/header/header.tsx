import { ReactElement } from 'react'

import './header.scss'
import logoImage from '../../assets/logo.svg'
import notificationImage from '../../assets/notification.svg'
import settingImage from '../../assets/setting.svg'
import SearchInput from '../search-input'
import userImage from '../../assets/user.svg'
import arrowImage from '../../assets/arrow-down.svg'

const Header: React.FC = (): ReactElement => (
  <div className="header-container flex justify-space-between">
    <div className="logo flex">
      <img src={logoImage} alt="KAMCO" />
      <p className='flex align-center'>Customers</p>
    </div>
    <div className="user flex align-center">
      <div className="flex">
        <SearchInput placeholder='Search' />
        <div className="images flex align-center">
          <img src={settingImage} alt="setting" />
          <img src={notificationImage} alt="notification" />
        </div>
      </div>
      <div className="account flex align-center">
        <img src={userImage} alt="user-image" />
        <p>Jacob Gillespie</p>
        <img src={arrowImage} alt="arrow-down-icon" />
      </div>
    </div>
  </div>
)

export default Header