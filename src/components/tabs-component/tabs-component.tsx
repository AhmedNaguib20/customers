import { ReactElement, ReactNode } from 'react'
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

import './tabs-component.scss'
import dashboardImage from '../../assets/dashboard.svg'
import customersImage from '../../assets/customers.svg'
import usersImage from '../../assets/users.svg'
import flagImage from '../../assets/flag.svg'
import settingsImage from '../../assets/sidebar-setting.svg'
import addImage from '../../assets/add-square.svg'

const TabsComponent: React.FC = (): ReactElement => {

  const standardItems: Function  = ():ReactNode => {
    return (
      <ul>
        <li className='flex align-center'>
          <img src={dashboardImage} alt="dashboard" />
          <span>Dashboard</span>
        </li>
        <li className='flex align-center'>
          <img src={customersImage} alt="dashboard" />
          <span>Customers</span>
          <img src={addImage} alt="add" />
        </li>
        <li className='flex align-center'>
          <img src={usersImage} alt="dashboard" />
          <span>Backend users</span>
          <img src={addImage} alt="add" />
        </li>
        <li className='flex align-center'>
          <img src={flagImage} alt="dashboard" />
          <span>Master data</span>
          <img src={addImage} alt="add" />
        </li>
        <li className='flex align-center'>
          <img src={settingsImage} alt="dashboard" />
          <span>Configuration</span>
        </li>
      </ul>
    )
  }

  const favouriteItems: Function  = ():ReactNode => {
    return (
      <ul>
        <li className='flex align-center'>
          <img src={dashboardImage} alt="dashboard" />
          <span>Dashboard</span>
        </li>
        <li className='flex align-center'>
          <img src={settingsImage} alt="dashboard" />
          <span>Configuration</span>
        </li>
      </ul>
    )
  }

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Standard`,
      children: standardItems(),
    },
    {
      key: '2',
      label: `Favorite`,
      children: favouriteItems(),
    },
  ];

  return (
    <div className="tabs-container">
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  )
}

export default TabsComponent