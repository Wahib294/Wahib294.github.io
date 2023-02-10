import React, { createContext, useState, useEffect } from "react";

import { fetchDatafromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Home");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState({});
  const [userLogin, setUserLogin] = useState(false);

  useEffect(() => {
    if (selectedCategory === "Home") {
      fetchSelectedCategoryData("New");
    } else {
      fetchSelectedCategoryData(selectedCategory);
    }
  }, [selectedCategory]);

  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDatafromApi(`search/?q=${query}`)
      .then((data) => {
        setSearchResults(data.data.contents);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <Context.Provider
      value={{
        loading,
        searchResults,
        selectedCategory,
        mobileMenu,
        modal,
        user,
        userLogin, 
        setUserLogin,
        setUser,
        setModal,
        setLoading,
        setSelectedCategory,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
