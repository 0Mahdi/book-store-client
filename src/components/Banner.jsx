import BannerCard from "../home/BannerCard";

const Banner = () => {
    return (
        <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
            <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
                {/* left side */}
                <div className="md:w-1/2 space-y-8 h-full">
                    <h2 className="text-5xl font-bold leading-snug text-black">Buy And Sell Your Books <span className="text-blue-700">for the Best Price</span></h2>
                    <p className="md:w-4/5">Discover a world of literary treasures on our Buy and Sell Books platform. Explore a vast collection, buy your favorites, and sell your own books effortlessly. Join us today!</p>
                    <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xl px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">GET STARTED</button>
                    
                </div>

                {/* right side */}
                <div><BannerCard /></div>
            </div>
            
        </div>
    );
};

export default Banner;