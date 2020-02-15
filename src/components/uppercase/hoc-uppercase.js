import React from 'react';

const hoc = (WrappedComponent) => (props) => {
    return (
        <div>
            <WrappedComponent {...props}>
                {props.children.toUpperCase()}
            </WrappedComponent>
        </div>
    )
};

export default hoc;