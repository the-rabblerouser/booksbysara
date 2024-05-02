'use server';

export async function handleMyFormSubmit(data) {
	console.log({
		name: data.name,
		email: data.email,
		message: data.email,
	});
}
