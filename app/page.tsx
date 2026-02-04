'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [showContact, setShowContact] = useState(false);
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-10 px-4 font-sans text-gray-100 selection:bg-indigo-500 selection:text-white">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto">
        
        {/* TOP NAV BAR */}
        <nav className="bg-[#1e293b] border-b border-gray-700 p-4 flex justify-center gap-8 text-sm font-semibold tracking-wide text-white rounded-t-lg flex-wrap">
          <a href="#about" className="cursor-pointer hover:text-indigo-400 hover:bg-white/5 px-3 py-1 rounded transition-all duration-200">
            👤 About Me
          </a>
          <a href="#skills" className="cursor-pointer hover:text-indigo-400 hover:bg-white/5 px-3 py-1 rounded transition-all duration-200">
            ⚙️ Tech Stack
          </a>
          <a href="#languages" className="cursor-pointer hover:text-indigo-400 hover:bg-white/5 px-3 py-1 rounded transition-all duration-200">
            🗣️ Languages
          </a>
          <a href="#education" className="cursor-pointer hover:text-indigo-400 hover:bg-white/5 px-3 py-1 rounded transition-all duration-200">
            🎓 Education
          </a>
          <a href="#projects" className="cursor-pointer hover:text-indigo-400 hover:bg-white/5 px-3 py-1 rounded transition-all duration-200">
            💻 Projects
          </a>
        </nav>

        {/* HERO SECTION - Full Width */}
        <div className="bg-gradient-to-r from-[#111827] via-[#0f172a] to-[#1e293b] border-l border-r border-b border-gray-700 p-10 flex items-center gap-10">
          <div className="flex-shrink-0">
            <div className="w-36 h-36 relative">
              <div
                aria-hidden="true"
                className="absolute -inset-1 rounded-full filter blur-2xl opacity-80 animate-[spin_8s_linear_infinite] motion-reduce:animate-none"
                style={{
                  background:
                    'conic-gradient(from 0deg at 50% 50%, #06b6d4, #8b5cf6, #ef4444, #06b6d4)',
                }}
              />
              <div className="relative w-full h-full rounded-full border-4 border-[#302387] shadow-lg shadow-indigo-900/50 overflow-hidden bg-gray-800">
                <Image
                  src="/2X2 PIC.jpg"
                  alt="Karl Hameed L. Cayugan"
                  fill
                  sizes="144px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-white mb-2">Karl Hameed L. Cayugan</h1>
            <p className="text-xl text-indigo-300 font-semibold mb-4">Aspiring Software Engineer / Web Developer</p>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-center gap-3">
                <span>📍</span> Davao City, Philippines
              </p>
              <p className="flex items-center gap-3">
                <span>📧</span> karlhameed2125@gmail.com
              </p>
              <div className="flex items-center gap-6 pt-3">
                <a
                  href="https://github.com/karlhameed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 hover:underline font-bold"
                >
                  <Image src="/github logo.webp" alt="GitHub" width={20} height={20} className="brightness-150" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/karl-hameed-c-1b2169252"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 hover:underline font-bold"
                >
                  <Image src="/linkedinlogo.webp" alt="LinkedIn" width={20} height={20} className="brightness-150" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* CTA SECTION */}
          <div className="flex flex-col items-center justify-center gap-4 px-6 py-6 bg-gradient-to-b from-indigo-900/20 to-purple-900/20 rounded-lg border border-indigo-500/30 backdrop-blur-sm min-w-[260px] hover:scale-105 transition-transform duration-300">
            <div className="text-center space-y-2">
              <h3 className="text-lg font-bold text-white">Let's Collaborate!</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Interested in working together? Let's connect and create something amazing.
              </p>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <button
                onClick={() => setShowContact(true)}
                className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg transition-all duration-300 text-center text-sm cursor-pointer"
              >
                Get in Touch
              </button>
              <a
                href="#projects"
                className="px-4 py-2 border border-indigo-400 text-indigo-300 hover:bg-indigo-400/10 font-semibold rounded-lg transition-all duration-300 text-center text-sm"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>

        {/* TWO COLUMN LAYOUT - ABOUT + SKILLS */}
        <div className="grid md:grid-cols-2 gap-0 border-l border-r border-gray-700">
          
          {/* LEFT: ABOUT ME */}
          <section id="about" className="p-10 space-y-6 bg-[#0f172a] border-r border-gray-700 scroll-mt-80">
            
            {/* ABOUT ME */}
            <div>
              <h2 className="text-2xl font-bold border-b border-gray-700 pb-3 mb-4 flex items-center gap-2 text-white">
                <div>👤 About me</div>
              </h2>
              <div className="space-y-4 text-gray-300 text-base leading-relaxed">
                <p>
                  I am a highly motivated 19-year-old developer based in Davao City. 
                  I am passionate about building clean, efficient, and visually striking applications. 
                  My focus lies in turning complex logic into user-friendly digital experiences.
                </p>
                  {/* What I'm Passionate About */}
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-white mb-2">What I'm Passionate About</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-300">
                      <li>Clean, maintainable code</li>
                      <li>User-centric design</li>
                      <li>Problem-solving</li>
                      <li>Continuous learning</li>
                    </ul>
                  </div>
                  {/* Overview Container */}
                  <div className="mt-10">
                    <h3 className="text-xl font-semibold text-white mb-4">Overview</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-[#181f2a] rounded-lg p-6 flex flex-col items-start justify-center relative overflow-hidden border border-gray-700">
                        <span className="text-4xl font-bold text-white z-10">2</span>
                        <span className="text-sm text-gray-300 mt-2 z-10">Years of Experience</span>
                        <span className="absolute text-[7rem] text-gray-800 opacity-10 right-2 bottom-0 font-bold select-none">2</span>
                      </div>
                      <div className="bg-[#181f2a] rounded-lg p-6 flex flex-col items-start justify-center relative overflow-hidden border border-gray-700">
                        <span className="text-4xl font-bold text-white z-10">15+</span>
                        <span className="text-sm text-gray-300 mt-2 z-10">Years of Education</span>
                        <span className="absolute text-[7rem] text-gray-800 opacity-10 right-2 bottom-0 font-bold select-none">10</span>
                      </div>
                      <div className="bg-[#181f2a] rounded-lg p-6 flex flex-col items-start justify-center relative overflow-hidden border border-gray-700">
                        <span className="text-4xl font-bold text-white z-10">3</span>
                        <span className="text-sm text-gray-300 mt-2 z-10">Languages</span>
                        <span className="absolute text-[7rem] text-gray-800 opacity-10 right-2 bottom-0 font-bold select-none">3</span>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </section>

          {/* RIGHT: SKILLS WITH ICONS */}
          <section id="skills" className="p-10 space-y-6 bg-[#0f172a] scroll-mt-80">
            <div>
              <h2 className="text-2xl font-bold border-b border-gray-700 pb-3 mb-4 flex items-center gap-2 text-white">
                <div>⚙️ Tech Stack</div>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <SkillIconImage label="Java" src="/Java.webp" />
                <SkillIconImage label="JavaScript" src="/Javascript.webp" />
                <SkillIconImage label="Next.js" src="/next-js-logo-icon.webp" />
                <SkillIconImage label="HTML" src="/html.webp" />
                <SkillIconImage label="CSS" src="/CSS.webp" />
                <SkillIconImage label="MySQL" src="/MySQL.webp" />
              </div>
            </div>

            {/* LANGUAGES */}
            <div id="languages" className="scroll-mt-80">
              <h2 className="text-2xl font-bold border-b border-gray-700 pb-3 mb-4 flex items-center gap-2 text-white">
                <div>🗣️ Languages</div>
              </h2>
              <div className="grid grid-cols-3 gap-4">
                <LanguageIconImage label="English" src="/us.webp" />
                <LanguageIconImage label="Tagalog" src="/ph.webp" />
                <LanguageIconImage label="Bisaya" src="/ph.webp" />
              </div>
            </div>
          </section>
        </div>

        {/* FULL WIDTH SECTIONS - EDUCATION, PROJECTS */}
        <div className="border-l border-r border-b border-gray-700 bg-[#0f172a] space-y-12 p-10">
          
          {/* EDUCATION */}
          <div id="education" className="scroll-mt-80">
            <h2 className="text-2xl font-bold border-b border-gray-700 pb-3 mb-5 flex items-center gap-2 text-white">
              <div>🎓 Education</div>
            </h2>
            <div className="bg-[#1e293b] border border-gray-600 rounded-lg p-6 shadow-md space-y-6 hover:scale-105 transition-transform duration-300">
              {/* College */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <a href="https://www.facebook.com/ateneo.dedavao" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    <Image src="/Ateneo.png" alt="Ateneo De Davao University" width={40} height={40} className="rounded cursor-pointer" />
                  </a>
                  <div>
                    <h3 className="font-bold text-xl text-white">College (2024-Present)</h3>
                  </div>
                </div>
                <h3 className="font-bold text-lg text-white mb-2">Bachelor of Science in Computer Science</h3>
                <h3 className="font-normal text-md text-gray-400">Ateneo De Davao University</h3>
              </div>

              {/* Senior Highschool */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <a href="https://www.facebook.com/mapuamcm" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    <Image src="/Mapua Malayan.jpg" alt="Mapua Malayan Colleges Mindanao" width={40} height={40} className="rounded cursor-pointer" />
                  </a>
                  <div>
                    <h3 className="font-bold text-xl text-white">Senior Highschool (2022-2024)</h3>
                  </div>
                </div>
                <h3 className="font-normal text-md text-gray-400">Mapua Malayan Colleges Mindanao, Davao City Philippines</h3>
              </div>

              {/* Gradeschool & Highschool */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <a href="https://www.facebook.com/SPC.BasicEd" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    <Image src="/SPC.jpg" alt="San Pedro College" width={40} height={40} className="rounded cursor-pointer" />
                  </a>
                  <div>
                    <h3 className="font-bold text-xl text-white">Gradeschool & Highschool</h3>
                  </div>
                </div>
                <h3 className="font-normal text-md text-gray-400">San Pedro College Ulas Campus, Davao City Philippines</h3>
              </div>
            </div>
          </div>

          {/* PROJECTS */}
          <div id="projects" className="scroll-mt-80">
            <h2 className="text-2xl font-bold border-b border-gray-700 pb-3 mb-5 flex items-center gap-2 text-white">
              <div>💻 Projects</div>
            </h2>
            
            {/* Project 1 */}
            <div className="bg-[#1e293b] border border-gray-600 rounded-lg p-6 shadow-md mb-6 hover:scale-105 transition-transform duration-300">
              <h3 className="font-bold text-xl text-white mb-2">Calculator App</h3>
              <p className="text-sm font-bold text-indigo-300 mb-3 bg-indigo-900/30 inline-block px-2 py-1 rounded">📅 2023 - 2024</p>

              <ul className="list-disc list-inside text-gray-300 space-y-2 marker:text-indigo-400">
                <li>Developed a functional calculator application for Android platform using Java and Android Studio.</li>
                <li>Implemented arithmetic operations with a user-friendly interface.</li>
                <li>Utilized Android Studio for development and testing.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="bg-[#1e293b] border border-gray-600 rounded-lg p-6 shadow-md mb-6 hover:scale-105 transition-transform duration-300">
              <h3 className="font-bold text-xl text-white mb-2">Student Enrollment System</h3>
              <p className="text-sm font-bold text-indigo-300 mb-3 bg-indigo-900/30 inline-block px-2 py-1 rounded">📅 2025</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 marker:text-indigo-400">
                <li>Built a comprehensive system for managing student enrollment data using Java and MySQL.</li>
                <li>Implemented database operations for storing and retrieving student information.</li>
                <li>Designed user interfaces for seamless data management.</li>
              </ul>
            </div>

            {/* Project 3 */}
            <div className="bg-[#1e293b] border border-gray-600 rounded-lg p-6 shadow-md mb-6 hover:scale-105 transition-transform duration-300">
              <h3 className="font-bold text-xl text-white mb-2">Parking Reservation System</h3>
              <p className="text-sm font-bold text-indigo-300 mb-3 bg-indigo-900/30 inline-block px-2 py-1 rounded">📅 2025</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 marker:text-indigo-400">
                <li>Developed a parking reservation system for efficient space management using Java and MySQL.</li>
                <li>Implemented real-time availability tracking and reservation functionality.</li>
                <li>Created database structure for managing parking spots and user bookings.</li>
              </ul>
            </div>

            {/* Project 4 */}
            <div className="bg-[#1e293b] border border-gray-600 rounded-lg p-6 shadow-md mb-6 hover:scale-105 transition-transform duration-300">
              <h3 className="font-bold text-xl text-white mb-2">My Portfolio</h3>
              <p className="text-sm font-bold text-indigo-300 mb-3 bg-indigo-900/30 inline-block px-2 py-1 rounded">📅 2026</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 marker:text-indigo-400">
                <li>Developed responsive user interfaces using Next.js and Tailwind CSS.</li>
                <li>Implemented backend logic and database connections for real-time applications.</li>
                <li>Focused on modern UI/UX principles to ensure accessibility and performance.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="bg-[#302387] text-white py-6 text-center text-sm font-medium tracking-wide rounded-b-lg border-l border-r border-b border-gray-700">
          <a href="#" className="hover:text-indigo-300 hover:underline transition-colors duration-300">
            Connect with Me
          </a>
        </footer>
      </div>

      {/* CONTACT MODAL */}
      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </main>
  );
}

/* SKILL ICON COMPONENT */
function SkillIcon({ label, icon }: { label: string; icon: string }) {
  return (
    <div className="flex flex-col items-center gap-3 p-4 bg-[#1e293b] border border-gray-600 rounded-lg hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 cursor-default">
      <span className="text-3xl">{icon}</span>
      <span className="text-sm font-semibold text-gray-300 text-center">{label}</span>
    </div>
  );
}

/* SKILL ICON IMAGE COMPONENT */
function SkillIconImage({ label, src }: { label: string; src: string }) {
  return (
    <div className="flex flex-col items-center gap-3 p-4 bg-[#1e293b] border border-gray-600 rounded-lg hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/30 hover:scale-105 transition-all duration-300 cursor-default">
      <Image src={src} alt={label} width={48} height={48} className="object-contain" />
      <span className="text-sm font-semibold text-gray-300 text-center">{label}</span>
    </div>
  );
}

/* LANGUAGE ICON COMPONENT */
function LanguageIcon({ label, icon }: { label: string; icon: string }) {
  return (
    <div className="flex flex-col items-center gap-2 p-3 bg-[#1e293b] border border-gray-600 rounded-lg hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 cursor-default">
      <span className="text-2xl font-bold">{icon}</span>
      <span className="text-xs font-semibold text-gray-300 text-center">{label}</span>
    </div>
  );
}

/* LANGUAGE ICON IMAGE COMPONENT */
function LanguageIconImage({ label, src }: { label: string; src: string }) {
  return (
    <div className="flex flex-col items-center gap-2 p-4 bg-[#1e293b] border border-gray-600 rounded-lg hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/30 hover:scale-105 transition-all duration-300 cursor-default">
      <div className="flex items-center gap-2">
        <Image src={src} alt={label} width={32} height={32} className="object-contain rounded" />
        <span className="text-lg font-bold text-gray-300">{src === '/ph.webp' ? 'PH' : 'IN'}</span>
      </div>
      <span className="text-xs font-semibold text-gray-300 text-center">{label}</span>
    </div>
  );
}
/* CONTACT MODAL COMPONENT */
function ContactModal({ onClose }: { onClose: () => void }) {
  const contactMethods = [
    {
      title: 'Email',
      value: 'karlhameed2125@gmail.com',
      icon: '📧',
      action: () => window.location.href = 'mailto:karlhameed2125@gmail.com'
    },
    {
      title: 'LinkedIn',
      value: 'karl-hameed-c-1b2169252',
      icon: '🔗',
      action: () => window.open('https://linkedin.com/in/karl-hameed-c-1b2169252', '_blank')
    },
    {
      title: 'GitHub',
      value: 'karlhameed',
      icon: '💻',
      action: () => window.open('https://github.com/karlhameed', '_blank')
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1e293b] border border-gray-600 rounded-lg shadow-2xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl font-bold"
          >
            ✕
          </button>
        </div>

        <div className="space-y-3">
          {contactMethods.map((method, index) => (
            <button
              key={index}
              onClick={method.action}
              className="w-full p-4 bg-[#0f172a] border border-gray-600 rounded-lg hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 text-left"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{method.icon}</span>
                <div>
                  <h3 className="font-semibold text-white text-sm">{method.title}</h3>
                  <p className="text-gray-400 text-xs mt-1">{method.value}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}