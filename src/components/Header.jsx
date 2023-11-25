import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
    },
    {
      name: "Login",
      slug: "/login",
    },
    {
      name: "Signup",
      slug: "/signup",
    },
  ];
  return (
    <header className="py-1 shadow bg-blue-200">
      
        <nav className="flex flex-wrap">
          <div className="mr-4"></div>
          <ul className="flex ml-auto">
            {navItems.map((item) => (
              <li
                key={item.name}
                onClick={() => {
                  navigate(item.slug);
                }}
                className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
      
    </header>
  );
}

export default Header;
