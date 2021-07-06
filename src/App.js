import React from 'react';
import Animes from './Components/Animes';
import Nav from './Components/Nav';

export default class FetchApi extends React.Component {
    state = {
        loading: true,
        harambe: null
    };

    async componentDidMount() {
        const URL = 'https://api.jikan.moe/v3/search/anime?q=&order_by=members&sort=desc&page=1';
        const response = await fetch(URL);
        const data = await response.json();
        this.setState({ harambe: data.results, loading: false });
        console.dir(this.state.harambe);
    }

    render() {
        return (
            <div>
                {this.state.loading || !this.state.harambe ?
                    (<div>loading...</div>) :
                    (<div>
                        <Nav harambe={this.state.harambe}/>
                        <Animes animes={this.state.harambe} />
                    </div>)}
            </div>
        )
    }
}