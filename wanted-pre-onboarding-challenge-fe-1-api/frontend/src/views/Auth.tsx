import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, signup } from '../api';
import './auth.css';

const Auth = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState<{email: string; password: string; checkPassword: string;}>({email:'', password:'', checkPassword:''});
  const allFieldsValid = /.+@\w+\.\w+/.exec(formData.email) 
    && formData.password.length >= 8 
    && (!isSignUp || 
        (formData.checkPassword.length >= 8 && formData.password === formData.checkPassword));

  useEffect(() => {
    if (localStorage.getItem('token')) {
        navigate('/');
    }
  });

  const handleChangeFormData = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.currentTarget.name]: e.currentTarget.value});
  }

  const handleToggleSignUp = () => {
    setIsSignUp(signUp => !signUp);
    setFormData({email:'', password:'', checkPassword:''});
  }

  const handleSubmitForm = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        let token;
        if (isSignUp) {
            token = await signup({email: formData.email, password: formData.password});
        } else {
            token = await login({email: formData.email, password: formData.password});
        }
    
        if (token) {
            localStorage.setItem('token', token);
            navigate('/');
        }
    } catch(e) {
        alert(e);
    }
  }

  return (
    <>
        <header>
            <h1>
                {isSignUp ? '회원가입' : '로그인'}
            </h1>
        </header>
        <main className="container">
            <form name="authForm" className="auth-form" onSubmit={handleSubmitForm}>
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChangeFormData} 
                    className="auth-input" 
                    placeholder="E-mail" 
                    required autoFocus 
                    maxLength={50} 
                    pattern=".+@\w+\.\w+"/>
                <input 
                    type="password" 
                    name="password" 
                    value={formData.password} 
                    onChange={handleChangeFormData} 
                    className="auth-input" 
                    placeholder="비밀번호" 
                    required 
                    maxLength={50} 
                    minLength={8}/>
                {isSignUp && (
                    <input 
                        type="password" 
                        name="checkPassword" 
                        value={formData.checkPassword} 
                        onChange={handleChangeFormData} 
                        className="auth-input" 
                        placeholder="비밀번호 재입력" 
                        required 
                        maxLength={50} 
                        minLength={8}/>)}
                <button 
                    type="submit" 
                    className="auth-button" 
                    disabled={!allFieldsValid}
                >
                    {isSignUp? '회원가입' : '로그인'}
                </button>
            </form>
            <button 
                type="button" 
                className="toggle-button" 
                onClick={handleToggleSignUp}
            >
                {isSignUp ? '로그인하기' : '회원가입하기'}
            </button>
        </main>
    </>
  )
}

export default Auth;