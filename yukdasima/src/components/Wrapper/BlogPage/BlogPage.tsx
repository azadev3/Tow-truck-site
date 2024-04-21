import '../../../styles/components/blogpage.scss'
import { Link } from 'react-router-dom'

export type BlogType = {
  id: number,
  title: string,
  description: string,
  created_at: string,
  image: string,
}

  export const Blogs:BlogType[] = [
    {
      id: 1,
      title: 'Lorem ipsum is simply dummy text',
      description: 'Lorem ipsum dolor sit amet consectetur. Ultricies nulla donec elit venenatis sit neque elementum habitasse. Id pellentesque lorem tellus dui pharetra consequat. Platea leo malesuada justo eros non felis pulvinar quisque tempus. Enim facilisi interdum habitasse sit fringilla accumsan sed sed eu. Tincidunt leo ac laoreet in turpis scelerisque. Pulvinar tristique enim semper ipsum. Etiam venenatis volutpat magna praesent hendrerit sed. Sed leo tortor quisque fermentum nunc odio tristique metus. Tincidunt lorem eu netus velit nunc. Vitae pulvinar pellentesque et iaculis feugiat gravida sagittis fermentum. Diam sit sit nulla gravida vehicula elit feugiat pretium. Urna nullam cras est aliquet. In diam lectus placerat pulvinar ut adipiscing sed ut. Etiam neque ac vel mattis at hendrerit ultrices justo aliquam. Nam ultricies molestie eleifend ridiculus ullamcorper quisque bibendum. Ante sapien eget suspendisse sit at. Adipiscing auctor amet urna gravida purus accumsan. Purus elementum euismod vestibulum sapien porttitor vel tellus. A iaculis sapien cum ullamcorper tortor cur.',
      created_at: '01.02.2024',
      image: '../blogimg.jpg',
    },
    {
      id: 2,
      title: 'Lorem ipsum is simply dummy text',
      description: 'Lorem ipsum dolor sit amet consectetur. Ultricies nulla donec elit venenatis sit neque elementum habitasse. Id pellentesque lorem tellus dui pharetra consequat. Platea leo malesuada justo eros non felis pulvinar quisque tempus. Enim facilisi interdum habitasse sit fringilla accumsan sed sed eu. Tincidunt leo ac laoreet in turpis scelerisque. Pulvinar tristique enim semper ipsum. Etiam venenatis volutpat magna praesent hendrerit sed. Sed leo tortor quisque fermentum nunc odio tristique metus. Tincidunt lorem eu netus velit nunc. Vitae pulvinar pellentesque et iaculis feugiat gravida sagittis fermentum. Diam sit sit nulla gravida vehicula elit feugiat pretium. Urna nullam cras est aliquet. In diam lectus placerat pulvinar ut adipiscing sed ut. Etiam neque ac vel mattis at hendrerit ultrices justo aliquam. Nam ultricies molestie eleifend ridiculus ullamcorper quisque bibendum. Ante sapien eget suspendisse sit at. Adipiscing auctor amet urna gravida purus accumsan. Purus elementum euismod vestibulum sapien porttitor vel tellus. A iaculis sapien cum ullamcorper tortor cur.',
      created_at: '01.02.2024',
      image: '../blogimg.jpg',
    },
    {
      id: 3,
      title: 'Lorem ipsum is simply dummy text',
      description: 'Lorem ipsum dolor sit amet consectetur. Ultricies nulla donec elit venenatis sit neque elementum habitasse. Id pellentesque lorem tellus dui pharetra consequat. Platea leo malesuada justo eros non felis pulvinar quisque tempus. Enim facilisi interdum habitasse sit fringilla accumsan sed sed eu. Tincidunt leo ac laoreet in turpis scelerisque. Pulvinar tristique enim semper ipsum. Etiam venenatis volutpat magna praesent hendrerit sed. Sed leo tortor quisque fermentum nunc odio tristique metus. Tincidunt lorem eu netus velit nunc. Vitae pulvinar pellentesque et iaculis feugiat gravida sagittis fermentum. Diam sit sit nulla gravida vehicula elit feugiat pretium. Urna nullam cras est aliquet. In diam lectus placerat pulvinar ut adipiscing sed ut. Etiam neque ac vel mattis at hendrerit ultrices justo aliquam. Nam ultricies molestie eleifend ridiculus ullamcorper quisque bibendum. Ante sapien eget suspendisse sit at. Adipiscing auctor amet urna gravida purus accumsan. Purus elementum euismod vestibulum sapien porttitor vel tellus. A iaculis sapien cum ullamcorper tortor cur.',
      created_at: '01.02.2024',
      image: '../blogimg.jpg',
    },
    {
      id: 4,
      title: 'Lorem ipsum is simply dummy text',
      description: 'Lorem ipsum dolor sit amet consectetur. Ultricies nulla donec elit venenatis sit neque elementum habitasse. Id pellentesque lorem tellus dui pharetra consequat. Platea leo malesuada justo eros non felis pulvinar quisque tempus. Enim facilisi interdum habitasse sit fringilla accumsan sed sed eu. Tincidunt leo ac laoreet in turpis scelerisque. Pulvinar tristique enim semper ipsum. Etiam venenatis volutpat magna praesent hendrerit sed. Sed leo tortor quisque fermentum nunc odio tristique metus. Tincidunt lorem eu netus velit nunc. Vitae pulvinar pellentesque et iaculis feugiat gravida sagittis fermentum. Diam sit sit nulla gravida vehicula elit feugiat pretium. Urna nullam cras est aliquet. In diam lectus placerat pulvinar ut adipiscing sed ut. Etiam neque ac vel mattis at hendrerit ultrices justo aliquam. Nam ultricies molestie eleifend ridiculus ullamcorper quisque bibendum. Ante sapien eget suspendisse sit at. Adipiscing auctor amet urna gravida purus accumsan. Purus elementum euismod vestibulum sapien porttitor vel tellus. A iaculis sapien cum ullamcorper tortor cur.',
      created_at: '01.02.2024',
      image: '../blogimg.jpg',
    },
    {
      id: 5,
      title: 'Lorem ipsum is simply dummy text',
      description: 'Lorem ipsum dolor sit amet consectetur. Ultricies nulla donec elit venenatis sit neque elementum habitasse. Id pellentesque lorem tellus dui pharetra consequat. Platea leo malesuada justo eros non felis pulvinar quisque tempus. Enim facilisi interdum habitasse sit fringilla accumsan sed sed eu. Tincidunt leo ac laoreet in turpis scelerisque. Pulvinar tristique enim semper ipsum. Etiam venenatis volutpat magna praesent hendrerit sed. Sed leo tortor quisque fermentum nunc odio tristique metus. Tincidunt lorem eu netus velit nunc. Vitae pulvinar pellentesque et iaculis feugiat gravida sagittis fermentum. Diam sit sit nulla gravida vehicula elit feugiat pretium. Urna nullam cras est aliquet. In diam lectus placerat pulvinar ut adipiscing sed ut. Etiam neque ac vel mattis at hendrerit ultrices justo aliquam. Nam ultricies molestie eleifend ridiculus ullamcorper quisque bibendum. Ante sapien eget suspendisse sit at. Adipiscing auctor amet urna gravida purus accumsan. Purus elementum euismod vestibulum sapien porttitor vel tellus. A iaculis sapien cum ullamcorper tortor cur.',
      created_at: '01.02.2024',
      image: '../blogimg.jpg',
    },
    {
      id: 6,
      title: 'Lorem ipsum is simply dummy text',
      description: 'Lorem ipsum dolor sit amet consectetur. Ultricies nulla donec elit venenatis sit neque elementum habitasse. Id pellentesque lorem tellus dui pharetra consequat. Platea leo malesuada justo eros non felis pulvinar quisque tempus. Enim facilisi interdum habitasse sit fringilla accumsan sed sed eu. Tincidunt leo ac laoreet in turpis scelerisque. Pulvinar tristique enim semper ipsum. Etiam venenatis volutpat magna praesent hendrerit sed. Sed leo tortor quisque fermentum nunc odio tristique metus. Tincidunt lorem eu netus velit nunc. Vitae pulvinar pellentesque et iaculis feugiat gravida sagittis fermentum. Diam sit sit nulla gravida vehicula elit feugiat pretium. Urna nullam cras est aliquet. In diam lectus placerat pulvinar ut adipiscing sed ut. Etiam neque ac vel mattis at hendrerit ultrices justo aliquam. Nam ultricies molestie eleifend ridiculus ullamcorper quisque bibendum. Ante sapien eget suspendisse sit at. Adipiscing auctor amet urna gravida purus accumsan. Purus elementum euismod vestibulum sapien porttitor vel tellus. A iaculis sapien cum ullamcorper tortor cur.',
      created_at: '01.02.2024',
      image: '../blogimg.jpg',
    },
    
  ]

const BlogPage = () => {

  return (
    <div className='blog-page'>
     <div className="title-blogpage">
          <h1>Bloq</h1>
     </div>

     <div className="grid-blog">
      {Blogs.map((item:BlogType, i:number) => (
        <Link to={`/bloq/${i}-${item.title}`} key={i} className='blog-item'>
          <div className="image-wrapper">
            <img src={item.image} alt={`${i}-blogimg`} />
          </div>

          <div className="texts">
          <article>{item.created_at}</article>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          </div>
        </Link>
      ))}
     </div>
     </div>
  )
}

export default BlogPage