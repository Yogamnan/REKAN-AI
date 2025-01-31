import { img10 } from "./asset";

const ContactForm = () => {
  return (
    <div
      className="flex min-h-screen items-center justify-center p-5 text-white rounded-tl-[80px] rounded-tr-[80px]"
      style={{
        background: `linear-gradient(45deg, #DC016866 15%, rgba(91, 89, 232, 1),rgba(91, 89, 232, 1)), url(${img10})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col lg:flex-row items-start w-full 2xl:max-w-[100%] 2xl:max-h-[100%] sm:mt-[79px] sm:mb-[79px] 2xl:mt-[-125px] 2xl:px-10">
        {/* Bagian Kiri */}
        <div className="flex-1 p-5 mb-10 lg:mb-0 md:ml-28 2xl:mt-28 md:max-w-[40%]">
          {/* Judul utama */}
          <h2 className="text-[32px] font-[550] leading-[48px] tracking-[0.005em] text-left mt-16 mb-[39px] 2xl:text-[36px] 2xl:leading-[52px]">
            Isi formulir di samping ini dan kami akan menghubungi Anda secepat
            mungkin
          </h2>

          {/* Deskripsi tambahan */}
          <p className="text-[18px] font-[400] leading-[30px] tracking-[0.005em] text-left mb-6 2xl:text-[20px] 2xl:leading-[34px]">
            Kami percaya bahwa kolaborasi adalah kunci kesuksesan. Hubungi kami
            hari ini, dan mari wujudkan masa depan bisnis Anda bersama Rekan AI!
          </p>
        </div>

        {/* Bagian Form */}

        <div
          className="bg-white text-[#212121] mt-5  rounded-[25px] md:ml-24 md:mt-52 p-[40px] border-[8px] border-[#F086A4] md:w-[794px] 2xl:px-[60px] 2xl:py-[50px]"
        >


          {/* Judul form */}
          <h3 className="text-[32px] font-[550] mb-4 text-[#212121] 2xl:text-[28px] 2xl:mb-6">
            Hubungi Tim Terbaik Kami
          </h3>
          {/* Deskripsi form */}
          <p className="mb-6 text-[#212121] 2xl:text-[18px]">
            Silakan isi data diri Anda pada formulir di bawah ini
          </p>

          {/* Formulir input */}
          <form className="flex flex-col gap-4 px-2">
            {/* Input Nama */}
            <div>
              <label className="text-[#6B5CEA]">Nama (Tanpa Gelar)*</label>
              <input
                type="text"
                placeholder="Masukkan nama Anda"
                required
                className="w-full mt-1 p-4 border border-[#5B59E8] rounded-lg focus:ring-2 focus:ring-[#5B59E8] 2xl:p-5"
              />
            </div>

            {/* Input Nomor Telepon */}
            <div>
              <label className="text-[#6B5CEA]">Nomor Telepon*</label>
              <input
                type="tel"
                placeholder="Masukkan nomor telepon Anda"
                required
                className="w-full mt-1 p-4 border border-[#5B59E8] rounded-lg focus:ring-2 focus:ring-[#5B59E8] 2xl:p-5"
                pattern="[0-9]*"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
              />
            </div>

            {/* Input Email */}
            <div>
              <label className="text-[#6B5CEA]">Email*</label>
              <input
                type="email"
                placeholder="Masukkan email Anda"
                required
                className="w-full mt-1 p-4 border border-[#5B59E8] rounded-lg focus:ring-2 focus:ring-[#5B59E8] 2xl:p-5"
              />
            </div>

            {/* Input Nama Organisasi */}
            <div>
              <label className="text-[#6B5CEA]">
                Nama Organisasi/Perusahaan
              </label>
              <input
                type="text"
                placeholder="Masukkan nama organisasi/perusahaan Anda"
                className="w-full mt-1 p-4 border border-[#5B59E8] rounded-lg focus:ring-2 focus:ring-[#5B59E8] 2xl:p-5"
              />
            </div>

            {/* Dropdown Pilih Kebutuhan */}
            <div className="relative">
              <label className="text-[#6B5CEA]">Pilih Kebutuhan</label>
              <select
                required
                className="appearance-none w-full mt-1 p-4 border border-[#5B59E8] rounded-lg focus:ring-2 focus:ring-[#5B59E8] 2xl:p-5"
              >
                <option value="">Pilih kebutuhan Anda</option>
                <option value="konsultasi">Konsultasi</option>
                <option value="pelatihan">Pelatihan</option>
                <option value="pengembangan">Pengembangan</option>
              </select>
              {/* Tanda panah kustom */}
              <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                <svg
                  className="w-6 text-[#5B59E8]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* Checkbox Verifikasi */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                required
                className="focus:ring-2 focus:ring-indigo-500"
              />
              <span className="text-[#212121]">Saya bukan robot</span>
            </div>

            {/* Tombol Kirim */}
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-md transition-all w-[173px] 2xl:w-[200px] 2xl:py-4"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
