import { useState } from "react";
import { NavLink } from "react-router-dom";

function DropdownMenu(props) {
  const { icon, title, listItems } = props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" flex flex-col items-center w-full my-5 cursor-pointer">
      <p
        className={`text-gray-300 hover:text-white ${
          isOpen && "text-white"
        } py-2 w-full flex items-center justify-between font-mono text-lg  tracking-wider`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-full mx-2 flex justify-between items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={`${icon}`} />
          </svg>
          <p className="font-bold text-sm italic">{title}</p>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          )}
        </div>
      </p>
      {isOpen && (
        <ul className="w-[90%] p-2 bg-white rounded-md top-12 left-2 flex flex-col items-start ">
          {listItems.map((item, index) => (
            <li className="w-full p-2 rounded-md hover:bg-blue-100 italic">
              <NavLink to={`${item.link}`} className={`text-sm font-bold`}>
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
