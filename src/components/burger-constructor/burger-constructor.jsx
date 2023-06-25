import { useState, useEffect, useMemo} from 'react';
import { Button, ConstructorElement, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './burger-constructor.module.css';
import OrderDetails from '../order-details/order-details';
import Modal from '../modal/modal';
import LoadingErrorWindow from '../loading-error-window/loading-error-window';
import { isEmpty } from '../../utils/is-empty';
import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import {AddReplaceBun, AddIngredient} from '../../services/reducers/burger-constructor';
import {sendOrder} from '../../services/action/order';

import BurgerConstructorElement from '../burger-constructor-element/burger-constructor-element';
import { useDrop } from 'react-dnd';

export default function BurgerConstructor() {
  
  const [showModal, setShowModal] = useState(false);
    
    const [, drop] = useDrop({
      accept: 'Ingredient',
      collect: monitor => ({
        isHover: monitor.isOver()
      }),
      drop(item) {
        item.type === 'bun' ? addOrReplaceBun(item._id) : addIngredient(item._id);
      },
  });
    const dispatch = useDispatch();

    const { allData, bun, ingredients, sendingOrder, errorOrder, order } = useSelector((store) => ({
      allData: store.burgerIngredients.burgerIngredients,
      bun: store.burgerConstruction.bun,
      ingredients: store.burgerConstruction.ingredients,
      sendingOrder: store.order.sending,
      errorOrder: store.order.error,
      order: store.order.order,
      }),shallowEqual
    );

    const addOrReplaceBun = (_id) => {      
      dispatch(
        AddReplaceBun(
          allData.filter((data) => data._id.includes(_id))[0]
        )
      );
    }    
    const addIngredient = (_id) => {      
      dispatch(
        AddIngredient(
          allData.filter((data) => data._id.includes(_id))[0]
        )        
      );
    }    

    const contentBun = (type) => {
        return !isEmpty(bun) &&
          <ConstructorElement
                type={type}
                isLocked={true}
                text= {bun[0].name}
                price={bun[0].price}
                thumbnail={bun[0].image}
        />
    };
    
    const contentIngredients = useMemo(
      () => {
        return !isEmpty(ingredients) &&
        ingredients.map((item, index) => {
            return <BurgerConstructorElement key={item.uuid} uuid={item.uuid} index={index} name={item.name} price={item.price} image={item.image} /*moveItem={moveItem}*//>;
          })
      },[ingredients]
    );

    let sumData = useMemo(
      () => {
        return (isEmpty(bun) ? 
          (isEmpty(ingredients) ? 0 : ingredients.reduce((sum, item) => sum + item.price, 0)) : 
        (isEmpty(ingredients) ? 2 * bun[0].price : 2 * bun[0].price + ingredients.reduce((sum, item) => sum + item.price, 0))
        )
      },[bun, ingredients]
      );
    
    const sending = () => {
      const ing = ingredients.map((item) => item._id);
      dispatch(sendOrder({"ingredients": ing.concat(bun.map((item) => item._id))}));
    };

    useEffect(() => {
      if(!isEmpty(order)){
        setShowModal(true);
      }
    }, [order]);
    


    return (
      <>
      <LoadingErrorWindow loading = {sendingOrder} error = {errorOrder}></LoadingErrorWindow>
      {
        showModal &&
        <Modal onClose={() => setShowModal(false)}>          
          <OrderDetails numberOrder={order.order.number}/>
        </Modal>
      }      
      <section className={style.burgerConstructor + ' mt-25 ml-5'} ref={drop}>
            <section className={style.burgerConstructorSection + ' ml-4 mr-4'}>
              <span className={style.burgerConstructorElementsTop + ' ml-6 mr-2'}>
                {contentBun("top")}
              </span>
              <span className={style.burgerConstructorElementsSection + ' custom-scroll pb-1'} >
                {contentIngredients}
              </span>
              <span className={style.burgerConstructorElementsBottom + ' ml-6 mr-2'}>
                {contentBun("Bottom")}
              </span>
              
              {(!isEmpty(bun) || !isEmpty(ingredients)) &&
                <section className={style.burgerConstructorPriceButtonSection + ' mt-10'}>
                  <span className="text text_type_main-large">{sumData}
                    <span className='ml-2 mr-10'><CurrencyIcon type="primary"/></span>
                  </span>
                  <Button htmlType="button" type="primary" size="medium" onClick={(event) => sending()}>Оформить заказ</Button>
                </section>}

            </section>        
      </section>
      </>
    )
};