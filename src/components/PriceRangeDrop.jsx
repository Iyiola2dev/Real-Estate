import { useContext, useState } from "react";

//import icons
import {
  RiWallet3Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";

// import headless ui
import { Menu } from "@headlessui/react";

// import house context
import { HouseContext } from "./HouseContext";

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  

  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: 'Price range (any)'
    },
    {
      value: '100000 - 130000'
    },
    {
      value: '130000 - 160000'
    },
    {
      value: '160000 - 190000'
    },
    {
      value: '190000 - 220000'
    },
    {
      value: '10000 - 30000'
    },
    {
      value: '30000 - 40000'
    },
  ]
  return (
    <Menu as="div" className="dropdown relative ">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        < RiWallet3Line className="dropdown-icon-primary" />
        <div className="text-[15px] font-medium leading-tight">
          <div>{price}</div>
          <div className="text-[13px]">Choose price range</div>
         
        </div>
        {isOpen ? (
            <RiArrowUpSLine className="dropdown-icon-secondary" />
          ) : (
            <RiArrowDownSLine className="dropdown-icon-secondary" />
          )}
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
    
        {prices.map((price, index)=>{
          {/* this is to map through the countries data which was change to country and it manipulate the dropdown of all the countries array with the use of setCoutries(uniqueCountries) or countries.map iterates over the countries array (which includes "Location (any)" and unique countries).*/}
          return(
            <Menu.Item onClick={()=>setPrice(price.value)} as="li" key={index} className="cursor-pointer hover:to-violet-700 transition"> {price.value}</Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
