import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="footer items-center p-4 text-neutral-content" style={{backgroundColor: '#bcc5f9'}}>
      <div className="items-center grid-flow-col">
        <a href="https://csulbwic.com/" target='_blank' rel="noopener noreferrer">
          <Image
            src={"/images/wic_logo_white.png"}
            alt='wiclogo'
            width={100}
            height={100}
          />
        </a>
        <p className="text-white">Copyright © MarinaHacks. All Rights Reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://www.facebook.com/wic.csulb/" target='_blank' rel="noopener noreferrer">
          <FaFacebook className="h-8 w-8 text-white" />
        </a>
        <a href="https://www.instagram.com/csulbwic/?hl=en" target='_blank' rel="noopener noreferrer">
          <FaInstagram className="h-8 w-8 text-white" />
        </a>
        <a href="https://www.linkedin.com/company/csulbwic/" target='_blank' rel="noopener noreferrer">
          <FaLinkedin className="h-8 w-8 text-white" />
        </a>
        <a href="https://twitter.com/csulbwic" target='_blank' rel="noopener noreferrer">
          <FaTwitter className="h-8 w-8 text-white" />
        </a>
      </div>
    </footer>
  );
};
