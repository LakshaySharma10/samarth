import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DRDOPage = () => {
  useEffect(() => {
    gsap.fromTo(
      '.fade-in',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out', stagger: 0.3 }
    );

    gsap.fromTo(
      '.timeline-section',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out', stagger: 0.5 }
    );

    gsap.to('.parallax-background', {
      y: -100,
      ease: 'none',
      scrollTrigger: {
        trigger: '.parallax-background',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  return (
    <main className="w-full bg-black text-white overflow-hidden">
      
      <section className="h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center fade-in">
          <h1 className="text-6xl font-bold mb-4">Defence Research and Development Organisation</h1>
          <p className="text-lg max-w-2xl mx-auto">
            DRDO is India's premier agency tasked with the development of defense technologies covering various fields like aeronautics, armaments, electronics, and more.
          </p>
        </div>
      </section>

      <section className="py-16 bg-black text-white relative overflow-hidden">
        <div className="parallax-background absolute inset-0 bg-black" style={{ height: '100vh', zIndex: -1 }}></div>
        <div className="container mx-auto px-6 w-2/3">
          <h2 className="text-4xl font-bold mb-8 text-center fade-in">What DRDO Does</h2>
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="border-l-2 border-green-700 h-full"></div>
            </div>
            <div className="flex flex-col space-y-12">
              <div className="flex flex-row justify-between space-x-8">
                <div className="flex flex-col space-y-12">
                  {[
                    { title: "Missile Systems", description: "Development of various missile systems, including ballistic and cruise missiles, crucial for India’s defense." },
                    { title: "Naval Systems", description: "Cutting-edge naval technologies including sonar and underwater surveillance systems." },
                    { title: "Life Sciences", description: "Research to ensure the health and well-being of armed forces personnel." }
                  ].map((item, index) => (
                    <div key={index} className="timeline-section bg-green-700 p-8 rounded-lg fade-in relative w-full max-w-sm">
                      <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-green-700 border-4 border-black"></div>
                      <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col space-y-12">
                  {[
                    { title: "Aeronautics", description: "Designing and developing advanced aircraft, UAVs, and other aeronautical systems." },
                    { title: "Armament Technology", description: "Advanced weapons, ammunition, and combat vehicles for the Indian Army." },
                    { title: "Electronics & Radar", description: "Development of electronic warfare systems, radar technologies, and communication systems." }
                  ].map((item, index) => (
                    <div key={index} className="timeline-section bg-green-700 p-8 rounded-lg fade-in relative w-full max-w-sm">
                      <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-green-700 border-4 border-black"></div>
                      <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 fade-in">DRDO's Contributions</h2>
          <ul className="text-lg max-w-3xl mx-auto list-disc list-inside fade-in">
            <li className="mb-4">Development of the Agni and Prithvi missile series.</li>
            <li className="mb-4">Design and production of the Light Combat Aircraft (LCA) Tejas.</li>
            <li className="mb-4">Creation of the Arjun Main Battle Tank (MBT).</li>
            <li className="mb-4">Development of advanced radar systems like the Rajendra radar.</li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-black text-white text-center">
        <div className="container mx-auto fade-in">
          <h2 className="text-4xl font-bold mb-6">Explore More About DRDO</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            DRDO continues to push the boundaries of technology to secure India's future. Discover more about their ongoing projects and how they are shaping the defense landscape.
          </p>
          <a href="https://www.drdo.gov.in/" target="_blank" rel="noopener noreferrer" className="btn text-white px-6 py-3 rounded-full text-lg transition duration-300 fade-in">
            Visit Official Website
          </a>
        </div>
      </section>
    </main>
  );
};

export default DRDOPage;
