import Header from "../../components/Header";

const Layout = ({ children }) => {
  return (
    <div className=" w-[100%]">
      <Header />
      <div className="flex space-x-2 md:space-x-8">{children}</div>
    </div>
  );
};

export default Layout;
