import { Request, Response } from 'express';
import db from '../database/connection';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export default class ClassesController {

	async create(request: Request, response: Response) {
		const {
			name,
			surname,
			email,
			password,
		} = request.body

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

	async authentication(request: Request, response: Response) {
		try {
			const { email, password } = request.body
			const user = await db('users')
				.where({email})
				.first()
				.then( async userReturned => {
					if (!userReturned) {
						return response.status(401).json({error: "User not found"})
					}
					if (!(await bcrypt.compareSync(password, userReturned.passwordHash) )) {
						return response.status(400).json({ error: "Invalid password" });
					} else {

						const dotenv = require('dotenv')
						dotenv.config()
						let token = jwt.sign({email}, String(process.env.TOKEN_SECRET), { expiresIn: 1800 });

						return response.json({
							user: {
								user_id: userReturned.id,
								email: userReturned.email,
								name: userReturned.name,
								surname: userReturned.surname,
							},
							token
						})
					}
				})
		} catch (err) {
			console.log(err)
			return response.status(400).json({ error: "User authentication failed" });
		}
	}
}
