import Logo from "../ui/Logo";
import MenuItems from "./menuItems";

const Footer = () => {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-page-margin py-stack-lg app-container">
        <div className="mb-6 md:mb-0">
          <Logo />
          <p className="font-body-sm text-[12px] text-secondary mt-1">
            © {new Date().getFullYear()} Blogly. All rights reserved.
          </p>
        </div>

        <MenuItems/>
      </div>
    </footer>
  );
};

export default Footer;
