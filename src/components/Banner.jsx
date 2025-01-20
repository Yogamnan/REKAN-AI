import {waIcon2,L1,L2,L3,L4,R1,R2,R3,R4,bgcBanner} from '../assets';

function Banner() {
    return (
        <div
            className="relative flex flex-col items-center justify-center mt-20 w-full h-auto md:h-[692px] bg-cover bg-center text-white text-center"
            style={{
                backgroundImage: `linear-gradient(to right, rgba(220, 1, 104, 0.4),rgba(91, 89, 232, 1) ), url(${bgcBanner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundBlendMode: 'multiply',
            }}
        >
            {/* Gambar L1-L4 untuk mobile */}
            <div className="grid md:hidden grid-cols-2 gap-4 px-4 mt-8">
                <img src={L1} alt="image 1" className="w-full rounded-lg shadow-lg object-cover" />
                <img src={L2} alt="image 2" className="w-full rounded-lg shadow-lg object-cover" />
                <img src={L3} alt="image 3" className="w-full rounded-lg shadow-lg object-cover" />
                <img src={L4} alt="image 4" className="w-full rounded-lg shadow-lg object-cover" />
            </div>

            {/* Teks dan tombol */}
            <div className="px-4 mx-auto text-center w-full mt-8 md:mt-0">
                <div className="text-customWhite max-w-[90%] md:max-w-[45%] mx-auto">
                    <h1 className="text-xl md:text-[32px] font-semibold text-center">
                        Bersama Rekan AI, Wujudkan Masa Depan Bisnis yang Lebih Inovatif dan Kompetitif.
                    </h1>
                </div>
                <p className="mt-4 md:mt-16 max-w-[90%] md:max-w-[800px] mx-auto text-gray-200 text-sm md:text-base">
                    Dari autentikasi dokumen hingga analisis data dan automasi HR, Rekan AI menawarkan produk-produk cerdas yang siap membantu bisnis Anda tumbuh dan bersaing di pasar yang dinamis.
                </p>
                <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-16 justify-center">
                    <button className="flex items-center justify-center w-full md:w-[317px] h-[50px] md:h-[70px] rounded-2xl border-2 border-white text-white text-sm md:text-lg font-bold hover:bg-white hover:bg-opacity-10">
                        <img src={waIcon2} alt="WhatsApp Icon" className="mr-2 h-4 md:h-5 w-auto" />
                        Konsultasi Gratis
                    </button>
                    <button className="flex items-center justify-center w-full md:w-[324px] h-[50px] md:h-[70px] rounded-2xl px-4 md:px-8 py-2 md:py-3 border-[1px] border-white bg-gradient-to-r from-[#dc0168] to-[#5b59e8] text-white text-sm md:text-lg font-bold hover:opacity-90">
                        Coba Sekarang
                    </button>
                </div>
            </div>

            {/* Gambar L1-L4 untuk desktop */}
            <div className="absolute hidden md:grid top-[50%] left-0 transform -translate-y-1/2 grid-cols-2 gap-4 max-w-full ml-16">
                <img src={L1} alt="image 1" className="w-auto rounded-lg shadow-lg object-cover" />
                <img src={L2} alt="image 2" className="w-auto rounded-lg shadow-lg object-cover mt-20" />
                <img src={L3} alt="image 3" className="w-auto rounded-lg shadow-lg object-cover" />
                <img src={L4} alt="image 4" className="w-auto rounded-lg shadow-lg object-cover -mt-10" />
            </div>

            {/* Gambar R1-R4 untuk desktop */}
            <div className="absolute hidden md:grid top-[50%] right-0 transform -translate-y-1/2 grid-cols-2 gap-4 max-w-full justify-end mr-16">
                <img src={R1} alt="image 1" className="w-auto rounded-lg shadow-lg object-cover mt-20 ml-9" />
                <img src={R2} alt="image 2" className="w-auto rounded-lg shadow-lg object-cover -ml-7" />
                <img src={R3} alt="image 3" className="w-auto rounded-lg shadow-lg object-cover ml-7" />
                <img src={R4} alt="image 4" className="w-auto rounded-lg shadow-lg object-cover" />
            </div>

            {/* Gambar R1-R4 untuk mobile */}
            <div className="grid md:hidden grid-cols-2 gap-4 px-4 mt-8 mb-8">
                <img src={R1} alt="image 1" className="w-full rounded-lg shadow-lg object-cover" />
                <img src={R2} alt="image 2" className="w-full rounded-lg shadow-lg object-cover" />
                <img src={R3} alt="image 3" className="w-full rounded-lg shadow-lg object-cover" />
                <img src={R4} alt="image 4" className="w-full rounded-lg shadow-lg object-cover" />
            </div>
        </div>
    )
}

export default Banner
