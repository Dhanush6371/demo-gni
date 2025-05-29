import React, { useState } from 'react';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import WaitlistSection from '../components/home/WaitlistSection';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqs } from '../data/faqs';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Section className="pt-24 bg-blue-950">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-white opacity-90 max-w-2xl mx-auto">
                Find answers to common questions about G-NI and our services.
              </p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border border-white/10 rounded-lg overflow-hidden bg-white/5"
                >
                  <button
                    className="flex justify-between items-center w-full p-4 text-left hover:bg-white/5 transition-colors"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-semibold text-white">{faq.question}</span>
                    {openIndex === index ? (
                      <ChevronUp className="text-white" size={20} />
                    ) : (
                      <ChevronDown className="text-white" size={20} />
                    )}
                  </button>
                  
                  {openIndex === index && (
                    <div className="p-4 border-t border-white/10">
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center bg-white/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">
                Still have questions?
              </h3>
              <p className="text-gray-300 mb-6">
                We're here to help. Reach out to our team for personalized assistance.
              </p>
              <a href="/contact">
                <button className="bg-white text-blue-900 px-6 py-2 rounded-md hover:bg-white transition-colors">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </Container>
      </Section>
      <WaitlistSection />
    </>
  );
};

export default FAQ;