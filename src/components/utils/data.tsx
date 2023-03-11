import { ProfileIcon, PhoneIcon, AtIcon, LocationIcon, RegDocIcon } from "../svgs/Icons"

export const formItems = [
    {
        icon: <ProfileIcon />,
        name: "names",
        placeHolder: "Your names",
        type: "text"
    },
    {
        icon: <PhoneIcon />,
        name: "phone",
        placeHolder: "Phone number",
        type: "number"
    },
    {
        icon: <AtIcon />,
        name: "email",
        placeHolder: "Your Email",
        type: "email"
    },
    {
        icon: <PhoneIcon />,
        name: "cardType",
        placeHolder: "Card Type e.g Insurance card",
        type: "text"
    },
    {
        icon: <PhoneIcon />,
        name: "cardNumber",
        placeHolder: "Card number",
        type: "number"
    },
    {
        icon: <LocationIcon />,
        name: "location",
        placeHolder: "Location",
        type: "text"
    },

]


export const navItems = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Available doc",
        path: "/available-docs"
    },
    {
        name: "Declare doc",
        path: "/declare-doc"
    },


]


export const sidebarItems = [
    {
        path: "/dashboard",
        icon: "",
        title: "Dashboard",
      },
      {
        path: "/all-documents",
        icon: "",
        title: "All Documents",
      },
      {
        path: "/add-doc",
        icon: "",
        title: "Add Lost Document",
      },
]

export const AdminFormItems = [
    {
        icon: <ProfileIcon />,
        name: "names",
        placeHolder: "Names on card",
        type: "text"
    },
    {
        icon: <AtIcon />,
        name: "email",
        placeHolder: "Email",
        type: "email"
    },
    {
        icon: <PhoneIcon />,
        name: "cardType",
        placeHolder: "Card Type e.g Insurance card",
        type: "text"
    }, {
        icon: <RegDocIcon />,
        name: "reqDocument",
        placeHolder: "req documents",
        type: "text"
    },
    {
        icon: <PhoneIcon />,
        name: "cardNumber",
        placeHolder: "Card number",
        type: "number"
    },
    {
        icon: <LocationIcon />,
        name: "location",
        placeHolder: "Location",
        type: "text"
    },

]
