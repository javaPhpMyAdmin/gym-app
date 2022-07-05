export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '02b66e198cmsh532016e3bcbc7fbp1047d7jsnca82a0a7557e',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const optionsYouTubeSearch = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '02b66e198cmsh532016e3bcbc7fbp1047d7jsnca82a0a7557e',
    'X-RapidAPI-Host': 'https://youtube-search-and-download.p.rapidapi.com/'
  }
};

export const fetchData = async (url,options)=>{
  const response = await fetch(url,options);
  const data = await response.json()
  return data
}
