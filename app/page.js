'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

import bookPic from '/public/E88A08F1-F333-4CD7-A000-357E001CE459_1_102_o.jpeg';
import Resources from './components/resources';
import MeetTheAuthor from './components/meettheauthor';
import Contact from './components/contact';

export default function Home() {
	return (
		<div id='home_scroll'>
			<motion.div
				initial={{ y: -20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}
				className='w-full mt-[30px] mb-[50px] mx-auto px-4 flex flex-col md:flex-row overflow-x-hidden'>
				{/* <motion.div
					initial={{ y: -20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5 }}
					className='w-full md:w-1/2 place-self-center'>
					<Image
						src={bookPic}
						alt='Picture of the author'
						width={500}
						height={500}
						blurDataURL='data:...'
						placeholder='blur' // Optional blur-up while loading
					/>
				</motion.div>
				<motion.div
					initial={{ y: -20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5 }}
					className='w-full md:w-1/2 flex flex-col p-10 justify-center text-center md:text-left'>
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
				</motion.div> */}
				<div className='grid grid-cols-1 bg-white shadow-md mb-6'>
					<div className='w-full place-self-center'>
						<Image
							src={bookPic}
							alt='Picture of the author'
							width={400}
							height={400}
							blurDataURL='data:...'
							placeholder='blur' // Optional blur-up while loading
						/>
					</div>
					<div className='w-full flex flex-col p-10 justify-center text-center md:text-left items-center'>
						{/* <h1 className=''>Gina goes to the</h1>
						<h1 className='mb-5'>Genetic Counselor</h1> */}
						{/* <h1 className='text-2xl mt-[20px] mb-10'>
							I'm proud to announce my first children's book is now available!
							Many thanks to my editor, Brooke Vitale, and illustrator, Olena
							Stasiuk.
						</h1>
						<p className='mb-4'>
							Being adopted is awesome! But sometimes being adopted makes things
							complicated, especially when it comes to understanding genetics.
							For those who don’t know their genetic background, genetic testing
							can be a daunting task, as is the case for seven-year-old Gina.
						</p>
						<p className='mb-4'>
							Gina goes to the Genetic Counselor follows a young girl and her
							adoptive parents as they try to discover why Gina is plagued by
							frequent illness. Along the way they find out that Gina’s DNA
							might be the reason she keeps getting sick, but they won’t know
							until they meet with a genetic counselor for testing.
						</p> */}
						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							transition={{ type: 'spring', stiffness: 700, damping: 35 }}
							onClick={() => console.log('hi')}
							className='border w-1/2 border-gray-300 hover:bg-white font-semibold py-2 px-4 rounded'>
							Learn More
						</motion.button>
					</div>
				</div>
			</motion.div>
			<MeetTheAuthor />
			<Resources />
			<Contact />
		</div>
	);
}
