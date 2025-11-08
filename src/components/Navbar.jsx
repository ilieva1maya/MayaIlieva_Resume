import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

export default function Navbar() {
  return (
    <nav>
      <div className="navbar-nav">
        <a href="mailto:ilieva1maya@gmail.com" target="_blank">
          <MdMarkEmailUnread />
          ilieva1maya@gmail.com
        </a>
        <a href="https://github.com/ilieva1maya" target="_blank">
          <FaGithub />
         https://github.com/ilieva1maya
        </a>
        <a href="https://www.linkedin.com/in/maya-ilieva-2594787b/" target="_blank">
          <FaLinkedin />
          https://www.linkedin.com/in/maya-ilieva-2594787b/
        </a>
      </div>
    </nav>
  );
}
