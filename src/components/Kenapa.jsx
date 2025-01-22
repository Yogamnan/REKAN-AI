import {imgLeft,chek2,waIcon,circle1,circle2} from '../assets'

function Kenapa() {
  return (
    <div className="flex justify-center items-center bg-customWhite mt-5 min-h-screen">
      <div className="flex flex-col md:flex-row bg-customWhite rounded-lg overflow-hidden relative pt-16 md:pt-52">
        {/* Decorative Circles */}
        <div className="absolute hidden md:flex top-1 right-24 flex-col items-end space-y-4">
          <img src={circle1} alt="Circle 1" className="w-auto h-auto" />
          <img src={circle2} alt="Circle 2" className="w-auto h-auto" />
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-1/2 p-5 flex justify-center md:ml-14 md:justify-start">
          <img
            src={imgLeft}
            alt="Woman with Tablet"
            className="w-[300px] h-auto md:w-[654.5px] md:h-[609.67px]"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Kenapa Harus Rekan AI?</h2>
          <p className="text-customBlack mt-4 text-sm md:max-w-[75%] md:leading-8 md:text-[18px]">
            Rekan AI adalah mitra inovasi bisnis Anda dalam menghadapi era
            digital. Kami menghadirkan teknologi kecerdasan buatan yang dirancang
            untuk meningkatkan efisiensi operasional, mempercepat proses, dan
            memberikan wawasan berbasis data yang akurat.
          </p>
          <ul className="mt-8 space-y-4 md:space-y-6 text-sm md:max-w-[70%] md:text-base text-customBlack font-medium">
            <li className="flex items-center">
              <img src={chek2} alt="Check" className="w-6 h-6 md:w-11 md:h-11 mr-3" />
              Automasi proses untuk mengurangi biaya dan meningkatkan produktivitas.
            </li>
            <li className="flex items-center">
              <img src={chek2} alt="Check" className="w-6 h-6 md:w-11 md:h-11 mr-3" />
              Analisis data real-time untuk pengambilan keputusan yang lebih tepat.
            </li>
            <li className="flex items-center">
              <img src={chek2} alt="Check" className="w-6 h-6 md:w-11 md:h-11 mr-3" />
              Menciptakan interaksi pelanggan yang lebih relevan dan berkesan.
            </li>
            <li className="flex items-center">
              <img src={chek2} alt="Check" className="w-6 h-6 md:w-11 md:h-11 mr-3" />
              Verifikasi dan autentikasi berbasis AI yang memperkuat keamanan data.
            </li>
          </ul>

          <div className="flex flex-col md:flex-row mt-8 md:mt-20 space-y-4 md:space-y-0 md:space-x-10 w-full">
            <button className="flex items-center justify-center w-full md:w-[270px] h-[50px] md:h-[70px] border-2 border-pink-600 text-pink-700 font-bold rounded-[14px] hover:bg-white hover:bg-opacity-10 transition">
              <img src={waIcon} alt="WhatsApp Icon" className="mr-2 w-4 h-4 md:w-5 md:h-5" />
              Konsultasi Gratis
            </button>
            <button className="w-full md:w-[276px] h-[50px] md:h-[70px] bg-gradient-to-r from-pink-700 to-indigo-600 text-white font-bold rounded-[14px] hover:opacity-90 transition">
              Coba Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kenapa;
