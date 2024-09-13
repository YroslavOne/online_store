import { FormEvent, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Headling from '../../components/Headling/Headling';
import Input from '../../components/Input/Input';
import style from './Login.module.css';
import { LoginResponse } from '../../interfaces/auth.interface';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispath, RootState } from '../../store/store';
import { login, userActions } from '../../store/user.slice';

export type LoginForm = {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
};

export function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispath>();
  const { jwt, loginErrorMassage } = useSelector((s: RootState) => s.user);

  useEffect(() => {
    if (jwt) {
      navigate('/online_store/');
    }
  }, [jwt, navigate]);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    dispatch(userActions.cleanLoginError());
    const target = e.target as typeof e.target & LoginForm;
    const { email, password } = target;
    dispatch(login({ email: email.value, password: password.value }));
  };

  return (
    <div className={style['login']}>
      <Headling>Вход</Headling>
      {loginErrorMassage && (
        <div className={style['error']}>{loginErrorMassage}</div>
      )}
      <form className={style['form']} onSubmit={submit}>
        <div className={style['field']}>
          <label className={style['']} htmlFor="email">
            Ваш email
          </label>
          <Input placeholder="Email" id="email" type="email" />
        </div>
        <div className={style['field']}>
          <label htmlFor="password">Ваш пароль</label>
          <Input placeholder="Пароль" id="password" type="password" />
        </div>
        <Button appearence="big">ВХОД</Button>

        <div className={style['links']}>
          <div>Нет акканута?</div>
          <Link to="/online_store/auth/register">Зарегистрироваться</Link>
        </div>
      </form>
    </div>
  );
}
