import HeaderLeft from "../../HeaderLeft";
import HeaderTop from "../../HeaderTop";
function DefaultLayout({ children }) {
  return (
    <div className="w-full flex flex-row">
      <div className="basis-1/6 min-h-[100vh] bg-[#333D54]">
        <HeaderLeft />
      </div>
      <div className="w-full flex flex-col">
        <div className="menutop">
          <HeaderTop />
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
