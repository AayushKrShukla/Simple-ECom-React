import Footer from "../components/Footer";
import Header from "../components/Header";
import Shop from "../components/Shop";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <>
    <Header />
    <div>
      <Shop />
    </div>
    <Sidebar />
    <Footer />
    </>
  );
};

export default Home;
