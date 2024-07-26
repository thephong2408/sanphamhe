import Swiper from "../components/component/swiper/page";

function Layout1({ children }: { children: React.ReactNode }) {
    return ( <div className="sm:text-[15px] text-[12px]">
        <Swiper/>
       {children}
    </div> );
}

export default Layout1;