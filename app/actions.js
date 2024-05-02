'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { mailOptions, transporter } from '../../config/nodemailer';

export async function handleMyFormSubmit(data) {
	try {
		console.log({
			name: data.name,
			email: data.email,
			message: data.email,
		});
		await transporter.sendMail({
			...mailOptions,
			...generateEmailContent(data),
			subject: data.subject,
		});
	} catch (error) {
		return { message: 'Bad request' };
	}

	revalidatePath('/');
	redirect(`/}`);
}
