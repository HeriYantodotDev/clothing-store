import { SignIn } from '../../components/SignIn/SignIn.component';
import { SignUp } from '../../components/SignUp/SignUp.component';
import './Authenticaiton.styles.scss';

export function Authentication() {
  return (
    <div className='authentication-container'>
      <SignIn />
      <SignUp />
    </div>
  );
}