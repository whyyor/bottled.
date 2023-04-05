import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Provide from "@/components/Provide"
import NavbarButton from "@/components/NavbarButton";

export default function Home() {
  return (
    <div>
      <NavbarButton />
      <Menu />
      <Header />
      <Provide />
      {/* <Features /> */}
    </div>
  );
}
