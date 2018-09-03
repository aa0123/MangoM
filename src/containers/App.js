import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { manga } from './manga';
import Scroll from '../components/Scroll';
import Logo from '../components/Logo/Logo';
import './App.css';


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
				<div className='center'>
        			<Logo  />
        			<h1 className='f1 pa4'>MangoM</h1>				

        		</div>
        			<p className='f5'>
        			{'Search below for manga collection'}
        			</p>
        			<SearchBox searchManga={this.onSearchChange}/>
					<Scroll>
					<CardList manga={filteredManga} />
					</Scroll>
				</div>
			);
	}
}

export default App;