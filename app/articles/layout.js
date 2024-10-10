import "../globals.css";


export const metadata = {
  title: "Kodein",
  description: "frontend design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
