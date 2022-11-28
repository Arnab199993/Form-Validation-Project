import App from "./App";
import Validation from "./Components/Validation";

const routes=[
    {
      path: "/",
      element:<App/>
    },
    {
      path: "validation",
      element: <Validation/>
    },
  ];
  export default routes