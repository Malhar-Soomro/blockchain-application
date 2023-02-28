import { useState, useEffect } from "react";

const GIPHY_KEY = import.meta.env.VITE_GIPHY_API;

const useFetch = ({ keyword }) => {
    const [gifUrl, setGifUrl] = useState("");
    console.log(keyword)

    const fetchGifs = async () => {
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_KEY}&q=${keyword.split(" ").join("")}&limit=1`);
            const { data } = await response.json();
            setGifUrl(data[0]?.images?.downsized_medium?.url);

        } catch (error) {
            setGifUrl("https://acegif.com/wp-content/uploads/gif-shaking-head-38.gif");
        }
    }

    useEffect(() => {
        if (keyword) fetchGifs();

    }, [keyword]);

    return gifUrl;
}

export default useFetch;