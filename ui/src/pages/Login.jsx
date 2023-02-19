import './login.scss';
const Login = () => {
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
