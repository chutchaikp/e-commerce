import { useEffect } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import './login.scss';

const Login = () => {
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
        <form action="">
          <input type="text" placeholder="username" name="username" />
          <input type="text" placeholder="password" name="password" />

          <button>LOGIN</button>

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
