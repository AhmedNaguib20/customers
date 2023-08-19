import { ReactElement } from 'react'

import './create-form.scss'
import Label from '../label'
import CustomInput from '../custom-input'
import { Radio, Switch } from 'antd'

const CreateForm: React.FC = ():ReactElement => (
  <div className="create-form-container flex column">
    <p>Create a customer</p>

    <div className="form flex justify-space-between">
      <div className="field flex column">
        <Label text='First name' />
        <CustomInput placeholder='Enter customer first name' />
      </div>
      <div className="field flex column">
        <Label text='Last name' />
        <CustomInput placeholder='Enter customer last name' />
      </div>
      <div className="field flex column">
        <Label text='Mobile number' />
        <CustomInput placeholder='Enter customer first name' />
      </div>
      <div className="field flex column">
        <Label text='Title' />
        <CustomInput placeholder='Select account type' />
      </div>
      <div className="field flex column">
        <Label text='Gender' />
        <Radio.Group name="gender">
          <Radio value={1}>Male</Radio>
          <Radio value={2}>Female</Radio>
        </Radio.Group>
      </div>
      <div className="field flex column">
        <Label text='Status' />
        <div className="switch flex align-center">
          <span>Active</span>
          <Switch defaultChecked />
          <span>Inactivate</span>
        </div>
      </div>
      <div className="buttons-container flex">
        <button disabled>Create account</button>
      </div>
    </div>
  </div>
)

export default CreateForm