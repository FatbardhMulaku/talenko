import React from 'react'

function MainHero(props) {
    const { children, BGimg } = props;
    return (
        <div className={`MainHero ${BGimg}`}>
            {children}
        </div>
    )
}

export default MainHero;
