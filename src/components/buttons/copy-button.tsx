"use client";

import { Link } from "@mui/icons-material";

const CopyButton = () => {
  const handleClick = () => {
    try {
      navigator.clipboard.writeText(location.href);
    } catch (error) {
      return;
    }
  };
  return (
    <button
      onClick={handleClick}
      className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
    >
      <Link />
    </button>
  );
};

export default CopyButton;
