import axios from 'axios';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const axioSecure = axios.create({
  baseURL: 'http://localhost:5000/',
  withCredentials: true,
});

const useAxioSecure = () => {
  const { signOut } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    axioSecure.interceptors.response.use(
      res => {
        return res;
      },
      error => {
        console.log('error token is', error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut().then(() => {
            navigate('/login');
          });
        }
      }
    );
  }, []);

  return axioSecure;
};
export default useAxioSecure;
