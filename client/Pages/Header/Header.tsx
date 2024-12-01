import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Persona from '../../components/Persona/Persona'

const headerIterms = [
  { id: 1, name: 'Home', navigateTo: '/' },
  { id: 2, name: 'Matches', navigateTo: '/matches' },
  { id: 3, name: 'About us', navigateTo: '/about' },
  { id: 4, name: 'Contact us', navigateTo: '/contact' },
]

function Header() {
  const { isAuthenticated, loginWithRedirect } = useAuth0()

  function handleLogin() {
    loginWithRedirect({
      authorizationParams: {
        redirect_uri: `${window.location.origin}/`,
      },
    })
  }

  return (
    <nav>
      <div className="flex items-center justify-between py-6">
        <h1>Bite-Share</h1>
        <div className="flex flex-row justify-end gap-6 text-center">
          {headerIterms.map((item) => {
            return (
              <Link key={item.id} to={item.navigateTo!}>
                {item.name}
              </Link>
            )
          })}
          <Link
            to="/kohaPage"
            className="rounded bg-green-500 px-3 py-1 font-bold text-white hover:bg-green-600"
          >
            Support us/ Koha
          </Link>
          <section>
            {!isAuthenticated ? (
              <button onClick={handleLogin}>Login</button>
            ) : (
              <Persona />
            )}
          </section>
        </div>
      </div>
    </nav>
  )
}

export default Header
