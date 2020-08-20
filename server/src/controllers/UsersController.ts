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

		const trx = await db.transaction()

		try {
			const insertedUsersIds = await trx('users').insert({
				name,
				surname,
				email,
				password
			})

			const user_id = insertedUsersIds[0]
			await trx.commit()
			return response.status(201).send()

		} catch (err) {
			await trx.rollback()
			return response.status(400).json({
				error: 'Unexpected error while creating new user'
			})
		}
	}
}
