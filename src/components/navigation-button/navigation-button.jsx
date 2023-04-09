import {BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';

export function NavigationButton(props) {
  return (    
        <div className={props.navigationButtonClass}>
            <a href='#' style={{display: 'flex', textDecoration:'none'}}> {/*onclick='null'*/}
                {
                    props.icon      === 'BurgerIcon'    ? <BurgerIcon   type={props.type} />
                    : props.icon    === 'ListIcon'      ? <ListIcon     type={props.type} />
                    : props.icon    === 'ProfileIcon'   ? <ProfileIcon  type={props.type} />
                    : 'None'
                }
                {
                    props.type    === 'primary' ? <p className='pl-2 text text_type_main-small' style={{color:'#F2F2F3'}}> {props.Text}</p>
                    : props.type  === 'secondary' ? <p className='pl-2 text text_type_main-small' style={{color:'#8585AD'}}> {props.Text}</p>
                    : <p className='pl-2 text text_type_main-small' style={{color:'#FFFFFF'}}> {props.Text}</p>
                    /*<p className={`text text_type_main-small ${Props.TextActive} pl-2`}> {Props.Text}</p>*/
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