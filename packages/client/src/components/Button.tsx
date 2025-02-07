'use client';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  href?: string;
}

export const Button = ({ 
  children, 
  onClick, 
  variant = 'primary',
  className = '',
  href 
}: ButtonProps) => {
  const baseStyles = "font-montserrat rounded-md transition-all duration-300 transform hover:scale-105";
  const variants = {
    primary: "bg-[#10B981] text-[#F9FAFB] hover:bg-[#0D9488]",
    secondary: "border border-[#1F2937] text-[#1F2937] hover:bg-[#1F2937] hover:text-[#F9FAFB]"
  };

  if (href) {
    return (
      <a 
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        onClick={(e) => {
          if (href.startsWith('#')) {
            e.preventDefault();
            const id = href.substring(1);
            const element = document.getElementById(id);
            element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}; 