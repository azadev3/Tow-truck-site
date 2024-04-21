import "../../../styles/components/corporativepage.scss";
import { Form, Formik, Field } from "formik";
import { CorporativeSchema } from "./Schema/CorporativeSchema";

type HeroItems = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

const CorporativePage = () => {
  const Heros: HeroItems[] = [
    {
      id: 1,
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet consectetur",
      icon: "../sened.svg",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet consectetur",
      icon: "../acar.svg",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet consectetur",
      icon: "../orden.svg",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet consectetur",
      icon: "../man.svg",
    },
    {
      id: 5,
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet consectetur",
      icon: "../canta.svg",
    },
    {
      id: 6,
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet consectetur",
      icon: "../saat.svg",
    },
  ];

  return (
    <div className="corporative-page">
      <div className="top-background-wrappered">
        <div className="top-background">
          <img src="../korporativ.svg" alt="" />
          <h1>Korporativ</h1>
        </div>
      </div>

      <div className="description-area">
        <p>
          Lorem ipsum dolor sit amet consectetur. Suspendisse nunc faucibus duis ultrices urna aliquet sed. Eros
          ultrices sed habitasse luctus. Accumsan viverra duis hac aliquam gravida aliquet morbi iaculis eget. Ultricies
          ut vestibulum diam at eleifend. Nunc amet lectus nibh dictumst porttitor tristique egestas facilisis. Sagittis
          velit faucibus varius libero ac tristique. Egestas metus a sodales orci nunc. Quis egestas sit velit mattis at
          amet massa pellentesque tortor. Sed habitant odio mus arcu sed massa et. Nulla facilisis risus ac leo. Euismod
          suspendisse sit nibh egestas amet ornare fringilla. Integer mattis tristique et nec accumsan nec donec sed.
          Justo volutpat ipsum pellentesque laoreet. Id amet in nec aliquam sociis eget laoreet ultrices aliquet. Eu
          imperdiet habitant quis gravida aliquet diam vulputate cursus. Morbi non tempor tincidunt sed enim mollis
          aliquam amet. Morbi sagittis elit suscipit aliquam lectus. Sapien proin viverra aliquam aliquam nibh neque
          porta. Aliquam enim vel nulla auctor est et nisl amet.
        </p>
      </div>

      <div className="grid-hero-item">
        {Heros.map((item: HeroItems, i: number) => (
          <div key={i} className="hero-item">
            <div className="top">
              <div className="logo-wrapper">
                <img src={item.icon} alt={`${i}-icon`} />
              </div>
            </div>

            <div className="bottom">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="form-area">
        <div className="title-form">
          <h1>Şirkət məlumatları</h1>
        </div>

        <Formik
          validationSchema={CorporativeSchema}
          initialValues={{
            name_surname: "",
            voen: "",
            phone: "",
            business_name: "",
            profession: "",
            email: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}>
          {(props) => (
            <Form className="form">
              <div className="field-area">
                <div className="left">
                  <Field type="text" id="name_surname" name="name_surname" placeholder="Ad soyad" />

                  {props.errors.name_surname && props.touched.name_surname && (
                    <span className="error-msg">{props.errors.name_surname}</span>
                  )}
                  <Field type="text" id="voen" name="voen" placeholder="Şirkətin VÖEN-i" />
                  {props.errors.voen && props.touched.voen && <span className="error-msg">{props.errors.voen}</span>}
                  <Field type="text" id="phone" name="phone" placeholder="Əlaqə nömrəsi" />
                  {props.errors.phone && props.touched.phone && <span className="error-msg">{props.errors.phone}</span>}
                </div>

                <div className="right">
                  <Field type="text" id="business_name" name="business_name" placeholder="Şirkətin adı" />
                  {props.errors.business_name && props.touched.business_name && (
                    <span className="error-msg">{props.errors.business_name}</span>
                  )}
                  <Field type="text" id="profession" name="profession" placeholder="Vəzifəniz" />
                  {props.errors.profession && props.touched.profession && (
                    <span className="error-msg">{props.errors.profession}</span>
                  )}
                  <Field type="email" id="email" name="email" placeholder="E-mail" />
                  {props.errors.email && props.touched.email && <span className="error-msg">{props.errors.email}</span>}
                </div>
              </div>

              <div className="submit-area">
                <button type="submit" className="submit-btn">
                  Təsdiqlə
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CorporativePage;
