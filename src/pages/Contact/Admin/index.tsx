import { NavLink } from 'react-router-dom'
import { AdminForm, AdminPageContainer } from './style'

export function AdminPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const elements = event.currentTarget.querySelectorAll<HTMLInputElement>('input') as NodeListOf<HTMLInputElement>;

    const login = elements[0].value;
    const password = elements[1].value;
    if (login === 'admin' && password === 'admin') {
      window.location.href = '/zeroKM'; 
    } else {
      alert("Login ou senha incorretos")
    }
  }
  return (
    <AdminPageContainer>
      <AdminForm>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <hr />
          <p>Seu acesso</p>
          <input type="text" required placeholder="exemplo123" />

          <p>Sua senha</p>
          <input type="password" />

          <button type="submit">Logar</button>
        </form>
      </AdminForm>
    </AdminPageContainer>
  )
}
