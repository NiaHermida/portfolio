import Image from "next/image";
import { Button } from "@mui/material";
import DownloadIcon from "@icons/DownloadIcon";
import EnvelopeIcon from "@icons/EnvelopeIcon";
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
      <div className="PortfolioPresentation__Text">
        <h1 className="PortfolioPresentation__Title">
          <span>Hola, soy </span>
          <span className="PortfolioPresentation__Title__Name">
            Estefanía Hermida
          </span>
        </h1>
        <h2 className="PortfolioPresentation__Subtitle">
          Full Stack Developer & UI/UX entusiasta
        </h2>
        <h3 className="PortfolioPresentation__Description">
          Creo páginas web dinámicas y responsive con JS y React. Me apasiona el
          código limpio, la experiencia de usuario y aprender constantemente.
        </h3>
      </div>
      <div className="PortfolioPresentation__Buttons">
        <Button variant="contained">
          <DownloadIcon />
          Descargar CV
        </Button>
        <Button variant="contained">
          <EnvelopeIcon />
          Estemos en contacto
        </Button>
      </div>
    </div>
  );
};
export default Presentation;
