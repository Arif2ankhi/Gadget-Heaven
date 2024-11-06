import bannerImg from "../../assets/banner.jpg";
const Banner = () => {
  return (
    <div className="hero bg-[#9538E2] container mx-auto  p-20 pb-72  rounded-b-xl  h-80 relative">
      <div className=" hero-content text-center">
        <div className="w-2/3 text-white">
          <h1 className="text-4xl font-bold text-white mb-5 ">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="py-6 text-gray-300 text-sm">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button className="btn bg-white text-[#9538E2] font-bold rounded-full mb-28 ">
            Shop Now!
          </button>

          {/* <div className=" bottom-[-360px] mx-auto  p-4 p-72"> */}
          <div className="bottom-[-250px] absolute border-2 border-white rounded-lg   ">
            <img className=" rounded-lg p-3 h-72 w-full  mr-60" src={bannerImg} alt="Banner Photo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
