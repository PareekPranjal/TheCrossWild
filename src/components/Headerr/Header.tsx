// import React, { useState, useEffect } from 'react';

// export default function App() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeCategory, setActiveCategory] = useState(null);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const categories = [
//     {
//       name: 'View All',
//       subCategories: null,
//     },
//     {
//       name: 'Visiting Cards',
//       subCategories: [
//         { name: 'Standard Visiting Cards', isNew: true },
//         { name: 'Classic Visiting Cards' },
//         { name: 'Rounded Corner Visiting Cards' },
//         { name: 'Square Visiting Cards' },
//         { name: 'Leaf Visiting Cards' },
//         { name: 'Oval Visiting Cards' },
//         { name: 'Circle Visiting Cards' },
//       ],
//     },
//     {
//       name: 'Stationery, Letterheads & Notebooks',
//       subCategories: [
//         { name: 'Brilliant Finishes', isHeader: true },
//         { name: 'Spot UV Visiting Cards' },
//         { name: 'Raised Foil Visiting Cards' },
//         { name: 'Standard Papers', isHeader: true },
//         { name: 'Glossy Visiting Cards' },
//         { name: 'Matte Visiting Cards' },
//       ],
//     },
//     {
//       name: 'Stamps and Ink',
//       subCategories: null,
//     },
//     {
//       name: 'Signs, Posters & Marketing Materials',
//       subCategories: null,
//     },
//     {
//       name: 'Labels, Stickers & Packaging',
//       subCategories: null,
//     },
//     {
//       name: 'Clothing, Caps & Bags',
//       subCategories: null,
//     },
//     {
//       name: 'Mugs, Albums & Gifts',
//       subCategories: null,
//     },
//     {
//       name: 'Bulk Orders',
//       subCategories: null,
//     },
//     {
//       name: 'Custom Drinkware',
//       subCategories: null,
//     },
//     {
//       name: 'Custom Polo T-shirts',
//       subCategories: null,
//     },
//     {
//       name: 'Custom Winter Wear',
//       isRed: true,
//       subCategories: null,
//     },
//   ];

//   return (
//     <nav className={`bg-white shadow-sm font-sans relative z-50 transition-all duration-300 ${isScrolled ? 'fixed top-0 w-full bg-opacity-95' : 'relative'}`}>
//       {/* Top Bar for Desktop and Mobile */}
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
//         {/* Left Section (Mobile: Menu & Search, Desktop: Logo) */}
//         <div className="flex items-center">
//           {/* Mobile Menu Icon */}
//           <button
//             onClick={toggleMenu}
//             className="lg:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
//           >
//             <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>

//           {/* Mobile Search Icon */}
//           <button className="lg:hidden p-2 ml-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
//             <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//           </button>

//           {/* Desktop Logo */}
//           <img
//             src="/images/logo/logo-crosswile.jpg"
//             alt="Crosswile Logo"
//             className="h-8 lg:h-10 hidden lg:block mr-8"
//           />
//         </div>

//         {/* Middle Section (Search Bar) */}
//         <div className="flex-1 max-w-xl mx-4 hidden lg:block">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200"
//             />
//             <button className="absolute inset-y-0 right-0 px-4 flex items-center text-gray-500">
//               <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Logo */}
//         <div className="flex-grow flex justify-center lg:hidden">
//           <img
//             src="/images/logo/logo-crosswile.jpg"
//             alt="Crosswile Logo"
//             className="h-8"
//           />
//         </div>

//         {/* Right Section (Icons & Links) */}
//         <div className="flex items-center space-x-6">
//           <div className="hidden lg:flex items-center space-x-6 text-gray-600">
//             <a href="#" className="flex items-center hover:text-gray-900 transition-colors">
//               <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.548-1.353 2.5-1.928 4.5-1.928 1.488 0 2.5.575 2.5 1.928m-9 0a7 7 0 1010-8.228m-4 5.918a7 7 0 10-10-8.228" />
//               </svg>
//               Help is here
//             </a>
//             <a href="#" className="flex items-center hover:text-gray-900 transition-colors">
//               <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5h-10a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2z" />
//               </svg>
//               My Projects
//             </a>
//             <a href="#" className="flex items-center hover:text-gray-900 transition-colors">
//               <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-.682-.682a4.5 4.5 0 00-6.364 0z" />
//               </svg>
//               My Favorites
//             </a>
//             <a href="#" className="flex items-center hover:text-gray-900 transition-colors">
//               <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//               </svg>
//               Sign in
//             </a>
//           </div>
//           <a href="#" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
//             <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18l-1 16H4L3 3zM1 3h22" />
//             </svg>
//             <span className="ml-1 hidden lg:block">Cart</span>
//           </a>
//         </div>
//       </div>

