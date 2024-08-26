import { Playfair_Display, Montserrat, Give_You_Glory } from 'next/font/google';

export const playfairDisplay = Montserrat({
	subsets: ['latin'],
	weight: '400',
	display: 'swap',
});

export const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['100', '200', '500'],
	display: 'swap',
});

export const covered = Give_You_Glory({
	subsets: ['latin'],
	weight: '400',
	display: 'swap',
});
