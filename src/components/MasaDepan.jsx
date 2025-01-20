import React from "react";
import masaWa from "../assets/image/whatsapp-color_svgrepo.com (1).png";

function MasaDepan() {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full h-[75vh] mb-20">
      {/* Tagline Section */}
      <div className="mb-5">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 p-4">
          <span className="flex items-center justify-center bg-pink-600 text-white font-semibold text-xl rounded-2xl w-48 h-12">
            #Rekan AI
          </span>
          <h1 className="text-2xl sm:text-3xl font-semibold text-black">
            Masa Depan Bisnis, Dimulai Hari Ini
          </h1>
        </div>
        <p className="text-base sm:text-lg text-gray-600 mt-2 leading-relaxed px-4 sm:px-0">
          Bersama Rekan AI, bawa bisnis Anda menuju masa depan yang lebih
          cerdas, efisien, dan kompetitif.
        </p>
      </div>

      {/* Button Section */}
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 mt-8">
        <button className="flex items-center justify-center bg-transparent text-pink-600 border-2 border-pink-600 rounded-[14px] font-medium text-lg sm:text-xl px-8 py-4 hover:bg-pink-50 transition-all duration-300 w-full sm:w-[270px] h-[70px]">
          <img
            src={masaWa}
            alt="WhatsApp Icon"
            className="mr-2 w-5 h-5"
          />
          Konsultasi Gratis
        </button>
        <button className="flex items-center justify-center bg-gradient-to-r from-pink-600 to-blue-600 text-white rounded-[14px] font-medium text-lg sm:text-xl px-8 py-4 hover:opacity-90 transition-all duration-300 w-full sm:w-[276px] h-[70px]">
          Coba Sekarang
        </button>
      </div>
    </div>
  );
}

export default MasaDepan;
