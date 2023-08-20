import { ReactElement } from 'react'
import { Pagination, Table } from 'antd'
import { ColumnsType } from 'antd/es/table';

import './custom-table.scss'
import CustomersData from '../../constants/customer.json'
import sortImage from '../../assets/more.svg'
import KWFlag from '../../assets/+965.svg'
import EGFlag from '../../assets/+20.svg'
import SUFlag from '../../assets/+966.svg'
import TUFlag from '../../assets/+216.svg'
import MRFlag from '../../assets/+212.svg'

const CustomTable: React.FC = (): ReactElement => {
  const flags: {[key: string]: string} = {
    '+965': KWFlag,
    '+20': EGFlag,
    '+966': SUFlag,
    '+216': TUFlag,
    '+212': MRFlag,
  }
  const columns: ColumnsType<any> = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id - b.id,
      sortIcon: () => <img src={sortImage} alt='sort table' />
    },
    {
      title: 'Full name',
      dataIndex: 'fullName',
      key: 'fullName',
      sorter: (a, b) => a.fullName.length - b.fullName.length,
      sortIcon: () => <img src={sortImage} alt='sort table' />
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      sorter: (a, b) => a.email.length - b.email.length,
      sortIcon: () => <img src={sortImage} alt='sort table' />
    },
    {
      title: 'Mobile number',
      dataIndex: 'mobileNumber',
      key: 'mobileNumber',
      sorter: (a, b) => a.mobileNumber - b.mobileNumber,
      sortIcon: () => <img src={sortImage} alt='sort table' />,
      render: (text, record) => (
        <div className="mobile flex align-center">
          <img src={flags[record.code]} alt={text} />
          <span className='code'>{record.code}</span>
          <span>{record.mobileNumber}</span>
        </div>
      )
    },
    {
      title: 'Account #',
      dataIndex: 'account',
      key: 'account',
      sorter: (a, b) => a.account.length - b.account.length,
      sortIcon: () => <img src={sortImage} alt='sort table' />
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      sorter: (a, b) => a.status.length - b.status.length,
      sortIcon: () => <img src={sortImage} alt='sort table' />,
      render: (text) => <span className='status'>{text}</span>
    },
    {
      title: 'Last login',
      dataIndex: 'lastLogin',
      key: 'lastLogin',
      sorter: (a, b) => a.lastLogin.length - b.lastLogin.length,
      sortIcon: () => <img src={sortImage} alt='sort table' />,
      render: (text)=> <span className='date'>{text}</span>
    },
  ];
  return (
    <div className="table-container flex column">
      <Table
        columns={columns}
        dataSource={CustomersData}
        pagination={false}
      />
      <Pagination
        total={6}
        showTotal={(total) => `Showing 1 to ${total} of 182 entries`}
      />
    </div>
  )
}

export default CustomTable