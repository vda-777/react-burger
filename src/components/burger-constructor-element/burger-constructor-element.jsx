import { useRef } from 'react';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './burger-constructor-element.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { DelIngredient, ReorderIngredient} from '../../services/reducers/burger-constructor';
import { useDrag, useDrop } from 'react-dnd';


export default function BurgerConstructorElement({uuid, index, name, price, image}) {
    const ref = useRef(null);
    const dispatch = useDispatch();
    const ingredientDel = (uuid) => {
      dispatch(DelIngredient(uuid));
    };
    
    const [{handlerId}, drop] = useDrop({
        accept: 'constructorElement',
        collect(monitor) {
            return {
              handlerId: monitor.getHandlerId(),
            }
        },
        hover(item, monitor){
          if(!ref.current){return;}
          const dragIndex = item.index;
          const hoverIndex = index;
          if (dragIndex === hoverIndex) {return;}          
          const hoverBoundingRect = ref.current?.getBoundingClientRect();
          const hoverMiddleY =
            (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
          const clientOffset = monitor.getClientOffset();
          const hoverClientY = clientOffset.y - hoverBoundingRect.top;
          if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
          }
          if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
          }
          dispatch(ReorderIngredient({dragIndex, hoverIndex}));
          item.index = hoverIndex;
        }
    });

    const [ {isDragging}, drag] = useDrag({
      type: 'constructorElement',
      item: () => {
        return {uuid, index};
      },
      collect: monitor => ({
        isDragging: monitor.isDragging()
      })
    });
    const opacity = isDragging ? 0 : 1;
    drag(drop(ref));

    return (
        <div className={style.burgerConstructorElement +' mt-1'} style={{ opacity }} ref={ref} data-handler-id={handlerId}>
            <span className={style.burgerConstructorElementIcon}> <DragIcon type="primary" /></span>
                <ConstructorElement
                    text={name}
                    price={price}
                    thumbnail={image}
                    handleClose={() => {ingredientDel(uuid)}}
                />
        </div>
    )
};

BurgerConstructorElement.propTypes= {
  uuid: PropTypes.string,
  index: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string
};