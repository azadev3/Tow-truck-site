import Header from './uitils/Header'
import TopHeader from './uitils/TopHeader'
import '../../styles/components/headercontainer.scss';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = () => {

  const navigate = useNavigate();

  return (
    <div className='header-and-top-header'>
     <TopHeader />
     <Header />
     <div className="logo-wrapper">
     <img className='logo' src="../logo.svg" alt="" 
     onClick={() => navigate('/')}
     style={{cursor: 'pointer'}}
     />
     </div>
    </div>
  )
}

export default HeaderContainer