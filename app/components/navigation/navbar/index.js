import React from 'react';

const Navbar = () => {
	return (
		<>
			<div className='w-full h-30 md:h-20 top-0 sticky bg-white'>
				<div className='container mx-auto px-4 h-full'>
					<div className='flex flex-col md:flex-row justify-between items-center h-full'>
						<a href='#home_scroll'>
							Books By <span className='text-violet-500'>Sara</span>
						</a>

						<ul className='flex flex-row gap-x-6'>
							<li>
								<a href='#meet_the_author_scroll'>Meet the Author</a>
							</li>
							<li>
								<a href='#resources_scroll'>Resources</a>
							</li>
							<li>
								<a href='#contact_scroll'>Contact</a>
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
