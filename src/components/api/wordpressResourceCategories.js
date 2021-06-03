import axios from 'axios';

export default axios.create({
    baseURL: 'http://gmhschub.local/mental-health/wp-json/wp/v2/resource-type',
    params: {

    }
});

const acfEndpoint = 'http://gmhschub.local/mental-health/wp-json/acf/v3/media/?is_resource=true';

const listOfResourceTypes = 'http://gmhschub.local/mental-health/wp-json/wp/v2/resource-type';

const allArticles = 'http://gmhschub.local/mental-health/wp-json/wp/v2/media/?is_resource=true&per_page=100'