import React from 'react';

const SectionHeader = ({heading,subHeading}) => {
    return (
        <div className='text-center my-10'>
            <p className='text-yellow-600'>--- {subHeading} ---</p>
            <h3 className='text-4xl font-semibold uppercase border-y-2 py-4 mt-3 w-5/12 mx-auto'>{heading}</h3>
        </div>
    );
};

export default SectionHeader;