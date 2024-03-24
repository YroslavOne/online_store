import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Headling from '../../components/Headling/Headling';
import Input from '../../components/Input/Input';
import { PREFIX } from '../../helpers/API';
import style from './Login.module.css';
import axios, { AxiosError } from 'axios';

export type LoginForm = {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
};

export function Login() {
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & LoginForm;
    const [email, password] = target;
    sendLogin(email.value, password.value);
  };

  const sendLogin = async (email: string, password: string) => {
    try {
      setError(null);

      const { data } = await axios.post(`${PREFIX}/auth/login`, {
        email,
        password,
      });
      console.log(data);
    } catch (e) {
      if (e instanceof AxiosError) {
        setError(e.response?.data.message);
      }
    }
  };

  return (
    <div className={style['login']}>
      <Headling>Вход</Headling>
      {error && <div className={style['error']}>{error}</div>}
      <form className={style['form']} onSubmit={submit}>
        <div className={style['field']}>
          <label className={style['']} htmlFor="email">
            Ваш email
          </label>
          <Input placeholder="Email" id="email" />
        </div>
        <div className={style['field']}>
          <label htmlFor="password">Ваш пароль</label>
          <Input placeholder="Пароль" id="password" type="password" />
        </div>
        <Button appearence="big">ВХОД</Button>

        <div className={style['links']}>
          <div>Нет акканута?</div>
          <Link to="/auth/register">Зарегистрироваться</Link>
        </div>
      </form>
    </div>
  );
}
