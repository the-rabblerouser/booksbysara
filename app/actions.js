'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export async function handleMyFormSubmit(data) {
	console.log({
		name: data.name,
		email: data.email,
		message: data.email,
	});

	revalidatePath('/');
	redirect(`/}`);
}
