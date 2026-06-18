import "./globals.css";

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <h1>Barista Training Center</h1>

          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/courses">Courses</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>

        {children}

        <footer className="footer">
          <p>Barista Training Center</p>
        </footer>
      </body>
    </html>
  );
}