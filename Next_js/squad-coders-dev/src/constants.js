import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { imageUrl } from "imageConstant/imageConstant";

// header
export const navItems = [
  { key: "home", label: "Home", href: "/" },
  { key: "about", label: "About", href: "/about" },
  { key: "contact", label: "Contact", href: "/contact" },
  {
    key: "demo-videos",
    label: "Demo videos",
    href: "https://www.youtube.com/watch?v=JNixBunE76U&list=PLhruWMYekkKoKL3BA-_RJRUNz4RTNsAac&ab_channel=MuzammilRafay",
    external: true,
  },
];

// input form
export const inputFields = [
  { label: "First Name" },
  { label: "Last Name" },
  { label: "Phone" },
  { label: "Contact" },
];
// SocialMediaInformation
export const contactDetails = [
  {
    icon: <IoIosCall className="text-[#993795] mr-3 text-[20px]" />,
    text: "03402322260",
  },
  {
    icon: <IoMdMail className="text-[#993795] mr-3 text-[20px]" />,
    text: "info@squadcodersdev.com",
  },
  {
    icon: <FaLocationDot className="text-[#993795] mr-3 text-[20px]" />,
    text: (
      <>
        House No R-46, Sector 5A/4 Near Fresh Tasty Biryani
        <br />
        on Madeeha Road North Karachi, Pakistan
      </>
    ),
  },
];
export const menuItems = ["Home", "About Us", "Contact", "Demo Videos"];
export const socialMediaLinks = [
  "Facebook",
  "Instagram",
  "LinkedIn",
  "Twitter",
  "Join in Our Community Group",
];

// contact
export const contactData = [
  {
    imageSrc: imageUrl.email,
    title: "Email",
    details: ["info@squadcodersdev.com"],
    color: "#993795",
    height: "400px",
  },
  {
    imageSrc: imageUrl.phone,
    title: "Phone",
    details: ["03402322260", "03452071202"],
    color: "#993795",
    height: "400px",
  },
];
