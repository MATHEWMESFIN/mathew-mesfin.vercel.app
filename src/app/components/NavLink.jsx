import Link from 'next/link'

const NavLink = ({ to, title }) => {
    return (
        <Link 
            href={to}
            className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white transition mr-5">
            {title}
        </Link>
    )
}

export default NavLink