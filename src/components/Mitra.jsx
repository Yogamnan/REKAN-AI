import React, { useState, useEffect } from "react";
import {mitraImg} from "../assets";
import {arrow1} from "../assets";
import {arrow2} from "../assets";
import {swipper1} from "../assets";
import {swipper2} from "../assets";
import {swipper3} from "../assets";
import {swipper4} from "../assets";
import {swipper5} from "../assets";
import {swipper6} from "../assets";
import {swipper7} from "../assets";
import {swipper8} from "../assets";
import {swipper9} from "../assets";
import {swipper10} from "../assets";
import {swipper11} from "../assets";
import {swipper12} from "../assets";
import {swipper13} from "../assets";
import {swipper14} from "../assets";
import {swipper15} from "../assets";
import {swipper16} from "../assets";
import {swipper17} from "../assets";
import {swipper18} from "../assets";
import {swipper19} from "../assets";
import {swipper20} from "../assets";
import {swipper21} from "../assets";
import {swipper22} from "../assets";
import {swipper23} from "../assets";
import {swipper24} from "../assets";
import { bgSwiper } from "../assets";
function Mitra() {
    const items = [
        { id: 1, logo: swipper1, name: "Item 1" },
        { id: 2, logo: swipper2, name: "Item 2" },
        { id: 3, logo: swipper3, name: "Item 3" },
        { id: 4, logo: swipper4, name: "Item 4" },
        { id: 5, logo: swipper5, name: "Item 5" },
        { id: 6, logo: swipper6, name: "Item 6" },
        { id: 7, logo: swipper7, name: "Item 7" },
        { id: 8, logo: swipper8, name: "Item 8" },
        { id: 9, logo: swipper9, name: "Item 9" },
        { id: 10, logo: swipper10, name: "Item 10" },
        { id: 11, logo: swipper11, name: "Item 11" },
        { id: 12, logo: swipper12, name: "Item 12" },
        { id: 13, logo: swipper13, name: "Item 13" },
        { id: 14, logo: swipper14, name: "Item 14" },
        { id: 15, logo: swipper15, name: "Item 15" },
        { id: 16, logo: swipper16, name: "Item 16" },
        { id: 17, logo: swipper17, name: "Item 17" },
        { id: 18, logo: swipper18, name: "Item 18" },
        { id: 19, logo: swipper19, name: "Item 19" },
        { id: 20, logo: swipper20, name: "Item 20" },
        { id: 21, logo: swipper21, name: "Item 21" },
        { id: 22, logo: swipper22, name: "Item 22" },
        { id: 23, logo: swipper23, name: "Item 23" },
        { id: 24, logo: swipper24, name: "Item 24" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerSlide = 4;

    const handleNext = () => {
        if (currentIndex < items.length / itemsPerSlide - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        } else {
            setCurrentIndex(Math.ceil(items.length / itemsPerSlide) - 1);
        }
    };

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 8900); // Slider bergerak setiap 4 detik

        return () => clearInterval(interval); // Membersihkan interval saat komponen unmount
    }, [currentIndex]);

    return (
        <>
            <div
                className="bg-cover bg-center h-[986px] flex items-center justify-center"
                style={{ backgroundImage: `url(${bgSwiper})` }}
            >
                <div className="bg-gradient-to-b from-[#e5e4ff] via-[#A1A0F2] to-[#5B59E8] w-[90%] md:w-[1214px] h-[640px] rounded-[36px] flex items-center justify-center relative">
                    <div className="text-white ml-4 md:ml-20 -mt-8 md:-mt-20">
                        <div className="bg-white text-[#DC0168] flex items-center justify-center text-center rounded-[18px] shadow-md w-[90%] md:w-[510px] h-[56px]">
                            <p className="text-sm md:text-lg font-semibold m-0">
                                Saatnya Melangkah lebih jauh untuk bisnis Anda!
                            </p>
                        </div>
                        <h1 className="text-[18px] md:text-[36px] leading-[28px] md:leading-[54px] font-semibold text-left mt-4 md:mt-6">
                            Bergabunglah bersama Mereka yang telah mempercayai Kami sebagai mitra terbaik dalam memberikan solusi yang efesien.
                        </h1>
                    </div>
                    <div className="ml-auto -mt-8 mr-4 md:-mt-20 md:mr-5 hidden md:block">
                        {/* Gambar hanya muncul di tampilan medium ke atas */}
                        <img src={mitraImg} alt="Mitra" className="w-[1745px] h-[402px]" />
                    </div>
                </div>
            </div>

            <section className="flex justify-center 2xl:w-[1516px] w-screen mb-40 -mt-[350px] md:-mt-[290px] mx-auto">
                <div className="bg-customWhite shadow-lg rounded-[37px] px-4 md:px-8 py-4 flex items-center gap-2 md:gap-4 w-[95%] md:w-[80%] mx-auto z-10 overflow-hidden">
                    {/* Prev Button (Hidden on Mobile) */}
                    <button onClick={handlePrev} className="hidden md:block">
                        <img src= {arrow1} alt="Previous" className="w-4 h-4 md:w-6 md:h-6" />
                    </button>
                    {/* Carousel Items */}
                    <div className="overflow-hidden flex-1">
                        <div
                            className="flex transition-transform duration-[10500ms] ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {Array.from(
                                { length: Math.ceil(items.length / itemsPerSlide) },
                                (_, slideIndex) => (
                                    <div
                                        className="flex-shrink-0 w-full grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-4"
                                        key={slideIndex}
                                    >
                                        {items
                                            .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                                            .map((item) => (
                                                <div className="flex flex-col items-center" key={item.id}>
                                                    <img src={item.logo} alt={item.name} className="w-auto h-auto" />
                                                </div>
                                            ))}
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                    {/* Next Button (Hidden on Mobile) */}
                    <button onClick={handleNext} className="hidden md:block">
                        <img src={arrow2} alt="Next" className="w-4 h-4 md:w-6 md:h-6" />
                    </button>
                </div>
            </section>



        </>
    );
}

export default Mitra;
