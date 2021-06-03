import React from 'react';
import wordpress from './api/wordpressResourceCategories';
import wordpressResourceList from './api/wordpressResourceList';
import ResourceList from './ResourceList';


class App extends React.Component {
    state = { resources: [], resourceList: [] };

    componentDidMount() {
        wordpress
            .get()
            .then(
                resources => this.setState({
                    resources: resources.data
                }),
            );

        wordpressResourceList
            .get()
            .then(
                item => this.setState({
                    resourceList: item.data
                })
            )
    }



    render() {
        console.log(this.state.resources);
        return (
            <div>Hello, world
                <ResourceList resources={this.state.resources} />
            </div>

        )
    }
}

export default App;