import logo from "./images/react.png";
function Header() {
  return (
    <div className="pt-3 py-2 pl-2" style={{ backgroundColor: "black" }}>
      <img
        src={logo}
        alt=""
        style={{ height: "35px", verticalAlign: "top" }}
      ></img>
      <span className=" h2 pt-4 px-2 text-white-50">
        React Course - TaskoPedia
      </span>
      ;
    </div>
  );
}
export default Header;
