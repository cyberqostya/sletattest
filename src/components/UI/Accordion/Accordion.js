import FormInput from '../FormInput/FormInput';
import './Accordion.scss';

export default function Accordion(props) {
  const { title, className } = props;

  return(
    <div className={`accordion ${className || ''}`}>
      <h4 className='accordion__title'>{title}</h4>
      <div className='accordion__field'>
        <FormInput type='text' placeholder='Фамилия' className='accordion__input' />
        <FormInput type='text' placeholder='Имя' className='accordion__input' />
        <FormInput type='text' placeholder='Отчество' className='accordion__input' />
        <FormInput type='text' placeholder='Дата рождения' className='accordion__input' />
        <FormInput type='text' placeholder='Серия и номер паспорта' className='accordion__input' />
        <FormInput type='text' placeholder='Когда выдан' className='accordion__input' />
        <FormInput type='text' placeholder='Кем выдан' className='accordion__input' />
      </div>
    </div>
  );
}