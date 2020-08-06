import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg'
import './styles.css';

function TeacherForm() {
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
				</fieldset>

				<fieldset>
					<legend>Sobre a aula</legend>
					<Input name="subject" label="Matéria" />
					<Input name="cost" label="Valor por hora" />
				</fieldset>

				<fieldset>
					<legend>Horários disponíveis</legend>
					<Input name="week_day" label="Dia da semana" />
					<Input name="from" label="Das" />
					<Input name="to" label="Até" />
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
