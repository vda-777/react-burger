import { useState} from 'react';
import {createPortal} from 'react-dom';
import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetails from '../order-details/order-details'
import PropTypes from 'prop-types';

export function BurgerConstructor(props) {
    const [showModal, setShowModal] = useState(false);
    const data = props.allData.filter((data) => !data.type.includes('bun'));
    let sumdata = data.reduce((sum, item) => sum + item.price, 0) + 200 + 200;
    return (
      <>
      {showModal && createPortal(
        <OrderDetails onClose={() => setShowModal(false)} numberOrder="034356"/>,
        document.body
      )}
      <section className='BurgerConstructor mt-25 ml-5' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '48%'}}>
        <section className='ml-4 mr-4' style={{display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
          <span className='ml-6 mr-2'style={{alignSelf: 'end'}}>
            <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
            />
          </span>
            <ul className="custom-scroll" style={{display:"flex", flexDirection: 'column', overflow: 'auto'}}>
              {data && Array.isArray(data) &&
                data.map(({_id, name, price, image}) => (
                  <li key={_id} className='mt-1' style={{display: 'flex', gap: '10px'}}>
                    <span style={{alignSelf: 'center'}}> <DragIcon type="primary" /></span>
                    <ConstructorElement
                        text={name}
                        price={price}
                        thumbnail={image}
                      />
                  </li>
              ))}
            </ul>
          <span className='ml-6 mr-2' style={{alignSelf: 'end'}}>
          <ConstructorElement 
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'} //style={{transform: 'rotate(90deg)'}}
          />
          </span>
          <div className='mt-10' style={{display:'flex', flexDirection: 'row',  justifyContent:'end', alignItems: 'center', height: '64px'}}>
            <span className="text text_type_main-large">{sumdata}
              <span className='ml-2 mr-10' style={{justifyContent: 'center'}}><CurrencyIcon type="primary"/></span>              
            </span>
            <Button htmlType="button" type="primary" size="medium" onClick={(event) => setShowModal(true)}>Оформить заказ</Button>
          </div>
        </section>
      </section>
      </>
    )
};

BurgerConstructor.propTypes= {
  allData: PropTypes.arrayOf(
    PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string,
    __v: PropTypes.number
  }))
};
