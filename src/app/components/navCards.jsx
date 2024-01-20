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
        title: 'Experience',
        icon: <BiSolidBriefcase />,
    },
    {
        to: 2,
        title: 'Projects',
        icon: <FaCode />,
    },
    {
        to: 3,
        title: 'Contact',
        icon: <BiSolidMessageRounded />,
    }
]

export default navCards;