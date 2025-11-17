import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
    {
    id: 5,
    title: "Products",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "T-Shirt Manufacturing",
        path: "/t-shirt_manufacturing",
        newTab: false,
      },
      {
        id: 52,
        title: "Sweatshirt Manufacturing",
        path: "/sweatshirt_manufacturing",
        newTab: false,
      },
      {
        id: 53,
        title: "Bag Manufacturing",
        path: "/bag_manufacturing",
        newTab: false,
      },
      {
        id: 54,
        title: "Cap Manufacturing",
        path: "/cap_manufacturing",
        newTab: false,
      },
      {
        id: 55,
        title: "Mug Manufacturing",
        path: "/mug_manufacturing",
        newTab: false,
      },
      {
        id: 56,
        title: "Digital Printing",
        path: "/digital_printing",
        newTab: false,
      },
      {
        id: 57,
        title: "Face Masks & PPE Kits",
        path: "/face_masks_ppe_kits",
        newTab: false,
      },
      {
        id: 58,
        title: "Sanitizer & Infrared Thermometer",
        path: "/sanitizer_infrared_thermometer",
        newTab: false,
      },
      {
        id: 59,
        title: "School Uniform",
        path: "/school_uniform",
        newTab: false,
      },
      {
        id: 50,
        title: "Staff Uniform",
        path: "/staff_uniform",
        newTab: false,
      },
    ],
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 22,
    title: "Our Process",
    path: "/our_process",
    newTab: false,
  },

  {
    id: 33,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 13,
    title: "Gallery",
    path: "/image-gallery",
    newTab: false,
  },
  {
    id: 3,
    title: "Support",
    path: "/contact",
    newTab: false,
  },

  // {
  //   id: 4,
  //   title: "Pages",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 41,
  //       title: "About Page",
  //       path: "/about",
  //       newTab: false,
  //     },
  //     {
  //       id: 42,
  //       title: "Contact Page",
  //       path: "/contact",
  //       newTab: false,
  //     },
  //     {
  //       id: 43,
  //       title: "Blog Grid Page",
  //       path: "/blog",
  //       newTab: false,
  //     },
  //     {
  //       id: 44,
  //       title: "Blog Sidebar Page",
  //       path: "/blog-sidebar",
  //       newTab: false,
  //     },
  //     {
  //       id: 45,
  //       title: "Blog Details Page",
  //       path: "/blog-details",
  //       newTab: false,
  //     },
  //     {
  //       id: 46,
  //       title: "Sign In Page",
  //       path: "/signin",
  //       newTab: false,
  //     },
  //     {
  //       id: 47,
  //       title: "Sign Up Page",
  //       path: "/signup",
  //       newTab: false,
  //     },
  //     {
  //       id: 48,
  //       title: "Error Page",
  //       path: "/error",
  //       newTab: false,
  //     },
  //   ],
  // },
];
export default menuData;
