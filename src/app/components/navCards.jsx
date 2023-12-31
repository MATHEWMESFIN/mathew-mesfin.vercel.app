import { BiSolidBriefcase, BiSolidMessageRounded } from "react-icons/bi";
import { FaCode, FaUserCircle } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";


const navCards = [
    {
        to: 0,
        title: 'Home',
        icon: <FaUserCircle />,
    },
    {
        to: 1,
        title: 'Skills',
        icon: <IoStatsChart />,
    },
    {
        to: 2,
        title: 'Experience',
        icon: <BiSolidBriefcase />,
    },
    {
        to: 3,
        title: 'Projects',
        icon: <FaCode />,
    },
    {
        to: 4,
        title: 'Contact',
        icon: <BiSolidMessageRounded />,
    }
]

export default navCards;