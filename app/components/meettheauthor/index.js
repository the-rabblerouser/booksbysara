import React from 'react';
import Image from 'next/image';
import authorPic from '/public/IMG_3225.jpeg';

const MeetTheAuthor = () => {
	return (
		<div className='meet_the_author_scroll'>
			<div className='mx-auto mt-[50px] px-4 h-fit'>
				<div className='flex justify-center items-center'>
					<div className='w-full rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row bg-violet-100'>
						<div className='w-full md:w-3/5 flex flex-col justify-center mb-6 text-grey-300'>
							<div className='text-3xl text-center mt-[50px] mb-[30px]'>
								Meet the Author
							</div>
							<p className='text-center mb-6 px-6'>
								Sara Smith was abandoned at birth in a small, rural Chinese
								village. She was adopted at fifteen months old from an orphanage
								in Dianbai, Guangdong, China. She grew up in the United States
								and went on to graduate magna cum laude from the University of
								Nebraska at Omaha with a Bachelor of Science in biotechnology
								with a minor in chemistry while participating in multiple
								research fellowships. After working in the pharmaceutical
								industry, Sara decided to change careers and is an aspiring
								genetic counselor. Her goal is to support families created
								through adoption during the genetic counseling process.
							</p>
							<p className='text-center px-6'>
								During her free time she enjoys traveling, practicing Brazilian
								Jiu Jitsu, and playing with her cats.
							</p>
						</div>
						<div className='w-full jusitfy-center md:w-2/5'>
							<Image
								src={authorPic}
								alt='Picture of the author'
								width={500}
								height={500}
								blurDataURL='data:...'
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
