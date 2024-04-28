// pages/index.js

import Image from 'next/image';
import bookPic from '/public/E88A08F1-F333-4CD7-A000-357E001CE459_1_102_o.jpeg';
import Resources from './components/resources';
import MeetTheAuthor from './components/meettheauthor';
import Contact from './components/contact';

export default function Home() {
	return (
		<div id='home_scroll'>
			<div className='w-full mt-[30px] mb-[50px] mx-auto px-4 flex flex-col md:flex-row overflow-x-hidden'>
				<div className='w-full md:w-1/2 place-self-center'>
					<Image
						src={bookPic}
						alt='Picture of the author'
						width={500}
						height={500}
						blurDataURL='data:...'
						placeholder='blur' // Optional blur-up while loading
					/>
				</div>
				<div className='w-full md:w-1/2 flex flex-col p-10 justify-center text-center md:text-left'>
					<h1 className='md:text-4xl text-3xl uppercase'>Gina goes to the</h1>
					<h1 className='md:text-4xl text-3xl mb-5 uppercase'>
						Genetic Counselor
					</h1>
					<h1 className='text-2xl mt-[20px] mb-10'>
						I'm proud to announce my first children's book is now available!
						Many thanks to my editor, Brooke Vitale, and illustrator, Olena
						Stasiuk.
					</h1>
					<p className='mb-4'>
						Being adopted is awesome! But sometimes being adopted makes things
						complicated, especially when it comes to understanding genetics. For
						those who don’t know their genetic background, genetic testing can
						be a daunting task, as is the case for seven-year-old Gina.
					</p>
					<p className='mb-4'>
						Gina goes to the Genetic Counselor follows a young girl and her
						adoptive parents as they try to discover why Gina is plagued by
						frequent illness. Along the way they find out that Gina’s DNA might
						be the reason she keeps getting sick, but they won’t know until they
						meet with a genetic counselor for testing.
					</p>
				</div>
			</div>
			<MeetTheAuthor />
			<Resources />
			<Contact />
		</div>
	);
}
