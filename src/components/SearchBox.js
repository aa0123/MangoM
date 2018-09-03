import React from 'react';

const SearchBox = ({ searchfield, searchManga}) => {
	return (
		<div className='pa2'>
			<input
			className='pa3 ba b--red bg-lightest-red' 
			type='search' 
			placeholder='Here!'
			onChange={searchManga} 
			/>
		</div>
	);
}

export default SearchBox;