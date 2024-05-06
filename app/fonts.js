import { Playfair_Display, Montserrat } from 'next/font/google';

export const playfairDisplay = Playfair_Display({
	subsets: ['latin'],
	weight: '400',
	display: 'swap',
});

export const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['100', '200'],
	display: 'swap',
});
