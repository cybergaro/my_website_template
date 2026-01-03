export default function AboutMe() {
    return (
        <section className="relative w-full max-w-[1440px] mx-auto" data-name="About Me">
            <div className="flex flex-col gap-5 lg:gap-8 px-6 py-10 lg:px-16 lg:py-10">

                {/* === TITOLO === */}
                <div className="w-full">
                <h3 className="text-[40px] font-bold leading-[1.2] tracking-[-0.4px] lg:tracking-[-0.8px] text-black font-['Inter',sans-serif]">
                    About Me
                </h3>
                </div>

                {/* === TESTO === */}
                <div className="w-full text-[15px] font-medium leading-[1.45] tracking-[-0.075px] text-black font-['Inter',sans-serif]">
                <p>
                    {`Hi there! 👋 I'm a passionate developer with a long history in the world of programming, starting at just 12 years old. At 17, I was lucky enough to work as a developer for a software house for a year, before transitioning to a freelance career. Currently, at 20 years old, I am studying Computer Engineering at Tor Vergata University in Rome. 🎓🌟`}
                </p>
                
                <br aria-hidden="true" />
                
                <p>
                    {`In my work, I mainly focus on app and website development, combining creativity and technical skills to create innovative solutions. 💡💻 Since I turned 18, I have also developed a strong interest in finance, beginning to invest my savings in the stock and bond markets. 📈💰`}
                </p>
                
                <br aria-hidden="true" />
                
                <p>
                    {`I have collaborated with several agencies to create websites, gaining valuable and diverse experience in the field. 🌐 My passion for technology and dedication to continuous improvement are what drive me to grow every day. 🚀`}
                </p>
                </div>

            </div>
        </section>
    );
}