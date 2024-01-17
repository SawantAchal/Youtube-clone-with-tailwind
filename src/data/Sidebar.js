import { IoMdHome } from "react-icons/io";
import { BsFire } from "react-icons/bs";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { FaFilm } from "react-icons/fa6";
import { MdOutlineLiveTv } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoTrophySharp } from "react-icons/io5";
import { MdLightbulbOutline } from "react-icons/md";
import { GiBigDiamondRing } from "react-icons/gi";
import { MdOutlineSettings } from "react-icons/md";
import { LiaFlagSolid } from "react-icons/lia";
import { TbHelp } from "react-icons/tb";
import { MdOutlineFeedback } from "react-icons/md";


export const sideBar = [
    {
        icon:< IoMdHome/>,
        name:"New",
        type:"home"
    },
    {
        icon:<BsFire />,
        name:"Trending",
        type:"category"
    },
    {
        icon:<IoMusicalNoteOutline />,
        name:"Music",
        type:"category"
    },
    {
        icon:< FaFilm/>,
        name:"Films",
        type:"category"
    },
    {
        icon:< MdOutlineLiveTv/>,
        name:"Live",
        type:"category"
    },
    {
        icon:<IoGameControllerOutline />,
        name:"Gaming",
        type:"category"
    },
    {
        icon:< IoNewspaperOutline/>,
        name:"News",
        type:"category"
    },
    {
        icon:< IoTrophySharp/>,
        name:"Sports",
        type:"category"
    },
    {
        icon:< MdLightbulbOutline/>,
        name:"Learning",
        type:"category"
    },
    {
        icon:<GiBigDiamondRing/>,
        name:"Fashion & Beauty",
        type:"category",
        divider:true
    },
    {
        icon:<MdOutlineSettings/>,
        name:"Setting",
        type:"menu"
    },
    {
        icon:<LiaFlagSolid/>,
        name:"Report History",
        type:"menu"
    },
    {
        icon:<TbHelp/>,
        name:"Help",
        type:"menu"
    },
    {
        icon:<MdOutlineFeedback/>,
        name:"Send Feedback",
        type:"menu"
    },
]

// export const settingSideBar = [

//     {
//         icon:<LiaFlagSolid/>,
//         name:"Report History",
//         type:"menu"
//     },
//     {
//         icon:<TbHelp/>,
//         name:"Help",
//         type:"menu"
//     },
//     {
//         icon:<MdOutlineFeedback/>,
//         name:"Send Feedback",
//         type:"menu"
//     },
// ]
