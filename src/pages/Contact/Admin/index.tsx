import { NavLink } from 'react-router-dom';
import { AdminForm, AdminPageContainer } from './style'

export function AdminPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const elements = event.currentTarget.elements as HTMLFormControlsCollection & {
      login: {value: string},
      password: {value: string}
    };

    const login = elements.login.value;
    const password = elements.password.value;
    if (login === 'admin' && password === 'admin') {
      <NavLink to="/semiNovos" />
    } else {
      alert("Login ou senha incorretos")
    }
  }
  return (
    <AdminPageContainer>
      <AdminForm onSubmit={handleSubmit}>
        <h1>Login</h1>
        <hr />
          <p>Seu acesso</p>
          <input type="text" required placeholder='exemplo123'/>

          <p>Sua senha</p>
          <input type="password" />

          <button type='submit'>Logar</button>
      </AdminForm>
    </AdminPageContainer>
  )
}
