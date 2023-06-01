import { useState} from 'react';
import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './burger-constructor.module.css';
import OrderDetails from '../order-details/order-details';
import ModalShow from '../modal-show/modal-show';
import PropTypes from 'prop-types';
import {ingredientPropType} from '../../utils/type'


export default function BurgerConstructor(props) {
    const [showModal, setShowModal] = useState(false);
    const data = props.allData.filter((data) => !data.type.includes('bun'));
    let sumdata = data.reduce((sum, item) => sum + item.price, 0) + 200 + 200;
    return (
      <>
      {
        showModal &&
        <ModalShow onClose={() => setShowModal(false)}>
          <OrderDetails numberOrder="034356"/>
        </ModalShow>
      }
      {/*showModal && createPortal(
        //<OrderDetails onClose={() => setShowModal(false)} numberOrder="034356"/>,
        <Modal onClose={() => setShowModal(false)}>
          <OrderDetails numberOrder="034356"/>
        </Modal>,
        document.getElementById('modals')
      )*/}
      <section className={style.burgerConstructor + ' mt-25 ml-5'}>
        <section className={style.burgerConstructorSection + ' ml-4 mr-4'}>
          <span className={style.burgerConstructorElementsTopBottom + ' ml-6 mr-2'}>
            <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
            />
          </span>
            <ul className={style.burgerConstructorElementsSection + ' custom-scroll'} >
              {data && Array.isArray(data) &&
                data.map(({_id, name, price, image}) => (
                  <li key={_id} className={style.burgerConstructorElement +' mt-1'}>
                    <span className={style.burgerConstructorElementIcon}> <DragIcon type="primary" /></span>
                    <ConstructorElement
                        text={name}
                        price={price}
                        thumbnail={image}
                      />
                  </li>
              ))}
            </ul>
          <span className={style.burgerConstructorElementsTopBottom + ' ml-6 mr-2'}>
          <ConstructorElement 
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'} //style={{transform: 'rotate(90deg)'}}
          />
          </span>
          <section className={style.burgerConstructorPriceButtonSection + ' mt-10'}>
            <span className="text text_type_main-large">{sumdata}
              <span className='ml-2 mr-10'><CurrencyIcon type="primary"/></span>
            </span>
            <Button htmlType="button" type="primary" size="medium" onClick={(event) => setShowModal(true)}>Оформить заказ</Button>
          </section>
        </section>
      </section>
      </>
    )
};

BurgerConstructor.propTypes= {
  allData: PropTypes.arrayOf(ingredientPropType)
};
