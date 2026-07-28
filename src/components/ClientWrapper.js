import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ClientWrapper({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
