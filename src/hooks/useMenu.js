import { useState } from "react";

export const useMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return { isMenuOpen, toggleMenu };
};