//       {/* Second Row for Desktop (Category Links) */}
//       <div className="hidden lg:flex justify-center border-t border-gray-200">
//         <ul className="flex items-center space-x-8 px-8 py-3 text-gray-700 text-sm">
//           {categories.map((category, index) => (
//             <li
//               key={index}
//               className="relative"
//               onMouseEnter={() => setActiveCategory(category.name)}
//               onMouseLeave={() => setActiveCategory(null)}
//             >
//               <a
//                 href="#"
//                 className={`block hover:text-blue-600 hover:underline ${category.isRed ? 'text-red-600' : ''}`}
//               >
//                 {category.name}
//               </a>
//               {category.subCategories && activeCategory === category.name && (
//                 <div className="absolute top-full left-0 mt-3 p-4 bg-white border border-gray-200 rounded-md shadow-lg min-w-[200px]">
//                   <ul className="space-y-2">
//                     {category.subCategories.map((sub, subIndex) => (
//                       <li key={subIndex}>
//                         <a href="#" className="block py-1 hover:text-blue-600">
//                           {sub.name}
//                           {sub.isNew && (
//                             <span className="ml-2 px-2 py-0.5 text-xs font-bold text-white bg-blue-500 rounded-full">NEW</span>
//                           )}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Mobile Menu Panel */}
//       <div
//         className={`fixed top-0 left-0 h-full w-3/4 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
//           isMenuOpen ? 'translate-x-0' : '-translate-x-full'
//         } lg:hidden z-40 overflow-y-auto`}
//       >
//         <div className="flex justify-between items-center p-4 border-b">
//           <h2 className="text-lg font-bold">Menu</h2>
//           <button
//             onClick={toggleMenu}
//             className="p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
//           >
//             <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>
//         <div className="p-4 space-y-4">
//           <ul className="space-y-4">
//             <li><a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Help is here</a></li>
//             <li><a href="#" className="block py-2 text-gray-700 hover:text-blue-600">My Projects</a></li>
//             <li><a href="#" className="block py-2 text-gray-700 hover:text-blue-600">My Favorites</a></li>
//             <li><a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Sign in</a></li>
//           </ul>
//           <div className="border-t border-gray-200 mt-4 pt-4">
//             <h3 className="font-bold text-gray-800 mb-2">Categories</h3>
//             <ul className="space-y-2">
//               {categories.map((category, index) => (
//                 <li key={index}>
//                   <a
//                     href="#"
//                     className={`block py-1 text-gray-700 hover:text-blue-600 ${category.isRed ? 'text-red-600 font-medium' : ''}`}
//                   >
//                     {category.name}
//                   </a>
//                   {category.subCategories && (
//                     <ul className="ml-4 mt-2 space-y-1">
//                       {category.subCategories.map((sub, subIndex) => (
//                         <li key={subIndex}>
//                           <a href="#" className="block text-sm text-gray-600 hover:text-blue-500">
//                             {sub.name}
//                             {sub.isNew && (
//                               <span className="ml-2 px-1.5 py-0.5 text-xs font-bold text-white bg-blue-500 rounded-full">NEW</span>
//                             )}
//                           </a>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// components/Navbar.js
// import React, { useState, useEffect, useRef } from "react";
// // import {
// //   FaRegQuestionCircle,
// //   FaListUl,
// //   FaRegNewspaper,
// //   FaImage,
// // } from "react-icons/fa";

// export default function App() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeCategory, setActiveCategory] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");

//   const menuRef = useRef(null);
//   const menuButtonRef = useRef(null);
//   const dropdownRef = useRef(null);

//   // Handles outside clicks to close the mobile menu and desktop dropdowns
//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (
//         isMenuOpen &&
//         menuRef.current &&
//         !menuRef.current.contains(event.target) &&
//         menuButtonRef.current &&
//         !menuButtonRef.current.contains(event.target)
//       ) {
//         setIsMenuOpen(false);
//       }
//       if (
//         activeCategory &&
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target)
//       ) {
//         setActiveCategory(null);
//       }
//     };

