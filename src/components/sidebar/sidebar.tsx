import { ReactElement } from 'react'

import './sidebar.scss'
import SearchInput from '../search-input'
import searchImage from '../../assets/sidebar-search-icon.svg'
import TabsComponent from '../tabs-component'

const SideBar: React.FC = ():ReactElement => (
  <div className="sidebar-container flex column">
    <SearchInput
      placeholder='Menu search'
      className='sidebar-search'
      prefix={<img src={searchImage} alt='search-icon' />}
    />
    <TabsComponent />
  </div>
)

export default SideBar