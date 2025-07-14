import ThemeRegistry from "@themes/ThemeRegistry";
import "./globals.scss";

export const metadata = {
  title: "Portfolio",
  description: "",
};

const RootLayout = async ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
};
export default RootLayout;
