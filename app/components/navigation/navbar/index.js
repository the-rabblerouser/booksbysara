import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { playfairDisplay } from '../../../fonts';

const Navbar = () => {
	return (
		<>
			<div className='w-full h-30 md:h-20 top-0 sticky bg-white'>
				<div className='container mx-auto px-4 h-full'>
					<div
						className={`${playfairDisplay.className} flex flex-col md:flex-row justify-between items-center h-full`}>
						<ScrollLink
							to='home_scroll'
							spy={true}
							smooth={true}
							duration={500}
							className='text-3xl mt-4 mb-4 md:mt-0 md:mb-0 cursor-pointer'>
							Books By <span className='text-violet-500 '>Sara</span>
						</ScrollLink>

						<ul className='flex flex-row gap-x-6 mb-4 md:mb-0'>
							<li>
								<ScrollLink
									to='meet_the_author_scroll'
									spy={true}
									smooth={true}
									duration={500}
									className='cursor-pointer pb-3 border-b border-transparent hover:border-gray-400 transition-colors duration-300'>
									Meet the Author
								</ScrollLink>
							</li>
							<li>
								<ScrollLink
									to='resources_scroll'
									spy={true}
									smooth={true}
									duration={500}
									className='cursor-pointer pb-3 border-b border-transparent hover:border-gray-400 transition-colors duration-300'>
									Resources
								</ScrollLink>
							</li>
							<li>
								<ScrollLink
									to='contact_scroll'
									spy={true}
									smooth={true}
									duration={500}
									className='cursor-pointer pb-3 border-b border-transparent hover:border-gray-400 transition-colors duration-300'>
									Contact
								</ScrollLink>
							</li>
						</ul>
					</div>
					<hr />
				</div>
			</div>
		</>
	);
};

export default Navbar;
