
"use client";

import React from "react";

// Define the component with React.FC for TypeScript
const PattexHomePage: React.FC = () => {
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

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10 font-roboto scroll-smooth">
      <header className="max-w-6xl mx-auto flex justify-between items-center mb-12 sticky top-0 bg-black z-50 py-4">
        <img src="/pattexl.JPG" alt="Pattex Logo" className="h-12" />
        <nav className="space-x-6 text-sm font-light">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#technology" className="hover:underline">Technology</a>
          <a href="#partners" className="hover:underline">Partners</a>
          <a href="#customers" className="hover:underline">Customers</a>
          <a href="#demo" className="hover:underline">Demo</a>
          <a href="#app" className="hover:underline">App</a>
          <a href="#team" className="hover:underline">Team</a>
        </nav>
      </header>

      <section className="text-center mb-20 max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-4">Your AI-Powered Pattern Express</h2>
        <p className="text-lg text-gray-400 mb-6 max-w-xl mx-auto">
          Empowering fashion manufacturing with real-time AI pattern recognition and smart cutting automation.
        </p>
        <button
          className="bg-white text-black font-bold rounded-2xl px-6 py-3 hover:bg-gray-200 transition-colors"
        >
          Request a Demo
        </button>
      </section>

      <section id="features" className="w-full flex justify-center mb-24 scroll-mt-28">
        <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl">
          {features.map((feat, i) => (
            <div key={i} className="bg-zinc-900 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <img src="/check-icon.png" alt="Check Icon" className="w-6 h-6 mt-1 shrink-0" />
                <div>
                  <h3 className="text-base font-semibold mb-1 text-white">{feat.title}</h3>
                  <p className="text-sm text-gray-400 font-light">{feat.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="technology" className="max-w-6xl mx-auto mb-24 scroll-mt-28">
        <h3 className="text-3xl font-bold mb-6">Technology Stack</h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-400 font-light">
          {techStack.map((tech, i) => (
            <li key={i}>✅ {tech}</li>
          ))}
        </ul>
      </section>

      <section id="partners" className="max-w-6xl mx-auto mb-24 text-center scroll-mt-28">
        <h3 className="text-3xl font-bold mb-6">Our Partners</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-gray-300 justify-center">
          {partners.map((logo, i) => (
            <div key={i} className="bg-zinc-900 p-4 rounded-xl flex items-center justify-center h-32">
              <img src={`/${logo}`} alt={`Partner ${i + 1}`} className="max-h-20 object-contain" />
            </div>
          ))}
        </div>
      </section>

      <section id="customers" className="max-w-6xl mx-auto mb-24 text-center scroll-mt-28">
        <h3 className="text-3xl font-bold mb-6">Customer Testimonials</h3>
        <div className="grid md:grid-cols-3 gap-6 text-gray-300 font-light">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-zinc-900 rounded-lg p-6">
              <p className="text-white">“{testimonial.quote}”</p>
              <p className="mt-4 font-semibold">– {testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="demo" className="max-w-6xl mx-auto text-center mb-24 scroll-mt-28">
        <h3 className="text-3xl font-bold mb-4">See It In Action</h3>
        <p className="text-gray-400 mb-6">Here’s a look at the PATTEX Web App:</p>
        <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg inline-block">
          <img src="/sample-webapp.JPG" alt="PATTEX Web App Preview" className="rounded-xl w-full max-w-xl" />
        </div>
      </section>

      <section id="app" className="max-w-6xl mx-auto text-center mb-24 scroll-mt-28">
        <h3 className="text-3xl font-bold mb-4">Mobile App Walkthrough</h3>
        <p className="text-gray-400 mb-6">Preview the user journey in our fabric detection mobile app:</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center">
          {appImages.map((img, i) => (
            <div key={i} className="relative mx-auto w-[220px]">
              <img src={`/${img}`} alt={`GUI Mockup ${i + 1}`} className="w-full rounded-xl border border-white" />
            </div>
          ))}
        </div>
      </section>

      <section id="team" className="max-w-6xl mx-auto text-center mb-24 scroll-mt-28">
        <h3 className="text-3xl font-bold mb-6">Meet the Team</h3>
        <div className="grid sm:grid-cols-3 gap-6 text-gray-300 font-light">
          {team.map((member, i) => (
            <div key={i} className="bg-zinc-900 rounded-lg p-6 flex flex-col items-center">
              <img src={`/${member.image}`} alt={`Team member ${i + 1}`} className="rounded-full w-24 h-24 mb-4 object-cover" />
              <p className="font-semibold text-white">{member.name}</p>
              <p className="text-sm text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto text-center mb-24 scroll-mt-28">
        <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
        <p className="text-gray-300 mb-2">Email Us: <a href="mailto:pattexsc.@gmail.com" className="underline">pattexsc.@gmail.com</a></p>
        <p className="text-gray-300 mb-2">Phone Number: 09287394281</p>
        <p className="text-gray-400 mb-6">Kwadra TBI New Site Lapaz, Iloilo City, Philippines</p>
        <div className="flex justify-center space-x-6">
          <a href="https://www.facebook.com/profile.php?id=100093508801497" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.webp" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/pattexsc/profilecard/?igsh=ZGJwczNsMHhlNmVk" target="_blank" rel="noopener noreferrer">
            <img src="/INSTA.svg" alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="https://www.tiktok.com/@pattexsc" target="_blank" rel="noopener noreferrer">
            <img src="/TIKTOK.svg" alt="TikTok" className="w-6 h-6" />
          </a>
        </div>
      </section>

      <footer className="text-center text-gray-500 py-8 border-t border-gray-800 text-sm font-light">
        <p className="mb-2">© {new Date().getFullYear()} PATTEX. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PattexHomePage;
