import { email, phone, customer } from "./asset";

const CustomerService = () => {
    return (
        <section className="main-container mt-[180px] mb-16 md:mt-20 flex flex-col md:flex-row justify-between items-center px-5 py-10 max-w-7xl mx-auto gap-10 md:mb-[150px] 2xl:px-20 2xl:gap-20">
            {/* Container utama */}

            <div className="w-full md:w-[773px] 2xl:w-[900px] h-auto gap-[29px] text-left">
                {/* Teks dan informasi */}
                <div className="mb-5">
                    <h2 className="text-[#212121] text-[28px] md:text-[32px] font-[550] leading-[36px] md:leading-[48px] 2xl:leading-[52px]">
                        Kami Siap Membantu Bisnis{" "}
                        <span className="hidden lg:inline">
                            <br />
                        </span>{" "}
                        Anda Lebih Maju!
                    </h2>
                </div>
                <p className="text-[#212121] leading-relaxed mb-6 text-[16px] md:text-[20px]">
                    Butuh informasi lebih lanjut tentang produk atau solusi kami? Tim Rekan AI siap menjawab pertanyaan Anda dengan cepat dan
                    profesional.
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
            {/*RIGHT SECTION */}
            <div className="flex-1 flex justify-center items-center">
                <img
                    src={customer}
                    alt="Customer Service"
                    className="w-full md:w-[400px] lg:w-[500px] 2xl:w-[600px] max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain"
                />
            </div>
        </section>
    );
};

export default CustomerService;
