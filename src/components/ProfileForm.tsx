import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { setName, setEmail, setPassword } from '../features/profile/profileSlice';

export const ProfileForm = ({ onClose }: { onClose: () => void }) => {
  const dispatch = useDispatch();
  const profile = useSelector((state: RootState) => state.profile);

  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setMessage('');

    try {
      const endpoint = isLogin ? '/auth/login' : '/auth/register';

      const res = await fetch(`${process.env.REACT_APP_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: profile.name,
          email: profile.email,
          password: profile.password,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong');

      if (isLogin) {
        localStorage.setItem('token', data.token);
        setMessage('✅ Logged in successfully!');
        setTimeout(onClose, 1000);
      } else {
        setMessage('✅ Registered successfully! You can now log in.');
        setIsLogin(true);
      }
    } catch (err: any) {
      setMessage('❌ ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-lg p-6 w-[90%] max-w-sm relative"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold mb-4 text-center">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h2>

        {!isLogin && (
          <input
            type="text"
            value={profile.name}
            onChange={e => dispatch(setName(e.target.value))}
            placeholder="Full Name"
            className="border p-2 rounded w-full mb-3"
          />
        )}

        <input
          type="email"
          value={profile.email}
          onChange={e => dispatch(setEmail(e.target.value))}
          placeholder="Email"
          className="border p-2 rounded w-full mb-3"
        />
        <input
          type="password"
          value={profile.password}
          onChange={e => dispatch(setPassword(e.target.value))}
          placeholder="Password"
          className="border p-2 rounded w-full mb-3"
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-black text-white w-full py-2 rounded hover:bg-gray-800"
        >
          {loading ? 'Please wait...' : isLogin ? 'Login' : 'Register'}
        </button>

        {message && <p className="text-sm text-center mt-3">{message}</p>}

        <p className="text-sm text-center mt-4 text-gray-500">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-black font-semibold underline"
          >
            {isLogin ? 'Sign up' : 'Sign in'}
          </button>
        </p>

        <button onClick={onClose} className="absolute top-3 right-4 text-gray-500 hover:text-black">
          ✕
        </button>
      </div>
    </div>
  );
};
