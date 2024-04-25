import React from 'react';
// import Link from 'next/link';
import { Link } from 'react-scroll';

const Navbar = () => {
	return (
		<>
			<div className='w-full h-30 md:h-20 top-0 sticky bg-white'>
				<div className='container mx-auto px-4 h-full'>
					<div className='flex flex-col md:flex-row justify-between items-center h-full'>
						<Link
							to='home_scroll'
							spy={true}
							smooth={true}
							duration={500}
							className='cursor-pointer'>
							<h1 className='text-2xl mb-4 md:mb-0'>
								Books By <span className='text-violet-500'>Sara</span>
							</h1>
						</Link>

						<ul className='flex flex-row gap-x-6'>
							<li>
								<Link
									to='meet_the_author_scroll'
									spy={true}
									smooth={true}
									duration={500}
									className='cursor-pointer'>
									<p>Meet the Author</p>
								</Link>
							</li>
							<li>
								<Link
									to='resources_scroll'
									spy={true}
									smooth={true}
									duration={500}
									className='cursor-pointer'>
									<p>Resources</p>
								</Link>
							</li>
							<li>
								<Link
									to='contact_scroll'
									spy={true}
									smooth={true}
									duration={500}
									className='cursor-pointer'>
									<p>Contact</p>
								</Link>
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
