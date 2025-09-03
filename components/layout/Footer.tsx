import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className='bg-forest text-white py-8 mt-auto'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-4 md:mb-0'>
            <p className='text-sm text-neutral-light'>
              © {new Date().getFullYear()} ZygiOnVelo. All rights reserved.
            </p>
          </div>
          <div className='flex space-x-6'>
            <a
              href='/privacy'
              className='text-sm hover:text-sun transition-colors text-neutral-light'>
              Privacy Policy
            </a>
            <a
              href='/terms'
              className='text-sm hover:text-sun transition-colors text-neutral-light'>
              Terms of Service
            </a>
            <a
              href='/contact'
              className='text-sm hover:text-sun transition-colors text-neutral-light'>
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
