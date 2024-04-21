import React from "react";
import "../../styles/components/footer.scss";
import { HeaderNavItemType } from "../Header/uitils/Header";
import { Link } from "react-router-dom";
import { Services, ServicesType } from "../Wrapper/ServicesPage/ServicePage";

type subItemType = {
  id: number;
  title: string;
  to: string;
};

type SocialType = {
  id: number;
  icon: string;
  subItem?: subItemType[];
};

const Footer = () => {
  const HeaderNavItem: HeaderNavItemType[] = [
    { id: 1, title: "Əsas səhifə", to: "/" },
    { id: 2, title: "Haqqımızda", to: "/haqqimizda" },
    {
      id: 3,
      title: "Xidmətlər",
      to: "/xidmetler",
      subItem: Services.map((item: ServicesType, i: number) => ({
        id: i,
        title: item.title,
        to: `/xidmetler/${i}-${item.title}`,
      })),
    },
    { id: 4, title: "Bloq", to: "/bloq" },
    {
      id: 5,
      title: "Qalereya",
      to: "/qalereya",
      subItem: [
        {
          id: 1,
          title: "Şəkillər",
          to: "/qalereya",
        },
        {
          id: 2,
          title: "Videolar",
          to: "/videolar",
        },
      ],
    },
    { id: 6, title: "Korporativ", to: "/korporativ" },
    { id: 7, title: "Əlaqə", to: "/elaqe" },
  ];

  const SocialItem: SocialType[] = [
    {
      id: 1,
      icon: "../instawhite.svg",
    },
    {
      id: 2,
      icon: "../facewhite.svg",
    },
    {
      id: 3,
      icon: "../youtubewhite.svg",
    },
    {
      id: 4,
      icon: "../linkedinwhite.svg",
    },
  ];

  const [dropdown, setDropdown] = React.useState<number | null>(null);

  return (
    <footer className="footer-wrappered">
      <div className="footer-container">
        <header className="footer-header">
          <div className="nav">
          {HeaderNavItem.map((item: HeaderNavItemType, id: number) => (
            <div
              className="navbar"
              key={id}
              onMouseEnter={() => item.subItem && setDropdown(id)}
              onMouseLeave={() => setDropdown(null)}>
              <Link
                to={item.to}
                className="li-item-header"
                style={{
                  border: dropdown === id && item.subItem ? "1px solid #CECECE8E" : "",
                }}>
                {item.title}
              </Link>
              {dropdown === id && item.subItem && (
                <div className="sub-item">
                  {item.subItem.map((subitem: subItemType, subId: number) => (
                    <Link className="subitem-link" to={subitem.to} key={subId} onClick={() => setDropdown(null)}>
                      {subitem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          </div>

          <div
            className="select-language"
            style={{ background: "rgba(255, 255, 255, 0.42)", borderRadius: "8px", padding: "6px 8px" }}>
            <select
              style={{
                color: "#fff",
              }}>
              <option value="az" style={{ background: "#000" }}>
                az
              </option>
              <option value="en" style={{ background: "#000" }}>
                en
              </option>
              <option value="ru" style={{ background: "#000" }}>
                ru
              </option>
            </select>
          </div>
        </header>

        <main className="content-footer">
          <div className="wrapper-icons">
            <Link to="" className="tel-li">
              <img src="../telwhite.svg" alt="" />
              156
            </Link>

            <div className="tel">
              <Link to="" className="tel-li">
                <img src="../locationwhite.svg" alt="" />
                Zərifə Əliyeva 55, Yeni Həyat Plaza
              </Link>
            </div>
          </div>

          <div className="social">
            {SocialItem.map((item: SocialType, i: number) => (
              <Link to="" key={i} className="image-wrapper-social">
                <img src={item.icon} alt="" />
              </Link>
            ))}
          </div>
        </main>
        <p>Bütün hüquqlar qorunur</p>
      </div>
    </footer>
  );
};

export default Footer;
