import React from "react";


const NavBar = () => {

  return (

    <nav className="navbar">
      <div className="contenedor">
        <div>
         <a href="/"><p>Casino Colonial</p></a>
        
        </div>
        <ul className="lista">
          <li>
            <a href="/clients"><p>Clientes</p></a>
          </li>
          <li>
            <a href="/games"><p>Juegos</p></a>
          </li> 

        </ul>

      </div>
    </nav>
  );
};
  
export default NavBar;
