'use client';
import { useState } from 'react';
import axios from 'axios';

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await axios.post('../../pages/api/sendEmail.js', formData);
			alert('Message sent successfully!');
			setFormData({ name: '', email: '', message: '' });
		} catch (error) {
			console.error('Error sending message:', error);
			alert(
				'An error occurred while sending the message. Please try again later.'
			);
		}
	};

	return (
		<div className='contact_scroll' onSubmit={handleSubmit}>
			<div className='mx-auto mt-[50px] px-4 h-fit'>
				<div className='flex justify-center items-center w-full mx-auto px-4 rounded-lg overflow-hidden shadow-md p-6 mt-[50px] bg-violet-100'>
					<form className='md:w-6/12 w-11/12'>
						<div className='mb-4'>
							<label
								htmlFor='name'
								className='block text-gray-700 font-bold mb-2'>
								Name
							</label>
							<input
								type='text'
								id='name'
								name='name'
								placeholder='Enter your name'
								value={formData.name}
								onChange={handleChange}
								className='w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500'
							/>
						</div>
						<div className='mb-4'>
							<label
								htmlFor='email'
								className='block text-gray-700 font-bold mb-2'>
								Email
							</label>
							<input
								type='email'
								id='email'
								name='email'
								placeholder='Enter your email'
								value={formData.email}
								onChange={handleChange}
								className='w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500'
							/>
						</div>
						<div className='mb-4'>
							<label
								htmlFor='message'
								className='block text-gray-700 font-bold mb-2'>
								Message
							</label>
							<textarea
								id='message'
								name='message'
								placeholder='Enter your message'
								value={formData.message}
								onChange={handleChange}
								rows='4'
								className='w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500'></textarea>
						</div>
						<div className='flex justify-center'>
							<button
								type='submit'
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
