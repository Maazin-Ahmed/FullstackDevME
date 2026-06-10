import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maazin Ahmed | Full Stack Developer",
  description: "Full Stack Developer with experience designing complete systems from frontend interfaces to backend services, cloud deployment, and AI-powered workflows.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Python", "Node.js", "PostgreSQL", "AWS", "AI integrations", "Maazin Ahmed"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="glow-bg animated-glow" style={{ top: '-10%', left: '-10%', width: '80%', height: '80%' }}></div>
        <div className="glow-bg animated-glow" style={{ bottom: '-10%', right: '-10%', width: '80%', height: '80%', opacity: 0.3, background: 'radial-gradient(circle, var(--secondary) 0%, rgba(11, 15, 25, 0) 70%)' }}></div>
        {children}
      </body>
    </html>
  );
}
