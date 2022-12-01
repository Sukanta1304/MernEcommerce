import userReducer from "./user/userReducer";
import {applyMiddleware, combineReducers, legacy_createStore,} from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist' 
import storage from 'redux-persist/lib/storage';
import { cartReducer } from "./cart/cartReducers";
import { profileReducer } from "./profile/profileReducers";

const persistConfig={
    key: 'ecommerce',
    storage,
}

const rootReducer= combineReducers({
    user: userReducer,
    cart:cartReducer,
    profile: profileReducer
});

const persister= persistReducer(persistConfig,rootReducer);


export const store= legacy_createStore(persister,applyMiddleware(thunk));
export const storePersister= persistStore(store);