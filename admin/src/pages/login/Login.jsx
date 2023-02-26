import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from '../../redux/userSlice';
import { publicRequest } from '../../requestMethod';
import './login.scss';
const Login = () => {
  const { currentUser, isFetching, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');

  const handleLogin = async (e) => {
    debugger;
    try {
      e.preventDefault();

      try {
        dispatch(loginStart());
        const res = await publicRequest.post('auth/login', {
          username,
          password,
        });
        if (res.data.user) {
          dispatch(loginSuccess(res.data.user));
        } else {
          setErr('Something went wrong!');
        }
      } catch (error) {
        dispatch(loginFailure(error.message));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <div className="wrapper">
        <form action="">
          <label htmlFor="">
            <input
              type="text"
              placeholder="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>

          <label htmlFor="">
            <input
              type="text"
              placeholder="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <button onClick={handleLogin}>Login</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
