import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/contextAPI";
import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories2, categories1 } from "../utils/constants";

const LeftNav = () => {
  const { userLogin, selectedCategory, setSelectedCategory, mobileMenu } =
    useContext(Context);
  let categories = [];
  const navigate = useNavigate();
  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectedCategory(name);
      case "home":
        return setSelectedCategory(name);
      case "menu":
        console.log("menu clicked");
        return false;
      default:
        break;
    }
  };
  if (userLogin) {
    categories = categories2;
  } else {
    categories = categories1;
  }
  return (
    <div
      className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-[0] transition-all ${
        mobileMenu ? "translate-x-[0]" : ""
      }`}
    >
      <div className="flex px-5 flex-col">
        {categories.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <LeftNavMenuItem
                text={item.name}
                icon={item.icon}
                action={() => {
                  if (item.name === "Playlist") {
                    // setSelectedCategory(item.name);
                    navigate("/playlist");
                  } else {
                    clickHandler(item.name, item.type);
                    navigate("/");
                  }
                }}
                className={`${
                  selectedCategory === item.name ? "bg-white/[0.15]" : ""
                }`}
              />
              {item.divider && <hr className="my-5 border-white/[0.2]" />}
            </React.Fragment>
          );
        })}
        <hr className="my-5 border-white/[0.2]" />
        <div className="text-white/[0.5] text-[12px]">By Abdul Wahib</div>
      </div>
    </div>
  );
};
export default LeftNav;
