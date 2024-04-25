// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
	const { name, email, message } = req.body;

	// Create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
		service: 'yahoo',
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASSWORD,
		},
	});

	// send mail with defined transport object
	let info = await transporter.sendMail({
		from: `"${name}" <${email}>`,
		to: 'tojmccann@yahoo.com',
		subject: 'New message from your Books By Sara',
		text: message,
	});

	console.log('Message sent: %s', info.messageId);

	res.status(200).json({ success: true });
}
