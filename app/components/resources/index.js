'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Resources = () => {
	const gc_resources = [
		{
			title: 'Find A Genetic Counselor (Canada)',
			link: 'https://www.cagc-accg.ca/',
		},
		{
			title: 'Find A Genetic Counselor (USA)',
			link: 'https://findageneticcounselor.nsgc.org/',
		},
		{
			title: 'Genetic Counseling and Testing',
			link: 'https://www.cdc.gov/genomics/gtesting/genetic_counseling_testing.htm',
		},
		{
			title: 'The Adoptee’s Guide to DNA Testing by Tamar Weinberg',
			link: 'ISBN: 978-1440353376',
		},
		{
			title:
				'The DNA Guide for Adoptees by Brianne Kirkpatrick and Shannon Combes-Bennett',
			link: 'ISBN: 978-1733734301',
		},
	];

	const mh_resources = [
		{
			title: 'Text Only? Try the Crisis Text Line.',
			link: 'https://www.crisistextline.org/',
		},
		{
			title: 'Need to talk to someone now? Dial 988.',
			link: 'https://988lifeline.org/',
		},
	];

	return (
		<div className='mx-auto px-4 resources_scroll'>
			<div className='text-3xl mt-[50px] mb-[50px] flex flex-col md:flex-row'>
				Resources
			</div>

			<div className='text-xl mt-[50px] mb-[50px] flex flex-col md:flex-row'>
				Genetic Counseling Resources
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6'>
				{gc_resources.map((resource, index) => (
					<motion.div
						key={index}
						whileHover={{ scale: 1.1 }}
						onHoverStart={(e) => {}}
						onHoverEnd={(e) => {}}
						className='bg-white rounded-lg shadow-md p-6'>
						<h2 className='text-lg font-semibold mb-4'>{resource.title}</h2>
						<p className='text-sm text-gray-700 break-all'>
							<a href={resource.link}>{resource.link}</a>
						</p>
						<a href={resource.link}></a>
					</motion.div>
				))}
			</div>
			<div className='text-xl mt-8 mb-8 flex flex-col md:flex-row'>
				Mental Health Resources
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6'>
				{mh_resources.map((resource, index) => (
					<motion.div
						key={index}
						whileHover={{ scale: 1.1 }}
						onHoverStart={(e) => {}}
						onHoverEnd={(e) => {}}
						className='bg-white rounded-lg shadow-md p-6 mb-6'>
						<h2 className='text-lg font-semibold mb-4'>{resource.title}</h2>
						<p className='text-sm text-gray-700 break-all'>
							<a href={resource.link}>{resource.link}</a>
						</p>
						<a href={resource.link}></a>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Resources;
