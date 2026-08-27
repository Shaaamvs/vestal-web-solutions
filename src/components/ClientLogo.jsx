import React from 'react';
import { ExternalLink } from 'lucide-react';

import AmmatLogo from '../image/Ammat.webp';
import AvvElectricalLogo from '../image/AVV-Electicals-logo-1 (1).png';
import ChennaiChemicalsLogo from '../image/chennai chemicals.png';
import CmpLogo from '../image/Cmp 1.png';
import LarioLogo from '../image/lario.png';
import PpvacLogo from '../image/Ppvac.png';
import WingsWomenLogo from '../image/wings women 1.png';

export const ClientLogo = ({
  client,
  size = 'md'
}) => {
  // Fixed dimensions for consistent logo containers
  const containerSizes = {
    sm: 'h-16 w-40',
    md: 'h-20 w-48',
    lg: 'h-24 w-56'
  };

  const clientLogos = {
    'wings-womens': WingsWomenLogo,
    'avv-electrical': AvvElectricalLogo,
    'chennai-chemicals': ChennaiChemicalsLogo,
    'cm-packaging': CmpLogo,
    'amaat': AmmatLogo,
    'pp-vac': PpvacLogo,
    'lario': LarioLogo
  };

  const clientWebsites = {
    'wings-womens': 'https://wings-women.com/',
    'avv-electrical': 'https://avvelectrical.com/',
    'chennai-chemicals': 'https://chennaichemicals.in/',
    'cm-packaging': 'https://cmpackaging.co.in/',
    'amaat': 'https://amaatindia.com/',
    'pp-vac': 'https://ppvac.in/',
    'lario': 'https://lariointeriors.com/'
  };

  const logo = clientLogos[client?.id];
  const website = clientWebsites[client?.id];

  const handleClick = () => {
    if (website && website !== '#') {
      window.open(website, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className={`
        ${containerSizes[size] || containerSizes.md}
        relative
        flex
        items-center
        justify-center
        select-none
        overflow-hidden
        rounded-lg
        ${website && website !== '#' ? 'cursor-pointer' : ''}
      `}
      onClick={website && website !== '#' ? handleClick : undefined}
    >
      {logo ? (
        <div className="flex h-full w-full items-center justify-center p-2">
          <img
            src={logo}
            alt={client?.name || 'Client Logo'}
            className="
              block
              h-full
              w-full
              max-h-full
              max-w-full
              object-contain
              transition-transform
              duration-300
              hover:scale-105
            "
          />
        </div>
      ) : (
        <span className="text-sm font-medium text-gray-500">
          {client?.name || 'Client'}
        </span>
      )}

      {/* External link icon */}
      {website && website !== '#' && (
        <div
          className="
            absolute
            right-1.5
            top-1.5
            z-10
            flex
            h-6
            w-6
            items-center
            justify-center
            rounded-full
            bg-white/90
            text-gray-500
            shadow-sm
            backdrop-blur-sm
            transition-all
            duration-300
            hover:bg-gray-900
            hover:text-white
          "
        >
          <ExternalLink
            size={13}
            strokeWidth={2}
          />
        </div>
      )}
    </div>
  );
};