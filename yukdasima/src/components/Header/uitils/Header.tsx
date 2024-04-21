import React from "react";
import { Link } from "react-router-dom";
import { Services, ServicesType } from "../../Wrapper/ServicesPage/ServicePage";

type InnerNavItem = {
  id: number;
  title: string;
  to: string;
};

export type HeaderNavItemType = {
  id: number;
  title: string;
  to: string;
  subItem?: InnerNavItem[];
};

const Header = () => {
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
        { id: 1, title: "Şəkillər", to: "/qalereya" },
        { id: 2, title: "Videolar", to: "/videolar" },
      ],
    },
    { id: 6, title: "Korporativ", to: "/korporativ" },
    { id: 7, title: "Əlaqə", to: "/elaqe" },
  ];

  //dropdown menu
  const [dropdown, setDropdown] = React.useState<number | null>(null);

  return (
    <header className="header">
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
              {item.subItem.map((subitem: InnerNavItem, subId: number) => (
                <Link className="subitem-link" to={subitem.to} key={subId} onClick={() => setDropdown(null)}>
                  {subitem.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </header>
  );
};

export default Header;
