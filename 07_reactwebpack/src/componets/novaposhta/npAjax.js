
export default class NpAjax {

    Get(modelName,calledMethod, methodProperties, callBackOk, callBackErr){
        fetch(
            "https://api.novaposhta.ua/v2.0/json/",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    "apiKey": "3c81d19dc6c4375bc278f4c329fb03cb",
                    "modelName": modelName,
                    "calledMethod": calledMethod,
                    "methodProperties": methodProperties,
                })
            }
        )
            .then(response => {
                if(response.status != 200){
                    console.log(response.status);
                    console.log(response.statusText);
                    if(callBackErr) callBackErr(response.statusText);
                }
                return response.json();
            })
            .then(json => {
                if(json['success']){
                    callBackOk(json['data']);
                } else {
                    console.log(json['errors']);
                    console.log(json['warnings']);
                    if(callBackErr) callBackErr(json['errors']);
                }
            })
            .catch(err=> {
                console.log(err);
                if(callBackErr) callBackErr(err);
            })
    }
}