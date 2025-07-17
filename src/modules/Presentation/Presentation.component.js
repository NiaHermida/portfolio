import Image from "next/image";
import "./Presentation.scss";

const Presentation = () => {
  return (
    <div className="PortfolioPresentation">
      <div className="PortfolioPresentation__ImageContainer">
        <Image
        className="PortfolioPresentation__Image"
          src="/profile.png"
          alt="profile picture"
       
          width="550"
          height="550"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <h1>Hola, soy Estefanía Hermida</h1>
      <h2>Full Stack Developer & UI/UX entusiasta</h2>
      <h3>
        Creo páginas web dinámicas y responsive con JS y React. Me apasiona el
        código limpio, la experiencia de usuario y aprender constantemente.
      </h3>
    </div>
  );
};
export default Presentation;
