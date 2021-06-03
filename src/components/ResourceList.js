import React from 'react';
import ResourceTopic from './ResourceTopic';


const ResourceList = ({ resources }) => {

    console.log(resources)


    // Map through resources array to generate resource topic element, including an ID value
    const RenderedList = resources.map((resource) => {
        return <ResourceTopic resourceId={resource.id} resourceName={resource.name} />
    });

    // // Filter list down to only those that are resources
    // const filteredList = resources.filter((resource) => {
    //     return resource.is_resource === true;
    // });
    // console.log('Filtered list - ' + filteredList);
    // //remove null values from filteredList
    // const denulledList = filteredList.filter((resource) => {
    //     return resource.resource_type !== null;
    // });
    // console.log('Denulled - ' + denulledList);
    // need to divide them up into category groups
    // 1 - create a list of current resource types
    // const resourceTypes = resources.map((resource) => {
    //     return resource.resource_type;
    // });
    // console.log(resourceTypes);

    // // map the list to generate an array
    // let resourceArray = resourceTypes.map((type) => {
    //     return type;
    // })

    // // flatten the array to deal with instances of multiple types per resource
    // let flattenedArray = resourceArray.flat();
    // // subdivide the whole list into separate lists based on resource type
    // console.log(flattenedArray);

    // //filter our null elements from array
    // let filteredFlattenedArray = flattenedArray.filter((el) => {
    //     return el != null;
    // })
    // console.log(filteredFlattenedArray);

    // // filter out all duplicates
    // const nodupesArray = Array.from(new Set(filteredFlattenedArray));


    // // filter array of resources to find ones matching each resource type
    // const RenderedList = nodupesArray.map((type) => {
    //     console.log(type);
    //     const resourceType = denulledList.filter((resources) => {
    //         console.log('type = ' + type);
    //         console.log('resource = ' + resources.resource_type);
    //         // let myarray = Object.entries(resources);
    //         // console.log(myarray);
    //         const test = resources.resource_type.some(el => el === type);
    //         console.log(test);
    //         return resources.resource_type.some(el => el === type);
    //         // return resources.resource_type === type;
    //     });
    //     console.log(resourceType);
    //     console.log(type);
    //     return <ResourceTopic type={type} resources={resourceType} />
    // })



    return <div>{RenderedList}</div>
    // const resourceTypesSection = filteredList.map((resource => {
    //     return resource.resource_type === type
    // })
    // console.log(dividedList);
    // // Map through resources to create resource list
    // const renderedList = filteredList.map((resource) => {
    //     return <ResourceItem resource={resource} />
    // });

    // return <div>{renderedList} </div>;

};

export default ResourceList;