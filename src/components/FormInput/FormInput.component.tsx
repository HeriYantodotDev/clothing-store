import { FormInput } from '../../Types';
import './FormInput.styles.scss';

export function FormInput({
  label,
  ...otherProps
}: FormInput) {
  return (
    <div className='group'>
      <input className='form-input'{...otherProps} />
      {label && (
        <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
      )}
    </div>
  );
} 