import { ReactElement } from 'react'
import { Input } from 'antd'

import './search-input.scss'
import InputProperties from '../../models'
import searchImage from '../../assets/search.svg'

const SearchInput: React.FC<InputProperties> = (
  {
    placeholder
  }
): ReactElement => (
  <Input
    prefix={<img src={searchImage} alt='search' />}
    className='search-input'
    placeholder={placeholder}
  />
)

export default SearchInput