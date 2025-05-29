import React from 'react';
import { services } from '../data/services';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import WaitlistSection from '../components/home/WaitlistSection';
import * as LucideIcons from 'lucide-react';

const Services: React.FC = () => {
  return (
    <>
      <Section className="pt-24 bg-blue-950">
        <Container>
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-yellow-500">
              Our Services
            </h1>
            <p className="text-lg text-white opacity-90 max-w-2xl mx-auto">
              Comprehensive support for international students arriving in the U.S.
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => {
              const IconComponent = (LucideIcons as any)[
                service.icon.charAt(0).toUpperCase() + service.icon.slice(1)
              ];
              
              return (
                <div 
                  key={service.id}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-8 items-center bg-white/5 p-6 rounded-lg`}
                >
                  <div className="w-full lg:w-1/2">
                    <div className="p-6 rounded-xl bg-white/10">
                      <img 
                        src={`https://images.pexels.com/photos/${1000000 + index * 100}/pexels-photo-${1000000 + index * 100}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
                        alt={service.title}
                        className="w-full h-64 object-cover rounded-lg"
                        onError={(e) => { 
                          (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'; 
                        }}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="flex items-center mb-4">
                      <div className="bg-yellow-500/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                        {IconComponent && <IconComponent className="text-yellow-500" size={24} />}
                      </div>
                      <h2 className="text-2xl font-bold text-white">
                        {service.title}
                        {service.isOptional && (
                          <span className="ml-2 text-sm font-normal text-gray-400">(Optional)</span>
                        )}
                      </h2>
                    </div>
                    <p className="text-gray-300 mb-6 text-lg">
                      {service.description}
                    </p>
                    <div className="bg-white/5 p-4 rounded-lg">
                      <h3 className="font-semibold text-yellow-500 mb-2">What's Included:</h3>
                      <ul className="space-y-2">
                        {[...Array(3)].map((_, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-yellow-500 mr-2">•</span>
                            <span className="text-gray-300">
                              {getServiceDetail(service.id, i)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
      <WaitlistSection />
    </>
  );
};

function getServiceDetail(serviceId: string, index: number): string {
  const details: Record<string, string[]> = {
    'sim-card': [
      'Pre-activated SIM card with data plan',
      'Setup assistance for your device',
      'Information on how to manage and recharge'
    ],
    'pickup-dropoff': [
      'Airport pickup upon arrival',
      'Transportation to your accommodation',
      'Assistance with luggage and initial orientation'
    ],
    'banking': [
      'Appointment scheduling with local banks',
      'Document preparation assistance',
      'Guidance on account types and banking practices'
    ],
    'accommodation': [
      'Curated housing options based on preferences',
      'Virtual tours of available accommodations',
      'Lease review and explanation of terms'
    ],
    'travel-card': [
      'Pre-loaded travel card for public transportation',
      'Information on routes relevant to your campus',
      'Guidance on recharging and managing your card'
    ]
  };
  
  return details[serviceId]?.[index] || 'Service detail';
}

export default Services;