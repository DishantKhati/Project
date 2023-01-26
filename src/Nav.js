import React, { useState, useEffect } from 'react';
import "./Nav.css";

function Nav() {
  const [show, handleshow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleshow(true)
      } else handleshow(false);
    });
    return () => {
      window.removeEventListener("scroll")
    }
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMSysMkGcFAIXT6hDyN21ThBLzKh4NzCuVoQ&usqp=CAU"
        alt="Maxflix Logo"
      />
      <img
        className="nav_avatar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc_8D2LQ6r3SlQFDRKTvkjhNXxLNcuE8JKMQ&usqp=CAU"
        alt="Maxflix Logo"
      />
    </div>
  )
}

export default Nav