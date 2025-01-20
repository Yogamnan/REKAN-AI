import {card1,card2,card3,card4,chek} from '../assets';


function Solusi() {
  const cards = [
    {
      image: card1,
      description: 'Rekan HR menghadirkan solusi automasi untuk proses HR, mulai dari rekrutmen hingga manajemen kinerja. Platform ini membantu perusahaan meningkatkan efisiensi administrasi dan kepuasan karyawan melalui integrasi AI.',
      features: ['Automasi Proses HR', 'Manajemen Karyawan'],
    },
    {
      image: card2,
      description: 'Rekan Doku adalah platform digital untuk autentikasi dan pengelolaan dokumen yang aman dan efisien. Dengan fitur e-Meterai dan e-Signature, Rekan Doku memastikan dokumen sah secara hukum dan terorganisir dengan baik.',
      features: ['Autentikasi dokumen', 'Meterai dan Tanda Tangan Digital'],
    },
    {
      image: card3,
      description: 'Rekan LLM memanfaatkan kecerdasan buatan berbasis model bahasa besar (Large Language Model) untuk menganalisis data. Solusi ini mempercepat pengambilan keputusan strategis.',
      features: ['(Large Language Model) System', 'Virtual Assistant'],
    },
    {
      image: card4,
      description: 'Rekan Veri menyediakan layanan verifikasi data secara instan dan akurat untuk berbagai kebutuhan bisnis. Rekan Veri membantu memastikan keaslian informasi pelanggan dan memperkuat keamanan transaksi digital.',
      features: ['Verifikasi Data dan Dokumen', 'Keaslian Informasi Pelanggan'],
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-8 bg-customWhite mt-16" id="solusi">
      <div className="text-center mb-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <h1 className="text-2xl md:text-4xl font-semibold">Ragam Solusi Terbaik Dari</h1>
          <span className="flex items-center justify-center text-lg md:text-2xl text-customWhite bg-customRed rounded-xl font-bold w-[194px] h-[48px] text-center">
            #Rekan AI
          </span>
        </div>
        <p className="text-gray-600 mt-4 max-w-[95%] text-center items-center">
          Kami menyediakan berbagai produk berbasis AI yang dirancang khusus untuk mendukung bisnis Anda dari berbagai aspek.
        </p>
      </div>


      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-customWhite rounded-xl shadow-md p-6 flex flex-col items-center h-[681px] w-[402px]"
          >
            <img src={card.image} alt={`Card ${index + 1}`} className="w-[130px] h-[170px] md:w-auto md:h-auto xl:w-auto xl:h-auto 2xl:w-auto 2xl:h-auto mb-6" />
            <p className="text-customBlack text-left mt-4 flex-1">{card.description}</p>
            <ul className="text-left space-y-4 mb-8">
              {card.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <img src={chek} alt="Check" className="mr-2 w-auto h-auto" /> {feature}
                </li>
              ))}
            </ul>
            <button className="w-[355px] h-[62px] bg-white border-2 border-blue-600 text-blue-600 font-semibold py-2 px-4 rounded-full hover:bg-blue-600 hover:text-white transition duration-300">
              Selengkapnya <span>&rarr;</span>
            </button>
          </div>
        ))}
      </div>



    </section>
  );
}

export default Solusi;