//     document.addEventListener("mousedown", handleOutsideClick);
//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//     };
//   }, [isMenuOpen, activeCategory]);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const categories = [
//     {
//       name: "View All",
//       isRed: false,
//       path: "/products",
//       subCategories: [
//         { name: "Standard Visiting Cards", path: "/visiting-cards/standard" },
//         { name: "Classic Visiting Cards", path: "/visiting-cards/classic" },
//         {
//           name: "Rounded Corner Visiting Cards",
//           path: "/visiting-cards/rounded",
//         },
//         { name: "Square Visiting Cards", path: "/visiting-cards/square" },
//         { name: "Leaf Visiting Cards", path: "/visiting-cards/leaf" },
//         { name: "Oval Visiting Cards", path: "/visiting-cards/oval" },
//         { name: "Circle Visiting Cards", path: "/visiting-cards/circle" },
//       ],
//     },
//     {
//       name: "Custom T-shirts",
//       isRed: false,
//       path: "/t-shirt_manufacturing",
//       subCategories: [
//         { name: "Standard Visiting Cards", path: "/t-shirt_manufacturing" },
//         { name: "Classic Visiting Cards", path: "/visiting-cards/classic" },
//         {
//           name: "Rounded Corner Visiting Cards",
//           path: "/visiting-cards/rounded",
//         },
//         { name: "Square Visiting Cards", path: "/visiting-cards/square" },
//         { name: "Leaf Visiting Cards", path: "/visiting-cards/leaf" },
//         { name: "Oval Visiting Cards", path: "/visiting-cards/oval" },
//         { name: "Circle Visiting Cards", path: "/visiting-cards/circle" },
//       ],
//     },
//     {
//       name: "Caps & Bags Manufacturing",
//       isRed: false,
//       path: "/bag_manufacturing",
//       subCategories: [
//         { name: "Brilliant Finishes", isHeader: true, path: null }, 
//         { name: "Spot UV Visiting Cards", path: "/visiting-cards/spot-uv" },
//         {
//           name: "Raised Foil Visiting Cards",
//           path: "/visiting-cards/raised-foil",
//         },
//         { name: "Standard Papers", isHeader: true, path: null },
//         { name: "Glossy Visiting Cards", path: "/visiting-cards/glossy" },
//         { name: "Matte Visiting Cards", path: "/visiting-cards/matte" },
//       ],
//     },
//     {
//       name: "Stamps and Ink",
//       isRed: false,
//       path: "/digital_printing",
//       subCategories: null,
//     },
//     {
//       name: "Cap Manufacturing",
//       isRed: false,
//       path: "/cap_manufacturing",
//       subCategories: null,
//     },
//     {
//       name: "Mug Manufacturing",
//       isRed: false,
//       path: "/mug_manufacturing",
//       subCategories: null,
//     },
//     {
//       name: "Bulk Orders",
//       isRed: false,
//       path: "/contact", 
//       subCategories: null,
//     },
//     {
//       name: "Custom Drinkware",
//       isRed: false,
//       path: "/custom_drinkware", 
//     },
//     {
//       name: "School Staff Uniform",
//       path: "/school_uniform",
//       subCategories: null,
//     },
//   ];

//   // Filter categories based on search query
//   const filteredCategories = categories.filter((category) => {
//     if (category.name.toLowerCase().includes(searchQuery.toLowerCase())) {
//       return true;
//     }
//     if (category.subCategories) {
//       return category.subCategories.some((sub) =>
//         sub.name.toLowerCase().includes(searchQuery.toLowerCase()),
//       );
//     }
//     return false;
//   });

//   // Social media icons
//   const socialMedia = [
//     {
//       name: "Facebook",
//       icon: (
//         <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//           <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.505 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.77l-.443 2.89h-2.327v6.987A10 10 0 0022 12z" />
//         </svg>
//       ),
//     },
//     {
//       name: "Instagram",
//       icon: (
//         <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//           <path d="M12 2c2.716 0 3.056.01 4.122.06c1.065.05 1.79.217 2.427.464 1.259.485 2.193 1.419 2.678 2.678.247.637.414 1.362.465 2.427.05 1.066.06 1.406.06 4.122s-.01 3.056-.06 4.122c-.05 1.065-.217 1.79-.464 2.427-1.259 1.259-2.73 1.964-4.885 2.195-1.09.117-1.782.175-3.837.175s-2.747-.058-3.837-.175c-2.155-.231-3.626-.936-4.885-2.195-.247-.637-.414-1.362-.464-2.427-.05-1.066-.06-1.406-.06-4.122s.01-3.056.06-4.122c.05-1.065.217-1.79.464-2.427.485-1.259 1.419-2.193 2.678-2.678.637-.247 1.362-.414 2.427-.464 1.066-.05 1.406-.06 4.122-.06zM12 4.07c-2.716 0-3.056.01-4.122.06-1.065.05-1.79.217-2.427.464-1.259.485-2.193 1.419-2.678 2.678-.247.637-.414 1.362-.465 2.427-.05 1.066-.06 1.406-.06 4.122s.01 3.056.06 4.122c.05 1.065.217 1.79.464 2.427 1.259 1.259 2.73 1.964 4.885 2.195 1.09.117 1.782.175 3.837.175s2.747-.058 3.837-.175c2.155-.231 3.626-.936 4.885-2.195.247-.637.414-1.362.464-2.427.05-1.066.06-1.406.06-4.122s-.01-3.056-.06-4.122c-.05-1.065-.217-1.79-.464-2.427-1.259-1.259-2.193-2.193-2.678-2.678-.637-.247-1.362-.414-2.427-.464-1.066-.05-1.406-.06-4.122-.06zM12 8.56c-1.897 0-3.44 1.543-3.44 3.44s1.543 3.44 3.44 3.44 3.44-1.543 3.44-3.44-1.543-3.44-3.44-3.44zm0 5.44c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z" />
//         </svg>
//       ),
//     },
//     {
//       name: "Twitter",
//       icon: (
//         <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//           <path d="M22 5.862c-.7.311-1.455.518-2.25.61a4.34 4.34 0 001.91-2.164 8.74 8.74 0 01-2.477.948 4.364 4.364 0 00-7.447 3.98A12.378 12.378 0 013.784 4.17c-.4.686-.628 1.488-.628 2.33a4.34 4.34 0 001.916 3.615 4.33 4.33 0 01-1.964-.543v.055a4.34 4.34 0 003.486 4.264 4.417 4.417 0 01-1.967.075 4.35 4.35 0 004.053 3.018A8.724 8.724 0 013 18.04c-.218 0-.435-.013-.652-.04a12.32 12.32 0 006.678 1.96c8.01 0 12.385-6.634 12.385-12.385s-.018-1.89-.047-2.676z" />
//         </svg>
//       ),
//     },
//     {
//       name: "LinkedIn",
//       icon: (
//         <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//           <path d="M20.5 2h-17a.5.5 0 00-.5.5v17a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-17a.5.5 0 00-.5-.5zM8 19H5v-9h3v9zM6.5 8a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM19 19h-3v-4.5c0-1.14-.86-1.5-1.5-1.5a1.5 1.5 0 00-1.5 1.5v4.5h-3v-9h3v1.5c.42-.71 1.23-1.5 3-1.5a4 4 0 014 4v5z" />
//         </svg>
//       ),
//     },
//   ];

