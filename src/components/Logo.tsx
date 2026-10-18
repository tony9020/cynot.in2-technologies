import { Link } from 'react-router-dom';

interface LogoProps {
  color?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  linked?: boolean;
}

const Logo = ({ size = 'md', linked = true }: LogoProps) => {
  const sizeClasses = {
    sm: 'h-4',
    md: 'h-6',
    lg: 'h-8',
  };

  const image = (
    <img 
      src="/logo.png" 
      alt="Cynot Logo" 
      className={`${sizeClasses[size]} w-auto`}
    />
  );

  if (!linked) {
    return <span className="flex items-center">{image}</span>;
  }

  return (
    <Link to="/" className="flex items-center">
      {image}
    </Link>
  );
};

export default Logo;