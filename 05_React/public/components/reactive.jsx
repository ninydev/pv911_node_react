
class Reactive extends React.Component{


    constructor(props) {
        super(props); // props - неизменные данные для компонента
        console.log("Процесс конструирования компонента");
        this.state = {
            items: [] // создам пустую коллекцию элементов
        }; // state - динамические данные для компонента
    }

    add(){
        this.state.items.push("new element");// Происходят операции
        this.setState({}); // вызывает обновление состояния компонента
        // и его перересовку
    }

    render(){
        console.log("Процесс отрисовки компонента");
        let key = 1;
        return (
          <div>
              <h1>Hello Component</h1>
              <ul>
                  {
                      // this.state - динамическое хранилище данных
                      // items - моя коллекция
                      // map (el => {el}) - аналог foreach перебор элементов
                      this.state.items.map( item =>
                          <li key ={key++}> {item} </li>
                      )
                  }
              </ul>
              {
                  // this -  обязательно если я обращаюсь к компоненту
                  // имя метода без скобочек
                  // bing(this) - подвязка метода к себе (к компоненту)
              }
              <button onClick={this.add.bind(this)}> add </button>
          </div>
        );
    }
}