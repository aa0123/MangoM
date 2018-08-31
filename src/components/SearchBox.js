import React from 'react';

const SearchBox = ({ searchfield, searchManga}) => {
	return (
		<div className='pa2'>
			<input
			className='pa3 ba b--green bg-lightest-blue' 
			type='search' 
			placeholder='search manga here!'
			onChange={searchManga} 
			/>
		</div>
	);
}

export default SearchBox;