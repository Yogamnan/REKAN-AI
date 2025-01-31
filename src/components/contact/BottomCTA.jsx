import { wagreen } from "./asset"; // Import gambar WhatsApp untuk ikon

const BottomCTA = () => {
  return (
    <section className="w-full bg-white text-center py-10 mb-[113px]">
      {/* Bagian ini untuk menampilkan teks yang memberi tahu pengguna bahwa mereka bisa menghubungi jika masih ada pertanyaan */}
      <div className="flex flex-wrap justify-center gap-2">
        <h3 className="text-[#212121] text-center text-[32px] font-[550] leading-[48px] tracking-[0.005em]">
          Masih punya pertanyaan seputar
        </h3>

        <h3 className="text-[24px] sm:text-xl md:text-2xl text-[#212121]  mb-3">
          {/* Menampilkan tag #Rekan AI dengan background warna dan teks putih */}
          <span className="bg-[#dc0168] bg-[length:100%] rounded-[18px] text-[#ffffff] px-9 py-2 inline-block mr-[5px]">
            #Rekan AI
          </span>
          <span className="font-semibold  ml-1">?</span>
        </h3>
      </div>
      
      {/* Pesan yang memberi tahu pengguna untuk menghubungi jika pertanyaan belum terjawab */}
      <p className=" text-[20px] font-normal leading-[30px] tracking-[0.005em] text-center text-[#212121] mb-5 mx-auto">
        Jika pertanyaan Anda belum terjawab di atas, jangan ragu untuk menghubungi kami melalui formulir<br />kontak atau email. Kami dengan senang hati akan membantu!
      </p>

      {/* Bagian tombol CTA */}
      <div className="flex justify-center flex-col lg:flex-row mt-8 lg:mt-16 gap-6">
        {/* Tombol Konsultasi Gratis dengan ikon WhatsApp */}
        <button className="w-full lg:w-[270px] h-[70px] btn2 flex items-center justify-center py-3 border-2 border-[#DC0168] rounded-[14px] text-[#DC0168] text-[20px] lg:text-[20px] cursor-pointer transition-all ease-in-out hover:bg-[#ffffff1a]">
          {/* Gambar WhatsApp di kiri tombol */}
          <img src={wagreen} alt="WhatsApp Icon" className="mr-2 h-[1.2rem] w-auto" />
          Konsultasi Gratis
        </button>

        {/* Tombol Coba Sekarang dengan efek gradient */}
        <button className="w-full lg:w-[276px] h-[70px] btn2 flex items-center justify-center py-3 px-8 rounded-[14px] bg-gradient-to-r from-[#DC0168] to-[#5B59E8] text-white text-[20px] lg:text-[20px] cursor-pointer transition-all ease-in-out hover:opacity-90">
          Coba Sekarang
        </button>
      </div>
    </section>
  );
};

export default BottomCTA;
