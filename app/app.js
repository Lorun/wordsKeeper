import { h, render, Component } from 'preact';

import { createStore } from 'redux';
import wordsApp from './reducers';
import { addWord, editWord, deleteWord } from './actions';

//let store = createStore(wordsApp);

// store.subscribe(() => {
//     console.log(store.getState());
// });




class Words extends Component {
    constructor() {
        super();

        this.store = createStore(wordsApp);
        // set initial time:
        this.state = {
            words: []
        };
    }

    componentDidMount() {
        this.store.dispatch(addWord('incredible', 'невероятный'));
        this.store.dispatch(addWord('imagination', 'воображение'));
        this.setState(this.store.getState());

        setTimeout(() => {
            this.store.dispatch(addWord('promotion', 'повышение'));
            this.store.dispatch(editWord(1, 'pedestrian', 'пешеход'));
            this.setState(this.store.getState());
        }, 3000);
    }

    render(props, state) {
        const listItems = state.words.map((word) =>
            <li>{word.text_en}: {word.text_ru}</li>
        );
        return(
            <ul>
                {listItems}
            </ul>
        );
    }
}


render((
    <div id="words">
        <h3>Words</h3>
        <Words />
    </div>
), document.body);


/*let nextState = wordsApp(previousState.words, {
    type: 'ADD_WORD',
    text_en: 'incredible',
    text_ru: 'невероятный'
});*/

/*nextState = wordsApp(nextState.words, {
    type: 'ADD_WORD',
    text_en: 'imagination',
    text_ru: 'воображение'
});

console.log(nextState);

nextState = wordsApp(nextState.words, {
    type: 'EDIT_WORD',
    index: 1,
    text_en: 'imagination',
    text_ru: 'воображение, фантазия'
});*/



/*
import { Board, Team } from './board';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';


console.log(Observable);

let board = new Board();
board.draw();

console.log(new Team('Kittens'));


var game = {
    startGame: () => {
        console.log('Game started');
        //this.onNext('startGame');
    },
    onNext: (type) => {

    }
};

var start = new Subject();



var tick = Observable.from( start );
tick.subscribe(game.startGame);

start.subscribe(() => console.log('Sub 1'));
start.subscribe(() => console.log('Sub 2'));
start.subscribe(() => console.log('Sub 5'));

start.next();*/
