// third-party
import { configureStore } from '@reduxjs/toolkit';

// project import
import reducers from './slices';

// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //

const store = configureStore({
    reducer: reducers,
    devTools: true,
});

const { dispatch } = store;
export { store, dispatch };
