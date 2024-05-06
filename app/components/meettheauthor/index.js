'use client';

import React from 'react';
import Image from 'next/image';
import authorPic from '/public/IMG_3225.jpeg';
import { playfairDisplay } from '../../fonts';
import { Montserrat } from 'next/font/google';

const desc_font = Montserrat({
	subsets: ['latin'],
	weight: '200',
	display: 'swap',
});

const MeetTheAuthor = () => {
	return (
		<div className='meet_the_author_scroll'>
			<div className='mx-auto mt-[50px] px-4 h-fit'>
				<div className='flex justify-center items-center'>
					<div className='w-full overflow-hidden shadow-lg flex flex-col md:flex-row bg-sara_gold'>
						<div className='w-full md:w-3/5 flex flex-col justify-center mb-6 text-grey-300'>
							<div
								className={`${playfairDisplay.className} text-sara_black text-[40px] text-center mt-[10px] lg:mt-[20px] mb-[20px] md:mb-[10px] lg:mb-[20px]`}>
								Meet the Author
							</div>
							<p
								className={`${desc_font.className} text-sara_black text-center md:text-sm mb-3 lg:mb-6 px-[0.5rem] lg:px-[4.9rem] xlg:mx-[5.0rem] tracking-widest`}>
								Sara Smith is a self-published author and genetic counseling
								student at the Medical University of South Carolina. She was
								abandoned at birth and adopted by her parents at fifteen months
								old from an orphanage in Dianbai, Guangdong, China. Her
								childhood was spent growing up in Northern Colorado. She
								obtained her Bachelor of Science in biotechnology at the
								University of Nebraska at Omaha (Go Mavs!).
							</p>
							<p
								className={`${desc_font.className} text-sara_black text-center md:text-sm mb-3 lg:mb-6 px-[0.5rem] lg:px-[4.9rem] xlg:mx-[5.0rem] tracking-widest`}>
								Along her path to becoming a genetic counselor, Sara has worked
								as a server & bartender, direct support professional, event
								assistant, and laboratory technician. Driven by her personal
								search for answers, she aims to support adoptive families during
								the genetic counseling process. During her free time she enjoys
								traveling, practicing Brazilian jiu jitsu, and playing with her
								cats.
							</p>
							<p
								className={`${desc_font.className} text-sara_black text-center md:text-sm lg:mb-6 px-[0.5rem] lg:px-[4.9rem] xlg:mx-[5.0rem] tracking-widest`}>
								During her free time she enjoys traveling, practicing Brazilian
								jiu jitsu, and playing with her cats.
							</p>
						</div>
						<div className='w-full jusitfy-center md:w-2/5'>
							<Image
								src={authorPic}
								alt='Picture of the author'
								width={500}
								height={500}
								blurDataURL='data:...'
								className='w-full h-full'
								placeholder='blur' // Optional blur-up while loading
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MeetTheAuthor;
