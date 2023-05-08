import { useLoaderData } from "react-router-dom";
import ShowAllCofee from "./components/ShowAllCofee";

const App = () => {
  const loadedCoffee = useLoaderData();
  return (
    <>
      <h1 className="text-5xl">Coffe Store</h1>
      <ShowAllCofee loadedCoffee={loadedCoffee} />
    </>
  );
};

export default App;