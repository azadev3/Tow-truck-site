
type WhyWeItemType = {
     id: number,
     title: string,
     description: string,
     logo: string,
}

const WhyWe = () => {

     const WhyWeItem:WhyWeItemType[] = [
          {
               id: 1,
               title: 'Avtopark',
               description: 'Müxtəlif göstəricilərə sahib 140-dan çox evakuatorlarımız 24/7 xidmətinizdədir.',
               logo: '../avtopark.svg',
          },
          {
               id: 2,
               title: 'Etibarlıq',
               description: 'Daim öz fəaliyyət sahəmizi genişləndirir və xidmət sahələrimizi inkişaf etdiririk.',
               logo: '../etibarliq.svg',
          },
          {
               id: 3,
               title: '24 saat xidmət',
               description: '156 çağrı mərkəzinə zəng etməklə istənilən vaxtda və gündə xidmətimizdən yararlana bilərsiniz.',
               logo: '../24saat.svg',
          },
          {
               id: 4,
               title: 'Maddi məsuliyyət',
               description: 'Ərazi və məsafədən asılı olaraq müştərilərimizə minimum qiymət təklif edirik.',
               logo: '../maddimesuliyyet.svg',
          },
          {
               id: 5,
               title: 'Təcrübəli sürücülər',
               description: 'Peşəkar və təcrübəli işçi heyətimizlə yüksək səviyyədə xidmət göstəririk.',
               logo: '../tecrubeli.svg',
          },
          {
               id: 6,
               title: 'Respublika üzrə evakuasiya',
               description: 'Bütün ölkə üzrə (Naxçıvan MR istisna) nəqliyyat vasitələrinin və ağırtonnajlı yüklərin təhlükəsiz şəkildə evakuasiyası.',
               logo: '../maddimesuliyyet.svg',
          },
       


     ]

  return (
    <div className='why-we-wrappered'>
     <div className="why-we-container">

          <div className="why-we-grid">
          <div className="title">
               <h1>Niyə biz?</h1>
          </div>

          <div className="grid-items">
               {WhyWeItem.map((item:WhyWeItemType, i:number) => (
                    <div className='item-why-we' key={i}>
                         <div className="image">
                         <div className="image-wrapper-icon">
                              <img src={item.logo} alt="" />
                         </div>
                         </div>

                         <div className="text-content">
                              <h3>{item.title}</h3>
                              <p>{item.description}</p>
                         </div>
                    </div>
               ))}
          </div>
          </div>
          
     </div>
    </div>
  )
}

export default WhyWe