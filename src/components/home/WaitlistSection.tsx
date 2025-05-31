




import React, { useState, useEffect } from 'react';
import Container from '../ui/Container';
import Section from '../ui/Section';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import OtpVerification from './OtpVerification';

// Spinner component
const Spinner = () => (
  <svg
    className="animate-spin h-5 w-5 text-grey-900"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
    />
  </svg>
);

const WaitlistSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [packageType, setPackageType] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [packageError, setPackageError] = useState('');
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showOtpVerification, setShowOtpVerification] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [duplicateEmailError, setDuplicateEmailError] = useState('');
  const [showTermsError, setShowTermsError] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSubmitted) {
      timer = setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
        setPackageType('');
        setAcceptedTerms(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isSubmitted]);

  const validateForm = () => {
    setError('');
    setPackageError('');
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return false;
    }
    if (!packageType) {
      setPackageError('Please select a package');
      return false;
    }
    return true;
  };


  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setDuplicateEmailError(''); // Reset error

  if (!validateForm()) return;

  setIsLoading(true);

  try {
    // 1️⃣ First, check if email exists in DB
    const checkResponse = await fetch('https://servergni-servergni.gofastapi.com/check-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    if (!checkResponse.ok) {
      throw new Error('Failed to check email.');
    }

    const { exists } = await checkResponse.json();

    if (exists) {
      setDuplicateEmailError('This email is already subscribed to the waitlist.');
      setIsLoading(false);
      return; // Stop further execution
    }

    // 2️⃣ If email is new, proceed to Terms Modal
    setShowTermsModal(true);

  } catch (err) {
    setError('Something went wrong. Please try again.');
  } finally {
    setIsLoading(false);
  }
};

  const handleAcceptTerms = () => {
    setShowTermsModal(false);
    setShowOtpVerification(true);
  };

  const handleOtpVerify = async () => {
    setIsLoading(true);
    setShowOtpVerification(false);
    try {
      const response = await fetch('https://servergni-servergni.gofastapi.com/details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          package: packageType,
          acceptedTerms: true,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpCancel = () => {
    setShowOtpVerification(false);
  };

  return (
    <Section id="join-waitlist" className="bg-blue-950 text-white">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Waitlist
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Be the first to know when G-NI launches. Enter your email below to join our waitlist
            and receive updates about our services.
          </p>

          {isSubmitted ? (
            <div className="bg-green-600/20 border border-green-500 p-6 rounded-lg animate-fadeIn">
              <h3 className="text-xl font-semibold mb-2">Thank You for Joining!</h3>
              <p>
                You've been added to our waitlist. We'll notify you as soon as our services go live.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
  <div className="flex flex-col md:flex-row gap-4">
    <div className="flex-grow">
      <input
        type="email"
        placeholder="Enter your email address"
        className={`w-full px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 ${
          error || duplicateEmailError ? 'ring-2 ring-red-500' : 'focus:ring-white'
        }`}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setDuplicateEmailError(''); // Clear error on typing
        }}
        required
      />
      {error && <p className="text-red-400 text-sm mt-2 text-left">{error}</p>}
      {duplicateEmailError && (
        <p className="text-red-400 text-sm mt-2 text-left">{duplicateEmailError}</p>
      )}
    </div>
                <div className="w-full md:w-auto">
                  <select
                    value={packageType}
                    onChange={(e) => setPackageType(e.target.value)}
                    className={`w-full px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 ${
                      packageError ? 'ring-2 ring-red-500' : 'focus:ring-white'
                    } ${!packageType ? 'text-gray-500' : 'text-gray-800'}`}
                    required
                  >
                    <option value="" disabled hidden>Select package</option>
                    <option value="students">Students</option>
                    <option value="business">Business</option>
                    <option value="tourists">Tourists</option>
                  </select>
                  {packageError && (
                    <p className="text-red-400 text-sm mt-2 text-left">{packageError}</p>
                  )}
                </div>
              </div>
              <Button 
                variant="secondary" 
                size="lg" 
                type="submit"
                className="md:self-center flex items-center gap-2 justify-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Spinner />
                  </>
                ) : (
                  'Join Waitlist'
                )}
              </Button>
            </form>
          )}

          <p className="text-sm opacity-70 mt-4">
            *Required fields. We respect your privacy and will never share your information.
          </p>
        </div>
      </Container>

<Modal 
  isOpen={showTermsModal} 
  onClose={() => {
    setShowTermsModal(false);
    setShowTermsError(false);
    setAcceptedTerms(false); // Reset the checkbox state when closing modal
  }}
>
  <div className="bg-white text-gray-800 p-4 rounded-lg max-w-md"> 
    <h3 className="text-xl font-bold mb-2">Terms and Conditions</h3> 
    
    <div className="prose prose-xs mb-4 max-h-[60vh] overflow-y-auto"> 
      <p className="text-xs mb-2">By joining our waitlist, you agree to the following terms:</p> 
      <ul className="list-disc pl-5 text-[13px] space-y-1"> 
        <li>We will store your email address and package preference for communication purposes</li>
        <li>You will receive emails about our launch and service updates</li>
        <li>We will not share your information with third parties without your consent</li>
        <li>Our full <a href="https://demo-gni.gofastapi.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">privacy policy</a> can be found on our website</li>
      </ul>
    </div>
    
    <div className="flex items-center mb-2">
      <input
        type="checkbox"
        id="acceptTerms"
        checked={acceptedTerms}
        onChange={(e) => {
          setAcceptedTerms(e.target.checked);
          setShowTermsError(false);
        }}
        className="mr-2 h-4 w-4"
      />
      <label htmlFor="acceptTerms" className="text-xs font-medium">
        I accept the terms and conditions
      </label>
    </div>
    
    {showTermsError && (
      <p className="text-red-500 text-xs mb-2">Please accept the terms and conditions</p>
    )}
    
    <div className="flex justify-end gap-2"> 
      <Button 
        variant="ghost" 
        onClick={() => {
          setShowTermsModal(false);
          setShowTermsError(false);
          setAcceptedTerms(false); // Also reset when clicking Cancel
        }}
        className="text-gray-700 text-xs px-3 py-1" 
      >
        Cancel
      </Button>
      <Button 
        variant="primary" 
        onClick={() => {
          if (acceptedTerms) {
            handleAcceptTerms();
          } else {
            setShowTermsError(true);
          }
        }}
        className="bg-blue-600 text-white text-xs px-3 py-1" 
      >
        Verify
      </Button>
    </div>
  </div>
</Modal>


      {/* OTP Verification */}
      {showOtpVerification && (
        <OtpVerification
          onVerify={handleOtpVerify}
          onCancel={handleOtpCancel}
          onEmailUpdate={(verifiedEmail) => setEmail(verifiedEmail)}
          initialEmail={email}
        />
      )}
    </Section>
  );
};

export default WaitlistSection;
