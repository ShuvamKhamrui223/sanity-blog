"use client";
import { ShareRounded } from "@mui/icons-material";

interface IShareButtonProps {
  sharableData: {
    title: string;
    publishedAt?: string;
  };
}
const ShareButton = ({ sharableData }: IShareButtonProps) => {
  const sd = {
    ...sharableData,
    url: location.href,
  };

  const handleClick = () => {
    try {
      if (navigator.canShare(sd)) {
        navigator.share(sd);
      }
    } catch (error) {
      console.log(error);
      return;
    }
  };
  return (
    <button
      onClick={handleClick}
      className="hover:text-primary transition-colors cursor-pointer flex items-center gap-1"
    >
      <ShareRounded />
    </button>
  );
};

export default ShareButton;
