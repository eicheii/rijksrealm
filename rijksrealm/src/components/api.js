const API_KEY = process.env.REACT_APP_RIJKSMUSEUM_API_KEY;
const API_BASE_URL = 'https://www.rijksmuseum.nl/api/en/';

export const searchArtworks = async (query, sort = 'relevance') => {
    try {
        const response = await fetch(`${API_BASE_URL}collection?key=${API_KEY}&q=${query}&s=${sort}&imgonly=True&`);
        if (!response.ok) {
            throw new Error('Oopsie, something went wrong');
        }
        const data = await response.json();

        const artObjects = data.artObjects;
        
        const detailedArtworks = await Promise.all(artObjects.map(async (artObject) => {
            const detailsResponse = await fetch(`${API_BASE_URL}collection/${artObject.objectNumber}?key=${API_KEY}&`);
            const detailsData = await detailsResponse.json();
            return detailsData.artObject;
        }));

        return detailedArtworks;
    } catch (error) {
        console.error('Error fetching data', error);
        return [];
    }
};



