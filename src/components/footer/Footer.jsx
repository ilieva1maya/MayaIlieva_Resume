import { RiChatSmileAiLine } from "react-icons/ri";
import "./Footer.css";

export default function Footer() {
    return (
        <div className="footer-container">
            <p><i> Feel free to reach me out if you have any questions or opportunities at</i></p>
            <a href="mailto:ilieva1maya@gmail.com" target="_blank">
                ilieva1maya@gmail.com
            </a>
            <p><i>or via phone at</i></p>
            <a href="">
                +359887939060
            </a>
             <RiChatSmileAiLine />
        </div>
    )
}