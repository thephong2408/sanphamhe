import Search from "./search";
import Avt from "./avt";
import Menu from "./menu";
import { Logo } from "./logo";
import Nav from "./nav";

export default function Header() {
  return (
    <div>
      <div className="bg-slate-900 sm:h-[80px] h-[60px] flex justify-between items-center xl:px-[150px] lg:px-[40px] px-[5px] text-white sm:text-[15px] text-[12px]">
        {/* logo */}
        <Logo />

        {/* search */}
        <Search />

        {/* avt */}
        <Avt />

        {/* menu */}
        <Menu />
      </div>

      {/* nav */}
      <Nav />
    </div>
  );
}
