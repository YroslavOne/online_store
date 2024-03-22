import { MouseEvent } from "react";
import Button from "./components/Button/Button";

function App() {
	// const [counter, setCounter] = useState<number>(0);

	const addCounter = (e: MouseEvent) => {
		console.log(e);
	};

	return (
		<>
			<Button onClick={addCounter} appearence="big" style={{textTransform: "upercase"}}>Кнопка</Button>
		</>
	);
}

export default App;
