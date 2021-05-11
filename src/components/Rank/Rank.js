import React from 'react';

const Rank = ({name, entries}) => {
    return(
        <>
            <div className='white f3 tc'>
                {`${name}, your current entry count is...`}
            </div>
            <div className='white f1 tc'>
                {`${entries}`}
            </div>
        </>
    );
}

export default Rank;