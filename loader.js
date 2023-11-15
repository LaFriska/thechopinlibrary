import { main_template } from './html_template.js'
import { table_row } from './html_template.js'

const jsonpaths = scriptParams.jsonpaths

iterate(0)
function iterate(index){
    fetch(jsonpaths[index])
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); // Use text() to get the raw string content
        })
        .then(data => {
            const jsonObject = JSON.parse(data);
            serialize(jsonObject)
            if(index < jsonpaths.length) iterate(index + 1);
        })
        .catch(error => {
            console.error('Fetching error:', error);
        });
}

function serialize(jsonObject){
    let main_html = main_template
    let rows = new Array(jsonObject.length - 1) //Length subtracted by 1 to omit metadata

    main_html = main_html.replace('@title', jsonObject[0].title)
    main_html = main_html.replace('@id', jsonObject[0].id)
    main_html = main_html.replace('@description', jsonObject[0].description)

    let tbody = ''

    for (let i = 1; i < jsonObject.length; i++) {
        let temp = table_row
        let diffclass = jsonObject[i].diff.toLowerCase()
        diffclass = diffclass.replace(' ', '')

        temp = temp.replace("@name", jsonObject[i].name)
        temp = temp.replace("@work", jsonObject[i].work)
        temp = temp.replace("@key", jsonObject[i].key)
        temp = temp.replace("@editor", jsonObject[i].editor)
        temp = temp.replace("@diff", jsonObject[i].diff)
        temp = temp.replace("@dclass", diffclass)
        temp = temp.replaceAll("@href", jsonObject[i].href)
        tbody = tbody + temp;
    }

    main_html = main_html.replace('@body', tbody)
    document.getElementById('main_container').innerHTML += main_html;
}