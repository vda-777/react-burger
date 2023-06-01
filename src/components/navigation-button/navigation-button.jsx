import {BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';

export function NavigationButton(props) {
  return (    
        <div className={props.navigationButtonClass}>
            <a href='#' > {/*onclick='null'*/}
                {
                    props.icon      === 'BurgerIcon'    ? <BurgerIcon   type={props.type} />
                    : props.icon    === 'ListIcon'      ? <ListIcon     type={props.type} />
                    : props.icon    === 'ProfileIcon'   ? <ProfileIcon  type={props.type} />
                    : 'None'
                }
                {
                    props.type    === 'primary' ? <span className='ml-2 text text_type_main-small text_color_primary'> {props.Text}</span>
                    : props.type  === 'secondary' ? <span className='ml-2 text text_type_main-small text_color_inactive'> {props.Text}</span>
                    : <span className='pl-2 text text_type_main-small'> {props.Text}</span>
                }
            </a>
        </div>
    );
}

NavigationButton.propTypes={
    navigationButtonClass: PropTypes.string,
    icon: PropTypes.string,
    type: PropTypes.string,
    Text: PropTypes.string,
}