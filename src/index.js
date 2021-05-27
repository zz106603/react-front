import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from 'AppContext';
import { createStore } from 'redux';
import rootReducer from "redux/root-reducer";
import { Provider } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        {/* AppContext 전역 객체 사용 */}
        <AppContextProvider> 
          <App />
        </AppContextProvider>
      </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
