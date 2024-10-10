import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Home/Navbar';
import { useEffect, useRef, useContext } from 'react';
import { ThemeContext } from './Contexts/ThemeContext';

function App() {
  const mousePosition = useRef({ x: 0, y: 0 });
  const cursorRef = useRef(null); // Reference to the custom cursor element
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const handleMouseMovement = (e) => {
      // Constrain the x position within the viewport
      const constrainedX = Math.min(e.clientX, window.innerWidth - 30);

      // Calculate the total y position considering the scroll position
      const totalY = e.clientY + window.scrollY;

      mousePosition.current.x = constrainedX;
      mousePosition.current.y = totalY;
    };

    // Update the cursor position smoothly using requestAnimationFrame
    const updateCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${mousePosition.current.x}px`;
        cursorRef.current.style.top = `${mousePosition.current.y}px`;
      }
      requestAnimationFrame(updateCursor);
    };

    window.addEventListener('mousemove', handleMouseMovement);
    requestAnimationFrame(updateCursor); // Start the update loop

    return () => {
      window.removeEventListener('mousemove', handleMouseMovement);
    };
  }, []);

  return (
    <div className='py-6'>
      <div
        className="lg:block hidden cursor--custom"
        ref={cursorRef} // Set the ref for the custom cursor
        style={{
          position: 'absolute',
          width: '35px',
          height: '35px',
          borderRadius: '50%',
          border: `2px solid ${theme === 'dark' ? 'white' : 'black'}`,
          pointerEvents: 'none', // So that it doesn’t block clicks
          transform: 'translate(-50%, -50%)', // Center the cursor on the mouse position
          zIndex: 1000, // Ensures it stays on top
        }}
      />

      {/* Main App Content */}
      <BrowserRouter>
        <Navbar />
        {/* <Routes>
        </Routes> */}
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;