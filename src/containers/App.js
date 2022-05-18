import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundary'
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            Cats: [],
            searchfield: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ Cats: users }));
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        console.log(event.target.value)
    }
    render() {
        const { Cats, searchfield } = this.state;
        const filteredCats = Cats.filter(Cat => {
            return Cat.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !Cats.length ?
            <h1 id='main'>Loading</h1> :
            (   <div className='tc'>
                    <h1 className='f1'>
                        <span id='main'>CatPals</span>
                        <span id='illustrate'>Ca</span>
                    </h1>
                    <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList Cats={filteredCats} />
                    </ErrorBoundry>
                    </Scroll>
                </div>
            );   
    }
}


export default App;