import { Link } from "react-scroll";
const Header = () => {
  return (
    <header className="py-4 mb-12  bg-white shadow-sm ">
      <div className="container mx-auto flex justify-between items-center">
        <img
          className="h-[20px] lg:h-[60px]"
          src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1724187506/Screenshot_20-8-2024_215514_looka.com-removebg-preview_lcpjat.png"
          alt="Logo"
        />
        <Link to="/"></Link>
        <div className="flex items-center gap-6">
          <Link className="hover:text-violet-900 transition" to="">
            Log in
          </Link>
          <Link to="">
            <button>
              <a
                href="#_"
                className="relative block w-auto px-6 py-3 overflow-hidden text-base font-semibold text-center text-white rounded-lg hover:bg-gray-50 hover:text-black  bg-violet-800"
              >
                Sign Up
              </a>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
