import React from 'react';

export const SoftwareLogo = ({ name, size = 15 }) => {
  const norm = (name || '').toLowerCase();

  // 1. CAD & Design
  if (norm.includes('solidworks')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="skill-tool-icon-svg" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#E42327" />
        <path d="M12 4L19 8V16L12 20L5 16V8L12 4Z" fill="#C7181F" />
        <path d="M12 4L19 8L12 12L5 8L12 4Z" fill="#FF4D52" />
        <path d="M12 12V20L5 16V8L12 12Z" fill="#990E13" />
        <path d="M12 12L19 8V16L12 20V12Z" fill="#D91E22" />
        <path d="M9.5 13.2C9.5 11.8 11.2 11.3 12.2 10.8C13.2 10.3 13.8 9.8 13.8 9.1C13.8 8.3 13 7.8 12 7.8C10.8 7.8 10 8.4 9.8 9.3L8.2 8.7C8.6 7.2 10 6.3 12 6.3C14.1 6.3 15.6 7.4 15.6 9.1C15.6 10.6 14.1 11.2 13 11.7C12 12.2 11.4 12.7 11.4 13.4C11.4 14.2 12.3 14.7 13.4 14.7C14.7 14.7 15.6 13.9 15.9 13.1L17.4 13.7C16.9 15.3 15.4 16.2 13.4 16.2C11 16.2 9.5 14.8 9.5 13.2Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 2. Simulation & CFD: ANSYS
  if (norm.includes('ansys')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="skill-tool-icon-svg" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#000000" />
        <path d="M4 19.5L10.5 4.5H14L10 19.5H4Z" fill="#FFB71B" />
        <path d="M11.8 12.2L14.2 4.5H19.5L14.2 19.5H10.2L11.8 12.2Z" fill="#D99B14" />
        <path d="M12.5 13.5L16.2 19.5H20L15.2 11.5L12.5 13.5Z" fill="#FFB71B" />
      </svg>
    );
  }

  // OpenFOAM
  if (norm.includes('openfoam')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="skill-tool-icon-svg" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#004880" />
        <circle cx="12" cy="12" r="7.5" stroke="#00A3E0" strokeWidth="2.2" />
        <path d="M7 12C9 9 15 9 17 12C15 15 9 15 7 12Z" fill="#00A3E0" />
        <circle cx="12" cy="12" r="2.2" fill="#FFFFFF" />
      </svg>
    );
  }

  // COMSOL
  if (norm.includes('comsol')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="skill-tool-icon-svg" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#1C497B" />
        <path d="M5 15.5C7.5 12 11 11.5 13.5 13C16 14.5 17 17 19 15C16.5 18.5 13 19 10.5 17.5C8 16 7 13.5 5 15.5Z" fill="#ED1B2D" />
        <path d="M7 9C9.5 5.5 13 5 15.5 6.5C18 8 19 10.5 21 8.5C18.5 12 15 12.5 12.5 11C10 9.5 9 7 7 9Z" fill="#0080FF" />
      </svg>
    );
  }

  // 3. Programming: MATLAB
  if (norm.includes('matlab')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="skill-tool-icon-svg" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#003C71" />
        {/* MathWorks 3D Sombrero Membrane */}
        <path d="M12 3C8 8 4 14 3 17C6 19 18 19 21 17C20 14 16 8 12 3Z" fill="#CB333B" />
        <path d="M12 3C10.5 9 7 14 3 17C7 16.5 11 15 12 9C13 15 17 16.5 21 17C17 14 13.5 9 12 3Z" fill="#F36F21" />
        <path d="M12 9C9.5 15 5 17.5 3 17C7 19.5 17 19.5 21 17C19 17.5 14.5 15 12 9Z" fill="#F8A51D" />
      </svg>
    );
  }

  // Python
  if (norm.includes('python')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="skill-tool-icon-svg" aria-hidden="true">
        <path d="M11.9 2C6.9 2 7.2 4.2 7.2 4.2L7.2 6.5H12.1V7.2H5.3C3.1 7.2 2 8.4 2 11.2C2 14.4 3.3 14.7 4.2 14.7H5.6V12.7C5.6 10.3 7.6 10.3 7.6 10.3H12.4C14.4 10.3 14.4 8.4 14.4 8.4V4.2C14.4 4.2 14.3 2 11.9 2ZM9.3 3.5C9.9 3.5 10.4 4 10.4 4.6C10.4 5.2 9.9 5.7 9.3 5.7C8.7 5.7 8.2 5.2 8.2 4.6C8.2 4 8.7 3.5 9.3 3.5Z" fill="#3776AB" />
        <path d="M12.1 22C17.1 22 16.8 19.8 16.8 19.8V17.5H11.9V16.8H18.7C20.9 16.8 22 15.6 22 12.8C22 9.6 20.7 9.3 19.8 9.3H18.4V11.3C18.4 13.7 16.4 13.7 16.4 13.7H11.6C9.6 13.7 9.6 15.6 9.6 15.6V19.8C9.6 19.8 9.7 22 12.1 22ZM14.7 20.5C14.1 20.5 13.6 20 13.6 19.4C13.6 18.8 14.1 18.3 14.7 18.3C15.3 18.3 15.8 18.8 15.8 19.4C15.8 20 15.3 20.5 14.7 20.5Z" fill="#FFD43B" />
      </svg>
    );
  }

  // C
  if (norm === 'c' || norm.startsWith('c ') || norm.includes('c (')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="skill-tool-icon-svg" aria-hidden="true">
        <path d="M12 2L21 7.2V16.8L12 22L3 16.8V7.2L12 2Z" fill="#00599C" />
        <path d="M12 4L19 8V16L12 20L5 16V8L12 4Z" fill="#659AD2" />
        <path d="M15.5 14.8C14.6 15.6 13.4 16 12 16C9.2 16 7.2 14 7.2 11.2C7.2 8.4 9.2 6.4 12 6.4C13.4 6.4 14.6 6.8 15.5 7.6L14.2 9C13.6 8.5 12.9 8.2 12 8.2C10.2 8.2 8.9 9.5 8.9 11.2C8.9 12.9 10.2 14.2 12 14.2C12.9 14.2 13.6 13.9 14.2 13.4L15.5 14.8Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Fortran
  if (norm.includes('fortran')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="skill-tool-icon-svg" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#734F96" />
        <path d="M6 5H18V8.2H9.8V11H16V13.8H9.8V19H6V5Z" fill="#FFFFFF" />
        <circle cx="17" cy="18" r="2" fill="#E6C875" />
      </svg>
    );
  }

  // 4. Data Analysis & Computing: NumPy
  if (norm.includes('numpy')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="skill-tool-icon-svg" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#4DABCF" />
        <path d="M5 6H8.5L15.5 15V6H19V18H15.5L8.5 9V18H5V6Z" fill="#013243" />
        <circle cx="12" cy="12" r="1.5" fill="#FFFFFF" />
      </svg>
    );
  }

  // Pandas
  if (norm.includes('pandas')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="skill-tool-icon-svg" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#150458" />
        <rect x="5.5" y="6" width="3" height="12" rx="1.5" fill="#E70488" />
        <rect x="10.5" y="8" width="3" height="8" rx="1.5" fill="#FFFFFF" />
        <rect x="15.5" y="4" width="3" height="16" rx="1.5" fill="#FFCA00" />
      </svg>
    );
  }

  // Jupyter
  if (norm.includes('jupyter')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="skill-tool-icon-svg" aria-hidden="true">
        <path d="M12 5.5C7.5 5.5 3.8 7.3 3.5 9.5C4.2 9.2 5.2 9 6.5 9C10.5 9 13.8 11.2 14.5 14C15.8 13.8 17 13.2 17.8 12.2C18.6 11.2 19 9.8 19 8.2C17.2 6.5 14.8 5.5 12 5.5Z" fill="#F37626" />
        <path d="M12 18.5C16.5 18.5 20.2 16.7 20.5 14.5C19.8 14.8 18.8 15 17.5 15C13.5 15 10.2 12.8 9.5 10C8.2 10.2 7 10.8 6.2 11.8C5.4 12.8 5 14.2 5 15.8C6.8 17.5 9.2 18.5 12 18.5Z" fill="#9E9E9E" />
        <circle cx="6.5" cy="6.5" r="1.5" fill="#F37626" />
        <circle cx="17.5" cy="17.5" r="1.5" fill="#616161" />
        <circle cx="18" cy="6" r="1" fill="#757575" />
      </svg>
    );
  }

  // OriginPro
  if (norm.includes('origin')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="skill-tool-icon-svg" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#005B94" />
        <path d="M5 19H19" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <path d="M5 5V19" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 16L10 11L14 14L18 7" stroke="#FF4D4D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="18" cy="7" r="2" fill="#FFB71B" />
        <circle cx="10" cy="11" r="1.5" fill="#FFB71B" />
      </svg>
    );
  }

  // MS Excel
  if (norm.includes('excel')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="skill-tool-icon-svg" aria-hidden="true">
        <rect x="7" y="4" width="14" height="16" rx="2" fill="#107C41" />
        <rect x="3" y="6" width="10" height="12" rx="2" fill="#21A366" />
        <path d="M5.5 9L8 12L5.5 15H7.2L8.8 12.8L10.3 15H11.8L9.4 12L11.7 9H10.1L8.8 11.1L7.2 9H5.5Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 5. Version Control: Git & GitHub
  if (norm.includes('git')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="skill-tool-icon-svg" aria-hidden="true">
        <path d="M21.7 10.7L13.3 2.3C12.9 1.9 12.3 1.9 11.9 2.3L9.5 4.7L12 7.2C12.6 7 13.3 7.1 13.8 7.6C14.4 8.2 14.5 9 14.1 9.7L16.4 12C17.1 11.7 17.9 11.8 18.5 12.4C19.2 13.1 19.2 14.1 18.5 14.8C17.8 15.5 16.8 15.5 16.1 14.8C15.6 14.3 15.4 13.5 15.7 12.8L13.6 10.7V15.5C13.9 15.8 14 16.2 14 16.6C14 17.7 13.1 18.6 12 18.6C10.9 18.6 10 17.7 10 16.6C10 15.8 10.5 15.1 11.2 14.8V9.8C10.5 9.5 10 8.8 10 8C10 7.6 10.1 7.2 10.4 6.9L7.9 4.4L2.3 10C1.9 10.4 1.9 11 2.3 11.4L10.7 19.8C11.1 20.2 11.7 20.2 12.1 19.8L21.7 12.2C22.1 11.8 22.1 11.1 21.7 10.7Z" fill="#F05032" />
      </svg>
    );
  }

  // 6. Scientific Documentation: LaTeX
  if (norm.includes('latex')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="skill-tool-icon-svg" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#008080" />
        <text x="12" y="16" fontFamily="Georgia, serif" fontSize="11" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">T<tspan dy="2" fontSize="9">E</tspan><tspan dy="-2">X</tspan></text>
      </svg>
    );
  }

  // Mendeley
  if (norm.includes('mendeley')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="skill-tool-icon-svg" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#D71B2B" />
        <circle cx="12" cy="10" r="3.5" fill="#FFFFFF" />
        <circle cx="6.5" cy="16" r="2.5" fill="#FFFFFF" />
        <circle cx="17.5" cy="16" r="2.5" fill="#FFFFFF" />
        <path d="M10 12.5L7.5 14.5M14 12.5L16.5 14.5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  // MS Word
  if (norm.includes('word')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="skill-tool-icon-svg" aria-hidden="true">
        <rect x="7" y="4" width="14" height="16" rx="2" fill="#185ABD" />
        <rect x="3" y="6" width="10" height="12" rx="2" fill="#2B579A" />
        <path d="M4.8 9H6.4L7.5 13.5L8.7 9H9.9L11.1 13.5L12.2 9H13.6L12 15H10.5L9.3 10.7L8.1 15H6.5L4.8 9Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // MS PowerPoint
  if (norm.includes('powerpoint')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="skill-tool-icon-svg" aria-hidden="true">
        <rect x="7" y="4" width="14" height="16" rx="2" fill="#C43E1C" />
        <rect x="3" y="6" width="10" height="12" rx="2" fill="#D24726" />
        <path d="M5.5 9H8.8C10.2 9 11 9.8 11 11C11 12.2 10.2 13 8.8 13H7V15H5.5V9ZM7 11.7H8.6C9.2 11.7 9.6 11.4 9.6 11C9.6 10.6 9.2 10.3 8.6 10.3H7V11.7Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Google Suite
  if (norm.includes('google')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="skill-tool-icon-svg" aria-hidden="true">
        <path d="M22 12.2C22 11.4 21.9 10.7 21.8 10H12V14.1H17.7C17.4 15.4 16.6 16.5 15.4 17.3V19.9H18.9C21 18 22 15.3 22 12.2Z" fill="#4285F4" />
        <path d="M12 22.4C14.8 22.4 17.2 21.5 18.9 19.9L15.4 17.3C14.4 17.9 13.3 18.3 12 18.3C9.3 18.3 7 16.5 6.2 14.1H2.6V16.9C4.3 20.3 7.9 22.4 12 22.4Z" fill="#34A853" />
        <path d="M6.2 14.1C6 13.5 5.9 12.8 5.9 12.2C5.9 11.6 6 10.9 6.2 10.3V7.5H2.6C1.9 8.9 1.5 10.5 1.5 12.2C1.5 13.9 1.9 15.5 2.6 16.9L6.2 14.1Z" fill="#FBBC05" />
        <path d="M12 6.1C13.5 6.1 14.9 6.6 16 7.6L19 4.6C17.2 2.9 14.8 2 12 2C7.9 2 4.3 4.1 2.6 7.5L6.2 10.3C7 7.9 9.3 6.1 12 6.1Z" fill="#EA4335" />
      </svg>
    );
  }

  // 7. Graphic Design: Adobe Illustrator
  if (norm.includes('illustrator')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="skill-tool-icon-svg" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#330000" />
        <rect x="1" y="1" width="22" height="22" rx="3" stroke="#FF9A00" strokeWidth="1.5" />
        <text x="7.5" y="16" fontFamily="Arial, sans-serif" fontSize="10.5" fontWeight="bold" fill="#FF9A00">A</text>
        <text x="14.5" y="16" fontFamily="Arial, sans-serif" fontSize="10.5" fontWeight="bold" fill="#FF9A00">i</text>
      </svg>
    );
  }

  // Adobe Photoshop
  if (norm.includes('photoshop')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="skill-tool-icon-svg" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#001E36" />
        <rect x="1" y="1" width="22" height="22" rx="3" stroke="#31A8FF" strokeWidth="1.5" />
        <text x="7" y="16" fontFamily="Arial, sans-serif" fontSize="10.5" fontWeight="bold" fill="#31A8FF">P</text>
        <text x="14" y="16" fontFamily="Arial, sans-serif" fontSize="10.5" fontWeight="bold" fill="#31A8FF">s</text>
      </svg>
    );
  }

  // Adobe Premiere Pro
  if (norm.includes('premiere')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="skill-tool-icon-svg" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#00005B" />
        <rect x="1" y="1" width="22" height="22" rx="3" stroke="#9999FF" strokeWidth="1.5" />
        <text x="7" y="16" fontFamily="Arial, sans-serif" fontSize="10.5" fontWeight="bold" fill="#9999FF">P</text>
        <text x="14" y="16" fontFamily="Arial, sans-serif" fontSize="10.5" fontWeight="bold" fill="#9999FF">r</text>
      </svg>
    );
  }

  // Canva
  if (norm.includes('canva')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="skill-tool-icon-svg" aria-hidden="true">
        <circle cx="12" cy="12" r="11" fill="url(#canva-grad)" />
        <path d="M14.5 9.5C13.8 8.5 12.6 8 11.2 8C8.5 8 6.5 10.2 6.5 13C6.5 15.8 8.6 18 11.4 18C13.2 18 14.6 17.1 15.3 15.8L13.5 14.8C13.1 15.5 12.3 16 11.3 16C9.8 16 8.7 14.8 8.7 13.2C8.7 11.5 9.8 10.2 11.3 10.2C12.2 10.2 12.9 10.6 13.3 11.2L14.5 9.5Z" fill="#FFFFFF" />
        <defs>
          <linearGradient id="canva-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00C4CC" />
            <stop offset="1" stopColor="#7D2AE8" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // Figma
  if (norm.includes('figma')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="skill-tool-icon-svg" aria-hidden="true">
        <path d="M8 2H12V7.33H8C6.53 7.33 5.33 6.13 5.33 4.67C5.33 3.2 6.53 2 8 2Z" fill="#F24E1E" />
        <path d="M12 2H16C17.47 2 18.67 3.2 18.67 4.67C18.67 6.13 17.47 7.33 16 7.33H12V2Z" fill="#FF7262" />
        <path d="M8 7.33H12V12.67H8C6.53 12.67 5.33 11.47 5.33 10C5.33 8.53 6.53 7.33 8 7.33Z" fill="#A259FF" />
        <path d="M12 7.33H16C17.47 7.33 18.67 8.53 18.67 10C18.67 11.47 17.47 12.67 16 12.67C14.53 12.67 13.33 11.47 13.33 10H12V7.33Z" fill="#1ABCFE" />
        <path d="M8 12.67H12V18C12 19.47 10.8 20.67 9.33 20.67C7.87 20.67 6.67 19.47 6.67 18C6.67 16.53 7.87 12.67 8 12.67Z" fill="#0ACF83" />
      </svg>
    );
  }

  // 8. Operating Systems: macOS
  if (norm.includes('macos') || norm.includes('mac') || norm.includes('apple')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="skill-tool-icon-svg" aria-hidden="true">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.77 1.06-1.85.94-2.92-.91.04-2.03.61-2.69 1.37-.58.67-1.09 1.76-.95 2.81 1.02.08 2.06-.51 2.7-1.26z" />
      </svg>
    );
  }

  // Windows
  if (norm.includes('windows')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="skill-tool-icon-svg" aria-hidden="true">
        <path d="M3 5.5L10.5 4.5V11.5H3V5.5Z" fill="#0078D7" />
        <path d="M11.5 4.3L21 3V11.5H11.5V4.3Z" fill="#0078D7" />
        <path d="M3 12.5H10.5V19.5L3 18.5V12.5Z" fill="#0078D7" />
        <path d="M11.5 12.5H21V21L11.5 19.7V12.5Z" fill="#0078D7" />
      </svg>
    );
  }

  // Default fallback dot
  return <span className="skill-tool-dot" aria-hidden="true" />;
};
