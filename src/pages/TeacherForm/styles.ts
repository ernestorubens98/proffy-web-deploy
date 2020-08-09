import styled from 'styled-components';

export const PageTeacherForm = styled.div`
  #page-teacher-form {
    width: 100vw;
    height: 100vh;
  }

  #page-teacher-form .page-header .header-content {
    margin-bottom: 6.4rem;
  }

  #page-teacher-form main {
    background-color: var(--color-box-base);
    width: 100%;
    max-width: 74rem;
    border-radius: 0.8rem;
    border-top: 0.1rem solid rgba(255, 255, 255, 0.7);
    margin: -3.2rem auto 3.2rem;
    padding-top: 6.4rem;
    overflow: hidden;
  }

  #page-teacher-form main fieldset {
    border: 0;
    padding: 0 2.4rem;
  }

  #page-teacher-form main fieldset + fieldset {
    margin-top: 6.4rem;
  }

  #page-teacher-form main fieldset legend {
    font: 700 2.4rem Archivo;
    color: var(--color-text-title);
    margin-bottom: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid var(--color-line-in-white);
  }

  #page-teacher-form main fieldset legend button {
    background: none;
    border: 0;
    color: var(--color-primary-dark);
    font: 700 1.6rem Archive;
    cursor: pointer;
    transision: color 0.2s;
  }

  #page-teacher-form main fieldset legend button:hover {
    color: var(--color-primary-darker);
  }

  #page-teacher-form main fieldset .input-block + .textarea-block,
  #page-teacher-form main fieldset .select-block + .input-block {
    margin-top: 2.4rem;
  }

  /* #page-teacher-form main label {
    color: var(--color-text-complement);
  } */

  #page-teacher-form main footer {
    padding: 4rem 2.4rem;
    background: var(--color-box-footer);
    border-top: 1px solid var(--color-line-in-white);
    margin-top: 6.4rem;
  }

  #page-teacher-form main footer p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: var(--color-text-complement);
  }

  #page-teacher-form main footer p img {
    margin-right: 2rem;
  }

  #page-teacher-form main footer button {
    width: 100%;
    height: 5.6rem;
    background: var(--color-secundary);
    color: var(--color-button-text);
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.6rem Archivo;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: background-color 0.2s;
    margin-top: 3.2rem;
  }

  #page-teacher-form main footer button:hover {
    background: var(--color-secundary-dark);
  }

  @media (min-width: 700px) {
    #page-teacher-form {
      max-width: 100vw;
    }

    #page-teacher-form .page-header .header-content {
      margin-bottom: 0;
    }

    #page-teacher-form main fieldset {
      padding: 0 6.4rem;
    }

    #page-teacher-form main .schedule-item {
      margin-top: 1.6rem;
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      column-gap: 1.6rem;
    }

    #page-teacher-form main .schedule-item .input-block {
      margin-top: 0 !important;
    }

    #page-teacher-form main footer {
      padding: 4rem 6.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    #page-teacher-form main footer p {
      justify-content: space-between;
    }

    #page-teacher-form main footer button {
      width: 20rem;
      margin-top: 0;
    }
  }
`;
