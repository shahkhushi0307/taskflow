import "./globals.css";

export const metadata = {
  title: "TaskFlow",
  description: "Stay organised. Get things done.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
