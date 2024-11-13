import { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
        setFadeOut(false); // Button appears without fading
      } else {
        setFadeOut(true); // Fade the button out as we approach the top
        setVisible(false); // Hide it completely when near the top
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    visible && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`flex justify-center items-center fixed bottom-10 right-10 bg-coral-red text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition-all duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'} animate-bounce`}
        aria-label="Back to Top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="38" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 4l4 4h-3v5h-2V8H8z" />
        </svg>
      </button>
    )
  );
};

export default BackToTopButton;