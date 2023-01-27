import PropTypes from 'prop-types';

export const FirstApp = ( { title, subTitle, name }) => {


    return(
        <>
            <h1 data-testid="test-title">{ title }</h1>
            <p data-testid="test-subtitle">{ subTitle }</p>
            <p data-testid="test-subtitle">{ subTitle }</p>
            <p>{ name }-</p>
        </>

    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    name: PropTypes.string,
}