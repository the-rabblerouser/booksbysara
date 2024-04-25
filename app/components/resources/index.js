import React from 'react';

const Resources = () => {
	return (
		<div id='resources_scroll' className='mx-auto px-4'>
			<div className='text-3xl mt-[50px] mb-[50px] flex flex-col md:flex-row'>
				Resources
			</div>

			<div className='text-xl mt-[50px] mb-[50px] flex flex-col md:flex-row'>
				Genetic Counseling Resources
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6'>
				<div className='bg-white rounded-lg shadow-md p-6'>
					<h2 className='text-lg font-semibold mb-4'>
						Find A Genetic Counselor (Canada)
					</h2>
					<p className='text-sm text-gray-700'>
						<a href='https://www.cagc-accg.ca/'>https://www.cagc-accg.ca/</a>
					</p>
				</div>
				<div className='bg-white rounded-lg shadow-md p-6'>
					<h2 className='text-lg font-semibold mb-4'>
						Find A Genetic Counselor (USA)
					</h2>
					<p className='text-sm text-gray-700'>
						<a href='https://findageneticcounselor.nsgc.org/'>
							https://findageneticcounselor.nsgc.org/
						</a>
					</p>
				</div>
				<div className='bg-white rounded-lg shadow-md p-6'>
					<h2 className='text-lg font-semibold mb-4'>
						Genetic Counseling and Testing
					</h2>
					<p className='text-sm text-gray-700'>
						<a href='https://www.cdc.gov/genomics/gtesting/genetic_counseling_testing.htm'>
							https://www.cdc.gov/genomics/gtesting/genetic_counseling_testing.htm
						</a>
					</p>
				</div>
				<div className='bg-white rounded-lg shadow-md p-6'>
					<h2 className='text-lg font-semibold mb-4'>
						The Adoptee’s Guide to DNA Testing by Tamar Weinberg
					</h2>
					<p className='text-sm text-gray-700'>ISBN: 978-1440353376</p>
				</div>
				<div className='bg-white rounded-lg shadow-md p-6'>
					<h2 className='text-lg font-semibold mb-4'>
						The DNA Guide for Adoptees by Brianne Kirkpatrick and Shannon
						Combes-Bennett
					</h2>
					<p className='text-sm text-gray-700'>ISBN: 978-1733734301</p>
				</div>
			</div>
			<div className='text-xl mt-8 mb-8 flex flex-col md:flex-row'>
				Mental Health Resources
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6'>
				<div className='bg-white rounded-lg shadow-md p-6 mb-6'>
					<h2 className='text-lg font-semibold mb-4'>
						Text Only? Try the Crisis Text Line.
					</h2>
					<p className='text-sm text-gray-700'>
						<a href='https://www.crisistextline.org/'>
							https://www.crisistextline.org/
						</a>
					</p>
				</div>
				<div className='bg-white rounded-lg shadow-md p-6 mb-6'>
					<h2 className='text-lg font-semibold mb-4'>
						Need to talk to someone now? Dial 988.
					</h2>
					<p className='text-sm text-gray-700'>
						<a href='https://988lifeline.org/'>https://988lifeline.org/</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Resources;
