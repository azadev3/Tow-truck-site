import { Link, useParams } from 'react-router-dom'
import { BlogType, Blogs } from '../BlogPage';
import '../../../../styles/components/blogpage.scss';

type Social = {
     id: number,
     logo: string,
     url: string,
}

const BlogInnerPage = () => {

     const { innerBlogID } = useParams();
     
     if(innerBlogID === undefined) {
          return <div>UPS! InnerBlogID is not defined or undefined!</div>
     }
     
     const parseID = parseFloat(innerBlogID);

     if(isNaN(parseID)) {
          console.log('error is nan');
          return
     }

     const innerBlogItem = Blogs.find((_:BlogType, i:number) => i === parseID);

     const Socialmedia:Social[] = [
          {id: 1, logo: '../facebook.svg', url: ''},
          {id: 2, logo: '../youtube.svg', url: ''},
          {id: 3, logo: '../whatsapp.svg', url: ''},
          {id: 4, logo: '../tiktok.svg', url: ''},
          {id: 5, logo: '../instagram.svg', url: ''},
     ]


  return (
    <div className='blog-inner-page'>
     <div className="top">
          <div className="left">
          <h1>{innerBlogItem?.title}</h1>
          <p>{innerBlogItem?.description}</p>
          </div>

          <div className="right">
               <img src={innerBlogItem?.image} alt={`${innerBlogItem?.id}-blog-image`} />
          </div>
     </div>

     <div className="date-area">
          <span>{innerBlogItem?.created_at}</span>
     </div>

     <div className="bottom-social-area">
          <span>Paylaş</span>
          <div className="social">
          {Socialmedia.map((social:Social, i:number) => (
               <Link key={i} to={social.url} className='social-item'>
                    <img src={social.logo} alt={`${i}-social-media-image`} />
               </Link>
          ))}
          </div>
     </div>
     </div>
  )
}

export default BlogInnerPage