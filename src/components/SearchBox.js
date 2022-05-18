import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='Search for Cats Pals'
                onChange={searchChange}
                style={{ marginTop:"-1rem"}}
            />
        </div>
    );
}

export default SearchBox;