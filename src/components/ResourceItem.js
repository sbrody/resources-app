import React from 'react';

const ResourceItem = ({ resource }) => {
    console.log(resource);



    return (
        <div>
            <img src={resource.source_url} alt={resource.alt_text}></img>
            test: {resource.title.rendered}
            {resource.resource_description}
        </div>
    )
};

export default ResourceItem;