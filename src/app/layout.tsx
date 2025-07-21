import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="pt-16 sm:pt-20 lg:pt-24">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
