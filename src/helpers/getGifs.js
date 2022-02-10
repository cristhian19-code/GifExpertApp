export const getGifs = async(category) => {
    const apiKey = 'A8xMXqzieIHmtO3BjGLAtf1daSSDAv8K';
    const limit = 10;
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=${apiKey}`;
    
    // obtencion de la respuesta de la api
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    // mutar el array con solo los datos necesarios
    const gifs = data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images?.downsized_medium.url
    }))
    
    return gifs
}