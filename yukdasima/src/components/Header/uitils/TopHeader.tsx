import { Link } from 'react-router-dom'
import SelectLanguage from './SelectLanguage'

type ContactElementType = {
  id: number,
  title: string,
  icon: string
  url: string,
}

const TopHeader = () => {

  const ContactElement:ContactElementType[] = [
    { id: 1, title: 'Zərifə Əliyeva 55, Yeni Həyat Plaza', icon: '../location.png', url: '' },
    { id: 2, title: '156@gmail.com', icon: '../email.png', url: '' },
    { id: 3, title: '156', icon: '../tel.png', url: '' },
  ]

  return (
    <div className='top-header'>
      <div className="contact-element">
        {ContactElement.map((item:ContactElementType, i:number) => (
          <div className="contact-items" key={i}>
            <div className="icon-wrapper">
            <img src={item.icon} alt="" />
            </div>
            <Link to={item.url} className='title'>
            {item.title}
          </Link>
          </div>
        ))}
      </div>
      <SelectLanguage />
      <Link to='/elaqe' className='send-request'>
        Sorğu göndər
      </Link>
    </div>
  )
}

export default TopHeader