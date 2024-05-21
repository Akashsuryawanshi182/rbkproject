
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const isLocalhost = window.location.hostname === 'localhost';
    const consent = Cookies.get('cookie-consent');

    if (isLocalhost || !consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('cookie-consent', 'accepted', { expires: 365 });
    setShowBanner(false);
  };

  const handleReject = () => {
    Cookies.set('cookie-consent', 'rejected', { expires: 365 });
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 w-full bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <p>We use cookies to improve your experience on our site. Do you accept?</p>
        <div>
          <button 
            onClick={handleAccept} 
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Accept
          </button>
          <button 
            onClick={handleReject} 
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
