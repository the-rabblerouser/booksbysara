'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
	const [email_data, set_email_data] = useState();

	const onSubmit = (data) => (console.log(data), set_email_data(data));

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	return (
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
					className='border border-gray-300 hover:bg-white font-semibold py-2 px-4 rounded inline-flex items-center'>
					Submit
				</button>
			</div>
		</form>
	);
};

export default Form;
