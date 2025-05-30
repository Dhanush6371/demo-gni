// import React, { useState, useRef } from 'react';
// import './OtpVerification.css';

// interface OtpVerificationProps {
//   onVerify: () => void;
//   onCancel: () => void;
//   onEmailUpdate: (email: string) => void;
// }

// const OtpVerification: React.FC<OtpVerificationProps> = ({ 
//   onVerify, 
//   onCancel, 
//   onEmailUpdate 
// }) => {
//   const [email, setEmail] = useState('');
//   const [otp, setOtp] = useState<string[]>(['', '', '', '']); // 4-digit OTP
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const otpInputsRef = useRef<(HTMLInputElement | null)[]>([]); // Ref for OTP inputs

//   const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setEmail(e.target.value);
//   };

//   const handleOtpChange = (index: number, value: string) => {
//     if (/^\d*$/.test(value) && value.length <= 1) {
//       const newOtp = [...otp];
//       newOtp[index] = value;
//       setOtp(newOtp);

//       // Auto focus to next input if value is entered
//       if (value && index < 3) {
//         otpInputsRef.current[index + 1]?.focus();
//       }
//     }
//   };

//   const handleOtpKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
//     if (event.key === 'Backspace' && !otp[index] && index > 0) {
//       const newOtp = [...otp];
//       newOtp[index - 1] = ''; // Clear previous field
//       setOtp(newOtp);
      
//       // Move focus to previous input
//       otpInputsRef.current[index - 1]?.focus();
//     }
//   };

//   const handleSendOtp = async () => {
//     if (!email) {
//       setError('Please enter your email');
//       return;
//     }
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       setError('Please enter a valid email');
//       return;
//     }

//     setLoading(true);
//     setError('');

//     try {
//       const response = await fetch('https://route66-server.gofastapi.com/sendotp', {
//         method: 'POST',
//         body: JSON.stringify({ email }),
//         headers: { 'Content-Type': 'application/json' },
//       });

//       if (response.ok) {
//         setSuccess(true);
//         setIsOtpSent(true);
//         onEmailUpdate(email);
//       } else {
//         setError('Failed to send OTP. Please try again.');
//       }
//     } catch (err) {
//       setError('Something went wrong. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleVerify = async () => {
//     const otpCheck = otp.join('');
//     if (otpCheck.length !== 4) {
//       setError('Please enter the complete 4-digit OTP');
//       return;
//     }

//     setLoading(true);
//     setError('');

//     try {
//       const response = await fetch('https://route66-server.gofastapi.com/verify', {
//         method: 'POST',
//         body: JSON.stringify({ email, otp: otpCheck }),
//         headers: { 'Content-Type': 'application/json' },
//       });

//       if (response.ok) {
//         onVerify();
//       } else {
//         setError('Invalid OTP');
//       }
//     } catch (err) {
//       setError('Verification failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="otp-verification-modal">
//       <div className="otp-verification-content">
//         <button 
//           onClick={onCancel}
//           className="otp-close-btn"
//           disabled={loading}
//         >
//           ×
//         </button>

//         <h3 className="otp-verification-title">OTP Verification</h3>

//         <p className="otp-text">
//           {isOtpSent 
//             ? 'Enter the 4-digit OTP sent to your email' 
//             : 'Please enter your email to receive an OTP'}
//         </p>

//         {!isOtpSent ? (
//           <>
//             <input
//               type="email"
//               className="otp-email-input"
//               placeholder="Enter your email"
//               value={email}
//               onChange={handleEmailChange}
//               disabled={loading}
//             />
//             <button
//               onClick={handleSendOtp}
//               className="otp-btn otp-btn-primary"
//               disabled={loading}
//             >
//               {loading ? 'Sending...' : 'Send OTP'}
//             </button>
//           </>
//         ) : (
//           <>
//             <div className="otp-input-container">
//               {[0, 1, 2, 3].map((index) => (
//                 <input
//                   key={index}
//                   id={`otp-input-${index}`}
//                   type="text"
//                   maxLength={1}
//                   value={otp[index]}
//                   onChange={(e) => handleOtpChange(index, e.target.value)}
//                   onKeyDown={(e) => handleOtpKeyDown(index, e)}
//                   className="otp-input"
//                   disabled={loading}
//                   ref={(el) => (otpInputsRef.current[index] = el)}
//                 />
//               ))}
//             </div>
//             <button
//               onClick={handleVerify}
//               className="otp-btn otp-btn-success"
//               disabled={loading}
//             >
//               {loading ? 'Verifying...' : 'Verify OTP'}
//             </button>
//             <button
//               onClick={() => {
//                 setIsOtpSent(false);
//                 setError('');
//               }}
//               className="otp-btn otp-btn-secondary"
//               disabled={loading}
//             >
//               Change Email
//             </button>
//           </>
//         )}

