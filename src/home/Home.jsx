import Banner from "../components/Banner"
import BestSellBooks from "./BestSellBooks"
import FavBooks from "./FavBooks"
import OtherBooks from "./OtherBooks"
import PromoBanner from "./PromoBanner"
import Review from "./Review"

const Home = () => {
  return (
    <div>
      <Banner />
      <BestSellBooks />
      <FavBooks />
      <PromoBanner />
      <OtherBooks />
      <Review />
    </div>
  )
}

export default Home
