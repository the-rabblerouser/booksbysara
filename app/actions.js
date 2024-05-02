'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { mailOptions, transporter } from './config/nodemailer';

export async function handleMyFormSubmit(req, res) {
	const body = {
		name: req.name,
		email: req.email,
		message: req.message,
	};

	try {
		await transporter.sendMail({
			...mailOptions,
			html: `<div><h2>Name</h2><p>${body.name}</p><h2>Email</h2><p>${body.email}</p><h2>Message</h2><p>${body.message}</p></div>`,
			subject: `Website message from ${body.name}`,
		});
	} catch (error) {
		console.log({ message: 'Bad request' });
	}

	revalidatePath('/');
	redirect('/');
}
