'use client';

import Image from 'next/image';
import { playfairDisplay, montserrat } from './fonts';
import { motion } from 'framer-motion';

import bookPic from '/public/E88A08F1-F333-4CD7-A000-357E001CE459_1_102_o.jpeg';
import commingSoonBook from '/public/comming_soon.png';

import Resources from './components/resources';
import MeetTheAuthor from './components/meettheauthor';
import Contact from './components/contact';

export default function Home() {
	return (
		<div id='home_scroll'>
			<div className='mx-auto mt-[50px] px-4 h-fit'>
				<div className='flex flex-col md:flex-row justify-evenly items-start'>
					<div className='w-full md:w-2/6 overflow-hidden flex flex-col'>
						<div className=' jusitfy-center self-center mt-4'>
							<Image
								src={bookPic}
								alt='Picture of the author'
								width={500}
								height={500}
								blurDataURL='data:...'
								className='h-full'
								placeholder='blur' // Optional blur-up while loading
							/>
						</div>
						<div className='w-full flex flex-col justify-center mb-6 mt-3 text-grey-300'>
							<h1
								className={`${playfairDisplay.className} text-[80px] text-center uppercase`}>
								Gina
							</h1>
							<h1
								className={`${playfairDisplay.className} text-[20px] text-center mb-[30px] uppercase`}>
								goes to the Genetic Counselor
							</h1>

							<p
								className={`${montserrat.className} text-center mb-6 mx-3 md:mx-0 lg:mx-9`}>
								Being adopted is awesome! But sometimes being adopted makes
								things complicated, especially when it comes to understanding
								genetics. For those who don’t know their genetic background,
								genetic testing can be a daunting task, as is the case for
								seven-year-old Gina.
							</p>
							<button
								onClick={() => router.push('/')}
								className='border border-gray-300 hover:bg-white font-semibold py-2 px-4 rounded inline-flex self-center'>
								Learn More
							</button>
						</div>
					</div>
					<div className='w-full h-full md:w-2/6 overflow-hidden flex flex-col'>
						<div className='jusitfy-center self-center mt-4'>
							<Image
								src={commingSoonBook}
								alt='Picture of the author'
								width={500}
								height={500}
								blurDataURL='data:...'
								className='border border-gray-300'
								placeholder='blur' // Optional blur-up while loading
							/>
						</div>
						<div
							className={`${playfairDisplay.className} w-full h-[516px] lg:h-[366px] flex flex-col justify-center mb-6 mt-4 text-grey-300`}>
							<h1 className='text-5xl md:text-3xl text-center'>
								Keep an eye out,
							</h1>
							<h1 className='text-5xl  md:text-3xl text-center mb-[30px] mx-4 md:mx-0 lg:mx-[4rem]'>
								I'm currently working on my next book!
							</h1>

							<p className='text-center mb-6 px-6'></p>
							<p className='text-center px-6'></p>
						</div>
					</div>
				</div>
			</div>
			{/* <motion.div
				initial={{ y: -20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}
				className='w-full mt-[30px] mb-[50px] mx-auto px-4 flex flex-col md:flex-row overflow-x-hidden'>
				<motion.div
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
				</motion.div>
			</motion.div> */}
			<MeetTheAuthor />
			<Resources />
			<Contact />
		</div>
	);
}
