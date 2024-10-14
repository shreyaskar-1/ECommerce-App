import React, { useState } from 'react';

// Define the BlobButton component
const BlobButton = ({
  text = "Blob Button",
  onClick,
}) => {
    
  // State to track hover
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="buttons">
      <button
        className="blob-btn"
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}  // Set hover to true on mouse enter
        onMouseLeave={() => setIsHovered(false)} // Set hover to false on mouse leave
        style={{
          color: isHovered ? '#fff' : '#6F4E37',
        }}
      >
        {text}
        <span className="blob-btn__inner">
          <span className="blob-btn__blobs">
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
          </span>
        </span>
      </button>
      <br />
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'none' }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="1.5vw"></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
              result="goo"
            ></feColorMatrix>
            <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
          </filter>
        </defs>
      </svg>

      {/* CSS styles */}
      <style jsx>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .buttons {
          text-align: center;
          border-radius: 3vw;
        }

        .blob-btn {
          z-index: 1;
          position: relative;
          padding: 2vw 4vw;
          text-align: center;
          text-transform: uppercase;
          font-size: 1.2vw;
          font-weight: bold;
          outline: none;
          border: none;
          transition: color 0.5s;
          cursor: pointer;
          border-radius: 3vw;
        }

        /* Adjustments for larger screens */
        @media (min-width: 1024px) {
          .blob-btn {
            padding: 1vw 2vw;
            font-size: 1.1vw;
          }
        }

        /* Adjustments for tablet screens */
        @media (max-width: 1023px) and (min-width: 768px) {
          .blob-btn {
            padding: 1vw 1vw;
            font-size: 1.8vw;
          }
        }

        /* Adjustments for mobile screens */
        @media (max-width: 767px) {
          .blob-btn {
            padding: 2vw 3vw;
            font-size: 2.6vw;
            border-radius: 3vw;
          }

          .blob-btn__blob {
            top: 0.5vw;
          }
        }

        .blob-btn:before {
          content: '';
          z-index: 1;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          border: 0.2vw solid #6F4E37;
          border-radius: 3vw;
        }

        .blob-btn:after {
          content: '';
          z-index: -2;
          position: absolute;
          left: 0.3vw;
          top: 0.3vw;
          width: 100%;
          height: 100%;
          transition: all 0.3s 0.2s;
          border-radius: 3vw;
        }

        .blob-btn:hover {
          color: #FFFFFF;
        }

        .blob-btn:hover:after {
          transition: all 0.3s;
          left: 0;
          top: 0;
          border-radius: 3vw;
        }

        .blob-btn__inner {
          z-index: -1;
          overflow: hidden;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          border-radius: 3vw;
          background: #ffffff;
        }

        .blob-btn__blobs {
          position: relative;
          display: block;
          height: 100%;
          filter: url('#goo');
        }

        .blob-btn__blob {
          position: absolute;
          top: 0.2vw;
          width: 20%;
          height: 100%;
          background: #6F4E37;
          border-radius: 100%;
          transform: translate3d(0, 150%, 0) scale(1.7);
          transition: transform 0.45s;
        }

        .blob-btn__blob:nth-child(1) {
          left: 0%;
          transition-delay: 0s;
        }

        .blob-btn__blob:nth-child(2) {
          left: 25%;
          transition-delay: 0.08s;
        }

        .blob-btn__blob:nth-child(3) {
          left: 50%;
          transition-delay: 0.16s;
        }

        .blob-btn__blob:nth-child(4) {
          left: 75%;
          transition-delay: 0.24s;
        }

        .blob-btn:hover .blob-btn__blob {
          transform: translateZ(0) scale(1.7);
        }
      `}</style>
    </div>
  );
};

export default BlobButton;
