import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <p>Hola! Mi nombre es</p>
    <h1>Marina Moreno</h1>
    <p>Soy una estudiante cursando actualmente un Máster en Desarrollo Full-Stack y un ciclo de Desarrollo de Aplicaciones Multiplataforma (DAM). Resido en Barcelona desde que nací aquí, y estoy en busca de oportunidades y nuevos retos que me hagan crecer y mejorar como programadora.</p>
    <a href="mailto:marina10paula5@gmail.com">Contacta conmigo →</a>
    </section>`;
};