import { UserGroup } from '../types';

export const userGroups: UserGroup[] = [
  {
    id: 'students',
    title: 'International Students',
    tagline: "At G-NI, our goal is to provide students with a safe and seamless relocation experience to international study destinations.",
    description: "𝗦𝗺𝗮𝗿𝘁 𝗦𝘂𝗽𝗽𝗼𝗿𝘁, 𝗜𝗻𝘀𝘁𝗮𝗻𝘁 𝗦𝘁𝗮𝗿𝘁. From airport pickups to housing, our AI tailors essentials to your university. Settle faster, connect with communities, and navigate student life effortlessly.",
    icon: 'graduationCap',
    services: [
      {
        title: 'Airport Pickup',
        description: 'Direct transportation from airport to your accommodation',
        included: ['24/7 arrival monitoring', 'Luggage assistance', 'Welcome package']
      },
      {
        title: 'Housing Assistance',
        description: 'Find and secure suitable student accommodation',
        included: ['Campus proximity options', 'Lease review', 'Utility setup']
      },
      {
        title: 'Banking Setup',
        description: 'Assistance with U.S. banking system navigation',
        included: ['Account opening support', 'Mobile banking setup', 'Financial guidance']
      },
      {
        title: 'Network Support',
        description: 'Help with getting connected to mobile and internet services',
        included: ['SIM card procurement', 'Mobile plan selection', 'Wi-Fi setup assistance']
      },
      {
        title: 'Local Travel Card',
        description: 'Assistance in obtaining and using a local transit pass',
        included: ['Transit card registration', 'Route guidance', 'Reload and usage help']
      },
      {
        title: 'G-NI Personalized AI Assistant',
        description: 'An in-app AI assistant tailored to your preferences and needs',
        included: ['Customized recommendations', 'Voice/text interaction', 'Real-time notifications']
      }
    ]
  },
  {
    id: 'tourists',
    title: 'Tourists',
    tagline: "G-NI makes exploring unfamiliar destinations effortless, ensuring tourists feel confident, informed, and supported every step of the way",
    description: "𝗧𝗿𝗮𝘃𝗲𝗹 𝗦𝗺𝗮𝗿𝘁𝗲𝗿. 𝗘𝘅𝗽𝗹𝗼𝗿𝗲 𝗙𝗿𝗲𝗲𝗹𝘆. G-NI's AI unlocks hidden gems, transit hacks, and stay safe with real-time updates. Tailored to solo or group trips, we turn visits into authentic adventures. Every moment unforgettable.",
    icon: 'plane',
    services: [
      {
        title: 'Travel Planning',
        description: 'Customized itinerary creation and booking assistance',
        included: ['Attraction recommendations', 'Local transport passes', 'Guided tours']
      },
      {
        title: 'Accommodation Booking',
        description: 'Find and book suitable hotels or vacation rentals',
        included: ['Location scouting', 'Price comparison', 'Booking management']
      },
      {
        title: 'Local Experience',
        description: 'Access to authentic local experiences and activities',
        included: ['Cultural events', 'Restaurant recommendations', 'Hidden gems']
      },
      {
        title: "AI Travel Planner",
        description: "Smart itinerary generator for personalized trips",
        included: ["Route optimization", "Real-time weather updates", "Budget tracking", "Local cuisine suggestions"]
      }
    ]
  },
  {
    id: 'business',
    title: 'Business Professionals',
    tagline: "G-NI provides tailored services for business travelers whether you're relocating for a new role, attending an international conference, or managing a cross-border project.",
    description: "𝗦𝘁𝗿𝗲𝗮𝗺𝗹𝗶𝗻𝗲𝗱 𝗧𝗿𝗮𝘃𝗲𝗹. 𝗙𝗼𝗰𝘂𝘀𝗲𝗱 𝗥𝗲𝘀𝘂𝗹𝘁𝘀. G-NI ensures frictionless business travel with AI-powered real-time support, curated insights, and smart logistics. Stay productive, protected, and prepared—so you can focus on business without borders",
    icon: 'briefcase',
    services: [
      {
        title: 'Corporate Housing',
        description: 'Premium accommodation solutions for business stays',
        included: ['Location consulting', 'Lease negotiation', 'Move-in coordination']
      },
      {
        title: 'Business Setup',
        description: 'Office and workspace arrangement services',
        included: ['Workspace solutions', 'Equipment setup', 'Administrative support']
      },
      {
        title: 'Transportation',
        description: 'Professional transportation and logistics support',
        included: ['Airport transfers', 'Car service', 'Travel arrangements']
      }
    ]
  }
];