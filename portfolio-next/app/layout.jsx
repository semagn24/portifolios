import './globals.css';

export const metadata = {
  title: 'Semagn Legese | Full Stack Engineer & System Builder',
  description:
    'Semagn Legese Mildega — Software Engineering student and Full Stack Web Developer. Specializing in high-performance web applications, React, Node.js, and robust database systems.',
  authors: [{ name: 'Semagn Legese Mildega' }],
  manifest: '/manifest.json',
  icons: {
    icon: '/profile.jpg',
    apple: '/profile.jpg',
  },
};

export const viewport = {
  themeColor: '#090a10',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
