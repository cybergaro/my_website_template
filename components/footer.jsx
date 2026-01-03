import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Importiamo le icone specifiche che ci servono
import { 
  faInstagram, 
  faLinkedin, 
  faXTwitter, 
  faGithub 
} from "@fortawesome/free-brands-svg-icons";

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/francesco_garofolo/",
    icon: faInstagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/francesco-garofolo-8b3522216/",
    icon: faLinkedin,
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/fra_garofolo",
    icon: faXTwitter,
  },
  {
    name: "Github",
    href: "https://github.com/cybergaro",
    icon: faGithub,
  },
];

export default function Footer() {
  return (
    <footer className="w-full max-w-[1440px] mx-auto" data-name="Footer">
      
      {/* Container Principale */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between px-6 py-8 lg:p-16 gap-6 w-full">
        
        {/* Testo */}
        <div className="font-['Inter',sans-serif] font-semibold text-black tracking-[-0.36px] lg:tracking-[-0.48px]">
          <p className="text-[18px] lg:text-[24px] leading-[1.2]">
            Let’s work together
          </p>
        </div>

        {/* Lista Social Icons */}
        <nav className="flex items-center gap-6 lg:gap-8" aria-label="Social links">
          {SOCIAL_LINKS.map((social) => (
            <Link 
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block transition-transform hover:scale-110"
              aria-label={social.name}
            >
              <FontAwesomeIcon 
                icon={social.icon} 
                // Styling: 
                // text-black/45 replica il grigio originale (opacity 0.45)
                // group-hover:text-black rende l'icona nera al passaggio del mouse
                className="w-6 h-6 text-black/45 group-hover:text-black transition-colors duration-200" 
              />
            </Link>
          ))}
        </nav>

      </div>
    </footer>
  );
}