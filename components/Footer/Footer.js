import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Contacto</h2>
<div>
${Button("/twitter.png", "Twitter")}
${Button("/github.jpeg", "GitHub", "https://github.com/mmarinarr")}
${Button("/linkedin.jpeg", "LinkedIn", "https://www.linkedin.com/in/marina-moreno-4a2165255/")}
${Button("/telegram.png", "Telegram")}
</div>
`;