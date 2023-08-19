import { ReactElement, useState } from "react";
import { Radio, Select, Switch } from "antd";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import "./create-form.scss";
import Label from "../../../../components/label";
import CustomInput from "../../../../components/custom-input";

const CreateForm: React.FC = (): ReactElement => {
  const [value, setValue] = useState<string>()
  const [statusChecked, setStatusChecked] = useState<boolean>(true)

  const onStatusChanged = (checked: boolean) => {
    setStatusChecked(checked)
  };

  return (
    <div className="create-form-container flex column">
      <p>Create a customer</p>

      <div className="form flex justify-space-between">
        <div className="field flex column">
          <Label text="First name" />
          <CustomInput placeholder="Enter customer first name" />
        </div>
        <div className="field flex column">
          <Label text="Last name" />
          <CustomInput placeholder="Enter customer last name" />
        </div>
        <div className="field flex column">
          <Label text="Mobile number" />
          <div className="phone-input">
            <PhoneInput
              placeholder="Enter customer mobile number"
              value={value}
              defaultCountry="KW"
              onChange={() => setValue('')}
            />
          </div>
        </div>
        <div className="field flex column">
          <Label text="Title" />
          <Select
            placeholder='Select account type'
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
            ]}
          />        
        </div>
        <div className="field flex column">
          <Label text="Gender" />
          <Radio.Group name="gender">
            <Radio value={1}>Male</Radio>
            <Radio value={2}>Female</Radio>
          </Radio.Group>
        </div>
        <div className="field flex column">
          <Label text="Status" />
          <div className="switch flex align-center">
            <span className={statusChecked ? 'active' : ''}>Active</span>
            <Switch defaultChecked onChange={onStatusChanged} />
            <span className={!statusChecked ? 'active' : ''}>Inactivate</span>
          </div>
        </div>
        <div className="buttons-container flex">
          <button disabled>Create account</button>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
