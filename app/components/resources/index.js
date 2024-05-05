'use client';

import React from 'react';
import Link from 'next/link';
import { playfairDisplay, montserrat } from '../../fonts';

import { motion } from 'framer-motion';

const Resources = () => {
	const gc_resources = [
		{
			title: 'Find A Genetic Counselor (Canada)',
			link: 'https://www.cagc-accg.ca/',
			link_name: 'cagc-accg.ca',
		},
		{
			title: 'Find A Genetic Counselor (USA)',
			link: 'https://findageneticcounselor.nsgc.org/',
			link_name: 'findageneticcounselor.nsgc.org',
		},
		{
			title: 'Genetic Counseling and Testing',
			link: 'https://www.cdc.gov/genomics/gtesting/genetic_counseling_testing.htm',
			link_name: 'cdc.gov/genomics/gtesting',
		},
		{
			title: 'The Adoptee’s Guide to DNA Testing',
			link: 'https://www.amazon.com/Adoptees-Guide-DNA-Testing-Genealogy/dp/1440353379',
			link_name: 'ISBN: 978-1440353376',
		},
		{
			title: 'The DNA Guide for Adoptees',
			link: 'https://www.amazon.com/DNA-Guide-Adoptees-biological-understand/dp/1733734309',
			link_name: 'ISBN: 978-1733734301',
		},
	];

	const mh_resources = [
		{
			title: 'Text Only? Try the Crisis Text Line.',
			link: 'https://www.crisistextline.org/',
			link_name: 'crisistextline.org',
		},
		{
			title: 'Need to talk to someone now? Dial 988.',
			link: 'https://988lifeline.org/',
			link_name: '988lifeline.org',
		},
	];

	return (
		<div className='mx-auto px-4 resources_scroll'>
			{/* <div className='text-3xl mt-[50px] mb-[50px] flex flex-col md:flex-row'>
				Resources
			</div> */}
			<div
				className={`${playfairDisplay.className} text-xl text-center md:text-left mt-[50px] mb-[50px] flex flex-col md:flex-row`}>
				Genetic Counseling Resources
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
				{gc_resources.map((resource, index) => (
					<div
						key={resource.title}
						className='h-full w-full bg-white shadow-md p-6 flex flex-col justify-center'>
						<h2
							className={`${playfairDisplay.className} text-md mx-6 md:mx-0 md:text-xl text-center font-semibold mb-4`}>
							{resource.title}
						</h2>
						<p className='text-sm text-center text-gray-700 break-all'>
							{resource.link_name}
						</p>
						<Link className='self-center mt-6' href={resource.link}>
							<motion.button
								key={index}
								whileHover={{ scale: 1.2 }}
								whileTap={{ scale: 0.8 }}
								onHoverStart={(e) => {}}
								onHoverEnd={(e) => {}}
								className='border border-gray-300 hover:bg-white font-semibold py-2 px-4 inline-flex'>
								Learn More
							</motion.button>
						</Link>
					</div>
				))}
			</div>
			<div
				className={`${playfairDisplay.className} text-xl text-center md:text-left mt-[50px] mb-[50px] flex flex-col md:flex-row`}>
				Mental Health Resources
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6'>
				{mh_resources.map((resource, index) => (
					<div
						key={resource.title}
						className='h-full w-full bg-white shadow-md p-6 flex flex-col justify-center'>
						<h2
							className={`${playfairDisplay.className} text-md mx-6 md:mx-0 md:text-xl text-center font-semibold mb-4`}>
							{resource.title}
						</h2>
						<p className='text-sm text-center text-gray-700 break-all'>
							{resource.link_name}
						</p>
						<Link className='self-center mt-6' href={resource.link}>
							<motion.button
								key={index}
								whileHover={{ scale: 1.2 }}
								whileTap={{ scale: 0.8 }}
								onHoverStart={(e) => {}}
								onHoverEnd={(e) => {}}
								className='border border-gray-300 hover:bg-white font-semibold py-2 px-4 inline-flex'>
								Learn More
							</motion.button>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Resources;
