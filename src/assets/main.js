const API = 'https://current-news.p.rapidapi.com/news/technology';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b3a08defbbmshcc332ea7de24f1bp1b18ebjsn8703da052b63',
        'X-RapidAPI-Host': 'current-news.p.rapidapi.com'
	}
};

const content = null || document.getElementById('content');

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

// Carga automaticamente la funcion al cargar el archivo
(async () => {

    try {
        const noticias = await fetchData(API);
        let view = `
            ${noticias.news.map(noti => `
                <div class="group relative">
                    <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${noti.urlToImage}" alt="${noti.title}" class="w-full">
                    </div>
                    <div class="mt-4 flex justify-between">
                        <h3 class="text-sm text-gray-700">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            ${noti.description}
                        </h3>
                    </div>
                </div>`
            ).slice(0,4).join('')}`
        
        content.innerHTML = view;

    } catch (error) {
      console.error(error)  
    }

})();