//   const handleCategoryClick = (categoryName) => {
//     setActiveCategory(activeCategory === categoryName ? null : categoryName);
//   };

//   return (
//     <nav className="fixed top-0 z-50 w-full bg-white font-sans shadow-sm transition-all duration-300">
//       {/* Top Bar for Desktop and Mobile */}
//       <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
//         {/* Left Section (Mobile: Menu & Search, Desktop: Logo) */}
//         <div className="flex items-center">
//           {/* Mobile Menu Icon */}
//           <button
//             ref={menuButtonRef}
//             onClick={toggleMenu}
//             className="rounded-md p-2 text-gray-700 hover:text-gray-900 focus:ring-2 focus:ring-gray-500 focus:outline-none focus:ring-inset lg:hidden"
//           >
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//           {/* Mobile Search Icon */}
//           <button className="ml-2 rounded-md p-2 text-gray-700 hover:text-gray-900 focus:ring-2 focus:ring-gray-500 focus:outline-none focus:ring-inset lg:hidden">
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//               />
//             </svg>
//           </button>
//           {/* Desktop Logo */}
//           <img
//             src="/images/logo/logo-crosswile.jpg"
//             alt="Crosswile Logo"
//             className="mr-8 hidden h-8 lg:block lg:h-10"
//           />
//         </div>

//         {/* Middle Section (Search Bar) */}
//         <div className="mx-4 hidden max-w-xl flex-1 lg:block">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full rounded-full border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-gray-200 focus:outline-none"
//             />
//             <button className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
//               <svg
//                 className="h-5 w-5"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Logo */}
//         <div className="flex flex-grow justify-center lg:hidden">
//           <img
//             src="/images/logo/logo-crosswile.jpg"
//             alt="Crosswile Logo"
//             className="h-8"
//           />
//         </div>

//         {/* Right Section (Icons & Links) */}
//         <div className="flex items-center space-x-6">
//           <div className="hidden items-center space-x-6 text-gray-600 lg:flex">
//             <a
//               href="/about"
//               className="flex items-center transition-colors hover:text-gray-900"
//             >
//               <FaRegQuestionCircle className="mr-1 h-5 w-5" />
//               About
//             </a>
//             <a
//               href="/our_process"
//               className="flex items-center transition-colors hover:text-gray-900"
//             >
//               <FaListUl className="mr-1 h-5 w-5" />
//               Our Process
//             </a>
//             <a
//               href="/blog"
//               className="flex items-center transition-colors hover:text-gray-900"
//             >
//               <FaRegNewspaper className="mr-1 h-5 w-5" />
//               Blogs
//             </a>
//             <a
//               href="/image-gallery"
//               className="flex items-center transition-colors hover:text-gray-900"
//             >
//               <FaImage className="mr-1 h-5 w-5" />
//               Gallery
//             </a>
//             <a
//               href="/contact"
//               className="flex items-center transition-colors hover:text-gray-900"
//             >
//               <svg
//                 className="h-5 w-5"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                 />
//               </svg>
//               Contact
//             </a>
//           </div>
//           <a
//             href="#"
//             className="flex items-center text-gray-600 transition-colors hover:text-gray-900"
//           >
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M3 3h18l-1 16H4L3 3zM1 3h22"
//               />
//             </svg>
//             <span className="ml-1 hidden lg:block">Cart</span>
//           </a>
//         </div>
//       </div>

