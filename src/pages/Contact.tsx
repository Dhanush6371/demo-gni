// import React, { useState } from 'react';
// import Container from '../components/ui/Container';
// import Section from '../components/ui/Section';
// import Button from '../components/ui/Button';
// import { Mail, Phone, MapPin } from 'lucide-react';
// import { ContactFormData } from '../types';

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState<ContactFormData>({
//     name: '',
//     email: '',
//     message: ''
//   });
  
//   const [errors, setErrors] = useState<Partial<ContactFormData>>({});
//   const [isSubmitted, setIsSubmitted] = useState(false);
  
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//     if (errors[name as keyof ContactFormData]) {
//       setErrors(prev => ({ ...prev, [name]: '' }));
//     }
//   };

  
  
//   const validateForm = () => {
//     const newErrors: Partial<ContactFormData> = {};
    
//     if (!formData.name.trim()) {
//       newErrors.name = 'Name is required';
//     }
    
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }
    
//     if (!formData.message.trim()) {
//       newErrors.message = 'Message is required';
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };
  
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (validateForm()) {
//       console.log('Form submitted:', formData);
//       setIsSubmitted(true);
//     }
//   };

//   return (
//     <>
//       <Section className="pt-24 bg-blue-950">
//         <Container>
//           <div className="max-w-5xl mx-auto">
//             <div className="text-center mb-12">
//               <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
//                 Contact Us
//               </h1>
//               <p className="text-lg text-white opacity-90 max-w-2xl mx-auto">
//                 Have questions about our services? Get in touch with our team.
//               </p>
//             </div>
            
//             <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
//               <div className="lg:col-span-2 bg-white/5 p-6 rounded-lg">
//                 <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>
                
//                 <div className="space-y-6">
//                   <div className="flex items-start">
//                     <Mail className="text-white mr-4 mt-1 flex-shrink-0" size={20} />
//                     <div>
//                       <h4 className="font-semibold text-white">Email</h4>
//                       <p className="text-gray-300">contact@gniapp.com</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-start">
//                     <Phone className="text-white mr-4 mt-1 flex-shrink-0" size={20} />
//                     <div>
//                       <h4 className="font-semibold text-white">Phone</h4>
//                       <p className="text-gray-300">+1 605 605 1233</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-start">
//                     <MapPin className="text-white mr-4 mt-1 flex-shrink-0" size={20} />
//                     <div>
//                       <h4 className="font-semibold text-white">Office</h4>
//                       <p className="text-gray-300">
//                         800 N King Street Suite 304 #3529<br />
//                         WilmingtonDE-19801<br />
//                         United States
//                       </p>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="mt-8">
//                   <h4 className="font-semibold text-white mb-4">Office Hours</h4>
//                   <p className="text-gray-300">
//                     Monday - Friday: 9:00 AM - 5:00 PM<br />
//                     Saturday - Sunday: Closed
//                   </p>
//                 </div>
//               </div>
              
//               <div className="lg:col-span-3">
//                 {isSubmitted ? (
//                   <div className="bg-green-500/10 border border-green-500/20 p-8 rounded-lg text-center">
//                     <h3 className="text-xl font-bold text-green-400 mb-2">Message Sent!</h3>
//                     <p className="text-gray-300 mb-6">
//                       Thank you for reaching out. We'll get back to you as soon as possible.
//                     </p>
//                     <Button 
//                       variant="primary" 
//                       onClick={() => {
//                         setIsSubmitted(false);
//                         setFormData({ name: '', email: '', message: '' });
//                       }}
//                     >
//                       Send Another Message
//                     </Button>
//                   </div>
//                 ) : (
//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     <div>
//                       <label htmlFor="name" className="block text-white font-medium mb-2">
//                         Name
//                       </label>
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className={`w-full px-4 py-3 rounded-md bg-white/5 border ${
//                           errors.name ? 'border-red-500' : 'border-white/10'
//                         } text-white focus:outline-none focus:ring-2 focus:ring-white`}
//                         placeholder="Your name"
//                       />
//                       {errors.name && (
//                         <p className="text-red-500 text-sm mt-1">{errors.name}</p>
//                       )}
//                     </div>
                    
//                     <div>
//                       <label htmlFor="email" className="block text-white font-medium mb-2">
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className={`w-full px-4 py-3 rounded-md bg-white/5 border ${
//                           errors.email ? 'border-red-500' : 'border-white/10'
//                         } text-white focus:outline-none focus:ring-2 focus:ring-white`}
//                         placeholder="Your email address"
//                       />
//                       {errors.email && (
//                         <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//                       )}
//                     </div>
                    
//                     <div>
//                       <label htmlFor="message" className="block text-white font-medium mb-2">
//                         Message
//                       </label>
//                       <textarea
//                         id="message"
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         rows={6}
//                         className={`w-full px-4 py-3 rounded-md bg-white/5 border ${
//                           errors.message ? 'border-red-500' : 'border-white/10'
//                         } text-white focus:outline-none focus:ring-2 focus:ring-white`}
//                         placeholder="How can we help you?"
//                       />
//                       {errors.message && (
//                         <p className="text-red-500 text-sm mt-1">{errors.message}</p>
//                       )}
//                     </div>
                    
//                     <Button variant="secondary" type="submit" className="w-full">
//                       Send Message
//                     </Button>
//                   </form>
//                 )}
//               </div>
//             </div>
//           </div>
//         </Container>
//       </Section>
//     </>
//   );
// };

// export default Contact;


import React, { useState } from 'react';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import WaitlistSection from '../components/home/WaitlistSection';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactFormData } from '../types';

