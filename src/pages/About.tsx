import React from 'react';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import WaitlistSection from '../components/home/WaitlistSection';
import { Users, Lightbulb, Globe, CheckCircle } from 'lucide-react';
import AboutImage from '../assets/images/about us.jpg'; // Renamed import to avoid conflict
import '../styles/fonts.css';


const AboutPage: React.FC = () => { // Renamed component to avoid conflict with image import
  return (
    <>
      <Section className="pt-24 bg-blue-950">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Gütten', serif" }}>
  About g-ni
</h1>
              <p className="text-lg text-white opacity-90">
                Smart relocation, powered by context-aware AI.
              </p>
            </div>
            
            <div className="mb-12">
              <img 
                src={AboutImage}
                alt="International students on campus" 
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
                loading="lazy" // Added lazy loading
              />
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-100">
              <p>
                G-NI is transforming from a concierge service into a mobility-tech platform that personalizes every step of international transition. Our soon-to-launch mobile app layers intelligent guidance on top of our proven logistics infrastructure—so students, professionals and travelers get what they need before they even ask.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">Our Mission</h2>
              <p>
                To eliminate friction from international relocation by combining on‑the‑ground concierge logistics with cloud‑level intelligence—so users can focus on learning, working and exploring.
              </p>
              
              <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Users,
                    title: "Our Team",
                    description: "Diverse professionals with firsthand experience as international students"
                  },
                  {
                    icon: Lightbulb,
                    title: "Our Vision",
                    description: "A borderless world where technology makes every new city feel instantly familiar"
                  },
                  {
                    icon: Globe,
                    title: "Our Impact",
                    description: "We remove logistical hurdles and provide AI-powered guidance so that students, travelers, and professionals worldwide can begin their journeys smoothly, confidently, and fully connected."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="bg-white/20 p-4 rounded-full mb-4">
                      <item.icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-100">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Impact Metrics Section */}
              <div className="my-10 bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4 text-center">
                  Our Measurable Impact
                </h3>
                <div className="space-y-4">
                  {[
                    "70% faster onboarding — banking, SIM and housing activated in < 24h",
                    "25% higher satisfaction — dynamic itineraries deliver better activity ratings",
                    "40% social boost — improved early-semester integration through community matching"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="text-white mt-1 mr-3 flex-shrink-0" size={20} />
                      <div>
                        <span className="font-medium text-white">{item.split('—')[0]}</span> — {item.split('—')[1]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">Our Commitment</h2>
              <p>
                G-NI combines verified local partners with machine-learning models that continually refine recommendations. The result: personalized, compliant, community-connected relocation—backed by human concierges for edge-case support.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">Join Us</h2>
              <p>
                Be first to experience friction‑free relocation. Join the wait‑list and unlock early‑access pricing, priority support and beta‑only features when the G‑NI app goes live.
              </p>
            </div>
            
            <div className="mt-10 text-center">
              <a 
                href="#join-waitlist" 
                className="inline-block bg-white text-blue-900 px-6 py-3 rounded-md font-semibold  transition-colors"
              >
                Join Our Waitlist
              </a>
            </div>
          </div>
        </Container>
      </Section>
      <WaitlistSection />
    </>
  );
};

export default AboutPage;