//         {success && !error && (
//           <p className="otp-success-message">
//             OTP sent successfully! Check your email.
//           </p>
//         )}

//         {error && (
//           <p className="otp-error-message">
//             {error}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default OtpVerification;




import React, { useState, useRef, useEffect } from 'react';
import './OtpVerification.css';

interface OtpVerificationProps {
  onVerify: () => void;
  onCancel: () => void;
  onEmailUpdate: (email: string) => void;
  initialEmail?: string;
}

const OtpVerification: React.FC<OtpVerificationProps> = ({
  onVerify,
  onCancel,
  onEmailUpdate,
  initialEmail = ''
}) => {
  const [email, setEmail] = useState(initialEmail);
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(30);

  const otpInputsRef = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (isOtpSent && otpInputsRef.current[0]) {
      otpInputsRef.current[0].focus();
    }
  }, [isOtpSent]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (resendDisabled && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0) {
      setResendDisabled(false);
    }
    return () => clearTimeout(timer);
  }, [resendDisabled, countdown]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        otpInputsRef.current[index + 1]?.focus();
      }
    }
  };

  const handleOtpKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' && !otp[index] && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = '';
      setOtp(newOtp);
      otpInputsRef.current[index - 1]?.focus();
    }
  };

  const handleOtpPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text/plain').slice(0, 4);
    if (/^\d+$/.test(pasteData)) {
      const newOtp = [...otp];
      pasteData.split('').forEach((char, i) => {
        if (i < 4) newOtp[i] = char;
      });
      setOtp(newOtp);
    }
  };

  const handleSendOtp = async () => {
    if (!email) {
      setError('Please enter your email');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://servergni-servergni.gofastapi.com/sendotp', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        setSuccess(true);
        setIsOtpSent(true);
        onEmailUpdate(email);
        setResendDisabled(true);
        setCountdown(30);
      } else {
        setError('Failed to send OTP. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setResendDisabled(true);
    setCountdown(30);
    await handleSendOtp();
  };

  const handleVerify = async () => {
    const otpCheck = otp.join('');
    if (otpCheck.length !== 4) {
      setError('Please enter the complete 4-digit OTP');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://servergni-servergni.gofastapi.com/verify', {
        method: 'POST',
        body: JSON.stringify({ email, otp: otpCheck }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        onVerify();
      } else {
        setError('Invalid OTP');
      }
    } catch (err) {
      setError('Verification failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="otp-verification-modal">
      <div className="otp-verification-content">
        <button
          onClick={onCancel}
          className="otp-close-btn"
          disabled={loading}
        >
          ×
        </button>

        <h3 className="otp-verification-title">OTP Verification</h3>

        <p className="otp-text">
          {isOtpSent
            ? 'Enter the 4-digit OTP sent to your email'
            : 'Please enter your email to receive an OTP'}
        </p>

        {!isOtpSent ? (
          <>
            {initialEmail ? (
              <div className="otp-prefilled-email">
                <p>OTP will be sent to:</p>
                <p className="font-semibold">{email}</p>
              </div>
            ) : (
              <input
                type="email"
                className="otp-email-input"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                disabled={loading}
              />
            )}
            <button
              onClick={handleSendOtp}
              className="otp-btn otp-btn-primary"
              disabled={loading}
            >
              {loading ? (
                <div className="otp-spinner-container">
                  <div className="otp-spinner"></div>
                  <span className="ml-2">Sending...</span>
                </div>
              ) : (
                'Send OTP'
              )}
            </button>
          </>
        ) : (
          <>
            <div className="otp-input-container">
              {[0, 1, 2, 3].map((index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={otp[index]}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(index, e)}
                  onPaste={handleOtpPaste}
                  className="otp-input"
                  disabled={loading}
                  ref={(el) => (otpInputsRef.current[index] = el)}
                />
              ))}
            </div>
            <button
              onClick={handleVerify}
              className="otp-btn otp-btn-success"
              disabled={loading}
            >
              {loading ? (
                <div className="otp-spinner-container">
                  <div className="otp-spinner"></div>
                  <span className="ml-2">Verifying...</span>
                </div>
              ) : (
                'Verify OTP'
              )}
            </button>
            <div className="otp-resend-container">
              <button
                onClick={handleResendOtp}
                className="otp-resend-btn"
                disabled={resendDisabled || loading}
              >
                Resend OTP {resendDisabled && `(${countdown}s)`}
              </button>
              <button
                onClick={() => {
                  setIsOtpSent(false);
                  setError('');
                }}
                className="otp-btn otp-btn-secondary"
                disabled={loading}
              >
                Change Email
              </button>
            </div>
          </>
        )}

        {success && !error && (
          <p className="otp-success-message">
            OTP sent successfully! Check your email.
          </p>
        )}

        {error && (
          <p className="otp-error-message">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default OtpVerification;
