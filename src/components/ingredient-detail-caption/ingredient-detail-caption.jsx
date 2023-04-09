import PropTypes from 'prop-types';

export default function IngredientDetailCaption(props){
    const styleModelIngredientDetailCaption = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'center'
    };
    return(
        <span className='mr-5'style={styleModelIngredientDetailCaption}>
            <p className="text text_type_main-small text_color_inactive">{props.compositionName}</p>
            <p className='text_type_digits-default text_color_inactive'>{props.compositionCount}</p>
        </span>
    );
}

IngredientDetailCaption.propTypes={
    compositionName: PropTypes.string,
    compositionCount: PropTypes.number
}