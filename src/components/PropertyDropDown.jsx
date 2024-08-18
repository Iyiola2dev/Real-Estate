import { useContext, useState } from "react";

//import icons
import {
  RiHome5Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";

// import headless ui
import { Menu } from "@headlessui/react";

// import house context
import { HouseContext } from "./HouseContext";

const PropertyDropDown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);
 

  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as="div" className="dropdown relative ">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiHome5Line className="dropdown-icon-primary" />
        <div className="text-[15px] font-medium leading-tight">
          <div>{property}</div>
          <div className="text-[13px]">Select your place</div>
         
        </div>
        {isOpen ? (
            <RiArrowUpSLine className="dropdown-icon-secondary" />
          ) : (
            <RiArrowDownSLine className="dropdown-icon-secondary" />
          )}
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
    
        {properties.map((property, index)=>{
          {/* this is to map through the countries data which was change to country and it manipulate the dropdown of all the countries array with the use of setCoutries(uniqueCountries) or countries.map iterates over the countries array (which includes "Location (any)" and unique countries).*/}
          return(
            <Menu.Item onClick={()=>setProperty(property)} as="li" key={index} className="cursor-pointer hover:to-violet-700 transition"> {property}</Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropDown;
