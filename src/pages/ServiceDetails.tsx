import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import WaitlistSection from '../components/home/WaitlistSection';
import { userGroups } from '../data/userGroups';
import * as LucideIcons from 'lucide-react';


import airport from '../assets/images/airport pickup.jpg';
import bank from '../assets/images/banking.jpg';
import housing from '../assets/images/housing.jpg';
import network from '../assets/images/network.jpg';
import localTravelCard from '../assets/images/localcard.jpg';
import gnipersonalized from '../assets/images/G-ni personal.jpg';
import travel from '../assets/images/travel planning.jpg';
import accommodation from '../assets/images/accomidation.jpg';

import aiTravel from '../assets/images/travel planner.jpg';
import corporateHousing from '../assets/images/corporatehousing.jpg';
import transportation from '../assets/images/transportation.jpg';


const ServiceDetails: React.FC = () => {
  const { groupId } = useParams<{ groupId: string }>();
  const group = userGroups.find(g => g.id === groupId);

  const categoryImages = {
    students: [
      airport, // Airport Pickup
      housing, // Housing Assistance
      bank, // Banking Setup
      network, // Network Support
      localTravelCard, // Local Travel Card
      gnipersonalized// Gnipersonalized
    ],
    tourists: [
      travel,// travel planning
      accommodation,// accommodation
      "https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg",// local exprerience
      aiTravel// ai travel planner
    ],
    business: [
      corporateHousing,// coorapate housing
      "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",//bussiness setup
      transportation
    ]
  };

  if (!group) {
    return (
      <Section className="pt-24 bg-blue-950">
        <Container>
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Service Not Found
            </h1>
            <p className="text-white opacity-90">
              The requested service category could not be found.
            </p>
          </div>
        </Container>
      </Section>
    );
  }

  const IconComponent = (LucideIcons as any)[
    group.icon.charAt(0).toUpperCase() + group.icon.slice(1)
  ];

  const images = categoryImages[group.id as keyof typeof categoryImages] || [];

  return (
    <>
      <Section className="pt-24 bg-blue-950">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                {IconComponent && <IconComponent className="text-blue-950" size={32} />}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {group.title}
              </h1>
              <p className="text-lg text-white opacity-90 max-w-3xl mx-auto">
                {group.tagline} {/* Changed from description to tagline */}
              </p>
            </div>

            <div className="space-y-16">
              {group.services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 rounded-lg overflow-hidden border border-white/10"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="relative h-64 lg:h-full min-h-[300px] overflow-hidden">
                      <img
                        src={images[index]}
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-6">
                        <h2 className="text-2xl font-bold text-white mb-2">
                          {service.title}
                        </h2>
                        <p className="text-white text-opacity-90">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 lg:p-8">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-4">
                            {/* What's Included: */}
                          </h3>
                          <div className="grid gap-4">
                            {service.included.map((item, i) => (
                              <div
                                key={i}
                                className="flex items-start bg-white/5 p-4 rounded-lg"
                              >
                                <LucideIcons.Check className="text-white mt-1 mr-3 flex-shrink-0" size={20} />
                                <span className="text-white">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-white opacity-90 mb-6 max-w-2xl mx-auto">
                  Contact us today to learn more about our services and how we can help you make the most of your time in the United States.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-white text-blue-900 px-8 py-3 rounded-md font-semibold  transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <WaitlistSection />
    </>
  );
};

export default ServiceDetails;