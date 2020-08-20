import { Request, Response } from 'express';
import db from '../database/connection';
export default class ClassesController {

	async create(request: Request, response: Response) {
		const {
			name,
			surname,
			email,
			password,
		} = request.body

		const bcrypt = require('bcrypt');
		const passwordHash = await bcrypt.hash(password,8)

		const trx = await db.transaction()

		try {
			await trx('users').insert({
				name,
				surname,
				email,
				passwordHash
			})

			await trx.commit()
			return response.status(201).send()

		} catch (err) {
			console.log(err)
			await trx.rollback()
			return response.status(400).json({
				error: 'Unexpected error while creating new user'
			})
		}
	}
}
