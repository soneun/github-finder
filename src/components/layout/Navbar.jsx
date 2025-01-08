import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar({ title }) {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-3xl" />
          <a href="/" className="text-lg font-bold align-middle">
            {title}
          </a>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <a href="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </a>
            <a href="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

//프랍스 타이틀 입력 안했을 때 기본 깃허브 파인더 입력
Navbar.defaultProps = {
  title: "Github Finder",
};

//프랍스 title 타입은 문자열
Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
