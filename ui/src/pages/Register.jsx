import './register.scss';
const Register = () => {
  return (
    <div className="register">
      <div className="wrapper">
        <div className="title">CREATE AN ACCOUNT</div>
        <form action="">
          <input type="text" placeholder="name" name="name" />
          <input type="text" placeholder="last name" name="last name" />
          <input type="email" placeholder="email" name="email" />
          <input type="text" placeholder="username" name="username" />
          <input type="text" placeholder="password" name="password" />
          <input
            type="text"
            placeholder="confirmpassword"
            name="confirmpassword"
          />

          <span className="agreement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the
            <b>PRIVACY POLICY</b>
          </span>
          <button>CREATE</button>
        </form>
      </div>
    </div>
  );
};
export default Register;
