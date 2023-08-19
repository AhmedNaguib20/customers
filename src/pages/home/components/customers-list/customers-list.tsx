import { ReactElement } from "react";

import './customers-list.scss'
import CustomTable from "../../../../components/custom-table/custom-table";
import searchImage from '../../../../assets/list-search.svg'
import gridImage from '../../../../assets/grid.svg'
import exportImgae from '../../../../assets/export.svg'
import uploadImage from '../../../../assets/upload.svg'

const CustomersList: React.FC = (): ReactElement => {
  return (
    <div className="customers-list-container">
      <div className="title flex align-center justify-space-between">
        <p>Customers list</p>
        <div className="images flex align-center">
          <img src={searchImage} alt="search-customers" />
          <img src={gridImage} alt="grid" />
          <img src={exportImgae} alt="export-customers" />
          <img src={uploadImage} alt="upload-customers" />
        </div>
      </div>
      <CustomTable />
    </div>
  )
}

export default CustomersList