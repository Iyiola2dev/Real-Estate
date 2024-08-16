import { useContext, useState } from "react";

//import icons
import {
  RiMapPin2Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";

// import headless ui
import { Menu } from "@headlessui/react";

// import house context
import { HouseContext } from "./HouseContext";

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiMapPin2Line className="dropDown-icon-primary" />
        <div>
          <div>{country}</div>
          <div>Select your place</div>
          {isOpen ? (
            <RiArrowUpSLine className="dropDown-icon-primary" />
          ) : (
            <RiArrowDownSLine className="dropDown-icon-primary" />
          )}
        </div>
      </Menu.Button>
    </Menu>
  );
};

export default CountryDropdown;
