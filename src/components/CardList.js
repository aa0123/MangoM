import React from 'react';
import Card from './Card';

const CardList = ({ manga }) => {
	return (
		<div>
			{
			manga.map((mangaNames, i) => {
			return  (
					<Card 
						key={manga[i].id} 
						name={manga[i].name} 
						genre={manga[i].genre} 
						image={manga[i].image} 
						review={manga[i].review} 
						/>
					);
				})
			}		
		</div>
	);
}

export default CardList;