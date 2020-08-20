interface Response {
	token: string
	user: {
		name: string
		surname: string
		email: string
	}
}

export function login():Promise<Response> {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve({
				token: '1234567890qwertyuiop',
				user: {
					name: 'mockado',
					surname: 'fake',
					email: 'mail@mail.co'
				}
			})
		}, 1500)
	})
}
