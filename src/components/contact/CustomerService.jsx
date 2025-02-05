import { email, phone, customer } from "./asset";

const CustomerService = () => {
    return (
        <section className="main-container mt-[180px] mb-16 md:mb-0 md:mt-20 flex flex-col md:flex-row items-center px-5 py-10 max-w-7xl mx-auto md:mb-[150px] 2xl:px-20 2xl:gap-20">
            {/* LEFT SECTION - Informasi */}
            <div className="w-full md:w-[650px] 2xl:w-[750px] h-auto gap-[29px] text-left pl-10 md:ml-[-200px]">
                <div className="mb-5">
                    <h2 className="text-[#212121] text-[28px] md:text-[32px] font-[550] leading-[36px] md:leading-[48px] 2xl:leading-[52px]">
                        Kami Siap Membantu Bisnis Anda{" "}
                        <span className="hidden lg:inline">
                            <br />
                        </span>{" "}
                         Lebih Maju!
                    </h2>
                </div>
                <p className="text-[#212121] leading-relaxed mb-6 text-[16px] md:text-[20px] md:max-w-[90%]">
                    Butuh informasi lebih lanjut tentang produk atau solusi kami? Tim Rekan AI siap menjawab pertanyaan Anda dengan cepat dan profesional.
                </p>
                <div className="flex flex-col gap-6">
                    <div className="flex items-start gap-6">
                        <img
                            src={email}
                            alt="Email Icon"
                            className="w-10 h-10 object-contain"
                        />
                        <div className="text-left">
                            <p className="text-sm text-[#212121] md:text-[18px]">
                                Kirim pertanyaan Anda ke{" "}
                                <strong className="text-[#5B59E8] md:text-[18px]">
                                    support@rekanai.com
                                </strong>{" "}
                                dan tim kami akan segera merespons.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-6">
                        <img
                            src={phone}
                            alt="Phone Icon"
                            className="w-10 h-10 object-contain"
                        />
                        <div className="text-left text-[16px] md:text-[18px]">
                            <p className=" text-[#212121]">
                                Hubungi kami di{" "}
                                <strong className="text-[#5B59E8]">
                                    (+62) 123-4567-890
                                </strong>
                            </p>
                            <p className=" text-[#212121]">
                                (Senin - Jumat, 08:00 - 17:00 WIB).
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT SECTION - Gambar */}
            <div className="flex-1 flex justify-end items-center pr-10 md:mr-[-200px]">
                <img
                    src={customer}
                    alt="Customer Service"
                    className="w-auto h-auto "
                />
            </div>
        </section>
    );
};

export default CustomerService;
