import React from 'react';

const Card = ({name, genre, review, image}) => {
	return (
		<div className='bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
			<img alt='manga' src={image} width='250' height='200' />
			<div>
				<h2>{name}</h2>
				<p><strong>Genre: </strong>{genre}</p>
				<p><strong>Opinion: </strong>{review}</p>
			</div>
		</div>

	);
}

export default Card;