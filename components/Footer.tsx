
import React from 'react';
import { SITE_COPY, COLORS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-8 border-b border-gray-800 pb-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-white mb-2">{SITE_COPY.header.brand}</h2>
            <p className="text-sm max-w-md">{SITE_COPY.footer.companyInfo}</p>
          </div>
          <div className="flex space-x-6">
            {SITE_COPY.footer.links.map(link => (
              <a key={link} href="#" className="hover:text-white transition-colors text-sm">{link}</a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs leading-relaxed max-w-4xl opacity-60">
            {SITE_COPY.footer.legal}
          </p>
          <p className="mt-6 text-xs">&copy; {new Date().getFullYear()} {SITE_COPY.header.brand}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
