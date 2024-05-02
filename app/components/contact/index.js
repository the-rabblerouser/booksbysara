'use server';

import React from 'react';
import Form from './form';

const Contact = async () => {
	async function email(data) {
		'use server';

		return data;
	}

	return (
		<div className='contact_scroll'>
			<div className='mx-auto mt-[50px] px-4 h-fit'>
				<div className='flex justify-center items-center w-full mx-auto px-4 rounded-lg overflow-hidden shadow-md p-6 mt-[50px] bg-violet-100'>
					<Form />
				</div>
			</div>
		</div>
	);
};

export default Contact;
