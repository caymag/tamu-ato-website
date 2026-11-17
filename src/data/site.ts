import bidDay from '../assets/photos/bid-day/DSC_6180.jpg';
import tenders from '../assets/photos/tenders/DSC_6717.jpg';
import booBash from '../assets/photos/boo-bash/DSC_6890.jpg';
import tendersBand from '../assets/photos/past/tenders-with-taus-2024.webp';
import pawsDog from '../assets/photos/past/paws-and-taus-2024.webp';
import type { ImageMetadata } from 'astro';

export const links = {
  interestForm: 'https://forms.gle/2CLtbMWXrQwr6wyr5',
  instagram: 'https://www.instagram.com/aggie.ato/',
  email: 'spencer.shushan@gmail.com',
  give: 'https://give.atofoundation.org/',
};

export interface NewsItem {
  title: string;
  date: string;
  image: ImageMetadata;
  alt: string;
  summary: string;
}

// Newest first. The home page shows the first three.
export const news: NewsItem[] = [
  {
    title: 'Bid Day 2026',
    date: 'August 2026',
    image: bidDay,
    alt: 'Brothers celebrating on Bid Day, waving the ATO flag',
    summary: 'We welcomed the Alpha Beta class to Theta Sigma. Welcome home, gentlemen.',
  },
  {
    title: 'Tenders with Taus',
    date: 'October 2026',
    image: tenders,
    alt: 'Contestants in aprons at the Tenders with Taus eating contest',
    summary: 'Our philanthropy chicken-tender eating contest and poker night raised over $20,000 for VFW Post 4692.',
  },
  {
    title: 'Boo Bash',
    date: 'October 2026',
    image: booBash,
    alt: 'Brothers in Halloween costumes in front of the ATO backdrop',
    summary: 'Costumes, music and the whole chapter out for our annual Halloween party.',
  },
  {
    title: 'Tenders with Taus 2024',
    date: 'Fall 2024',
    image: tendersBand,
    alt: 'Tenders with Taus band on stage',
    summary: 'Our third annual Tenders with Taus at Carney\'s raised $13,000 for VFW Post 4692, six times our first year and three times the year before.',
  },
  {
    title: 'Paws and Taus',
    date: 'September 14, 2024',
    image: pawsDog,
    alt: 'Brothers with a shelter dog',
    summary: 'Paws and Taus returned and raised $2,750 for Longway Home Adoptables in Bryan, helping find temporary homes for three dogs.',
  },
];
