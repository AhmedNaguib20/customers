import CreateForm from './components/create-form'
import Header from '../../components/header'
import SideBar from '../../components/sidebar'
import CustomersList from './components/customers-list'
import './home.scss'

const Home: React.FC = () => (
  <div className='home-page flex column'>
    <Header />
    <div className="main-content flex">
      <SideBar />
      <div className="content flex column">
        <CreateForm />
        <CustomersList /> 
      </div>
    </div>
  </div>
)

export default Home