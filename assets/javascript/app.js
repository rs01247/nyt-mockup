
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

url += '?' + "lincoln" + 'api-key'+ "9d1cdfea85984c6c877d43ba0a24c5e7";


axios.get(url)

.then(function(resp){
    console.log(resp);
});