import React from 'react';
import ResourceItem from './ResourceItem';
import axios from 'axios';



export default class ResourceTopic extends React.Component {
    state = {
        response: [],
        apiUrl: `http://gmhschub.local/mental-health/wp-json/wp/v2/media/?is_resource=true&resource-type=${this.props.resourceId}`,
        renderedList: []
    };


    loadResources = () => {

        axios.get(this.state.apiUrl)
            .then(response => {
                const getResponse = response.data;
                this.setState({ response: getResponse })
            })
            .then(response => {
                console.log(response);
                console.log(this.state.response);
            })

    }


    componentDidMount() {
        // const axiosInstance = axios.create({
        //     baseURL: `http://gmhschub.local/mental-health/wp-json/wp/v2/media/?is_resource=true&resource-type=${this.props.resourceId}`,
        //     params: {

        //     }
        // })

        // const resourceUrl = `http://gmhschub.local/mental-health/wp-json/wp/v2/media/?is_resource=true&resource-type=${this.props.resourceId}`;
        // axiosInstance.get()
        //     .then((res) => {
        //         this.setState({
        //             response: res.data
        //         })

        //     });

    }


    render() {
        console.log(this.state.response);
        const renderedList = this.state.response.map((res) => {
            console.log(res);
            return <ResourceItem resource={res} />
        })

        return (
            <div>
                Resource ID: {this.props.resourceId}
                Resource Name: {this.props.resourceName}
                {renderedList}
                <button onClick={this.loadResources}>Load</button>
            </div>
        )
    }
}

