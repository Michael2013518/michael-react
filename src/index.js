import React from 'react';
import { render } from 'react-dom';

// include Components
import Hello from './Hello';
import ChatApp from './c01/ChatApp';
import CommentBox from './c02/CommentBox';
import TabSelector from './c02/TabSelector';
import StatefulTabSelector from './c02/StatefulTabSelector';
import Clock from './c03/Clock';
import SnapshotSample from './c04/SnapshotSample';
import DomDiff from './c05/DomDiff';
import AdvancedTabSelector from './c06/AdvancedTabSelector'
import LocaleSample from './c07/LocaleSample';
import PureRedux from './c11/PureRedux';
import Counter from './c12/Counter'
// import {Button} from "antd";

import "antd/dist/antd.css"
import "./App.css";
import './index.css';

import * as serviceWorker from './serviceWorker';

const routeMap = {
    hello: Hello,
    chat: ChatApp,
    commentbox: CommentBox,
    tabSelctor: TabSelector,
    stateTabSelector: StatefulTabSelector,
    clock: Clock,
    snapshot: SnapshotSample,
    domDiff: DomDiff,
    advancedSelector: AdvancedTabSelector,
    localSample: LocaleSample,
    pureRedux: PureRedux,
    counter: Counter
}

class App extends React.PureComponent{
    handleLinkClick = key => {
        window.history.pushState(null, "", `/#/${key}`);
        this.forceUpdate()
    }
    render() {
        const currentPage = document.location.hash.replace(/#\/?/, "");
        let CurrentPage = routeMap[currentPage] || Hello;
        return (
          <div className="App">
            <header className="App-header">
              <ul className="menu">
                  {
                      Object.keys(routeMap).map(key => (
                        <li
                          key = {key}
                          className = { key === currentPage ? "is-active" : ""}
                          style = {{ listStyle : "none"}}
                        >
                          <span 
                            className="link"
                            onClick = { () => this.handleLinkClick(key) }
                          >
                              {key}
                          </span>
                        </li>
                      ))
                  }
                  
              </ul>
              <div className="content">
                  <CurrentPage />
              </div>
            </header>
          </div>
        )
    }
}

render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
