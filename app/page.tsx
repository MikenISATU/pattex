"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

// Define the component with React.FC for TypeScript
const PattexHomePage: React.FC = () => {
  // State for burger menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State for active dot in the carousel
  const [activeDot, setActiveDot] = useState(1); // Default to second image
  // Ref for the scroll container
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Toggle burger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll to specific image and center it
  const scrollToImage = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const containerWidth = container.clientWidth;
      const imageWidth = container.querySelector("div")?.clientWidth || containerWidth;
      const scrollPosition = index * imageWidth - (containerWidth - imageWidth) / 2;
      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setActiveDot(index);
    }
  };

  // Handle scroll to update active dot
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const containerWidth = scrollContainer.clientWidth;
      const imageWidth = scrollContainer.querySelector("div")?.clientWidth || containerWidth;
      const newActiveDot = Math.round(scrollLeft / imageWidth);
      setActiveDot(newActiveDot);
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to second image on mount
  useEffect(() => {
    scrollToImage(1); // Center the second image (index 1) when component mounts
  }, []);

  // Define the feature items with TypeScript interface
  interface Feature {
    title: string;
    description: string;
  }

  const features: Feature[] = [
    {
      title: "Real-Time Pattern Detection",
      description: "Uses YOLOv11 to identify fabric patterns instantly and accurately.",
    },
    {
      title: "AI Layout Optimization",
      description: "Reduces fabric waste by optimizing layout based on material size and design.",
    },
    {
      title: "Precision Cutting Guidance",
      description: "Offers real-time guidance to workers or machines for exact cutting.",
    },
  ];

  // Define technology stack items
  const techStack: string[] = [
    "YOLOv11 Fabric Detection",
    "AR & AI-Driven Layout Optimization",
    "Realtime Camera Stream Analysis",
    "Web App Interface with React",
    "Firebase/Node Backend",
  ];

  // Define partner logos
  const partners: string[] = ["textiletech.JPG", "sustainwear.JPG", "fashionailabs.JPG", "cutsmart.JPG"];

  // Define testimonials
  interface Testimonial {
    quote: string;
    author: string;
  }

  const testimonials: Testimonial[] = [
    {
      quote: "PATTEX cut our fabric waste by 30% in the first month alone. Game changer!",
      author: "Clara V., Factory Manager",
    },
    {
      quote: "We no longer rely on expert cutters. The AI does it all, fast and flawlessly.",
      author: "Miguel S., Apparel Startup Founder",
    },
    {
      quote: "Sustainable, scalable, and super smart – that’s how I’d describe PATTEX.",
      author: "Joy D., Sustainable Fashion Designer",
    },
  ];

  // Define mobile app images
  const appImages: string[] = ["t1.JPG", "t2.JPG", "t3.JPG"];

  // Define team members
  interface TeamMember {
    name: string;
    role: string;
    image: string;
  }

  const team: TeamMember[] = [
    { name: "Alona Grace G.", role: "Researcher & Co-founder", image: "T111.jpg" },
    { name: "Lourlly Tabura S.", role: "Graphics & Co-founder", image: "T222.jpg" },
    { name: "Lavinia de los S.", role: "Co-founder & UI/UX Designer", image: "T333.jpg" },
  ];

  // Define mission, vision, core values
  interface CoreValue {
    title: string;
    description: string;
  }

  const missionVision = {
    vision: "To revolutionize fashion through innovative technology that empowers sustainable design and conscious consumption.",
    mission: "We aim to make pattern-making and textile innovation accessible, promoting zero-waste fashion by integrating user-friendly digital tools with eco-conscious principles.",
    coreValues: [
      { title: "Precision in Every Pattern", description: "We deliver accurate, high-quality results with meticulous detail." },
      { title: "Agility and Speed", description: "We prioritize efficiency, moving swiftly without compromising quality." },
      { title: "Trust Through Transparency", description: "We build relationships through openness and dependability." },
      { title: "Tailored Innovation", description: "We design custom solutions to meet unique customer needs." },
      { title: "Excellence as a Standard", description: "We uphold high standards, always striving to improve." },
      { title: "X-Factor Collaboration", description: "We foster teamwork where ideas flow and everyone contributes." },
    ] as CoreValue[],
  };

  // Add IntersectionObserver for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-on-scroll");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        .animate-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .animate-on-scroll {
          opacity: 1;
          transform: translateY(0);
        }
        .burger-menu {
          display: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @media (max-width: 640px) {
          .burger-menu {
            display: block;
          }
          .nav-menu {
            display: ${isMenuOpen ? "flex" : "none"};
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: black;
            padding: 1rem;
            z-index: 40;
          }
        }
      `}</style>
      <div className="min-h-screen bg-black text-white px-4 sm:px-6 py-10 font-roboto scroll-smooth">
        <header className="max-w-6xl mx-auto flex justify-between items-center mb-12 sticky top-0 bg-black z-50 py-4">
          <Link href="/">
            <img src="/pattexl.JPG" alt="Pattex Logo" className="h-8 sm:h-12 hover:scale-105 transition-transform cursor-pointer" />
          </Link>
          <div className="burger-menu sm:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
          <nav className="nav-menu sm:flex space-x-2 sm:space-x-6 text-xs sm:text-sm font-light flex-wrap gap-y-2 sm:gap-y-0">
            {["features", "technology", "values", "partners", "customers", "demo", "app", "team", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="hover:underline hover:text-gray-300 transition-colors block sm:inline-block py-2 sm:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1).replace("-", " ")}
              </a>
            ))}
          </nav>
        </header>

        <section className="text-center mb-16 sm:mb-20 max-w-6xl mx-auto animate-section">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">Your AI-Powered Pattern Express</h2>
          <p className="text-sm sm:text-lg text-gray-400 mb-6 max-w-xl mx-auto">
            Empowering fashion manufacturing with real-time AI pattern recognition and smart cutting automation.
          </p>
          <button
            className="bg-white text-black font-bold rounded-2xl px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base hover:bg-gray-200 hover:scale-105 transition-all"
          >
            Request a Demo
          </button>
        </section>

        <section id="features" className="w-full flex justify-center mb-20 sm:mb-24 scroll-mt-28 animate-section">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
            {features.map((feat, i) => (
              <div
                key={i}
                className="bg-zinc-900 rounded-lg p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 mt-1 shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold mb-1 text-white">{feat.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-400 font-light">{feat.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="technology" className="max-w-6xl mx-auto mb-20 sm:mb-24 scroll-mt-28 animate-section">
          <h3 className="text-xl sm:text-3xl font-bold mb-6">Technology Stack</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm text-gray-400 font-light">
            {techStack.map((tech, i) => (
              <li key={i} className="flex items-center">
                <span className="mr-2">✅</span> {tech}
              </li>
            ))}
          </ul>
        </section>

        <section id="values" className="max-w-6xl mx-auto mb-20 sm:mb-24 text-center scroll-mt-28 animate-section">
          <h3 className="text-xl sm:text-3xl font-bold mb-6">Values</h3>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-zinc-900 rounded-lg p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              <h4 className="text-lg sm:text-xl font-semibold mb-2 text-white">Vision</h4>
              <p className="text-xs sm:text-base text-gray-400 font-light">{missionVision.vision}</p>
            </div>
            <div className="bg-zinc-900 rounded-lg p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              <h4 className="text-lg sm:text-xl font-semibold mb-2 text-white">Mission</h4>
              <p className="text-xs sm:text-base text-gray-400 font-light">{missionVision.mission}</p>
            </div>
            <div className="bg-zinc-900 rounded-lg p-6 shadow-lg">
              <h4 className="text-lg sm:text-xl font-semibold mb-2 text-white">Core Values</h4>
              <p className="text-xs sm:text-base text-gray-400 font-light mb-4">Your Pattern Express</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {missionVision.coreValues.map((value, i) => (
                  <div
                    key={i}
                    className="bg-zinc-800 rounded-lg p-4 hover:shadow-lg hover:scale-105 transition-all"
                  >
                    <h5 className="text-sm sm:text-base font-semibold text-white mb-1">{value.title}</h5>
                    <p className="text-xs sm:text-sm text-gray-400 font-light">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="partners" className="max-w-6xl mx-auto mb-20 sm:mb-24 text-center scroll-mt-28 animate-section">
          <h3 className="text-xl sm:text-3xl font-bold mb-6">Our Partners</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center text-gray-300 justify-center">
            {partners.map((logo, i) => (
              <div
                key={i}
                className="bg-zinc-900 p-4 rounded-xl flex items-center justify-center h-24 sm:h-32 hover:scale-105 transition-transform"
              >
                <img src={`/${logo}`} alt={`Partner ${i + 1}`} className="max-h-16 sm:max-h-20 object-contain" />
              </div>
            ))}
          </div>
        </section>

        <section id="customers" className="max-w-6xl mx-auto mb-20 sm:mb-24 text-center scroll-mt-28 animate-section">
          <h3 className="text-xl sm:text-3xl font-bold mb-6">Customer Testimonials</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-300 font-light">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-zinc-900 rounded-lg p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <p className="text-white text-xs sm:text-base">“{testimonial.quote}”</p>
                <p className="mt-4 font-semibold text-xs sm:text-base">– {testimonial.author}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="demo" className="max-w-6xl mx-auto text-center mb-20 sm:mb-24 scroll-mt-28 animate-section">
          <h3 className="text-xl sm:text-3xl font-bold mb-4">See It In Action</h3>
          <p className="text-gray-400 mb-6 text-xs sm:text-base">Here’s a look at the PATTEX Web App:</p>
          <div className="bg-zinc-900 p-4 sm:p-6 rounded-2xl shadow-lg inline-block">
            <img src="/sample-webapp.JPG" alt="PATTEX Web App Preview" className="rounded-xl w-full max-w-xs sm:max-w-xl" />
          </div>
        </section>

        <section id="app" className="max-w-6xl mx-auto text-center mb-20 sm:mb-24 scroll-mt-28 animate-section">
          <h3 className="text-xl sm:text-3xl font-bold mb-4">Mobile App Walkthrough</h3>
          <p className="text-gray-400 mb-6 text-xs sm:text-base">Preview the user journey in our fabric detection mobile app:</p>
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="flex sm:grid sm:grid-cols-3 gap-4 overflow-x-auto sm:overflow-x-hidden snap-x snap-mandatory pb-4 sm:pb-0 no-scrollbar px-4 sm:px-0"
            >
              {appImages.map((img, i) => (
                <div key={i} className="flex-shrink-0 w-48 sm:w-full snap-center">
                  <img src={`/${img}`} alt={`GUI Mockup ${i + 1}`} className="w-full rounded-xl border border-white" />
                </div>
              ))}
            </div>
            <div className="flex justify-center space-x-2 mt-4 sm:hidden">
              {appImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToImage(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeDot === i ? "bg-white scale-125" : "bg-gray-500"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="max-w-6xl mx-auto text-center mb-20 sm:mb-24 scroll-mt-28 animate-section">
          <h3 className="text-xl sm:text-3xl font-bold mb-6">Meet the Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-300 font-light">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-zinc-900 rounded-lg p-6 flex flex-col items-center shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <img
                  src={`/${member.image}`}
                  alt={`Team member ${i + 1}`}
                  className="rounded-full w-16 sm:w-24 h-16 sm:h-24 mb-4 object-cover"
                />
                <p className="font-semibold text-white text-xs sm:text-base">{member.name}</p>
                <p className="text-xs sm:text-sm text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="max-w-6xl mx-auto text-center mb-20 sm:mb-24 scroll-mt-28 animate-section">
          <h3 className="text-xl sm:text-3xl font-bold mb-6">Contact Us</h3>
          <p className="text-gray-300 mb-2 text-xs sm:text-base">
            Email Us: <a href="mailto:pattexsc.@gmail.com" className="underline">pattexsc.@gmail.com</a>
          </p>
          <p className="text-gray-300 mb-2 text-xs sm:text-base">Phone Number: 09287394281</p>
          <p className="text-gray-400 mb-6 text-xs sm:text-base">Kwadra TBI New Site Lapaz, Iloilo City, Philippines</p>
          <div className="flex justify-center space-x-4 sm:space-x-6">
            <a href="https://www.facebook.com/profile.php?id=100093508801497" target="_blank" rel="noopener noreferrer">
              <img src="/facebook.webp" alt="Facebook" className="w-5 sm:w-6 h-5 sm:h-6 hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.instagram.com/pattexsc/profilecard/?igsh=ZGJwczNsMHhlNmVk" target="_blank" rel="noopener noreferrer">
              <img src="/INSTA.svg" alt="Instagram" className="w-5 sm:w-6 h-5 sm:h-6 hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.tiktok.com/@pattexsc" target="_blank" rel="noopener noreferrer">
              <img src="/TIKTOK.svg" alt="TikTok" className="w-5 sm:w-6 h-5 sm:h-6 hover:scale-110 transition-transform" />
            </a>
          </div>
        </section>

        <footer className="text-center text-gray-500 py-8 border-t border-gray-800 text-xs sm:text-sm font-light">
          <p className="mb-2">© ${new Date().getFullYear()} PATTEX. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default PattexHomePage;
