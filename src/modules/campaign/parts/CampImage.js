import { defaultImg } from 'constants/Global';
import React from 'react';

const CampImage = ({className = 'h-[158px]' , img = defaultImg}) => {
    return (
        <div className={className}>
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    );
};

export default CampImage;