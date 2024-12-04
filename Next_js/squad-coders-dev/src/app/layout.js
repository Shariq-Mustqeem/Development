import LayoutComponent from "container/layoutComponent/LayoutComponent";
import "./globals.css";

export const metadata = {
  title: "Squad Coders Dev",
  description: "Squad Coders Dev Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="urdu">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <LayoutComponent>{children}</LayoutComponent>
      </body>
    </html>
  );
}
