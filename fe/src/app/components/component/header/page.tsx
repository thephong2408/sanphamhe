import Search from './search';
import Avt from './avt';
import Menu from './menu';
import { Logo } from './logo';

export default function Header() {
    return (
        <div className="bg-slate-900 sm:h-[60px] h-[40px] flex justify-between items-center xl:px-[150px] lg:px-[40px] px-[5px] text-white sm:text-[15px] text-[12px]">
            {/* logo */}
            <Logo />

            {/* search */}
            <Search />

            {/* avt */}
            <Avt />

            {/* menu */}
            <Menu />
        </div>
    );
}
