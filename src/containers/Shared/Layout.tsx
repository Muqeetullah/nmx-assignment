import Sidebar from "../../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="bg-[#FAFBFF]">
      {/* <Header /> */}
      <div className="flex space-x-2 md:space-x-8">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
