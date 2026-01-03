import Image from "next/image";

import imgHighSchool from "@/public/img/logo_fermi.png";
import imgUniversity from "@/public/img/logo_torvergata.png";

function StudyCard({ image, title, subtitle, description }) {
  return (
    <div className="bg-white w-full rounded-2xl border border-black/10 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02),0px_6px_12px_0px_rgba(0,0,0,0.03)] overflow-hidden">
      <div className="p-6 md:p-8 flex flex-col gap-6">
        
        {/* Header della Card: Icona + Titoli */}
        <div className="flex items-center gap-4">
          {/* Contenitore Immagine */}
          <div className="relative w-[48px] h-[48px] shrink-0">
            <Image 
              src={image} 
              alt={title}
              className="object-contain" // object-contain mantiene le proporzioni del logo
              fill
              sizes="48px"
            />
          </div>
          
          {/* Testi Header */}
          <div className="flex flex-col">
            <h4 className="font-semibold text-[16px] leading-[1.5] text-black">
              {title}
            </h4>
            <p className="font-medium text-[16px] leading-[1.4] text-black/55">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Descrizione */}
        <div className="text-[15px] font-medium leading-[1.45] text-black tracking-[-0.075px]">
          <p>{description}</p>
        </div>

      </div>
    </div>
  );
}

export default function Studies() {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-6 py-10 lg:px-16 lg:py-10" data-name="Studies">
      
      {/* Contenitore Principale */}
      <div className="flex flex-col items-start lg:items-center gap-8 lg:gap-8 w-full">
        
        {/* Titolo Sezione */}
        <div className="w-full"> 
          <h3 className="text-[40px] font-bold leading-[1.2] tracking-[-0.4px] lg:tracking-[-0.8px] text-black font-['Inter',sans-serif]">
            Studies
          </h3>
        </div>

        {/* Lista delle Cards */}
        <div className="flex flex-col gap-6 w-full items-center">
          
          {/* Card 1: Superiori */}
          <div className="w-full">
            <StudyCard 
              image={imgHighSchool}
              title="ITT Enrico Fermi Frascati"
              subtitle="High school • 2019 - 2024"
              description="I graduated from ITT Enrico Fermi in Frascati with a score of 100/100, significantly expanding my software knowledge and building a solid foundation in computer networking. 💻🎓"
            />
          </div>

          {/* Card 2: Università */}
          <div className="w-full">
            <StudyCard 
              image={imgUniversity}
              title="University of Rome Tor Vergata"
              subtitle="University • 2024 - Today"
              description="Since the start of the 2024 academic year, I have been attending the Computer Engineering course at the University of Rome Tor Vergata. In this program, I aim to specialize in machine learning and artificial intelligence, two fields I consider essential for the future of technology and innovation. 🚀💻"
            />
          </div>

        </div>
      </div>
    </section>
  );
}