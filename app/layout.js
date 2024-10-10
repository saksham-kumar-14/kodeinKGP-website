import "./globals.css";

export const metadata = {
  title: "KodeinKGP",
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
