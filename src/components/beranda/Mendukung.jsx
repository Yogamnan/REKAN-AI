import React from 'react';
import { imgLeft1,imgLeft2,imgLeft3,imgRight } from '../../assets';

function Mendukung() {
  const items = [
    { id: 1, image: imgLeft1, title: 'Personal' },
    { id: 2, image: imgLeft2, title: 'UMKM' },
    { id: 3, image: imgLeft3, title: 'Corporate Business' },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 h-auto md:h-screen px-6 md:px-32 py-8 md:py-0" id="solusi2">
  {/* Left Content */}
  <div className="flex flex-col justify-center w-full md:w-[45%] space-y-8 order-2 md:order-1">
    <p className="text-[24px] md:text-[32px] font-semibold text-customBlack text-left md:text-left">
      Solusi Mendukung Bisnis di Setiap
      <br />
       Skala Usaha
    </p>
    <p className="text-[16px] md:text-[20px] font-normal text-customBlack text-left md:text-left">
      Kami menawarkan berbagai teknologi AI yang dapat mengotomatisasi proses, menganalisis data dengan akurat, dan memberikan pengalaman pelanggan yang lebih personal. Dengan implementasi yang mudah dan hasil yang cepat, Rekan AI menjadi mitra terbaik untuk mendukung pertumbuhan bisnis Anda.
    </p>

    <div className="flex flex-col md:flex-row justify-center md:justify-between gap-6">
  {items.map((item) => (
    <div key={item.id} className="flex flex-col items-center w-full md:w-auto md:mt-5">
      {/* Image */}
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-[190px] h-[150px] sm:w-[150px] sm:h-[150px] md:w-[223px] md:h-[223px] rounded-lg" 
      />
      {/* Title */}
      <p className="bg-[#5B59E8] text-white text-center rounded-lg shadow-md w-[190px] sm:w-[150px] md:w-[223px] h-10 flex items-center justify-center text-sm font-bold mt-4">
        {item.title}
      </p>
    </div>
  ))}
</div>

  </div>

  {/* Right Content */}
  <div className="w-full md:w-2/5 mt-8 md:mt-0 order-1 md:order-2">
    <img src={imgRight} alt="Image Right" className="w-full h-auto" />
  </div>
</div>

  );
}

export default Mendukung;
        