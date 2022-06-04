import { createContext, useContext, useState } from "react";
import sublinks from "./data";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isShowSubmenu, setIsShowSubmenu] = useState(false);
  const [submenu, setSubmenu] = useState([{ page: "", links: [] }]);
  const [categoryPosition, setCategoryPosition] = useState(null);

  const findCategory = (e) => {
    setIsShowSubmenu(true);
    const newMenu = sublinks.filter((sublink) => sublink.page === e.target.textContent);
    setSubmenu(newMenu);
    setCategoryPosition(e.target.getBoundingClientRect().left);
  }

  const values = {
    isShowSubmenu,
    setIsShowSubmenu,
    findCategory,
    sublinks,
    submenu,
    categoryPosition
  }

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  )
};

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export default AppContext;