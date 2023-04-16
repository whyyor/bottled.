import Header from "@/components/Header";
import NavbarButton from "@/components/NavbarButton";
import Menu from "@/components/Menu";
import InfoCard from "@/components/InfoCard";
import Team from "@/components/Team";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Menu />
      <NavbarButton />
      <Header />
      <InfoCard />
      <Team />
      <Contact />
    </>
  );
}
