import React from 'react';
import { montserrat } from '../../fonts';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='py-4 mt-[10px]'>
			<div className='container mx-auto px-4'>
				<div className='flex justify-between items-center'>
					<p className={`${montserrat.className} w-full`}>
						Sara Smith {currentYear}
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
