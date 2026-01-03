import Image from "next/image";

import imgSyrus from "@/public/img/logo_syrus.webp"; 
import imgFreelance from "@/public/favicon.ico"; 

/**
 * Componente Card riutilizzabile per le esperienze lavorative
 */
function ExperienceCard({ logo, company, role, description }) {
  return (
    <div className="bg-white w-full rounded-2xl border border-black/10 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02),0px_6px_12px_0px_rgba(0,0,0,0.03)] overflow-hidden">
      <div className="p-6 md:p-8 flex flex-col gap-6">
        
        {/* Header della Card: Logo + Ruolo */}
        <div className="flex items-center gap-4">
          {/* Contenitore Logo */}
          <div className="relative w-[48px] h-[48px] shrink-0">
            <Image 
              src={logo} 
              alt={company}
              className="object-contain rounded-[8px]" // rounded-8px come nel design originale
              fill
              sizes="48px"
            />
          </div>
          
          {/* Testi Header */}
          <div className="flex flex-col">
            <h4 className="font-semibold text-[16px] leading-[1.5] text-black">
              {company}
            </h4>
            <p className="font-medium text-[16px] leading-[1.4] text-black/55">
              {role}
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

export default function Experience() {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-6 py-10 lg:px-16 lg:py-10" data-name="Experience">
      
      {/* Contenitore Principale */}
      <div className="flex flex-col items-start lg:items-center gap-8 lg:gap-8 w-full">
        
        {/* Titolo Sezione */}
        <div className="w-full ">
          <h3 className="text-[40px] font-bold leading-[1.2] tracking-[-0.4px] lg:tracking-[-0.8px] text-black font-['Inter',sans-serif]">
            Experience
          </h3>
        </div>

        {/* Lista delle Cards */}
        <div className="flex flex-col gap-6 w-full items-center">
          
          {/* Card 1: Syrus Industry */}
          <div className="w-full ">
            <ExperienceCard 
              logo={imgSyrus}
              company="Syrus Industry"
              role="Full stack WEB Dev • 2022 - 2023"
              description="At 17, I started working at Syrus Industry in Rome as a Full Stack Web Developer, where I expanded my knowledge of PHP, HTML, CSS, Python, SQL, and Laravel. 🌐💻 I primarily worked as a back-end developer, developing management systems and applications of considerable complexity. This experience allowed me to grow professionally and refine my skills in web development. 🚀🔧"
            />
          </div>

          {/* Card 2: Freelance */}
          <div className="w-full ">
            <ExperienceCard 
              logo={imgFreelance}
              company="Freelance"
              role="App & Website developer • 2023 - Today"
              description="Currently, I'm working as a freelancer, developing various websites for different agencies. I've also ventured into app development with React Native, enhancing my skills in mobile development. Additionally, I have embarked on my studies in the field of artificial intelligence, a fascinating and opportunity-rich area for the future. 🚀💻📱"
            />
          </div>

        </div>
      </div>
    </section>
  );
}