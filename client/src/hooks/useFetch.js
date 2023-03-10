import React from "react";

const GIPHY_API = import.meta.env.VITE_GIPHY_API;

export const useFetch = ({ keyword }) => {
    const [gifUrl, setGifUrl] = React.useState("");

    const fetchGifs = async () => {
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API}&q=${keyword.split(" ").join("")}&limit=1`);

            const { data } = await response.json();

            setGifUrl(data[0]?.images?.downsized_medium?.url);

        } catch (error) {
            console.error(error);
            setGifUrl("https://acegif.com/wp-content/uploads/gif-shaking-head-38.gif")
        }
    }

    React.useEffect(() => {
        if (keyword) fetchGifs();
    }, [keyword]);

    return gifUrl;
}