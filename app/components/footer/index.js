import React from 'react';
import Link from 'next/link';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer class='py-4 mt-[40px]'>
			<div class='container mx-auto px-4'>
				<div class='flex justify-between items-center'>
					<div>
						<p>&copy; {currentYear} Sara Smith</p>
					</div>
					{/* <div>
            <ul class='flex space-x-4'>
                <li>
                    <Link href='/resources'>
                        <p>Resources</p>
                    </Link>
                </li>
                <li>
                    <Link href='/meettheauthor'>
                        <p>Meet the Author</p>
                    </Link>
                </li>
                <li>
                    <Link href='/contact'>
                        <p>Contact</p>
                    </Link>
                </li>
            </ul>
        </div> */}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
