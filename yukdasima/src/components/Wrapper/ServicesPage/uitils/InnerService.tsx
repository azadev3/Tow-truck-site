import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { Services, ServicesType } from "../ServicePage";
import "../../../../styles/components/servicepage.scss";

export default function InnerService() {
  const { innerID } = useParams();

  if (innerID === undefined) {
    return <div>undefined innerID in service inner page</div>;
  }

  var parseID = parseFloat(innerID);

  if (isNaN(parseID)) {
    console.log("nan parseid");
    return;
  }

  const innerService = Services.find((_: ServicesType, i: number) => i === parseID);

  //if user clicked filtered contains, set right contains
  const [itemActive, setItemActive] = React.useState<{ [key: number]: boolean }>({});
  const [showParse, setShowParse] = React.useState<boolean>(false);

  React.useEffect(() => {
    setShowParse(true);
  }, [parseID]);

  const handleClickSidebarItem = (i: number) => {
    setItemActive(() => ({
      [i]: true,
    }));
    setShowParse(false);
  };

  return (
    <React.Fragment>
      <div className="inner-service-page">
        <div className="title-inner-service">
          <h1>xidmətlərimiz</h1>
        </div>

        <div className="container-bottom-sides">
          <aside className="filtered">
            {Services.map((item: ServicesType, i: number) => (
              <NavLink
                to=""
                key={i}
                className="filterlink"
                onClick={() => handleClickSidebarItem(i)}
                style={{
                  background: itemActive[i]
                    ? "rgba(50, 99, 223, 1)"
                    : parseID === i && showParse
                    ? "rgba(50, 99, 223, 1)"
                    : "",
                  color: itemActive[i] ? "#fff" : parseID === i && showParse ? "#fff" : "",
                }}>
                {item.title}
              </NavLink>
            ))}
          </aside>

          <main className="right-content">
            {Services.map((item: ServicesType, i: number) => (
              <React.Fragment key={i}>
                {itemActive[i] && (
                  <React.Fragment key={item.id}>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                  </React.Fragment>
                )}
              </React.Fragment>
            ))}

            {showParse && (
              <React.Fragment>
                <h1>{innerService?.title}</h1>
                <p>{innerService?.description}</p>
              </React.Fragment>
            )}
          </main>
        </div>
      </div>

      <div className="bottom-image">
        <img src="../filterback.jpg" alt="" />
      </div>
    </React.Fragment>
  );
}
