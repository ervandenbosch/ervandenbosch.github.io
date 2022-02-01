import * as React from "react";
import Link from "next/link";
import Bounce from "react-reveal/Bounce";

const Header = (props) => {

  return (
    <>
      <header>
        <div className="icons">
                    <Bounce delay={1000}>
                      <a href="https://github.com/ervandenbosch">
                        <i className="fa fa-github" aria-hidden="true"></i>
                      </a>
                    </Bounce>
                    
                    <Bounce delay={1000}>
                      <a href="https://www.linkedin.com/in/ervandenbosch/">
                        <i
                          className="fa fa-linkedin-square"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </Bounce>
                  </div>
  
        <ul className="links">
           <li>
            <Link href="mailto:ezravdb@gmail.com">Contact Me</Link>
          </li>
        </ul>
      </header>
    </>
  );
};
export default Header;