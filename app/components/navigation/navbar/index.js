import React from 'react';
// import Link from 'next/link';
import { Link } from 'react-scroll';

const Navbar = ({ toggle }) => {
	return (
		<>
			<div className='w-full h-20 top-0 sticky bg-white'>
				<div className='container mx-auto px-4 h-full'>
					<div className='flex justify-between items-center h-full'>
						<Link to='home_scroll' spy={true} smooth={true} duration={500}>
							<h1 className='text-2xl'>
								Books By <span className='text-violet-500'>Sara</span>
							</h1>
						</Link>

						<button
							type='button'
							className='inline-flex items-center md:hidden'
							onClick={toggle}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='40'
								height='40'
								viewBox='0 0 24 24'>
								<path
									fill='#000'
									d='M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z'
								/>
							</svg>
						</button>
						<ul className='hidden md:flex gap-x-6'>
							<li>
								<Link
									to='resources_scroll'
									spy={true}
									smooth={true}
									duration={500}>
									<p>Resources</p>
								</Link>
							</li>
							<li>
								<Link
									to='meet_the_author_scroll'
									spy={true}
									smooth={true}
									duration={500}>
									<p>Meet the Author</p>
								</Link>
							</li>
							<li>
								<Link
									to='contact_scroll'
									spy={true}
									smooth={true}
									duration={500}>
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
