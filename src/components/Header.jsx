
import { Link } from "react-scroll";
const Header = () => {
  return (
    <header className='py-6 mb-12 border-b bg-slate-500'>
        <div className="container mx-auto flex justify-between items-center">
            <img className="h-[60px]" src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1723813193/Real%20Estate%20Website%20Images/Screenshot_16-8-2024_135810_looka.com-removebg-preview_waxpnq.png" alt="Logo" />
            <Link to='/'>
            </Link>
            <div className="flex items-center gap-6">
                <Link className="hover:text-violet-900 transition" to="">Log in</Link>
                <Link className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition" to="">Sign Up</Link>
            </div>
        </div>
    </header>
  )
}

export default Header