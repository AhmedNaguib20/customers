import { ReactElement } from 'react'
import './custom-input.scss'
import { Input } from 'antd'
import InputProperties from '../../models'

const CustomInput: React.FC<InputProperties> = ({
  placeholder
}):ReactElement => (
  <Input
    placeholder={placeholder}
    className='custom-input'
  />
)

export default CustomInput