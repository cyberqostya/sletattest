import TourData from '../TourData/TourData';
import Accordion from '../UI/Accordion/Accordion';
import FormInput from '../UI/FormInput/FormInput';
import './Main.scss';

export default function Main() {
  return(
    <main className='main'>
      <div className='main__inner'>
        <h2 className='main__title'>Бронирование тура</h2>

        <form className='main__form'>
          <h3 className='main__form-title'>Данные покупателя</h3>
          <div className='main__input-field'>
            <FormInput type="email" placeholder="Email" />
            <FormInput type="tel" placeholder="Телефон" />
          </div>

          <h3 className='main__form-title'>Информация о туристах</h3>
          <p className='main__form-text'>Пусть это заполнят твои двуногие</p>

          <Accordion title='Данные о первом двуногом' className='main__accordion' />
        </form>

        <TourData price={100000} multiplier={2} className='main__tourdata' />
      </div>
    </main>
  );
}