import WaButtons from '../../assets/image/Whatsapp.png';

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-2 right-2 md:right-16 flex justify-center items-center w-16 h-16 md:w-20 md:h-20 rounded-full z-50 cursor-pointer border-4 border-[#6950DA] bg-gradient-to-l from-[#FD66B9] to-[#A162F9] m-[10px]">
      <img
        className="w-10 h-10 md:w-12 md:h-12"
        src={WaButtons}
        alt="WhatsApp"
      />
    </div>
  );
};

export default WhatsAppButton;
