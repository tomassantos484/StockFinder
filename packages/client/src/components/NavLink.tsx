'use client';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <a 
      href={href}
      className="text-[#1F2937] hover:text-[#34D399] transition-colors relative group"
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
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#34D399] transition-all duration-300 group-hover:w-full" />
    </a>
  );
}; 