import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { manga } from './manga';
import Scroll from '../components/Scroll';

class App  extends Component {
	constructor() {
		super()
		this.state = {
			manga: manga,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value})
	
	}

	render() {
		const { manga, searchfield } = this.state;
		const filteredManga = manga.filter(searchMangas =>{
			return searchMangas.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return !manga.length ?
		<h1>Loading, please wait</h1> : 
		(
				<div className='tc'>
					<img alt='mangom banner' src={require('../img/banner.png')} width='100%' height='600px'/>				
					<SearchBox searchManga={this.onSearchChange}/>
					<Scroll>
					<CardList manga={filteredManga} />
					</Scroll>
				</div>
			);
	}
}

export default App;