import { useState } from "react";

const FAQ = () => {
  // State untuk menyimpan indeks pertanyaan yang sedang dibuka
  // Jika tidak ada pertanyaan yang terbuka, nilai adalah null
  const [openQuestion, setOpenQuestion] = useState(null);

  // Fungsi untuk membuka atau menutup pertanyaan berdasarkan indeks
  // Jika pertanyaan yang sama diklik lagi, tutup pertanyaan tersebut
  const toggleQuestion = (index) => {
    // Cek apakah pertanyaan yang sama diklik
    // Jika iya, tutup (set openQuestion ke null), jika tidak, buka pertanyaan tersebut
    setOpenQuestion(openQuestion === index ? null : index);
  };

  // Data FAQ yang berisi array objek dengan pertanyaan dan jawaban
  const faqData = [
    {
      question: "Apa itu Rekan AI?",
      answer: (
        <p>
          Rekan AI adalah platform teknologi kecerdasan buatan (AI) yang
          menyediakan solusi berbasis AI untuk meningkatkan efisiensi
          operasional, analisis data, dan pengalaman pelanggan bagi UMKM hingga
          perusahaan besar.
        </p>
      ),
    },
    {
      question: "Apa saja produk yang ditawarkan oleh Rekan AI?",
      answer: (
        <div>
          <p className="mb-1">Kami menawarkan beberapa produk unggulan, termasuk:</p>
          <ul className="list-decimal list-inside space-y-1">
            <li>
              Rekan Doku: Solusi autentikasi dan manajemen dokumen digital.
            </li>
            <li>Rekan HR: Automasi dan optimalisasi proses HR.</li>
            <li>
              Rekan LLM: AI berbasis model bahasa besar untuk analisis dan
              komunikasi.
            </li>
            <li>Rekan Veri: Verifikasi data yang cepat dan akurat.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "Bagaimana cara menghubungi tim Rekan AI?",
      answer: (
        <div>
          <p className="mb-1">Anda dapat menghubungi kami melalui:</p>
          <ul className="list-decimal list-inside space-y-1">
            <li>Email: support@rekanai.com</li>
            <li>Telepon: (+62) 123-4567-890</li>
            <li>WhatsApp: (+62) 812-3456-7890</li>
          </ul>
        </div>
      ),
    },
    {
      question: "Apakah solusi Rekan AI mudah diimplementasikan?",
      answer: (
        <p>
          Ya, produk kami dirancang untuk integrasi yang mulus dengan sistem
          bisnis Anda yang sudah ada. Kami juga menyediakan dukungan teknis
          untuk memastikan implementasi berjalan lancar.
        </p>
      ),
    },
    {
      question: "Apakah Rekan AI cocok untuk UMKM?",
      answer: (
        <p>
          Tentu saja! Kami menawarkan solusi yang terjangkau, mudah digunakan,
          dan dapat membantu UMKM meningkatkan efisiensi, mengurangi biaya
          operasional, dan mempercepat pertumbuhan.
        </p>
      ),
    },
    {
      question: "Bagaimana dengan keamanan data?",
      answer: (
        <p>
          Keamanan adalah prioritas kami. Semua produk Rekan AI menggunakan
          teknologi enkripsi canggih untuk melindungi data Anda dari ancaman
          cyber.
        </p>
      ),
    },
    {
      question: "Bagaimana saya memulai menggunakan produk Rekan AI?",
      answer: (
        <p>
          Anda dapat memulai dengan menghubungi tim kami untuk demo produk atau
          konsultasi gratis. Kami akan membantu Anda menemukan solusi yang
          paling sesuai dengan kebutuhan bisnis Anda.
        </p>
      ),
    },
    {
      question: "Apakah Rekan AI memiliki paket harga yang bisa dipilih?",
      answer: (
        <p>
          Ya, kami dapat memberikan paket harga terbaik untuk solusi produk yang
          Anda pilih. Informasi lebih lanjut silakan hubungi kami dan
          konsultasikan kebutuhan Anda secara gratis.
        </p>
      ),
    },
  ];

  return (
    <div className="text-[#212121] max-w-4xl mx-auto px-4 py-6 text-center ">
      {/* Judul halaman FAQ */}
      <div className="mt-[111px]">
        <h1 className="text-[32px] font-[505] leading-[48px] tracking-[0.005em] text-center mb-4">
          Frequently Asked Questions
        </h1>
        <h2 className="text-[20px] font-normal leading-[30px] tracking-[0.005em] text-center mb-6">
          Pertanyaan Umum tentang Rekan AI
        </h2>
      </div>

      {/* Bagian FAQ */}
      <div className="space-y-[22px] mb-[110px] mt-[60px]">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="text-[20px] border border-[#5B59E8] p-[5px] rounded-[12px] overflow-hidden "
          >
            {/* Bagian untuk menampilkan pertanyaan dan tanda buka/tutup */}
            <div
              className={`flex justify-between items-center cursor-pointer bg-white ml-4 ${
                // Jika pertanyaan ini dibuka, beri highlight
                openQuestion === index ? "text-blue-500" : ""
              }`}
              onClick={() => toggleQuestion(index)} // Ketika pertanyaan diklik, panggil toggleQuestion
            >
              <span className="font-[550]">{item.question}</span>
              <span className="text-[39px] text-[#845FF1] mr-4">{openQuestion === index ? "–" : "+"}</span> {/* Tampilkan tanda buka atau tutup */}
            </div>

            {/* Bagian untuk menampilkan jawaban jika pertanyaan ini terbuka */}
            {openQuestion === index && (
              <div className="p-4 text-[16px] ml-4 text-left bg-white text-sm">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
