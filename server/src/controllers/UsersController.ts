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
			})

			const user_id = insertedUsersIds[0]

			const insertedClassesIds = await trx('classes').insert({
				subject,
				cost,
				user_id
			})

			const class_id = insertedClassesIds[0]

			const classSchedule = schedule.map( (scheduleItem: ScheduleItem) => {
				return {
					class_id,
					week_day: scheduleItem.week_day,
					from: convertHourToMinutes(scheduleItem.from),
					to: convertHourToMinutes(scheduleItem.to)
				}
			})

			await trx('class_schedule').insert(classSchedule)
			await trx.commit()
			return response.status(201).send()

		} catch (err) {
				await trx.rollback()
				return response.status(400).json({
					error: 'Unexpected error while creating new class'
				})
		}
	}
}
