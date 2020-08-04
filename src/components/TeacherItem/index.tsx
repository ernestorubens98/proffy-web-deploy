import React from 'react';

import whatsapp from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/12194824?s=460&u=38e9c9b9f9aa952868f0c38acd3ca5fe3eaada3f&v=4"
          alt="Ernesto Rubens"
        />
        <div>
          <strong>Ernesto Rubens</strong>
          <span>História</span>
        </div>
      </header>

      <p>
        Apaixonado por história.
        <br />
        <br />
        Pré-história, antiguidade, média, moderna e contemporânea
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsapp} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
