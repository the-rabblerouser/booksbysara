'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { mailOptions, transporter } from './config/nodemailer';

export async function handleMyFormSubmit(req, res) {
	// console.log({
	// 	name: req.name,
	// 	email: req.email,
	// 	message: req.email,
	// });
	const body = {
		name: req.name,
		email: req.email,
		message: req.message,
	};

	try {
		await transporter.sendMail({
			...mailOptions,
			text: `This is a message from ${body.name}, ${body.email}. ${body.message}`,
			subject: `Website message from ${body.name}`,
		});
	} catch (error) {
		console.log({ message: 'Bad request' });
	}

	revalidatePath('/');
	redirect('/');
}
