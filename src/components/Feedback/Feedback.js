import './Feedback.scss';
import dog from '../../assets/images/dog.png';
import { useState } from 'react';

export default function Feedback() {
  
  const [input, setInput] = useState('+7');
  function changeInput(e) {
    setInput(e.target.value);
  }

  return(
    <section className='feedback'>
      <div className='feedback__background'>
        <form className='feedback__data'>
          <h2 className='feedback__title'>Нужна помощь?</h2>
          <p className='feedback__subtitle'>Наши менеджеры с удовольствием погавкают с вами о всех ваших вопросах</p>
          <div className='feedback__input-field'>
            <p className='feedback__input-placeholder'>Ваш номер телефона</p>
            <input type='tel' className='feedback__input-tel' value={input} onChange={changeInput} maxLength='12' />
            <button className='feedback__button'>Перезвоните мне</button>
          </div>
          <label className='feedback__checkbox-field'>
            <input type='checkbox' className='feedback__checkbox-real' defaultChecked={true} />
            <div className='feedback__checkbox'></div>
            <p className='feedback__checkbox-text'>Я согласен на обработку своих персональных данных согласно <a href='/' target='_blank'>политике конфиденциальности</a></p>
          </label>
        </form>
        <img src={dog} alt='dog' className='feedback__image' />
      </div>
    </section>
  );
}