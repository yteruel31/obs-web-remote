import {obs} from '../../lib/obs.ts';
import {redirect} from 'react-router-dom';

export const loader = () => {
  const identified = obs.get()?.identified;

  if (identified) {
    return null;
  }

  return redirect('/login');
};
