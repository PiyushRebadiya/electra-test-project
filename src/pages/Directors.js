import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import DirectorsOverview from './DirectorsOverview';
import Footer from './Footer';

const DIRECTORS = [
  {
    slug: 'audrey-mascina',
    href: '/directors/audrey-mascina',
    name: 'Audrey Mascina',
    firstName: 'AUDREY',
    lastName: 'MASCINA',
    thumbnail:
      'https://www.sparkandriot.com/thumbs/140x200/@0.5x0.5/gfx/Directors/Audrey%20Mascina/WhatsApp_Image_2025_07_19_at_08-23-24.jpeg',
    thumbnailWidth: 140,
    thumbnailHeight: 224,
    thumbnailAlt: 'Thumbnail Audrey Mascina',
  },
  {
    slug: 'cinzia-pedrizzetti',
    href: '/directors/cinzia-pedrizzetti',
    name: 'Cinzia Pedrizzetti',
    firstName: 'CINZIA',
    lastName: 'PEDRIZZETTI',
    thumbnail: 'https://www.sparkandriot.com/thumbs/140x200/@0.5x0.5/gfx/Directors/PrimoPiano_LA.jpg',
    thumbnailWidth: 140,
    thumbnailHeight: 139,
    thumbnailAlt: 'Thumbnail Cinzia Pedrizzetti',
  },
  {
    slug: 'claudia-biondini',
    href: '/directors/claudia-biondini',
    name: 'Claudia Biondini',
    firstName: 'CLAUDIA',
    lastName: 'BIONDINI',
    thumbnail:
      'https://www.sparkandriot.com/thumbs/140x200/@0.5x0.5/gfx/Directors/WhatsApp_Image_2025_04_30_at_01-15-51.jpeg',
    thumbnailWidth: 140,
    thumbnailHeight: 94,
    thumbnailAlt: 'Thumbnail Claudia Biondini',
  },
  {
    slug: 'elisha-smith-leverock',
    href: '/directors/elisha-smith-leverock',
    name: 'Elisha Smith-Leverock',
    firstName: 'ELISHA',
    lastName: 'SMITH-LEVEROCK',
    thumbnail: 'https://www.sparkandriot.com/thumbs/140x200/@0.44x0.19/gfx/Directors/lish0340_ready.jpg',
    thumbnailWidth: 140,
    thumbnailHeight: 190,
    thumbnailAlt: 'Thumbnail Elisha Smith-Leverock',
    imageScale: 1.1,
  },
  {
    slug: 'gregoris-rentis',
    href: '/directors/gregoris-rentis',
    name: 'Gregoris Rentis',
    firstName: 'GREGORIS',
    lastName: 'RENTIS',
    thumbnail: 'https://www.sparkandriot.com/thumbs/140x200/@0.75x0.4/gfx/Directors/images.jpeg',
    thumbnailWidth: 140,
    thumbnailHeight: 94,
    thumbnailAlt: 'Thumbnail Gregoris Rentis',
    imageScale: 1.1,
  },
  {
    slug: 'jan-svejkar',
    href: '/directors/jan-svejkar',
    name: 'Jan Svejkar',
    firstName: 'JAN',
    lastName: 'SVEJKAR',
    thumbnail:
      'https://www.sparkandriot.com/thumbs/140x200/@0.51x0.24/gfx/Directors/WhatsApp_Image_2023_12_05_at_6-52-53_AM_2.jpeg',
    thumbnailWidth: 140,
    thumbnailHeight: 97,
    thumbnailAlt: 'Thumbnail Jan Svejkar',
    imageScale: 1.1,
  },
  {
    slug: 'kay-kienzler',
    href: '/directors/kay-kienzler',
    name: 'Kay Kienzler',
    firstName: 'KAY',
    lastName: 'KIENZLER',
    thumbnail: 'https://www.sparkandriot.com/thumbs/140x200/@0.36x0.46/gfx/Directors/Kay_Kienzler_Portrait.png',
    thumbnailWidth: 140,
    thumbnailHeight: 105,
    thumbnailAlt: 'Thumbnail Kay Kienzler',
    imageScale: 1.1,
  },
  {
    slug: 'marek-partys',
    href: '/directors/marek-partys',
    name: 'Marek Partys',
    firstName: 'MAREK',
    lastName: 'PARTYS',
    thumbnail:
      'https://www.sparkandriot.com/thumbs/140x200/@0.67x0.3/gfx/Directors/Screenshot_2025_06_27_at_7_50_32%E2%80%AFPM.jpeg',
    thumbnailWidth: 140,
    thumbnailHeight: 179,
    thumbnailAlt: 'Thumbnail Marek Partys',
    imageScale: 1.1,
  },
  {
    slug: 'marko-roth',
    href: '/directors/marko-roth',
    name: 'Marko Roth',
    firstName: 'MARKO',
    lastName: 'ROTH',
    thumbnail:
      'https://www.sparkandriot.com/thumbs/140x200/@0.5x0.5/gfx/Directors/Marko_Roth_Portrait%20(1).jpeg',
    thumbnailWidth: 140,
    thumbnailHeight: 90,
    thumbnailAlt: 'Thumbnail Marko Roth',
  },
  {
    slug: 'michael-lockshin',
    href: '/directors/michael-lockshin',
    name: 'Michael Lockshin',
    firstName: 'MICHAEL',
    lastName: 'LOCKSHIN',
    thumbnail:
      'https://www.sparkandriot.com/thumbs/140x200/@0.51x0.36/gfx/Directors/Michael_Lockshin_Portrait1.jpeg',
    thumbnailWidth: 140,
    thumbnailHeight: 140,
    thumbnailAlt: 'Thumbnail Michael Lockshin',
  },
  {
    slug: 'nalle-sjoblad',
    href: '/directors/nalle-sjoblad',
    name: 'Nalle Sjöblad',
    firstName: 'NALLE',
    lastName: 'SJÖBLAD',
    thumbnail:
      'https://www.sparkandriot.com/thumbs/140x200/@0.28x0.31/gfx/Directors/Nalle%20Sjoblad/Screenshot_2025_07_25_at_8-48-48%E2%80%AFAM.png',
    thumbnailWidth: 140,
    thumbnailHeight: 150,
    thumbnailAlt: 'Thumbnail Nalle Sjöblad',
  },
  {
    slug: 'neda',
    href: '/directors/neda',
    name: 'Neda',
    firstName: 'NEDA',
    lastName: '',
    thumbnail: 'https://www.sparkandriot.com/thumbs/140x200/@0.5x0.5/gfx/Directors/Neda_Portrait%20(1).jpeg',
    thumbnailWidth: 140,
    thumbnailHeight: 94,
    thumbnailAlt: 'Thumbnail Neda',
  },
  {
    slug: 'victor-claramunt',
    href: '/directors/victor-claramunt',
    name: 'Victor Claramunt',
    firstName: 'VICTOR',
    lastName: 'CLARAMUNT',
    thumbnail: 'https://www.sparkandriot.com/thumbs/140x200/@0.47x0.29/gfx/Directors/unnamed_11.jpg',
    thumbnailWidth: 140,
    thumbnailHeight: 94,
    thumbnailAlt: 'Thumbnail Victor Claramunt',
    imageScale: 1.1,
  },
];

const Directors = () => {
  return (
    <div className="directors-page">
      <Navbar />
      <div className="content withSiteNav">
        <div className="sparkCursor">
          <div className="iconWrapper">
            <i className="icon-logoSpark"></i>
          </div>
        </div>

        <DirectorsOverview directors={DIRECTORS} />
        <Footer />
      </div>
    </div>
  );
};

export default Directors;

