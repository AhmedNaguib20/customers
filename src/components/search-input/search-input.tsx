import { ReactElement } from 'react'
import { Input } from 'antd'

import './search-input.scss'
import InputProperties from '../../models'

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
    prefix={prefix}
    className={`search-input ${className}`}
    placeholder={placeholder}
  />
)

export default SearchInput