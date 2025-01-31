import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
const Home = () => {
  return (
    // <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-100">
    <div className="flex sm:h-[450px] md:h-[550px]  overflow-hidden shadow-md  rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 ">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
