import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-poshta',
  templateUrl: './nova-poshta.component.html',
  styleUrls: ['./nova-poshta.component.css']
})
export class NovaPoshtaComponent implements OnInit {
  items = [];

  constructor() { }

  ngOnInit(): void {
    fetch( // Отправка запроса
      "https://api.novaposhta.ua/v2.0/json/", // url куда
      { // данные по запросу ( если GET можно опустить)
        method: "POST", // Метод запроса
        body: JSON.stringify( // данные (тело), которые я передаю сайту
          {
            apiKey: "3c81d19dc6c4375bc278f4c329fb03cb",
            modelName: "Address",
            calledMethod: "getAreas",
            methodProperties: {}
          }
        )
      }
    )
      .then(response => { // получение ответа от сервера и нужное преобразовать в json
        return response.json();
      })
      .then(json => { // обработать полученный json
        if (!json.success) {
          console.log(" Error: ");
          return;
        }

        console.log("Get from NP");

        console.log(json.data);
        this.items = json.data;
      })
      .catch(err => console.log(err)); //  получить ошибку и обработать ее
  }

}