//       {/* Second Row for Desktop (Category Links) */}
//       <div className="hidden justify-center border-t border-gray-200 lg:flex">
//         <ul className="flex items-center space-x-8 px-8 py-3 text-sm text-gray-700">
//           {filteredCategories.map((category, index) => (
//             <li key={index} className="relative" ref={dropdownRef}>
//               <button
//                 onClick={() => handleCategoryClick(category.name)}
//                 className={`flex items-center hover:text-blue-600 ${category.isRed ? "text-red-600" : ""}`}
//               >
//                 {category.name}
//                 {category.subCategories && (
//                   <svg
//                     className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${activeCategory === category.name ? "rotate-180" : ""}`}
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 )}
//               </button>
//               {category.subCategories && (
//                 <div
//                   className={`absolute top-full left-0 z-50 mt-3 min-w-[200px] rounded-md border border-gray-200 bg-white p-4 shadow-lg transition-all duration-300 ease-in-out ${
//                     activeCategory === category.name
//                       ? "visible scale-100 opacity-100"
//                       : "invisible scale-95 opacity-0"
//                   }`}
//                 >
//                   <ul className="space-y-2">
//                     {category.subCategories.map((sub, subIndex) => (
//                       <li key={subIndex}>
//                         <a href="#" className="block py-1 hover:text-blue-600">
//                           {sub.name}
//                           {sub.isNew && (
//                             <span className="ml-2 rounded-full bg-blue-500 px-2 py-0.5 text-xs font-bold text-white">
//                               NEW
//                             </span>
//                           )}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Mobile Menu Panel */}
//       <div
//         ref={menuRef}
//         className={`fixed top-0 left-0 z-40 h-full w-3/4 transform overflow-y-auto bg-white shadow-xl transition-transform duration-300 ease-in-out lg:hidden ${
//           isMenuOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="flex items-center justify-between border-b p-4">
//           <h2 className="text-lg font-bold">Menu</h2>
//           <button
//             onClick={toggleMenu}
//             className="rounded-md p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
//           >
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//         </div>
//         <div className="space-y-4 p-4">
//           <ul className="space-y-4">
//             <li>
//               <a
//                 href="/about"
//                 className="block py-2 text-gray-700 hover:text-blue-600"
//               >
//                 About
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/our_process"
//                 className="block py-2 text-gray-700 hover:text-blue-600"
//               >
//                 Our Process
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/blog"
//                 className="block py-2 text-gray-700 hover:text-blue-600"
//               >
//                 Blogs
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/image-gallery"
//                 className="block py-2 text-gray-700 hover:text-blue-600"
//               >
//                 Gallery
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/contact"
//                 className="block py-2 text-gray-700 hover:text-blue-600"
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>
//           <div className="mt-4 border-t border-gray-200 pt-4">
//             <h3 className="mb-2 font-bold text-gray-800">Categories</h3>
//             <ul className="space-y-2">
//               {filteredCategories.map((category, index) => (
//                 <li key={index}>
//                   <a
//                     href="#"
//                     onClick={() => handleCategoryClick(category.name)}
//                     className={`flex items-center justify-between py-1 text-gray-700 hover:text-blue-600 ${category.isRed ? "font-medium text-red-600" : ""}`}
//                   >
//                     {category.name}
//                     {category.subCategories && (
//                       <svg
//                         className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${activeCategory === category.name ? "rotate-180" : ""}`}
//                         fill="currentColor"
//                         viewBox="0 0 20 20"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                     )}
//                   </a>
//                   {category.subCategories &&
//                     activeCategory === category.name && (
//                       <ul className="mt-2 ml-4 space-y-1">
//                         {category.subCategories.map((sub, subIndex) => (
//                           <li key={subIndex}>
//                             <a
//                               href="#"
//                               className="block text-sm text-gray-600 hover:text-blue-500"
//                             >
//                               {sub.name}
//                               {sub.isNew && (
//                                 <span className="ml-2 rounded-full bg-blue-500 px-1.5 py-0.5 text-xs font-bold text-white">
//                                   NEW
//                                 </span>
//                               )}
//                             </a>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="mt-4 border-t border-gray-200 pt-4">
//             <h3 className="mb-2 font-bold text-gray-800">Follow Us</h3>
//             <div className="flex space-x-4">
//               {socialMedia.map((social, index) => (
//                 <a
//                   key={index}
//                   href="#"
//                   className="h-6 w-6 text-gray-600 transition-colors hover:text-blue-600"
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }



