import './Header.css';

export default function Header() {
  return (
    <header>
      <div className="header__container">
        <div className="header__left">
          <h1>Блог Кирилла</h1>
          <p>Блог с большим backEnd функционалом</p>
        </div>
        <div className="header__right">
          <button className="auth">Зарегистрироваться</button>
          <button className="login">Войти</button>
        </div>
      </div>
    </header>
  );
}
