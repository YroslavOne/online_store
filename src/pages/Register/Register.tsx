import { FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Headling from '../../components/Headling/Headling';
import Input from '../../components/Input/Input';
import { AppDispath, RootState } from '../../store/store';
import { register, userActions } from '../../store/user.slice';
import style from './../Login/Login.module.css';

export type RegisterForm = {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
  name: {
    value: string;
  };
};

export function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispath>();
  const { jwt, registerErrorMassage } = useSelector((s: RootState) => s.user);

  useEffect(() => {
    if (jwt) {
      navigate('/');
    }
  }, [jwt, navigate]);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    dispatch(userActions.cleanRegisterError());
    const target = e.target as typeof e.target & RegisterForm;
    const { email, password, name } = target;
    dispatch(
      register({
        email: email.value,
        password: password.value,
        name: name.value,
      })
    );
  };

  return (
    <div className={style['login']}>
      <Headling>Регистрация</Headling>
      {registerErrorMassage && (
        <div className={style['error']}>{registerErrorMassage}</div>
      )}
      <form className={style['form']} onSubmit={submit}>
        <div className={style['field']}>
          <label className={style['']} htmlFor="email">
            Ваш email
          </label>
          <Input placeholder="Email" name="email" id="email"  type="email"/>
        </div>
        <div className={style['field']}>
          <div className={style['field']}>
            <label htmlFor="password">Ваш пароль</label>
            <Input
              placeholder="Пароль"
              name="password"
              id="password"
              type="password"
            />
          </div>
          <label className={style['field']} htmlFor="name">
            Ваше имя
          </label>
          <Input placeholder="Имя" name="name" id="name" />
        </div>

        <Button appearence="big">Зарегистрироваться</Button>

        <div className={style['links']}>
          <div>Есть акканут?</div>
          <Link to="/auth/login">Войти</Link>
        </div>
      </form>
    </div>
  );
}
