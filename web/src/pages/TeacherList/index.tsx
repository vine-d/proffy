import React from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';



function TeacherList() {
	return (
		<div id="page-teacher-list" className="container">
			<PageHeader title="Estes são os proffys disponíveis.">
				<form id="search-teachers">
					<Select
						name="subject"
						label="Matéria"
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
					<Input type="time" name="time" label="Horário" />
				</form>
			</PageHeader>

			<main>
				<TeacherItem />
				<TeacherItem />
				<TeacherItem />
				<TeacherItem />
			</main>
		</div>
	)
}

export default TeacherList
