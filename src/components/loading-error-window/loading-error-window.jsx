import Modal from '../modal/modal';
import PropTypes from 'prop-types';

export default function LoadingErrorWindow({loading, error}){
    return(
        <>
            {loading &&
                <Modal onClose={() => null} header={'Загрузка данных'}>
                    <p className="text text_type_digits-small">Обмениваемся данными с сервером, боюсь с вашим интернетом надо будет подождать.</p>
                    <p className="mb-10 text text_type_digits-small">Наберитесь терпения и ожидайте окончания обмена...</p>
                </Modal>}
            {error &&
                <Modal onClose={() => null} header={'Ошибочка'}>
                    <p className="text text_type_digits-small">Упс. Вознилка проблема с обменом данными с сервером.</p>
                    <p className="text text_type_digits-small">Сообщение об ощибке:</p>
                    <p className="mt-4 mb-4 text text_type_digits-default">{error}</p>
                    <p className="mb-10 text text_type_digits-small">Попробуйте обновить страницу.</p>
                </Modal>}
        </>
    )
}
LoadingErrorWindow.propTypes= {
    loading: PropTypes.bool,
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string
    ])
};