import PromoCard from "@components/PromoCards";
import CodeIcon from "@icons/CodeIcon";
import PictureIcon from "@icons/PictureIcon";
import BugIcon from "@icons/BugIcon";
import CogIcon from "@icons/CogIcon";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <div className="PortfolioAboutMe">
      <div className="PortfolioAboutMe__Description">
        <h2 className="PortfolioAboutMe__Title">Mi trayecto</h2>
        <div className="PortfolioAboutMe__Text">
          With over 3 years of experience in web development, I specialize in
          creating dynamic and responsive web applications. My journey started
          with curiosity about how websites work, and it has evolved into a
          passion for crafting digital experiences. I believe in writing clean,
          maintainable code and staying up-to-date with the latest technologies
          and best practices in the industry.
        </div>
      </div>
      <div className="PortfolioAboutMe__Cards">
        <PromoCard
          icon={<CodeIcon />}
          text="Código limpio"
          subtitle="Código mantenible y sin repeticiones"
        />
        <PromoCard
          icon={<PictureIcon />}
          text="Diseño UI/UX"
          subtitle="Diseños lindos y simples de utilizar"
        />
        <PromoCard
          icon={<CogIcon />}
          text="Enfoque en performance"
          subtitle="Diseños lindos y simples de utilizar"
        />
        <PromoCard
          icon={<BugIcon />}
          text="Testing exahustivo"
          subtitle="Webs sin bugs, ni errores molestos"
        />
      </div>
    </div>
  );
};
export default AboutMe;
