import React from 'react';

import whatsapp from '../../assets/images/icons/whatsapp.svg';

import api from '../../services/api';
import { TeacherItems } from './styles';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}
interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  const createNewConnection = () => {
    api.post('connections', {
      user_id: teacher.id,
    });
  };

  return (
    <TeacherItems>
      <article className="teacher-item">
        <header>
          <img src={teacher.avatar} alt={teacher.name} />
          <div>
            <strong>{teacher.name}</strong>
            <span>{teacher.subject}</span>
          </div>
        </header>

        <p>{teacher.bio}</p>

        <footer>
          <p>
            Preço/hora
            <strong>{`R$ ${teacher.cost}`}</strong>
          </p>
          <a
            // eslint-disable-next-line react/jsx-no-target-blank
            target="_blank"
            onClick={createNewConnection}
            href={`https://wa.me/${teacher.whatsapp}`}
          >
            <img src={whatsapp} alt="Whatsapp" />
            Entrar em contato
          </a>
        </footer>
      </article>
    </TeacherItems>
  );
};

export default TeacherItem;
