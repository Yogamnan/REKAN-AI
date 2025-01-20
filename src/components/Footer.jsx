import { nvdia,kmn,kominfo,ojk,x,instagram,facebook,frame, } from "../assets";


function Footer() {
  return (
    <footer className="bg-customGrey py-10 text-[#212121]">
      {/* Kontainer utama footer */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between gap-5 mx-5 sm:mx-28 mt-20 text-sm">
        {/* Kolom 1: Logo perusahaan */}
        <div className="mb-5 sm:mb-0">
          <img
            src={frame} // Gambar logo perusahaan
            alt="Logo"
            className="max-w-[200px] w-[50.3px] h-[40.24px] sm:mx-0"
          />
        </div>

        {/* Kolom 2: Deskripsi singkat perusahaan */}
        <div className="flex-1 mb-5 sm:mb-0 sm:pl-0">
          <div className="flex mb-5">
            <p>
              <strong className="text-[25px] text-[#5B59E8]">Rekan AI</strong>{" "}
              <br />
              <span className="text-[#5B59E8] italic">
                Reimagine Your Business with AI.
              </span>
            </p>
          </div>
          <p className="mb-10">
            Jl. Anggrek No.6, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan,
            Banten 15413
          </p>
          <p className="mb-4">Lebih dekat dengan Kami</p>
          <div className="flex space-x-5">
            {/* Tautan ke media sosial */}
            <a href="#">
              <img src={instagram} alt="Instagram" className="w-5 h-5"  /> {/* Ikon Instagram */}
            </a>
            <a href="#">
              <img src={facebook} alt="Facebook" className="w-5 h-5" /> {/* Ikon Facebook */}
            </a>
            <a href="#">
              <img src={x} alt="Twitter" className="w-5 h-5" /> {/* Ikon Twitter (X) */}
            </a>
          </div>
        </div>

        {/* Kolom 3: Produk perusahaan */}
        <div className="flex-1 mb-5 sm:mb-0 sm:pl-0">
          <h4 className="text-base font-semibold mb-4">Produk Kami</h4>
          <ul className="space-y-4">
            <li>Rekan Doku</li> {/* Produk: Dokumen otomatis */}
            <li>Rekan Veri</li> {/* Produk: Verifikasi data */}
            <li>Rekan HR</li> {/* Produk: Manajemen SDM */}
            <li>Rekan LLM</li> {/* Produk: Model bahasa besar */}
          </ul>
        </div>

        {/* Kolom 4: Solusi yang ditawarkan */}
        <div className="flex-1 mb-5 sm:mb-0 sm:pl-0">
          <h4 className="text-base font-semibold mb-4">Solusi Kami</h4>
          <ul className="space-y-4">
            <li>Personal</li> {/* Solusi untuk individu */}
            <li>UMKM</li> {/* Solusi untuk Usaha Mikro, Kecil, dan Menengah */}
            <li>Corporate Business</li> {/* Solusi untuk perusahaan besar */}
          </ul>
        </div>

        {/* Kolom 5: Informasi kontak */}
        <div className="flex-1 mb-5 sm:mb-0 sm:pl-0">
          <h4 className="text-base font-semibold mb-4">Hubungi Kami</h4>
          <ul className="space-y-4">
            <li>Email: support@rekanai.com</li> {/* Email dukungan */}
            <li>Phone: +68452098</li> {/* Nomor telepon */}
            <li>F.A.Q</li> {/* Halaman Pertanyaan yang Sering Diajukan */}
          </ul>
        </div>

        {/* Kolom 6: Partner perusahaan */}
        <div className="mb-5 sm:mb-0 sm:pl-0">
          <div className="mb-4">
            <img
              src={nvdia} // Gambar logo partner NVIDIA
              alt="NVIDIA Inception Premier Member"
              className="w-[221px] h-[83px]"
            />
          </div>
          <div className="flex gap-5">
            <img src={kmn} alt="Partner 1" className="w-[56px] h-[72px]" /> {/* Gambar logo partner Kementerian */}
            <img src={kominfo} alt="Partner 2" className="w-[63px] h-[62px]" /> {/* Gambar logo partner Kominfo */}
            <img src={ojk} alt="Partner 3" className="w-[77px] h-[60px]" /> {/* Gambar logo partner OJK */}
          </div>
        </div>
      </div>

      {/* Bagian hak cipta */}
      <div className="text-left mt-40 mx-5 sm:mx-28 text-xs">
        <p>
          © Copyright 2025 Rekan AI. Seluruh hak cipta dilindungi undang-undang
        </p>
      </div>
    </footer>
  );
}


export default Footer;