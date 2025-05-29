// import React from 'react';
// import Container from '../ui/Container';
// import Section from '../ui/Section';
// import { CheckCircle } from 'lucide-react';
// import benefitsVideo from '../../assets/images/benefits .mp4'; // Adjust the path according to your project structure

// const Benefits: React.FC = () => {
//   const benefits = [
   
//     "From pre-arrival guidance to on-ground support, we cover every step of your journey.",
//     "Customized services for students, tourists, and business traveller's.",
//     "Smooth transition into new environments with tips, tools, and insider knowledge.",
//     "Get transparent, cost-effective packages with no hidden surprises.",
//     "Access trusted accommodation, transport, and essential services in any destination"
//   ];
  
//   return (
//     <Section className="bg-blue-950">
//       <Container>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//               Why Choose G-NI?
//             </h2>
//             <p className="text-white mb-8">
//               We understand the challenges international students face when arriving in a new country.
//               Our services are designed to eliminate common obstacles and make your transition
//               to American campus life as smooth as possible.
//             </p>
            
//             <div className="space-y-4">
//               {benefits.map((benefit, index) => (
//                 <div key={index} className="flex items-start">
//                   <CheckCircle className="text-yellow-500 mt-1 mr-3 flex-shrink-0" size={20} />
//                   <p className="text-white">{benefit}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
          
//           <div className="rounded-lg overflow-hidden shadow-xl">
//             <video 
//               autoPlay 
              
//               muted 
//               playsInline
//               className="w-full h-full object-cover"
//             >
//               <source src={benefitsVideo} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         </div>
//       </Container>
//     </Section>
//   );
// };

// export default Benefits;


import React from 'react';
import Container from '../ui/Container';
import Section from '../ui/Section';
import { CheckCircle } from 'lucide-react';
import benefitsImage from '../../assets/images/benefits.jpg'; // Adjust the path and extension according to your image

const Benefits: React.FC = () => {
  const benefits = [
    "From pre-arrival guidance to on-ground support, we cover every step of your journey.",
    "Customized services for students, tourists, and business traveller's.",
    "Smooth transition into new environments with tips, tools, and insider knowledge.",
    "Get transparent, cost-effective packages with no hidden surprises.",
    "Access trusted accommodation, transport, and essential services in any destination"
  ];
  
  return (
    <Section className="bg-blue-950">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose G-NI?
            </h2>
            <p className="text-white mb-8">
              We understand the challenges international students face when arriving in a new country.
              Our services are designed to eliminate common obstacles and make your transition
              to American campus life as smooth as possible.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-yellow-500 mt-1 mr-3 flex-shrink-0" size={20} />
                  <p className="text-white">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src={benefitsImage} 
              alt="Benefits of choosing G-NI"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Benefits;