import "./Skills.css";

export default function Skills() {
    return (
        <div id="skills" className="skills">
            <h3 className="technical">Technical Skills</h3>
            <ul className="technical-skills">
                <li><strong>JavaScript (ES6+)</strong></li>
                <li><strong>React.js</strong></li>
                <li>Node.js</li>
                <li><strong>Angular</strong></li>
                <li>TypeScript</li>
                <li><strong>HTML5 & CSS3</strong></li>
                <li>Git & GitHub</li>
                <li>Figma</li>
                <li>MS Office</li>
                <li>SAP ERP</li>
            </ul>
            <h3 className="soft">Soft Skills</h3>
            <ul className="soft-skills">
                <li>Strong <strong>analytical</strong> and <strong>problem-solving</strong> skills</li>
                <li><strong>Adaptability</strong> to changing environments</li>
                <li>Effective communication and <strong>teamwork</strong></li>
                <li><strong>Quick learner</strong> with a passion for continuous learning</li>
                <li><strong>Time management</strong> and organizational skills</li>
            </ul>
        </div>
    );
}
