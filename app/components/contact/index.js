import React from 'react';

const Contact = () => {
	return (
		<div className='contact_scroll'>
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
