import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: 'Client-ID 8h-NTNg2gyMqRC8OU18J5wGhqWJ6vLu311AHRYamQKc'
        },
        params: {
            query: term,
        },

    });

    return response.data.results;

};


export default searchImages;
