import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import ProductList from "../components/ProductList";
import Slider from "../components/Slider";

const HomePage = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <ProductList />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HomePage;
