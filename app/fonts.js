import { Playfair_Display, Montserrat } from 'next/font/google';

export const playfairDisplay = Playfair_Display({
	subsets: ['latin'],
	display: 'swap',
});

export const montserrat = Montserrat({
	subsets: ['latin'],
	weight: '100',
	display: 'swap',
});
