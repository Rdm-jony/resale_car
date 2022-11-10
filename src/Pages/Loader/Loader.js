import React from 'react';

const Loader = () => {
    return (
        <div className=''>
            <div className="radial-progress text-primary" style={{ "--value": 70 }}>70%</div>
        </div>
    );
};

export default Loader;