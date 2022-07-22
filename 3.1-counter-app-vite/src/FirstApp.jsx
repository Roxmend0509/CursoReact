import PropTypes from 'prop-types';

export const FirstApp = ( { title,subTitle,name } ) => {
    return (
        <>
            <h1> { title } </h1>
            { /*<code> { JSON.stringify(newMessage) } </code>*/ }
            <p> { subTitle } </p>
            <p> { name } </p>
        </>
    );
}


FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

FirstApp.defaultProps = {
    name: 'Roxana Mendoza',
    subTitle: 'No hay subtitulo',
    title: 'No hay titulo',
}

