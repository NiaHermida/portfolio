import ThemeRegistry from "@themes/ThemeRegistry";
import Navbar from "@components/Navbar";
import Presentation from "@modules/Presentation";
import AboutMe from "@modules/AboutMe";
import Projects from "@modules/Projects";
import Skills from "@modules/Skills";
import Contact from "@modules/Contact";
import Footer from "@components/Footer";
import "./globals.scss";

export const metadata = {
  title: "Portfolio",
  description: "",
};

const RootLayout = async () => {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Navbar />
          <div className="PortfolioContainer">
            <Presentation />
            <AboutMe />
            <Projects />
            <Skills />
            <Contact />
          </div>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
};
export default RootLayout;
