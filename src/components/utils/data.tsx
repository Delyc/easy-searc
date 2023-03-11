import { ProfileIcon, PhoneIcon, AtIcon, LocationIcon, RegDocIcon, DashboardIcon, TwoDocumentsIcon, AddDocument } from "../svgs/Icons"

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
        path: "/admin",
        icon: <DashboardIcon />,
        title: "Dashboard",
      },
      {
        path: "/all-documents",
        icon: <TwoDocumentsIcon />,
        title: "All Documents",
      },
      {
        path: "/add-doc",
        icon: <AddDocument />,
        title: "Add Lost Document",
      },
]

export const AdminFormItems = [
    {
        icon: <ProfileIcon />,
        name: "nameOnDoc",
        placeHolder: "Names on card",
        type: "text"
    },
    {
        icon: <AtIcon />,
        name: "phoneEMail",
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


export const orgRegisterForm = [
    {
        icon: <ProfileIcon />,
        name: "orgName",
        placeHolder: "Organisation Name",
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
        name: "Organisation Email",
        placeHolder: "Your Email",
        type: "email"
    },
    {
        icon: <PhoneIcon />,
        name: "location",
        placeHolder: "Organisation Location",
        type: "text"
    },

    {
        icon: <LocationIcon />,
        name: "password",
        placeHolder: "Password",
        type: "password"
    },

]


export const orgLoginForm = [

    {
        icon: <AtIcon />,
        name: "Organisation Email",
        placeHolder: "Your Email",
        type: "email"
    },


    {
        icon: <LocationIcon />,
        name: "password",
        placeHolder: "Password",
        type: "password"
    },

]