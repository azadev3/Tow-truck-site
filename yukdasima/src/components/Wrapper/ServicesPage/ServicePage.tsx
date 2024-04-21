import '../../../styles/components/servicepage.scss';
import { Link } from 'react-router-dom'

 export type ServicesType = {
    id: number,
    image: string,
    title: string,
    description: string,
  }

export  const Services:ServicesType[] = [
    {
      id: 1,
      image: '../service1.png',
      title: 'Low bed maşın xidməti',
      description: 'Lorem ipsum dolor sit amet consectetur. Rhoncus sagittis mi nulla convallis faucibus parturient ornare ac imperdiet.',
    },
    {
      id: 2,
      image: '../service2.png',
      title: 'Kran manipulyator',
      description: 'Lorem ipsum dolor sit amet consectetur. Rhoncus sagittis mi nulla convallis faucibus parturient ornare ac imperdiet.',
    },
    {
      id: 3,
      image: '../service3.png',
      title: 'Traktor daşınması',
      description: 'Lorem ipsum dolor sit amet consectetur. Rhoncus sagittis mi nulla convallis faucibus parturient ornare ac imperdiet.',
    },

    {
      id: 4,
      image: '../service4.png',
      title: 'Çən daşınması',
      description: 'Lorem ipsum dolor sit amet consectetur. Rhoncus sagittis mi nulla convallis faucibus parturient ornare ac imperdiet.',
    },

    {
      id: 5,
      image: '../service5.png',
      title: 'Texnika daşınması',
      description: 'Lorem ipsum dolor sit amet consectetur. Rhoncus sagittis mi nulla convallis faucibus parturient ornare ac imperdiet.',
    },

    {
      id: 6,
      image: '../service6.png',
      title: 'Əlavə dəstək',
      description: 'Lorem ipsum dolor sit amet consectetur. Rhoncus sagittis mi nulla convallis faucibus parturient ornare ac imperdiet.',
    },

    
    {
     id: 7,
     image: '../service6.png',
     title: 'Avtomobillərin evakuasiyası',
     description: 'Lorem ipsum dolor sit amet consectetur. Rhoncus sagittis mi nulla convallis faucibus parturient ornare ac imperdiet.',
   },

  ]
const ServicePage = () => {


  return (
    <div className='our-services' style={{paddingTop: '38px'}}>

     <div className="our-services-pagetitle">
          <h1>xidmətlərimiz</h1>
     </div>

      <div className="grid-services">
        {Services.map((item:ServicesType, i:number) => (
          <div key={i} className='item-service-wrapper'>
            <div className="item-service">
            <div className="service-image-wrapper">
              <img src={item.image} alt="" />
            </div>

            <div className="content">
            <div className="text">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>

            <Link to={`/xidmetler/${i}-${item.title}`} className='show-more'>
              Ətraflı bax
            </Link>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServicePage