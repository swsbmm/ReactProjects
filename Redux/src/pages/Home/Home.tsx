import React from 'react';

// react redux
import { useCustomSelector, useCustomDispatch } from '../../hooks/redux';
import { setAccessToken } from '../../redux/slices/auth';

const Home: React.FC = () => {
  const { auth } = useCustomSelector((state) => state);
  const dispatch = useCustomDispatch();

  const handleLogin = (): void => {
    dispatch(setAccessToken(generateToken(25)));
  };

  const generateToken = (length: number): string => {
    let result: string = '';
    const characters: string =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <p>{auth.accessToken}</p>
    </div>
  );
};

export default Home;
