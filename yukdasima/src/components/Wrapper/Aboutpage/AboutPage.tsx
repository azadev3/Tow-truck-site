import "../../../styles/components/aboutpage.scss";
import WhyWe from "../home/uitils/WhyWe";

const AboutPage = () => {
  return (
    <div className="about-page-wrappered">
      <div className="about-page-container">
        <div className="top-background">
          <h1>Haqqimizda</h1>
        </div>

        <div className="who-we-are">
          <div className="left">
            <h1>Biz kimik?</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur. Eu morbi in urna lacinia mauris. Faucibus magna id cursus iaculis
              scelerisque lorem faucibus ornare. Et ac augue faucibus purus dictum. Nullam tincidunt aliquet odio enim
              varius pretium quam. Nibh congue nunc viverra in egestas ullamcorper. Interdum curabitur dictum urna massa
              nunc porta tellus nibh praesent. Arcu velit condimentum enim nibh fermentum sit. Integer elementum <br />
              euismod ut sed eget. Elit suspendisse elit egestas nulla. Orci fames suspendisse non sit. Lacus etiam
              viverra vitae quis mauris vitae. Facilisis tortor aliquet malesuada interdum adipiscing. Malesuada
              faucibus neque odio ac parturient nibh enim viverra aliquet. Quis a nulla pharetra vitae malesuada aenean
              morbi id. Vitae viverra nunc ut tortor at. Iaculis egestas est purus malesuada sit eu.
            </p>
          </div>

          <div className="image-area">
            <img src="../aboutimg.svg" alt="" />
          </div>
        </div>

        <WhyWe />
      </div>
    </div>
  );
};

export default AboutPage;
