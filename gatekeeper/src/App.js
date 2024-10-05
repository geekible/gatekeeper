import './App.css';
import { CookiesProvider, useCookies } from 'react-cookie';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'rsuite/dist/rsuite.min.css';

import Layout from './Layout/Layout';
import Home from './components/Home/Home';
import LoginComponent from './components/Login/LoginComponent';
import NotFound from './components/NotFound/NotFound';
import axios from 'axios';
import UserEdit from './components/User/UserEdit/UserEdit';

function App() {
  const authCookieName = 'user';
  const [cookies, setCookie, removeCookie] = useCookies();

  function handleLogin(user) {
    const loginDto = {
      username: user.username,
      password: user.password
    }

    axios.post('http://localhost:8080/user/login/', loginDto)
      .then(response => setCookie(authCookieName, response.data, { path: '/' }))
      .catch(err => { 
        
      });
  }

  const handleRemoveCookie = () => {
    removeCookie(authCookieName);
  }

  return (
    <div className="App">
      <CookiesProvider>
        {
          cookies.user ?
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout onRemoveCookie={handleRemoveCookie} />}>
                <Route index element={<Home />} />
                <Route path='user/useredit' element={<UserEdit />}/>
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
          :
          <LoginComponent onLogin={handleLogin}/>
        }
      </CookiesProvider>
    </div>
  );
}

export default App;
