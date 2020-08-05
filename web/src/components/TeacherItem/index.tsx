import React from 'react';
import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
	return (
		<article className="teacher-item">
			<header>
				<img src="https://avatars3.githubusercontent.com/u/1598657?s=460&u=8aea005900b0d02ff50d20f53db8c9d51e2b17b3&v=4" alt="ProffyName"/>
				<div>
					<strong>Proffy Name</strong>
					<span>Química</span>
				</div>
			</header>

			<p>
				Entusiasta das QUIMICA avançada.
				<br /><br />
				Diversos experimentos já sairam de controle e ocasionaram grandes estragos para muitas outras pessoas, que seriam outros serem também. Cuidado!
			</p>

			<footer>
				<p>
					Preço/hora
					<strong>R$50,00</strong>
				</p>
				<button type="button">
					<img src={whatsappIcon} alt="Whatsapp" />
					Entrar em contato
				</button>
			</footer>
		</article>
	)
}

export default TeacherItem
