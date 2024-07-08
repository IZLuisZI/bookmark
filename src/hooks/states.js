// bookmark/src/hooks/states.js
import { useState, useCallback } from "react";

export function useMenuStatus(initialState = false) {
  const [menuStatus, setMenuStatus] = useState(initialState);

  const toggleMenu = useCallback(() => {
    setMenuStatus((prevStatus) => !prevStatus);
  }, []);

  return { menuStatus, toggleMenu };
}
