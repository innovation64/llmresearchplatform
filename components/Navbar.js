import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Star Trail', href: '/startrail' },
    { name: 'Shenshu', href: '/shenshu' },
    { name: 'Research', href: '/research' },
    { name: 'Applications', href: '/applications' },
    { name: 'Collaborate', href: '/collaborate' },
    { name: 'Discuss', href: '/discuss' },
  ];
  
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-primary">
                Li Yang Research
              </Link>
            </div>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-6">
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className={`nav-link ${
                  router.pathname === item.href ? 'active' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/phd" className="btn btn-primary">
              PhD Position
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-primary focus:outline-none"
            >
              {isOpen ? (
                <FiX className="block h-6 w-6" />
              ) : (
                <FiMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
              key={item.name}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                router.pathname === item.href
                  ? 'bg-blue-50 text-primary'
                  : 'text-gray-600 hover:bg-blue-50 hover:text-primary'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            href="/phd" 
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-primary"
            onClick={() => setIsOpen(false)}
          >
            PhD Position
          </Link>
        </div>
      </div>
    )}
  </nav>
);
};

export default Navbar;