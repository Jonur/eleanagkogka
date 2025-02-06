import axios, { AxiosError } from 'axios';
import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

import { Close } from 'src/components/Icons';
import { Route } from 'src/types';
import { startUserSession } from 'src/utils';

Modal.setAppElement('#root');

interface PasswordFormElements extends HTMLFormControlsCollection {
  password: HTMLInputElement;
}

interface PasswordForm extends HTMLFormElement {
  elements: PasswordFormElements;
}

const PasswordForm: React.FC = () => {
  const [error, setError] = useState('');

  const getAxiosErrorMessage = (err: AxiosError) => {
    let errorMessage = 'An unknown error occurred';

    if (
      err.response?.data &&
      typeof err.response.data === 'object' &&
      'error' in err.response.data &&
      typeof err.response.data.error === 'string'
    ) {
      errorMessage = err.response.data.error;
    }

    return errorMessage;
  };

  const handleSubmitForm = (e: React.FormEvent<PasswordForm>) => {
    e.preventDefault();

    const userInputPassword = e.currentTarget.elements.password.value;

    axios
      .post(
        'https://api.jonur.io/egworkpwd',
        { password: userInputPassword },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Origin': 'https://eleanagkogka.com',
          },
        }
      )
      .then(({ status }) => {
        if (status === 200) {
          startUserSession();
          window.location.reload();
        }
      })
      .catch((err: AxiosError) => {
        setError(getAxiosErrorMessage(err));
      });
  };

  return (
    <Modal
      isOpen
      style={{
        overlay: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(251,251,251, 0.5)',
          zIndex: 20,
        },
        content: {
          height: 'fit-content',
          width: 'fit-content',
          padding: 0,
          inset: 0,
          border: 0,
          zIndex: 50,
          position: 'relative',
          borderRadius: '8px',
          marginTop: '-30px',
          maxWidth: 'calc(100% - 2rem)',
        },
      }}
      contentLabel="Login modal"
    >
      <Link
        aria-label="Close modal"
        to={Route.ROOT}
        className="absolute right-4 top-4 text-3xl lg:text-4xl text-dark-blue"
      >
        <Close className="text-dark-blue" />
      </Link>

      <form className="flex flex-col p-6 gap-4 bg-white rounded-[8px] shadow-lg" onSubmit={handleSubmitForm}>
        <label htmlFor="password" className="text-dark-blue text-lg font-bold">
          Enter password
        </label>
        <input type="password" id="password" className="border border-dark-blue rounded-[8px] p-2" required />

        {error && <p className="text-error">{error}</p>}

        <button type="submit" className="bg-dark-blue text-white font-bold py-2 rounded-[8px] hover:bg-teal-dark">
          Login
        </button>
      </form>
    </Modal>
  );
};

export default PasswordForm;
