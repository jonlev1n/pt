import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
// redux
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import thunk from "redux-thunk";
import pt from "./reducers";
// exercises component
import { Exercises } from "./components/Exercises";
import { Exercise } from "./components/Exercise";
// bootstrap
import "bootstrap/dist/css/bootstrap.css";

// redux setup
const persistConfig = {
	key: "root",
	storage,
};
const persistedReducer = persistReducer(persistConfig, pt);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	persistedReducer,
	composeEnhancers(applyMiddleware(thunk) /* preloadedState, */)
);
const persistor = persistStore(store);

export const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<Routes>
						<Route exact path={"*"} element={<Navigate to="/exercises" />} />
						<Route exact path={"/exercises"} element={<Exercises />} />
						<Route exact path={"/exercises/:uuid"} element={<Exercise />} />
					</Routes>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	);
};

export default App;
