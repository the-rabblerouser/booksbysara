'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { handleMyFormSubmit } from '@/app/actions';

const Contact = () => {
	const onSubmit = (data) => {
		handleMyFormSubmit(data);
	};
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<div className='contact_scroll'>
			<div className='mx-auto mt-[50px] px-4 h-fit'>
				<div className='flex justify-center items-center w-full mx-auto px-4 rounded-lg overflow-hidden shadow-md p-6 mt-[50px] bg-violet-100'>
					<form className='md:w-6/12 w-11/12' onSubmit={handleSubmit(onSubmit)}>
						<h1 className='text-2xl mb-4'>Contact</h1>
						<div className='mb-4'>
							<input
								type='text'
								id='name'
								name='name'
								placeholder='Name'
								className='w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500'
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
								className='w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500'
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
								className='w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500'
								{...register('message', { required: true })}></textarea>
							{errors.message && <span>This field is required</span>}
						</div>
						<div className='flex justify-center'>
							<button
								type='submit'
								formMethod='POST'
								className='border border-gray-300 hover:bg-white font-semibold py-2 px-4 rounded inline-flex items-center'>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
