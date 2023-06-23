import { useState, useEffect, useMemo, useCallback} from 'react';
import { Button, ConstructorElement, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './burger-constructor.module.css';
import OrderDetails from '../order-details/order-details';
import Modal from '../modal/modal';
import { isEmpty } from '../../utils/is-empty';
//import PropTypes from 'prop-types';
//import {ingredientPropType} from '../../utils/type'
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
        item.type === 'bun' ? BunAddOrReplace(item._id) : IngredientAdd(item._id);
      },
  });
    const dispatch = useDispatch();

    const { allData } = useSelector((store) => ({
      allData: store.burgerIngredients.burgerIngredients
      }),shallowEqual
    );    
    const {bun, ingredients} = useSelector((store) => ({
      bun: store.burgerConstruction.bun,
      ingredients: store.burgerConstruction.ingredients
      }),shallowEqual
    );
    const {sendingOrder, errorOrder, order} = useSelector((store) => ({
        sendingOrder: store.order.sending,
        errorOrder: store.order.error,
        order: store.order.order,
      }),shallowEqual
    );

    const BunAddOrReplace = (_id) => {      
      dispatch(
        AddReplaceBun(
          allData.filter((data) => data._id.includes(_id))[0]
        )
      );
    }    
    const IngredientAdd = (_id) => {      
      dispatch(
        AddIngredient(
          allData.filter((data) => data._id.includes(_id))[0]
        )        
      );
    }    

    const contentBun = useCallback(
      (type) => {
        return !isEmpty(bun) &&
          <ConstructorElement
                type={type}
                isLocked={true}
                text= {bun[0].name}
                price={bun[0].price}
                thumbnail={bun[0].image}
        />
      },[bun]
    );
    
    /*const moveItem = useCallback((dragIndex, hoverIndex) => {      
      dispatch(ReorderIngredient(dragIndex, hoverIndex));
    }, [dispatch, ingredients]);*/
    const contentIngredients = useMemo(
      () => {
        return !isEmpty(ingredients) &&
        ingredients.map((item, index) => {
            return <BurgerConstructorElement key={item.uuid} uuid={item.uuid} index={index} name={item.name} price={item.price} image={item.image} /*moveItem={moveItem}*//>;
          })
      },[ingredients/*, moveItem*/]
    );

    let sumdata = isEmpty(bun) ? 
      (isEmpty(ingredients) ? 0 : ingredients.reduce((sum, item) => sum + item.price, 0)) : 
      (isEmpty(ingredients) ? 2 * bun[0].price : 2 * bun[0].price + ingredients.reduce((sum, item) => sum + item.price, 0))
    
    const sending = useCallback(() => {
      const ing = ingredients.map((item) => item._id);
      if(!isEmpty(bun)){
        ing.push(bun[0]._id);
        ing.push(bun[0]._id);
      }
      dispatch(sendOrder({"ingredients": ing}));
    },[bun, ingredients, dispatch]);

    useEffect(() => {
      if(!isEmpty(order)){
        setShowModal(true);
      }
    }, [order]);
    


    return (
      <>
      {
        showModal &&
        <Modal onClose={() => setShowModal(false)}>          
          <OrderDetails numberOrder={order.order.number}/>
        </Modal>
      }
      {
        sendingOrder && 
        <Modal onClose={() => null} header={'Загрузка данных'}>
          <p className="text text_type_digits-small">Загружаем данные на сервер, боюсь с вашим интернетом надо будет подождать.</p>
          <p className="mb-10 text text_type_digits-small">Наберитесь терпения и ожидайте окончания загрузки...</p>
        </Modal>
      }
      {
        errorOrder && 
        <Modal onClose={() => null} header={'Ошибочка'}>
          <p className="text text_type_digits-small">Упс. Вознилка проблема с отправкой данных на сервер.</p>
          <p className="text text_type_digits-small">Сообщение об ощибке: {errorOrder}</p>
          <p className="mb-10 text text_type_digits-small">Попробуйте обновить страницу.</p>
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
                  <span className="text text_type_main-large">{sumdata}
                    <span className='ml-2 mr-10'><CurrencyIcon type="primary"/></span>
                  </span>
                  <Button htmlType="button" type="primary" size="medium" onClick={(event) => sending()}>Оформить заказ</Button>
                </section>}

            </section>        
      </section>
      </>
    )
};

BurgerConstructor.propTypes= {
  //allData: PropTypes.arrayOf(ingredientPropType)
};