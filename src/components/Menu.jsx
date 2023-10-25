import React from "react";
import { Link } from "react-router-dom";
import { SlMenu, AiOutlineClose } from "react-icons/ai";

const handleClick = (value, setValue) => {
  setValue(!value)
}

export default function Menu(value, setValue) {
  return (
    <>
      {value ?
        <div>
          <div>
            <button onClick={() => handleClick(value, setValue)}><AiOutlineClose></AiOutlineClose></button>
          </div>
          <div>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Skills</Link>
            <Link>Projects</Link>
          </div>
        </div>
        : <div>
          <button><SlMenu></SlMenu></button>
        </div>}
    </>
  )
}