import React, { useState, useEffect, useRef } from "react";
import Link from "next/link"; // **1. Import the Next.js Link component**
import {
  FaRegQuestionCircle,
  FaListUl,
  FaRegNewspaper,
  FaImage,
} from "react-icons/fa";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const dropdownRef = useRef(null);

  // Handles outside clicks to close the mobile menu and desktop dropdowns
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
      if (
        activeCategory &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setActiveCategory(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen, activeCategory]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const categories = [
    {
      name: "View All",
      isRed: false,
      path: "/products",
      subCategories: [
        { name: "Standard Visiting Cards", path: "/visiting-cards/standard" },
        { name: "Classic Visiting Cards", path: "/visiting-cards/classic" },
        {
          name: "Rounded Corner Visiting Cards",
          path: "/visiting-cards/rounded",
        },
        { name: "Square Visiting Cards", path: "/visiting-cards/square" },
        { name: "Leaf Visiting Cards", path: "/visiting-cards/leaf" },
        { name: "Oval Visiting Cards", path: "/visiting-cards/oval" },
        { name: "Circle Visiting Cards", path: "/visiting-cards/circle" },
      ],
    },
    {
      name: "Custom T-shirts",
      isRed: false,
      path: "/t-shirt_manufacturing",
      subCategories: [
        { name: "Standard Visiting Cards", path: "/t-shirt_manufacturing" },
        { name: "Classic Visiting Cards", path: "/visiting-cards/classic" },
        {
          name: "Rounded Corner Visiting Cards",
          path: "/visiting-cards/rounded",
        },
        { name: "Square Visiting Cards", path: "/visiting-cards/square" },
        { name: "Leaf Visiting Cards", path: "/visiting-cards/leaf" },
        { name: "Oval Visiting Cards", path: "/visiting-cards/oval" },
        { name: "Circle Visiting Cards", path: "/visiting-cards/circle" },
      ],
    },
    {
      name: "Caps & Bags Manufacturing",
      isRed: false,
      path: "/bag_manufacturing",
      subCategories: [
        { name: "Brilliant Finishes", isHeader: true, path: null },
        { name: "Spot UV Visiting Cards", path: "/visiting-cards/spot-uv" },
        {
          name: "Raised Foil Visiting Cards",
          path: "/visiting-cards/raised-foil",
        },
        { name: "Standard Papers", isHeader: true, path: null },
        { name: "Glossy Visiting Cards", path: "/visiting-cards/glossy" },
        { name: "Matte Visiting Cards", path: "/visiting-cards/matte" },
      ],
    },
    {
      name: "Stamps and Ink",
      isRed: false,
      path: "/digital_printing",
      subCategories: null,
    },
    {
      name: "Cap Manufacturing",
      isRed: false,
      path: "/cap_manufacturing",
      subCategories: null,
    },
    {
      name: "Mug Manufacturing",
      isRed: false,
      path: "/mug_manufacturing",
      subCategories: null,
    },
    {
      name: "Bulk Orders",
      isRed: false,
      path: "/contact",
      subCategories: null,
    },
    {
      name: "Custom Drinkware",
      isRed: false,
      path: "/custom_drinkware",
    },
    {
      name: "School Staff Uniform",
      path: "/school_uniform",
      subCategories: null,
    },
  ];

  // Filter categories based on search query
  const filteredCategories = categories.filter((category) => {
    if (category.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return true;
    }
    if (category.subCategories) {
      return category.subCategories.some((sub) =>
        sub.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }
    return false;
  });

  // Social media icons
  const socialMedia = [
    {
      name: "Facebook",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.505 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.77l-.443 2.89h-2.327v6.987A10 10 0 0022 12z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2c2.716 0 3.056.01 4.122.06c1.065.05 1.79.217 2.427.464 1.259.485 2.193 1.419 2.678 2.678.247.637.414 1.362.465 2.427.05 1.066.06 1.406.06 4.122s-.01 3.056-.06 4.122c-.05 1.065-.217 1.79-.464 2.427-1.259 1.259-2.73 1.964-4.885 2.195-1.09.117-1.782.175-3.837.175s-2.747-.058-3.837-.175c-2.155-.231-3.626-.936-4.885-2.195-.247-.637-.414-1.362-.464-2.427-.05-1.066-.06-1.406-.06-4.122s.01-3.056.06-4.122c.05-1.065.217-1.79.464-2.427.485-1.259 1.419-2.193 2.678-2.678.637-.247 1.362-.414 2.427-.464 1.066-.05 1.406-.06 4.122-.06zM12 4.07c-2.716 0-3.056.01-4.122.06-1.065.05-1.79.217-2.427.464-1.259.485-2.193 1.419-2.678 2.678-.247.637-.414 1.362-.465 2.427-.05 1.066-.06 1.406-.06 4.122s.01 3.056.06 4.122c.05 1.065.217 1.79.464 2.427 1.259 1.259 2.73 1.964 4.885 2.195 1.09.117 1.782.175 3.837.175s2.747-.058 3.837-.175c2.155-.231 3.626-.936 4.885-2.195.247-.637.414-1.362.464-2.427.05-1.066.06-1.406.06-4.122s-.01-3.056-.06-4.122c-.05-1.065-.217-1.79-.464-2.427-1.259-1.259-2.193-2.193-2.678-2.678-.637-.247-1.362-.414-2.427-.464-1.066-.05-1.406-.06-4.122-.06zM12 8.56c-1.897 0-3.44 1.543-3.44 3.44s1.543 3.44 3.44 3.44 3.44-1.543 3.44-3.44-1.543-3.44-3.44-3.44zm0 5.44c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22 5.862c-.7.311-1.455.518-2.25.61a4.34 4.34 0 001.91-2.164 8.74 8.74 0 01-2.477.948 4.364 4.364 0 00-7.447 3.98A12.378 12.378 0 013.784 4.17c-.4.686-.628 1.488-.628 2.33a4.34 4.34 0 001.916 3.615 4.33 4.33 0 01-1.964-.543v.055a4.34 4.34 0 003.486 4.264 4.417 4.417 0 01-1.967.075 4.35 4.35 0 004.053 3.018A8.724 8.724 0 013 18.04c-.218 0-.435-.013-.652-.04a12.32 12.32 0 006.678 1.96c8.01 0 12.385-6.634 12.385-12.385s-.018-1.89-.047-2.676z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.5 2h-17a.5.5 0 00-.5.5v17a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-17a.5.5 0 00-.5-.5zM8 19H5v-9h3v9zM6.5 8a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM19 19h-3v-4.5c0-1.14-.86-1.5-1.5-1.5a1.5 1.5 0 00-1.5 1.5v4.5h-3v-9h3v1.5c.42-.71 1.23-1.5 3-1.5a4 4 0 014 4v5z" />
        </svg>
      ),
    },
  ];

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(activeCategory === categoryName ? null : categoryName);
  };

  return (
    
    <nav className="fixed top-0 z-50 w-full bg-white font-sans shadow-sm transition-all duration-300">
     
      {/* Top Bar for Desktop and Mobile */}
      <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Left Section (Mobile: Menu & Search, Desktop: Logo) */}
        <div className="flex items-center">
          {/* Mobile Menu Icon (Hamburger) */}
          <button
            ref={menuButtonRef}
            onClick={toggleMenu}
            className="rounded-md p-2 text-gray-700 hover:text-gray-900 focus:ring-2 focus:ring-gray-500 focus:outline-none focus:ring-inset lg:hidden"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {/* Mobile Search Icon */}
          {/* <button className="ml-2 rounded-md p-2 text-gray-700 hover:text-gray-900 focus:ring-2 focus:ring-gray-500 focus:outline-none focus:ring-inset lg:hidden">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button> */}
          {/* Desktop Logo (Assuming it's a link to the homepage) */}
          <Link href="/">
          <div className="h-8 w-auto flex items-center">
  <img
    src="/images/logo/logo-crosswile.jpg"
    alt="Crosswile Logo"
    className="h-15 w-auto object-contain mr-8 hidden cursor-pointer lg:block"
  />
