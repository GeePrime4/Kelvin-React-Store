import React, { useContext, useState } from 'react';
import { UserContext } from '../components/userContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { login } = useContext(UserContext);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name !== "" && user.email !== "" && user.password !== "") {
      login(user);
      setUser({ name: "", email: "", password: "" });
      navigate('/');
    } else {
      document.getElementById("id1").classList.add('is-invalid')
      document.getElementById("id2").classList.add('is-invalid')
      document.getElementById("id3").classList.add('is-invalid')
    }
  };

  return (
    <div>
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 bg-secondary" style={{ height: "62.9vh" }}>
              <form className='d-block mt-5' onSubmit={handleSubmit}>
                <input id='id1'
                  type="text"
                  className='form-control w-25 mx-auto mb-4'
                  placeholder='Enter Your Name'
                  value={user.name}
                  onChange={handleChange}
                  name="name"
                />
                <input id='id2'
                  type="email"
                  className='form-control w-25 mx-auto mb-4'
                  placeholder='Enter Your Email'
                  value={user.email}
                  onChange={handleChange}
                  name="email"
                />
                <input id='id3'
                  type="password"
                  className='form-control w-25 mx-auto mb-4'
                  placeholder='Enter Your Password'
                  value={user.password}
                  onChange={handleChange}
                  name="password"
                />
                <button
                  type="submit"
                  className="fw-bold btn btn-light mx-auto d-block mb-2"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
