const API_KEY = process.env.REACT_APP_RIJKSMUSEUM_API_KEY;
const API_BASE_URL = 'https://www.rijksmuseum.nl/api/en/';

export const searchArtworks = async (query) => {
    try { 
        const response = await fetch(`${API_BASE_URL}collection?key=${API_KEY}&q=${query}`);
        if (!response.ok) {
            throw new Error('Oopsie, something went wrong');
        }
        const data = await response.json();
        return data.artObjects;
    } catch (error) {
        console.error('Error fetching data', error);
        return [];
    }
};

console.log(process.env.REACT_APP_RIJKSMUSEUM_API_KEY)
