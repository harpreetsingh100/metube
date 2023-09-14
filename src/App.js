import Header from "./components/Header";
import Body from "./components/Body";
import WatchPage from "./components/WatchPage";
import { Provider } from "react-redux";
import store from "./redux/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={appRouter}>
          <Body />
        </RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
