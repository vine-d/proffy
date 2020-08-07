import React, { useState } from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function TeacherForm() {

	const [ scheduleItems, setScheduleItems ] = useState([
		{ week_day: 0, from: '', to: '' }
	])
	function addNewScheduleItem(){
		setScheduleItems([
			...scheduleItems,
			{ week_day: 0, from: '', to: '' }
		])
	}

	return (
		<div id="page-teacher-form" className="container">
			<PageHeader
				title="Que incrível que você quer dar aulas."
				description="O primeiro passo é preencher este formulário de inscrição."
			/>

			<main>
				<fieldset>
					<legend>Seus dados</legend>
					<Input name="name" label="Nome Completo" />
					<Input name="avatar" label="Avatar" />
					<Input name="whatsapp" label="Whatsapp" />
					<Textarea name="bio" label="Biografia" />
				</fieldset>

				<fieldset>
					<legend>Sobre a aula</legend>
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
					<Input name="cost" label="Valor por hora" />
				</fieldset>

				<fieldset>
					<legend>
						Horários disponíveis
						<button type="button" onClick={addNewScheduleItem}>
							+ novo horário
						</button>
					</legend>

					{scheduleItems.map( scheduleItem => {
						return (
							<div key={scheduleItem.week_day} className="schedule-item">
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
								<Input type="time" name="from" label="Das" />
								<Input type="time" name="to" label="Até" />
							</div>
						)
					})}



				</fieldset>

				<footer>
					<p>
						<img src={warningIcon} alt="Atenção"/>
						Aviso importante <br />
						Preencha todos os dados!
					</p>
					<button type="button">Salvar</button>
				</footer>
			</main>

		</div>
	)
}


export default TeacherForm