</div>
          </Link>
        </div>

        {/* Middle Section (Search Bar) */}
        {/* <div className="mx-4 hidden max-w-xl flex-1 lg:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-gray-200 focus:outline-none"
            />
            <button className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div> */}

        {/* Mobile Logo (Assuming it's a link to the homepage) */}
       <div className="flex w-full justify-center lg:hidden mt-2">
  <Link href="/">
    <img
      src="/images/logo/logo-crosswile.jpg"
      alt="Crosswile Logo"
      className="w-20 h-auto cursor-pointer"
    />
  </Link>
</div>


        {/* Right Section (Icons & Links) */}
        <div className="flex items-center space-x-6">
          <div className="hidden items-center space-x-6 text-gray-600 lg:flex">
            {/* **2. Converted anchor tags to Link components** */}
            <Link
              href="/about"
              className="flex items-center transition-colors hover:text-gray-900"
            >
              <FaRegQuestionCircle className="mr-1 h-5 w-5" />
              About
            </Link>
            <Link
              href="/our_process"
              className="flex items-center transition-colors hover:text-gray-900"
            >
              <FaListUl className="mr-1 h-5 w-5" />
              Our Process
            </Link>
            <Link
              href="/blog"
              className="flex items-center transition-colors hover:text-gray-900"
            >
              <FaRegNewspaper className="mr-1 h-5 w-5" />
              Blogs
            </Link>
            <Link
              href="/image-gallery"
              className="flex items-center transition-colors hover:text-gray-900"
            >
              <FaImage className="mr-1 h-5 w-5" />
              Gallery
            </Link>
            <Link
              href="/contact"
              className="flex items-center transition-colors hover:text-gray-900"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Contact
            </Link>
          </div>
          {/* <Link
            href="/cart" // Changed from href="#"
            className="flex items-center text-gray-600 transition-colors hover:text-gray-900"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h18l-1 16H4L3 3zM1 3h22"
              />
            </svg>
            <span className="ml-1 hidden lg:block">Cart</span>
          </Link> */}
        </div>
      </div>

      {/* Second Row for Desktop (Category Links) */}
      <div className="hidden justify-center border-t border-gray-200 lg:flex">
        <ul className="flex items-center space-x-8 px-8 py-3 text-sm text-gray-700">
          {filteredCategories.map((category, index) => (
            <li key={index} className="relative">
              <Link
                href={category.path || "#"} // Use Link for main category
                className={`flex items-center hover:text-blue-600 ${category.isRed ? "text-red-600" : ""}`}
                // If it has sub-categories and we want a dropdown on click, we prevent default navigation
                onClick={(e) => {
                  if (category.subCategories) {
                    e.preventDefault(); // Prevent default if it's a dropdown toggle
                    handleCategoryClick(category.name);
                  } else if (category.path) {
                    setActiveCategory(null); // Close dropdown on navigation
                  }
                }}
              >
                {category.name}
                {category.subCategories && (
                  <svg
                    className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${activeCategory === category.name ? "rotate-180" : ""}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </Link>
              {category.subCategories && (
                <div
                  ref={activeCategory === category.name ? dropdownRef : null}
                  className={`absolute top-full left-0 z-50 mt-3 min-w-[200px] rounded-md border border-gray-200 bg-white p-4 shadow-lg transition-all duration-300 ease-in-out ${
                    activeCategory === category.name
                      ? "visible scale-100 opacity-100"
                      : "invisible scale-95 opacity-0"
                  }`}
                >
                  <ul className="space-y-2">
                    {category.subCategories.map((sub, subIndex) => (
                      <li key={subIndex}>
                        {/* **3. Converted sub-category anchor tags to Link components with correct path** */}
                        {sub.path ? (
                          <Link
                            href={sub.path}
                            className="block py-1 hover:text-blue-600"
                            onClick={() => setActiveCategory(null)} // Close menu on click
                          >
                            {sub.name}
                            {sub.isNew && (
                              <span className="ml-2 rounded-full bg-blue-500 px-2 py-0.5 text-xs font-bold text-white">
                                NEW
                              </span>
                            )}
                          </Link>
                        ) : (
                          // If path is null (e.g., for headers)
                          <span
                            className={`block py-1 ${sub.isHeader ? "font-bold text-gray-800" : ""}`}
                          >
                            {sub.name}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Panel */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 z-40 h-full w-3/4 transform overflow-y-auto bg-white shadow-xl transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-lg font-bold">Menu</h2>
          <button
            onClick={toggleMenu}
            className="rounded-md p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="space-y-4 p-4">
          <ul className="space-y-4">
            {/* Mobile Menu Links */}
            <li>
              <Link
                href="/about"
                className="block py-2 text-gray-700 hover:text-blue-600"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/our_process"
                className="block py-2 text-gray-700 hover:text-blue-600"
                onClick={toggleMenu}
              >
                Our Process
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="block py-2 text-gray-700 hover:text-blue-600"
                onClick={toggleMenu}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/image-gallery"
                className="block py-2 text-gray-700 hover:text-blue-600"
                onClick={toggleMenu}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 text-gray-700 hover:text-blue-600"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="mt-4 border-t border-gray-200 pt-4">
            <h3 className="mb-2 font-bold text-gray-800">Categories</h3>
            <ul className="space-y-2">
              {filteredCategories.map((category, index) => (
                <li key={index}>
                  <Link
                    href={category.path || "#"}
                    className={`flex items-center justify-between py-1 text-gray-700 hover:text-blue-600 ${category.isRed ? "font-medium text-red-600" : ""}`}
                    onClick={(e) => {
                      if (category.subCategories) {
                        e.preventDefault(); // Prevent default if it's a dropdown toggle
                        handleCategoryClick(category.name);
                      } else if (category.path) {
                        toggleMenu(); // Close mobile menu on navigation
                      }
                    }}
                  >
                    {category.name}
                    {category.subCategories && (
                      <svg
                        className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${activeCategory === category.name ? "rotate-180" : ""}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </Link>
                  {category.subCategories &&
                    activeCategory === category.name && (
                      <ul className="mt-2 ml-4 space-y-1">
                        {category.subCategories.map((sub, subIndex) => (
                          <li key={subIndex}>
                            {/* **4. Converted mobile sub-category anchor tags to Link components** */}
                            {sub.path ? (
                              <Link
                                href={sub.path}
                                className="block text-sm text-gray-600 hover:text-blue-500"
                                onClick={toggleMenu} // Close mobile menu on click
                              >
                                {sub.name}
                                {sub.isNew && (
                                  <span className="ml-2 rounded-full bg-blue-500 px-1.5 py-0.5 text-xs font-bold text-white">
                                    NEW
                                  </span>
                                )}
                              </Link>
                            ) : (
                              <span
                                className={`block text-sm ${sub.isHeader ? "font-bold text-gray-800" : "text-gray-600"}`}
                              >
                                {sub.name}
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 border-t border-gray-200 pt-4">
            <h3 className="mb-2 font-bold text-gray-800">Follow Us</h3>
            <div className="flex space-x-4">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href="#" // Assuming external links or placeholder
                  className="h-6 w-6 text-gray-600 transition-colors hover:text-blue-600"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
    </nav>
  );
}

