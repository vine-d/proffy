import React, { useState, FormEvent } from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherList() {

	const [subject,setSubject] = useState('')
	const [week_day,setWeek_day] = useState('')
	const [time,setTime] = useState('')
	const [teachers,setTeachers] = useState([])

	async function searchTeachers(e:FormEvent) {
		e.preventDefault()

		const response = await api.get('classes', {
			params: {
				subject,
				week_day,
				time
			}
		})
		setTeachers(response.data)
	}

	return (
		<div id="page-teacher-list" className="container">
			<PageHeader title="Estes são os proffys disponíveis.">
				<form id="search-teachers" onSubmit={searchTeachers}>
					<Select
						name="subject"
						label="Matéria"
						value={subject}
						onChange={e=>{
							setSubject(e.target.value)
							searchTeachers(e)
						}}
						options={[
							{ value: 'Artes', label: 'Artes' },
							{ value: 'Matemática', label: 'Matemática' },
							{ value: 'Química', label: 'Química' },
							{ value: 'Português', label: 'Português' },
							{ value: 'Biologia', label: 'Biologia' },
							{ value: 'Geografia', label: 'Geografia' },
							{ value: 'Física', label: 'Física' },
						]}
					/>
					<Select
						name="week_day"
						label="Dia da semana"
						value={week_day}
						onChange={e=>{
							setWeek_day(e.target.value)
							searchTeachers(e)
						}}
						options={[
							{ value: '1', label: 'Segunda' },
							{ value: '2', label: 'Terça' },
							{ value: '3', label: 'Quarta' },
							{ value: '4', label: 'Quinta' },
							{ value: '5', label: 'Sexta' },
							{ value: '6', label: 'Sábado' },
							{ value: '0', label: 'Domingo' },
						]}
					/>
					<Input
						type="time"
						name="time"
						label="Horário"
						value={time}
						onChange={e=>{
							setTime(e.target.value)
							searchTeachers(e)
						}}
					/>
				</form>
			</PageHeader>

			<main>
				{teachers.map((teacher:Teacher) => {
					return <TeacherItem key={teacher.id} teacher={teacher} />
				})}
			</main>
		</div>
	)
}

export default TeacherList
