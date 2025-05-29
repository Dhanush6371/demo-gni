import React from 'react';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';

const CopyrightPolicy: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <Section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 to-indigo-900">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
              <span className="text-sm font-semibold text-white tracking-wider">LEGAL NOTICES</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Copyright Policy
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Protecting intellectual property rights is fundamental to our values. This policy outlines copyright information for our Services.
            </p>
          </div>
        </Container>
      </Section>

      {/* Last Updated */}
      <div className="bg-white border-b border-gray-200 py-4">
        <Container>
          <div className="max-w-4xl mx-auto text-right">
            <p className="text-sm text-gray-500">
              <span className="font-medium">Last Updated:</span> February 2, 2022
            </p>
          </div>
        </Container>
      </div>

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
                      <a href="#copyright-ownership" className="block text-blue-600 hover:text-blue-800 font-medium">1. Copyright Ownership</a>
                      <a href="#permitted-use" className="block text-gray-700 hover:text-blue-600">2. Permitted Use</a>
                      <a href="#prohibited-use" className="block text-gray-700 hover:text-blue-600">3. Prohibited Use</a>
                      <a href="#dmca" className="block text-gray-700 hover:text-blue-600">4. DMCA Policy</a>
                      <a href="#trademarks" className="block text-gray-700 hover:text-blue-600">5. Trademarks</a>
                      <a href="#third-party" className="block text-gray-700 hover:text-blue-600">6. Third-Party Content</a>
                      <a href="#contact" className="block text-gray-700 hover:text-blue-600">7. Contact</a>
                    </nav>
                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <a 
                        href="/privacy" 
                        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                      >
                        View Privacy Policy
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-3/4">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                  {/* Content Sections */}
                  <div className="p-8 md:p-10">
                    <section id="copyright-ownership" className="mb-12">
                      <div className="flex items-start mb-6">
                        <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
                          <span className="text-blue-800 text-xl font-bold">1</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Copyright Ownership</h2>
                      </div>
                      <div className="pl-16">
                        <p className="text-gray-700 mb-4">
                          All content included on our Services, including text, graphics, logos, images, software, and other materials (collectively "Materials") is the property of G-Ni or its content suppliers and protected by United States and international copyright laws.
                        </p>
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                          <p className="text-blue-800 font-medium mb-2">Copyright Notice:</p>
                          <p className="text-gray-700">
                            © {new Date().getFullYear()} G-Ni and its affiliates. All rights reserved. The compilation of all content on our Services is our exclusive property.
                          </p>
                        </div>
                      </div>
                    </section>

                    <section id="permitted-use" className="mb-12">
                      <div className="flex items-start mb-6">
                        <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
                          <span className="text-blue-800 text-xl font-bold">2</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Permitted Use</h2>
                      </div>
                      <div className="pl-16">
                        <p className="text-gray-700 mb-4">
                          Subject to your compliance with these terms, we grant you a limited, non-exclusive, non-transferable license to access and use our Services for personal, non-commercial purposes.
                        </p>
                        <ul className="space-y-3 text-gray-700">
                          {[
                            "Viewing and browsing content for personal use",
                            "Sharing links to our content through social media",
                            "Temporary caching for faster page loading",
                            "Printing limited copies for personal reference"
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

                    <section id="prohibited-use" className="mb-12">
                      <div className="flex items-start mb-6">
                        <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
                          <span className="text-blue-800 text-xl font-bold">3</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Prohibited Use</h2>
                      </div>
                      <div className="pl-16">
                        <p className="text-gray-700 mb-4">
                          You may not use our Materials without express written permission, except as permitted by law. Prohibited activities include:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          {[
                            "Reproducing, duplicating, or copying Materials",
                            "Creating derivative works based on our content",
                            "Distributing, selling, or licensing our Materials",
                            "Publicly displaying or performing our content",
                            "Reverse engineering or extracting source code",
                            "Using content for commercial purposes",
                            "Removing or altering copyright notices",
                            "Automated scraping or data collection"
                          ].map((item, index) => (
                            <div key={index} className="flex items-start bg-red-50 rounded-lg p-4">
                              <svg className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                              <span className="text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </section>

                    <section id="dmca" className="mb-12">
                      <div className="flex items-start mb-6">
                        <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
                          <span className="text-blue-800 text-xl font-bold">4</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">DMCA Copyright Policy</h2>
                      </div>
                      <div className="pl-16">
                        <p className="text-gray-700 mb-4">
                          We respect intellectual property rights and comply with the Digital Millennium Copyright Act (DMCA). If you believe your copyrighted work has been infringed:
                        </p>
                        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">DMCA Notice Requirements:</h3>
                          <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                            <li>Physical or electronic signature of the copyright owner</li>
                            <li>Identification of the infringed work</li>
                            <li>Identification of the infringing material and its location</li>
                            <li>Your contact information</li>
                            <li>Statement of good faith belief of unauthorized use</li>
                            <li>Statement under penalty of perjury that the information is accurate</li>
                          </ol>
                          <div className="mt-6">
                            <p className="text-gray-700 font-medium mb-2">Submit notices to:</p>
                            <div className="flex items-center text-blue-600">
                              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              <span>copyright@G-Ni.com</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                          <div className="flex">
                            <div className="flex-shrink-0">
                              <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div className="ml-3">
                              <p className="text-sm text-yellow-700">
                                <span className="font-medium">Note:</span> Misrepresentations in a DMCA notice may make you liable for damages under Section 512(f) of the DMCA.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section id="trademarks" className="mb-12">
                      <div className="flex items-start mb-6">
                        <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
                          <span className="text-blue-800 text-xl font-bold">5</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Trademarks</h2>
                      </div>
                      <div className="pl-16">
                        <p className="text-gray-700 mb-4">
                          All trademarks, service marks, logos, and trade names displayed on our Services are our property or the property of other third-parties. You are not permitted to use these marks without our prior written consent or the consent of the third-party that owns the mark.
                        </p>
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <p className="text-gray-700 font-medium mb-2">Registered Trademarks Include:</p>
                          <div className="flex flex-wrap gap-3">
                            {[
                              "G-Ni®",
                              "G-NiHome®",
                              "G-NiCommunity®",
                              "The G-Ni Logo",
                              "Universal Membership Agreement™",
                              "Member Unit License™"
                            ].map((mark, index) => (
                              <span key={index} className="inline-flex items-center px-3 py-1 rounded-full bg-white text-sm font-medium text-gray-800 border border-gray-200">
                                {mark}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </section>

                    <section id="third-party" className="mb-12">
                      <div className="flex items-start mb-6">
                        <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
                          <span className="text-blue-800 text-xl font-bold">6</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Third-Party Content</h2>
                      </div>
                      <div className="pl-16">
                        <p className="text-gray-700 mb-4">
                          Our Services may include content owned by third parties or links to third-party websites. We are not responsible for the content or practices of third-party sites.
                        </p>
                        <div className="bg-blue-50 rounded-lg p-6">
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">Third-Party Components</h3>
                          <p className="text-gray-700 mb-4">
                            The Service may include third-party software components available under open-source licenses granting broad rights to copy, modify, and distribute those components.
                          </p>
                          <p className="text-gray-700">
                            These Third Party Components are governed by their applicable licenses and not by these Terms.
                          </p>
                        </div>
                      </div>
                    </section>

                    <section id="contact">
                      <div className="flex items-start mb-6">
                        <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
                          <span className="text-blue-800 text-xl font-bold">7</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
                      </div>
                      <div className="pl-16">
                        <p className="text-gray-700 mb-6">
                          For copyright-related inquiries or permission requests, please contact our legal department:
                        </p>
                        <div className="bg-blue-50 rounded-xl p-6">
                          <div className="flex items-start">
                            <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                              <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                            </div>
                            <div className="ml-4">
                              <h3 className="text-lg font-semibold text-gray-900">Legal Department</h3>
                              <p className="mt-1 text-gray-700">
                                <a href="mailto:legal@G-Ni.com" className="text-blue-600 hover:text-blue-800">legal@G-Ni.com</a>
                              </p>
                              <p className="mt-1 text-gray-700">
                                <a href="tel:+18005551234" className="text-blue-600 hover:text-blue-800">+1 (800) 555-1234</a>
                              </p>
                              <p className="mt-2 text-gray-500 text-sm">
                                For legal correspondence only. Customer service inquiries should be directed to <a href="mailto:support@G-Ni.com" className="text-blue-600">support@G-Ni.com</a>.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>

                  {/* CTA Section */}
                  <div className="bg-gray-900 px-8 py-10 md:px-10">
                    <div className="max-w-3xl mx-auto text-center">
                      <h3 className="text-2xl font-bold text-white mb-3">Need Copyright Permissions?</h3>
                      <p className="text-gray-300 mb-6">
                        Contact our licensing team for inquiries about using our content, trademarks, or other intellectual property.
                      </p>
                      <a 
                        href="mailto:licensing@G-Ni.com" 
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-gray-100 transition-colors"
                      >
                        Request Permission
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default CopyrightPolicy;