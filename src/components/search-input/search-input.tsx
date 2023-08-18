import { ReactElement } from 'react'
import { Input } from 'antd'

import './search-input.scss'
import InputProperties from '../../models'
import searchImage from '../../assets/search.svg'

const SearchInput: React.FC<InputProperties> = (
  {
    placeholder,
    style,
    className,
    prefix
  }
): ReactElement => (
  <Input
    style={style}
    prefix={prefix || <img src={searchImage} alt='search' />}
    className={`search-input ${className}`}
    placeholder={placeholder}
  />
)

export default SearchInput