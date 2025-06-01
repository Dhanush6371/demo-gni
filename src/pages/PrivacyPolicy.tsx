import React from 'react';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-blue-900">
      {/* Hero Section */}
      <Section className="pt-32 pb-20 bg-gradient-to-r bg-blue-900">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
              <span className="text-sm font-semibold text-white tracking-wider">PRIVACY & SECURITY</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Protecting your personal information is our top priority. This policy outlines how we collect, use, and safeguard your data.
            </p>
          </div>
        </Container>
      </Section>

      {/* Last Updated */}
      

      {/* Main Content */}
      <Section className="py-16">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Sidebar Navigation */}
              <div className="lg:w-1/4">
                <div className="sticky top-24">
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Policy Sections</h3>
                    <nav className="space-y-2">
                      <a href="#information-we-collect" className="block text-gray-700 hover:text-blue-600">1. Information We Collect</a>
                      <a href="#how-we-use" className="block text-gray-700 hover:text-blue-600">2. How We Use Information</a>
                      <a href="#information-sharing" className="block text-gray-700 hover:text-blue-600">3. Information Sharing</a>
                      <a href="#advertising-analytics" className="block text-gray-700 hover:text-blue-600">4. Advertising & Analytics</a>
                      <a href="#data-security" className="block text-gray-700 hover:text-blue-600">5. Data Security</a>
                      <a href="#your-choices" className="block text-gray-700 hover:text-blue-600">6. Your Choices</a>
                      <a href="#policy-changes" className="block text-gray-700 hover:text-blue-600">7. Policy Changes</a>
                      <a href="#contact-us" className="block text-gray-700 hover:text-blue-600">8. Contact Us</a>
                    </nav>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-3/4">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                  {/* Content Sections */}
                  <div className="p-8 md:p-10">
                    <section id="information-we-collect" className="mb-12">
                      <div className="flex items-start mb-6">
                        <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
                          <span className="text-blue-800 text-xl font-bold">1</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
                      </div>
                      <div className="pl-16">
                        <div className="mb-8">
                          <h3 className="text-lg font-semibold text-gray-800 mb-3">Information You Provide</h3>
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                              <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span>Email address</span>
                            </li>
                            {/* <li className="flex items-start">
                              <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span>Payment information, date of birth, employment history</span>
                            </li>
                            <li className="flex items-start">
                              <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span>Social Security Number, government-issued ID (for verification)</span>
                            </li> */}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-3">Information Collected Automatically</h3>
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                              <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span>Log data (browser type, IP address, pages viewed)</span>
                            </li>
                            <li className="flex items-start">
                              <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span>Device information (hardware model, operating system)</span>
                            </li>
                            <li className="flex items-start">
                              <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span>Approximate location derived from IP address</span>
                            </li>
                            <li className="flex items-start">
                              <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span>Data collected through cookies and similar tracking technologies</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </section>

                    <section id="how-we-use" className="mb-12">
                      <div className="flex items-start mb-6">
                        <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
                          <span className="text-blue-800 text-xl font-bold">2</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
                      </div>
                      <div className="pl-16">
                        <ul className="space-y-3 text-gray-700">
                          {[
                            // "Provide and improve our Services, process transactions",
                            "Verify your identity and conduct background/credit checks",
                            "Send technical notices, updates, and security alerts",
                            "Respond to your inquiries and provide customer support",
                            "Communicate about products, services, and events (with opt-out available)",
                            "Monitor usage trends and analyze Service performance",
                            "Detect and prevent fraudulent or illegal activity",
                            "Debug errors and maintain Service functionality",
                            "Comply with legal and financial obligations"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </section>

                    <section id="information-sharing" className="mb-12">
                      <div className="flex items-start mb-6">
                        <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
                          <span className="text-blue-800 text-xl font-bold">3</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Information Sharing</h2>
                      </div>
                      <div className="pl-16">
                        <p className="text-gray-700 mb-4">We may share your information with:</p>
                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                          {[
                            "Service providers (background check services, payment processors)",
                            // "Landlords and property owners",
                            // "Professional advisors (legal, financial)",
                            "Government authorities when required by law",
                            "Affiliated companies under common ownership",
                            "Successor entities in case of merger or acquisition"
                          ].map((item, index) => (
                            <div key={index} className="flex items-start bg-blue-50 rounded-lg p-4">
                              <svg className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                        <div className="bg-green-50 border-l-4 border-green-400 p-4">
                          <div className="flex">
                            <div className="flex-shrink-0">
                              <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div className="ml-3">
                              <p className="text-sm text-green-700">
                                <span className="font-medium">Important:</span> We do not sell your personal information to third parties.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* Additional sections would follow the same pattern */}
                    <section id="advertising-analytics" className="mb-12">
                      <div className="flex items-start mb-6">
                        <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
                          <span className="text-blue-800 text-xl font-bold">4</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Advertising and Analytics</h2>
                      </div>
                      <div className="pl-16">
                        <p className="text-gray-700 mb-4">
                          We use third-party analytics services and advertising networks that may collect information about your use of our Services and other websites/applications.
                        </p>
                        {/* <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <p className="text-gray-700 mb-2">
                            <span className="font-medium">Opt-out:</span> You can opt out of interest-based advertising at:
                          </p>
                          <a 
                            href="http://www.aboutads.info/choices" 
                            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            www.aboutads.info/choices
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div> */}
                      </div>
                    </section>

                    <section id="data-security" className="mb-12">
                      <div className="flex items-start mb-6">
                        <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
                          <span className="text-blue-800 text-xl font-bold">5</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Data Security and International Transfers</h2>
                      </div>
                      <div className="pl-16">
                        <p className="text-gray-700 mb-4">
                          We implement industry-standard security measures to protect your information, including encryption, access controls, and regular security audits.
                        </p>
                        <p className="text-gray-700">
                          As we are based in the U.S., your information may be transferred to and processed in the U.S. and other countries that may have different data protection laws than your jurisdiction. We implement appropriate safeguards for international data transfers.
                        </p>
                      </div>
                    </section>

                    <section id="your-choices" className="mb-12">
                      <div className="flex items-start mb-6">
                        <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
                          <span className="text-blue-800 text-xl font-bold">6</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Your Choices</h2>
                      </div>
                      <div className="pl-16">
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Account Information</h3>
                            <p className="text-gray-700">
                              You can update your account information by logging in or emailing us at <span className="font-medium text-blue-600">hello@G-Ni.com</span> to delete your account (some information may be retained as required by law).
                            </p>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Cookies</h3>
                            <p className="text-gray-700 mb-2">
                              Most browsers allow you to remove or reject cookies, but this may affect Service functionality.
                            </p>
                            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                              <p className="text-gray-700">
                                <span className="font-medium">Browser Settings:</span> Adjust your browser settings to block cookies or alert you when cookies are being sent.
                              </p>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Communications</h3>
                            <p className="text-gray-700">
                              Opt out of promotional emails by following unsubscribe instructions or emailing <span className="font-medium text-blue-600">contact@gniapp.com</span>. You may still receive transactional messages.
                            </p>
                          </div>
                          {/* <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Text Messages</h3>
                            <p className="text-gray-700">
                              Reply <span className="font-medium">"STOP"</span> to opt out of marketing texts. Note that operational texts may still be sent.
                            </p>
                          </div> */}
                        </div>
                      </div>
                    </section>

                    <section id="policy-changes" className="mb-12">
                      <div className="flex items-start mb-6">
                        <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
                          <span className="text-blue-800 text-xl font-bold">7</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Changes to This Policy</h2>
                      </div>
                      <div className="pl-16">
                        <p className="text-gray-700">
                          We may update this policy and will notify you by revising the date at the top or through other means like website notices. We encourage periodic review of this policy.
                        </p>
                      </div>
                    </section>

                    <section id="contact-us">
                      <div className="flex items-start mb-6">
                        <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
                          <span className="text-blue-800 text-xl font-bold">8</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
                      </div>
                      <div className="pl-16">
                        <p className="text-gray-700 mb-6">
                          For questions about this Privacy Policy or our privacy practices, please contact our Data Protection Officer at:
                        </p>
                        <div className="bg-blue-50 rounded-xl p-6">
                          <div className="flex items-start">
                            <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                              <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div className="ml-2 sm:ml-4">
  <h3 className="text-base sm:text-lg font-semibold text-gray-900">Privacy Team</h3>
  <p className="mt-1 text-sm sm:text-base text-gray-700 break-all">
    <a href="mailto:contact@gniapp.com" className="text-blue-600 hover:text-blue-800">
      contact@gniapp.com
    </a>
  </p>
  <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-500">
    We typically respond within 1-2 business days.
  </p>
</div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <div className="bg-blue-900 border-b border-gray-200 py-4">
        <Container>
          <div className="max-w-4xl mx-auto text-right">
            <p className="text-sm text-white-500">
              <span className="font-medium">Last Updated:</span> February 2, 2022
            </p>
          </div>
        </Container>
      </div>
    </div>
    
  );
};

export default PrivacyPolicy;