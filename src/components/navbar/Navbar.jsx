import { FaGithub, FaLinkedin, FaPhoneSquareAlt } from "react-icons/fa";
import { MdMarkEmailUnread, MdLocationCity } from "react-icons/md";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="contacts">
        <a href="">
          <FaPhoneSquareAlt />
          +359887939060
        </a>
        <a href="https://www.google.com/maps/place/%D0%A1%D0%BE%D1%84%D0%B8%D1%8F/@42.695314,23.1591383,11z/data=!3m1!4b1!4m6!3m5!1s0x40aa8682cb317bf5:0x400a01269bf5e60!8m2!3d42.6977082!4d23.3218675!16zL20vMGZ0ang?hl=bg&entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D" target="_blank">
          <MdLocationCity />
          Sofia,Bulgaria
        </a>
        <a href="mailto:ilieva1maya@gmail.com" target="_blank">
          <MdMarkEmailUnread />
          ilieva1maya@gmail.com
        </a>
        <a href="https://github.com/ilieva1maya" target="_blank">
          <FaGithub />
          https://github.com/ilieva1maya
        </a>
        <a
          href="https://www.linkedin.com/in/maya-ilieva-2594787b/"
          target="_blank"
        >
          <FaLinkedin />
          https://www.linkedin.com/in/maya-ilieva-2594787b/
        </a>
      </div>
    </nav>
  );
}
