import './App.css';
import {Header} from  "./components/Header.js";
import {Balance} from "./components/Balance.js";
import {IncomeExpenses} from"./components/IncomeExpenses.js";
import {TransactionList} from "./components/TransactionList.js";
import {Form} from"./components/Form.js";
import {GlobalProvider} from "./context/GlobalState.js";

function App() {
  return (
    <div>
      <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <Form/>
      </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
