import homeLogo from '../assets/image/Component 1.png';
import waIcon from '../assets/image/whatsapp-color_svgrepo.com (1).png';
import homeImg from '../assets/image/Component 3.png';

function Hero() {
    return (
        <div className="container py-0 px-0" id="Hero">
            <div className="
                hero 
                grid grid-cols-1 lg:grid-cols-2 gap-10 
                mt-56 sm:mt-28 md:mt-32 xl:mt-36 2xl:mt-24
                2xl:ml-28 xl:ml-24 items-center">
                
                {/* Left Section */}
                <div className="box text-left px-4 lg:px-0">
                    <img className="mb-5 mx-auto lg:mx-0" src={homeLogo} alt="Home Logo" />
                    <h1 className="text-customBlack text-[24px] lg:text-[32px] font-semibold py-4">
                        Ciptakan Pengalaman Pelanggan yang Tak Terlupakan dengan Solusi AI dari Rekan AI.
                    </h1>
                    <p className="text-customBlack text-[16px] lg:text-[20px]">
                        Rekan AI menghadirkan teknologi kecerdasan buatan untuk membantu bisnis Anda beradaptasi dan tumbuh di era digital. Dari automasi hingga analisis data, kami membawa solusi cerdas yang mudah diimplementasikan.
                    </p>
                </div>

                {/* Right Section (Home Image) */}
                <div className="box flex justify-center 2xl:ml-20 2xl:mr-[-11rem] px-4 lg:px-0">
                    <img src={homeImg} alt="Home Image" className="w-full max-w-[807px] h-auto" />
                </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col lg:flex-row mt-8 lg:mt-0 lg:ml-28 gap-6 items-center px-4 lg:px-0">
                <button className="w-full lg:w-[270px] h-[70px] btn2 flex items-center justify-center py-3 border-2 border-[#DC0168] rounded-[14px] text-[#DC0168] font-bold text-[18px] lg:text-[20px] cursor-pointer transition-all ease-in-out hover:bg-[#ffffff1a]">
                    <img src={waIcon} alt="WhatsApp Icon" className="mr-2 h-[1.2rem] w-auto" />
                    Konsultasi Gratis
                </button>
                <button className="w-full lg:w-[276px] h-[70px] btn2 flex items-center justify-center py-3 px-8 rounded-[14px] bg-gradient-to-r from-[#DC0168] to-[#5B59E8] text-white font-bold text-[18px] lg:text-[20px] cursor-pointer transition-all ease-in-out hover:opacity-90">
                    Coba Sekarang
                </button>
            </div>
        </div>
    );
}

export default Hero;
