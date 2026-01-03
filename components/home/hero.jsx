import Image from "next/image";
import heroImg from "@/public/img/profile_francesco_garofolo.webp";

export default function Hero() {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-6 py-10 md:py-16 lg:px-16 overflow-hidden">
      {/* Container Principale: Colonna su mobile, Riga su Desktop */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16">
        
        {/* === PARTE TESTUALE === */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 w-full max-w-2xl">
          
          {/* Titolo */}
          <h1 className="text-[40px] md:text-[50px] font-bold leading-[1.1] tracking-[-1px] text-black mb-4 md:mb-6">
            Francesco Garofolo
          </h1>

          {/* Sottotitolo */}
          <p className="text-[16px] font-medium leading-[1.45] text-black/55 tracking-[-0.08px] mb-8 md:mb-8 max-w-[460px]">
            App & Website developer | IT student at the University of Rome Tor Vergata | Entrepreneur
          </p>

          {/* Bottoni */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button className="bg-black text-white text-[15px] font-semibold py-[12px] px-[24px] rounded-[12px] w-full sm:w-auto hover:bg-gray-800 transition-colors">
              Contact Me
            </button>
            
            <button className="border-2 border-black text-black text-[15px] font-semibold py-[12px] px-[24px] rounded-[12px] w-full sm:w-auto hover:bg-gray-100 transition-colors">
              About Me
            </button>
          </div>
        </div>

        {/* === PARTE IMMAGINE === */}
        <div className="flex-1 w-full max-w-[500px] lg:max-w-[594px] flex justify-center lg:justify-end">
          <div className="relative w-full aspect-[1.17] lg:aspect-[594/508]">
            <Image
              src={heroImg}
              alt="Francesco Garofolo Profile"
              className="object-cover rounded-[40px]"
              fill
              priority // Carica l'immagine immediatamente per migliorare il LCP
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
          </div>
        </div>

      </div>
    </section>
  );
}