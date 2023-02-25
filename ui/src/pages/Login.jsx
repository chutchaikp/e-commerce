import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { redirect, useNavigate } from 'react-router-dom';
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice';
import { publicRequest } from '../requestMethods';
import './login.scss';

const Login = () => {
  const navigate = useNavigate();
  const { isFetching, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      dispatch(loginStart());
      // await delay(3000); //  chrom dev tool > Network > No throttling => Slow 3G
      const res = await publicRequest.post('/auth/login', {
        username,
        password,
      });

      if (res.data.user) {
        dispatch(loginSuccess(res.data.user));
        navigate('/');
      }
    } catch (error) {
      console.log(error);
      dispatch(loginFailure(error.message));
    }
  };

  // const user = true;
  // debugger;

  // // https://reactrouter.com/en/main/hooks/use-navigate
  // if (user) {
  //   redirect('/products');
  // }

  // const navigate = useNavigate();

  // useEffect(() => {
  //   const user = true;
  //   if (user) {
  //     navigate('/products');
  //     // redirect('/products'); // not working
  //   }
  // }, []);

  return (
    <div className="login">
      <div className="wrapper">
        <div className="title">SIGN IN</div>
        <div className="status">{isFetching ? 'Fetching...' : 'ok'}</div>
        <div className="error">{error}</div>
        <form action="">
          <input
            type="text"
            placeholder="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            disabled={isFetching ? true : false}
            onClick={(e) => handleLogin(e)}
          >
            LOGIN
          </button>

          <div className="links">
            <div className="link">DO NOT YOU REMEMBER THE PASSWORD?</div>
            <div className="link">CREATE A NEW ACCOUNT</div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
