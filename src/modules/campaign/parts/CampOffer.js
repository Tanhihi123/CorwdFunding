import React from 'react';

const CampOffer = ({children}) => {
    return (
        <div className='w-full bg-secondary py-8 text-white pl-11 rounded-xl my-4'>
            {children}
        </div>
    );
};

export default CampOffer;