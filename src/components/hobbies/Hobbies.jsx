import { FaUtensils, FaPuzzlePiece, FaBookOpen, FaHiking } from "react-icons/fa";
import "./Hobbies.css";

export default function Hobbies() {
    return (
        <section id="hobbies" className="hobbies">
            <h2>Hobbies &amp; Interests</h2>

            <ul className="hobby-list" role="list">
                <li className="hobby-card">
                    <div className="icon-wrap cooking"><FaUtensils aria-hidden="true" /></div>
                    <p><strong>Cooking</strong>: Experimenting with new recipes and cuisines.</p>
                </li>

                <li className="hobby-card">
                    <div className="icon-wrap puzzles"><FaPuzzlePiece aria-hidden="true" /></div>
                    <p><strong>Puzzles</strong>: Solving logic &amp; word puzzles to keep my mind fresh.</p>
                </li>

                <li className="hobby-card">
                    <div className="icon-wrap reading"><FaBookOpen aria-hidden="true" /></div>
                    <p><strong>Reading</strong>: Enjoying a variety of genres — especially children's books.</p>
                </li>

                <li className="hobby-card">
                    <div className="icon-wrap hiking"><FaHiking aria-hidden="true" /></div>
                    <p><strong>Hiking</strong>: Connecting with nature and staying active.</p>
                </li>
            </ul>
        </section>
    );
}