const Spinner = () => (
  <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'currentColor' }}>
    <svg
      style={{
        width: '16px',
        height: '16px',
        animation: 'spin 1s linear infinite',
        marginRight: '6px'
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeDasharray="80"
        strokeDashoffset="60"
      />
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </svg>
  </div>
);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<ContactFormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setSubmitError('');

    try {
      const response = await fetch('https://servergni-servergni.gofastapi.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const data = await response.json();
      console.log('Form submission successful:', data);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('There was an error submitting your form. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Section className="pt-24 bg-blue-950">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Contact Us
              </h1>
              <p className="text-lg text-white opacity-90 max-w-2xl mx-auto">
                Have questions about our services? Get in touch with our team.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-2 bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="text-white mr-4 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-white">Email</h4>
                      <p className="text-gray-300">contact@gniapp.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-white mr-4 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-white">Phone</h4>
                      <p className="text-gray-300">+1 605 605 1233</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="text-white mr-4 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-white">Office</h4>
                      <p className="text-gray-300">
                        800 N King Street Suite 304 #3529<br />
                        WilmingtonDE-19801<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-semibold text-white mb-4">Office Hours</h4>
                  <p className="text-gray-300">
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
              
              <div className="lg:col-span-3">
                {isSubmitted ? (
                  <div className="bg-green-500/10 border border-green-500/20 p-8 rounded-lg text-center">
                    <h3 className="text-xl font-bold text-green-400 mb-2">Message Sent!</h3>
                    <p className="text-gray-300 mb-6">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                    <Button 
                      variant="primary" 
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', message: '' });
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-md bg-white/5 border ${
                          errors.name ? 'border-red-500' : 'border-white/10'
                        } text-white focus:outline-none focus:ring-2 focus:ring-white`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-md bg-white/5 border ${
                          errors.email ? 'border-red-500' : 'border-white/10'
                        } text-white focus:outline-none focus:ring-2 focus:ring-white`}
                        placeholder="Your email address"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-white font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className={`w-full px-4 py-3 rounded-md bg-white/5 border ${
                          errors.message ? 'border-red-500' : 'border-white/10'
                        } text-white focus:outline-none focus:ring-2 focus:ring-white`}
                        placeholder="How can we help you?"
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                      )}
                    </div>
                    
                    {submitError && (
                      <p className="text-red-500 text-sm">{submitError}</p>
                    )}
                    
                    <Button 
                      variant="secondary" 
                      type="submit" 
                      className="w-full flex items-center justify-center"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Spinner />
                          
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <WaitlistSection />
    </>
  );
};

export default Contact;