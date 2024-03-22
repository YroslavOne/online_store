import { MouseEvent } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Menu } from "./pages/Menu/Menu";
import { Cart } from "./pages/Cart/Cart";
import { Error } from "./pages/Error/Error";



function App() {
  // const [counter, setCounter] = useState<number>(0);

  const addCounter = (e: MouseEvent) => {
    console.log(e);
  };

  return (
    <>
      <Button onClick={addCounter} appearence="small">
        Кнопка
      </Button>
      <Button onClick={addCounter} appearence="big">
        Кнопка
      </Button>
      <Input placeholder= "Email" />
	  
    </>
  );
}

export default App;
