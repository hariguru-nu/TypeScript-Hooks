import React, {useState, useEffect} from 'react';

const useFetch = async (url: string) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return []; // or handle the error appropriately
    }
}

export default useFetch
