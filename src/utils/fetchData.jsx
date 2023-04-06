export const exerciseOptions = { 
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        headers: {
          'X-RapidAPI-Key': '06cd6205f6msh402875ef53385c2p1fb0edjsnb679ba4cc9ea',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}