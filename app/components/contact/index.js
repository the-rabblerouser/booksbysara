'use client';

import React from 'react';
import { playfairDisplay, montserrat } from '../../fonts';

import { useForm } from 'react-hook-form';
import { handleMyFormSubmit } from '@/app/actions';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const Contact = () => {
	const router = useRouter();

	const onSubmit = (data, e) => {
		handleMyFormSubmit(data);
		e.target.reset();
	};
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<div className='contact_scroll'>
			<div className='mx-auto mt-[50px] px-4 h-fit'>
				<div className='flex flex-col lg:flex-row justify-evenly w-full mx-auto overflow-hidden shadow-md p-6 mt-[50px] bg-sara_gold'>
					<div className=''>
						<h1
							className={`${playfairDisplay.className} text-2xl md:text-4xl text-center mb-5 lg:mb-3`}>
							Contact Author
						</h1>
						<p
							className={`${montserrat.className} text-sm md:text-md text-left mb-7 lg:mb-0 lg:mx-20`}>
							Want to share your thoughts or insights? I’d love to hear from
							you! Drop me a line using the contact form, and I’ll do my best to
							get back to you as soon as possible. Your messages truly mean the
							world to me, and I greatly appreciate every single one.
						</p>
						<p
							className={`${montserrat.className} text-sm md:text-md text-left mt-3 mb-5 lg:mb-0 lg:mx-20`}>
							For teacher/educator discounts & signed copies, please use the
							contact form.
						</p>
						<p
							className={`${montserrat.className} text-sm md:text-md text-left mt-3 mb-5 lg:mb-0 lg:mx-20`}>
							Let’s connect and chat. Looking forward to hearing from you!
						</p>
						<p
							className={`${montserrat.className} text-sm md:text-md text-left mt-5 lg:mb-0 lg:mx-20`}>
							Stay gene-tastic,
						</p>
						<p
							className={`${montserrat.className} text-sm md:text-md text-left mb-7 lg:mb-0 lg:mx-20`}>
							Sara
						</p>
					</div>
					<div className={`${montserrat.className} w-full`}>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className='mb-4 '>
								<input
									type='text'
									id='name'
									name='name'
									placeholder='Name'
									className='w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500'
									{...register('name', { required: true })}
								/>
								{errors.name && <span>This field is required</span>}
							</div>
							<div className='mb-4'>
								<input
									type='email'
									id='email'
									name='email'
									placeholder='Email'
									className='w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500'
									{...register('email', {
										required: true,
										pattern: /^\S+@\S+$/i,
									})}
								/>
								{errors.email && <span>Please enter a valid email</span>}
							</div>
							<div className='mb-4'>
								<textarea
									id='message'
									name='message'
									placeholder='Message'
									rows='4'
									className='w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500'
									{...register('message', { required: true })}></textarea>
								{errors.message && <span>This field is required</span>}
							</div>
							<div className='flex justify-center'>
								<motion.button
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 0.8 }}
									onHoverStart={(e) => {}}
									onHoverEnd={(e) => {}}
									type='submit'
									formMethod='POST'
									onClick={() => router.push('/')}
									className={`${montserrat.className} bg-white font-semibold py-2 px-4 inline-flex`}>
									Submit
								</motion.button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
