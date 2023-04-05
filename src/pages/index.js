import Header from "@/components/Header";
import Menu from "@/components/Menu";
import NavbarButton from "@/components/NavbarButton";

export default function Home() {
  return (
    <div>
      <NavbarButton />
      <Menu />
      <Header />
      {/* <Features /> */}
    </div>
  );
}
