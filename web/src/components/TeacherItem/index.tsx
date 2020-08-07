import React from 'react';
import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

export interface Teacher {
	id: number
	name: string
	avatar: string
	bio: string
	subject: string
	cost: number
	whatsapp: string
}
interface teacherItemProps {
	teacher: Teacher
}

const TeacherItem: React.FC<teacherItemProps> = ({ teacher }) => {

	function createNewConnection() {
		api.post('connections', {
			user_id: teacher.id
		})
	}

	return (
		<article className="teacher-item">
			<header>
				<img src={teacher.avatar} alt="Avatar"/>
				<div>
					<strong>{teacher.name}</strong>
					<span>{teacher.subject}</span>
				</div>
			</header>

			<p>{teacher.bio}</p>

			<footer>
				<p>
					Preço/hora
					<strong>{teacher.cost}</strong>
				</p>
				<a target="_blank" onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`}>
					<img src={whatsappIcon} alt="Whatsapp" />
					Entrar em contato
				</a>
			</footer>
		</article>
	)
}

export default TeacherItem
