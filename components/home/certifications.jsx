import Image from "next/image";

import imgCisco from "@/public/img/logo_cisco.png"; 

const CERTIFICATIONS = [
  {
    title: "Introduction to Cyber Security",
    issuer: "Cisco",
    year: "2024",
    description: "The Cisco Introduction to Cybersecurity certification provides a comprehensive overview of essential cybersecurity concepts. It covers topics such as threat identification, mitigation techniques, and basic security architectures. This certification is ideal for anyone starting their journey into the world of cybersecurity, aiming to build a strong foundation in protecting networks and data. 🛡️🌐",
    logo: imgCisco
  },
  {
    title: "Introduction to Networks",
    issuer: "Cisco",
    year: "2023",
    description: "The Cisco Introduction to Networks certification provides foundational knowledge in networking concepts. It covers essential topics such as network security, IP addressing, Ethernet concepts, and the basics of routing and switching. This certification is a great starting point for anyone looking to pursue a career in network engineering or related fields. 🌐💡",
    logo: imgCisco
  },
  {
    title: "Linux Unhatched",
    issuer: "Cisco",
    year: "2022",
    description: "The Cisco Linux Uncharted certification, also known as \"Linux Unhatched,\" provides an introductory course that delves into the Linux operating system from multiple angles. It covers fundamental aspects such as installation, configuration, and basic system management. This course is ideal for building a solid foundation in Linux and is a great starting point for further certifications or IT careers. 🌐💡",
    logo: imgCisco
  }
];

function CertificationCard({ data }) {
  return (
    <li className="bg-white w-full h-full rounded-2xl border border-black/10 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02),0px_12px_32px_0px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col">
      <div className="p-8 flex flex-col gap-6 h-full">
        
        {/* Header: Logo + Titolo */}
        <div className="flex items-start gap-4">
          <div className="relative w-[48px] h-[48px] shrink-0">
            <Image 
              src={data.logo} 
              alt={data.issuer} 
              className="object-cover rounded-[8px]"
              fill
              sizes="48px"
            />
          </div>
          <div className="flex flex-col">
            <h4 className="font-semibold text-[16px] leading-[1.5] text-black">
              {data.title}
            </h4>
            <p className="font-medium text-[16px] leading-[1.4] text-black/55">
              {data.issuer} • {data.year}
            </p>
          </div>
        </div>

        {/* Descrizione */}
        <div className="text-[15px] font-medium leading-[1.45] text-black tracking-[-0.075px]">
          <p>{data.description}</p>
        </div>

      </div>
    </li>
  );
}

export default function Certifications() {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-6 py-12 lg:px-16 lg:py-12" data-name="Certifications">
      
      <div className="flex flex-col gap-12 w-full">
        
        <div className="w-full">
          <h3 className="text-[32px] md:text-[48px] font-bold leading-[1.2] tracking-[-0.64px] md:tracking-[-0.96px] text-black font-['Inter',sans-serif]">
            Certifications
          </h3>
        </div>

    
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
          {CERTIFICATIONS.map((cert, index) => (
            <CertificationCard key={index} data={cert} />
          ))}
        </ul>

      </div>
    </section>
  );
}