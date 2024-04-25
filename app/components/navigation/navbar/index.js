import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
	return (
		<>
			<div className='w-full h-30 md:h-20 top-0 sticky bg-white'>
				<div className='container mx-auto px-4 h-full'>
					<div className='flex flex-col md:flex-row justify-between items-center h-full'>
						<ScrollLink
							to='home_scroll'
							spy={true}
							smooth={true}
							duration={500}
							className='text-3xl mt-4 mb-4 md:mt-0 md:mb-0'>
							Books By{' '}
							<span className='text-violet-500 cursor-pointer'>Sara</span>
						</ScrollLink>

						<ul className='flex flex-row gap-x-6'>
							<li>
								<ScrollLink
									to='meet_the_author_scroll'
									spy={true}
									smooth={true}
									duration={500}
									className='cursor-pointer'>
									Meet the Author
								</ScrollLink>
							</li>
							<li>
								<ScrollLink
									to='resources_scroll'
									spy={true}
									smooth={true}
									duration={500}
									className='cursor-pointer'>
									Resources
								</ScrollLink>
							</li>
							<li>
								<ScrollLink
									to='contact_scroll'
									spy={true}
									smooth={true}
									duration={500}
									className='cursor-pointer'>
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
