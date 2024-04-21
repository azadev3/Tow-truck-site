import Top from './uitils/Top'
import OurServices from './uitils/OurServices'
import About from './uitils/About'
import WhyWe from './uitils/WhyWe'
import Videos from './uitils/Videos'
import Blog from './uitils/Blog'
import Patients from './uitils/Patients'


const Home = () => {
  return (
    <div className='home-page-container'>
     <Top />
     <OurServices />
     <About />
     <WhyWe />
     <Videos />
     <Blog />
     <Patients />
    </div>
  )
}

export default Home