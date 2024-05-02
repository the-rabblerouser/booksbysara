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
	const message_body = {
		name: req.name,
		email: req.email,
		message: req.message,
	};
	try {
		await transporter.sendMail({
			...mailOptions,
			...message_body,
			subject: 'Message from Fan!',
		});
	} catch (error) {
		console.log({ message: 'Bad request' });
	}

	revalidatePath('/');
	redirect('/');
}
