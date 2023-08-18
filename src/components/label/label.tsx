import { ReactElement } from "react";

import './label.scss'

const Label: React.FC<{[text: string]: string}> = ({text}): ReactElement => (
  <label>{text}</label>
)

export default Label