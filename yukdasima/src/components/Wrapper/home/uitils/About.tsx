import { Link } from "react-router-dom";

type AboutcontentType = {
  id: number;
  title: string;
  description: string;
};

const About = () => {
  const AboutItem: AboutcontentType[] = [
    {
      id: 1,
      description:
        "Lorem ipsum dolor sit amet consectetur. Eu elit leo quis mattis eget eget condimentum morbi. Vel ac mus enim purus sit convallis gravida. Mattis scelerisque tincidunt diam parturient molestie proin. Purus suspendisse odio turpis vestibulum et interdum metus diam nunc. Leo sed commodo quam egestas. Tellus eu scelerisque nisl consectetur enim dolor. Eget semper vitae sceleris",
      title: "Haqqımızda",
    },
  ];

  return (
    <div className="about-wrappered">
      <div className="about-content">
        {AboutItem.map((item: AboutcontentType, i: number) => (
          <div key={i} className="about-item">
               <h1>{item.title}</h1>
               <p>{item.description}</p>
               <Link to='' className="btn">
               Ətraflı məlumat
               </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
