import React from "react";
import "../../../styles/components/newheader.scss";
import { PiListLight } from "react-icons/pi";
import { useToggleMenuContext } from "../../../context/ToggleMenu";
import { GrClose } from "react-icons/gr";
import { Services, ServicesType } from "../../Wrapper/ServicesPage/ServicePage";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import SelectLanguage from "./SelectLanguage";

type subItemType = {
  id: number;
  title: string;
  to: string;
};

type ToggleMenuItemType = {
  id: number;
  title: string;
  to: string;
  subItem?: subItemType[];
};

const Responsiveheader = () => {
  const HeaderNavItem: ToggleMenuItemType[] = [
    { id: 1, title: "Əsas səhifə", to: "/" },
    { id: 2, title: "Haqqımızda", to: "/haqqimizda" },
    {
      id: 3,
      title: "Xidmətlər",
      to: "",
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
      to: "",
      subItem: [
        { id: 1, title: "Şəkillər", to: "/qalereya" },
        { id: 2, title: "Videolar", to: "/videolar" },
      ],
    },
    { id: 6, title: "Korporativ", to: "/korporativ" },
    { id: 7, title: "Əlaqə", to: "/elaqe" },
  ];

  const { setToggleMenu, toggleMenu } = useToggleMenuContext();

  const [dropdown, setDropdown] = React.useState<number | boolean>(false);

  React.useEffect(() => {
    console.log(dropdown);
  }, [dropdown]);
  return (
    <div className="new-mobile-header">
      {toggleMenu && (
        <div className="togglemenu">
          <div className="header-togglemenu">
            <Link to='/' className="left-logo-toggle">
              <img src="../logo.svg" alt="" />
            </Link>
            <GrClose className="close-toggle" 
            onClick={() => setToggleMenu(false)}
            />
          </div>

          <nav className="navbar-area">
            {HeaderNavItem.map((item: ToggleMenuItemType, i: number) => (
              <div className="navbar-area" key={i}>
                <Link
                  to={item.to}
                  className="navlink"
                  onClick={() => {setDropdown(dropdown === item.id ? false : item.id), item.id !== 3 && item.id !== 5 ? setToggleMenu(false) : ()=>{}}}>
                  {item.title}
                  {item.id === 3 && dropdown === item.id && <IoIosArrowUp className="dropdown-inner-open" />}
                  {item.id === 3 && !dropdown && <IoIosArrowDown className="dropdown-inner-open" />}
                  {item.id === 5 && dropdown === item.id && <IoIosArrowUp className="dropdown-inner-open" />}
                  {item.id === 5 && !dropdown && <IoIosArrowDown className="dropdown-inner-open" />}
                </Link>

                {dropdown === item.id && (
                  <div className="sub-item-menu">
                    {item.subItem?.map((subItem: subItemType, j: number) => (
                      <Link to={subItem.to} key={j} className="sublink"
                      onClick={() => setToggleMenu(false)}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="bottom-toggle">
               <SelectLanguage />
          </div>
        </div>
      )}
      <Link to='/' className="left-logo">
        <img src="../logo.svg" alt="" />
      </Link>

      <PiListLight className="open-toggle" onClick={() => setToggleMenu(true)} />
    </div>
  );
};

export default Responsiveheader;
