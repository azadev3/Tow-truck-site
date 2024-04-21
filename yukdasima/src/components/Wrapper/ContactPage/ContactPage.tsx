import "../../../styles/components/contactpage.scss";
import { Link } from "react-router-dom";
import { Form, Formik, Field } from "formik";
import { ContactSchema } from "./Schema/ContactSchema";

type SocialMedia = {
  id: number;
  icon: string;
  url: string;
};
interface SocialItemType {
  id: number;
  title: string;
  icon: string;
  subtitle: string;
  url: string;
}

const ContactPage = () => {
  const SocialItem: SocialItemType[] = [
    {
      id: 1,
      title: "Əlaqə",
      icon: "../telblue.svg",
      subtitle: "156",
      url: "",
    },
    {
      id: 2,
      title: "Email",
      icon: "../emailblue.svg",
      subtitle: "156@gmail.com",
      url: "",
    },
    {
      id: 3,
      title: "Ünvan",
      icon: "../locationblue.svg",
      subtitle: "Zərifə Əliyeva 55, Yeni Həyat Plaza",
      url: "",
    },
  ];

  const SocialMedia: SocialMedia[] = [
    {
      id: 1,
      icon: "../instagram.svg",
      url: "",
    },
    {
      id: 2,
      icon: "../facebook.svg",
      url: "",
    },
    {
      id: 3,
      icon: "../youtube.svg",
      url: "",
    },
    {
      id: 4,
      icon: "../linkedin.svg",
      url: "",
    },
  ];



  return (
    <div className="contact-page">
      <div className="contact-page-title">
        <h1>Əlaqə</h1>
      </div>

      <div className="grid-contact-area">
        {SocialItem.map((item: SocialItemType, i: number) => (
          <div key={i} className="social-item">
            <span>{item.title}</span>
            <div className="icon-and-subtitle">
              <img src={item.icon} alt={`${i}-icon`} />
              <Link className="subtitle" to={item.url}>
                {item.subtitle}
              </Link>
            </div>
          </div>
        ))}
        <div className="social-media">
          <span>Sosial şəbəkə</span>
          <div className="social">
            {SocialMedia.map((media: SocialMedia, i: number) => (
              <Link to={media.url} key={i} className="social-media-item">
                <img src={media.icon} alt="" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="bottom-form-area">
        <img src="../ellipselarge.png" alt="" className="ellipse1" />
        <img src="../ellipsesmall.png" alt="" className="ellipse2" />
        <img src="../ellipsee.png" alt="" className="ellipse3" />
        <img src="../ellipsee.png" alt="" className="ellipse4" />

        <div className="form-container">
          <div className="left-form">
               <h1>Bizə yazın</h1>
               <p>Lorem ipsum dolor sit amet consectetur. Tortor quam nam sed nisl penatibus at sed.</p>
               <div className="image-wrapper-form">
                    <img src="../formimg.svg" alt="form-container-image" />
               </div>
          </div>

          <div className="right-form">
               <Formik
               initialValues={{
                    name_surname: '',
                    email: '',
                    phone: '',
                    record: '',
               }}
               onSubmit={(values) => {
                    console.log(values)
               }}
               validationSchema={ContactSchema}
               >
               {() => (
                    <Form>
                         <Field type="text" id="name_surname" name="name_surname" placeholder="Ad soyad" />
                         <Field type="email" id="email" name="email" placeholder="E-mail" />
                         <Field type="text" id="phone" name="phone" placeholder="Əlaqə nömrəsi" />
                         <Field type="text" as="textarea" id="record" name="record" placeholder="Qeydiniz" />
                         <button type="submit">Göndər</button>
                    </Form>
               )}
               </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
