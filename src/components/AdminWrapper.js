import React from 'react';

function AdminWrapper(props) {
    return (
        <div>
            {props.children}
        </div>
    );
}

export default AdminWrapper;