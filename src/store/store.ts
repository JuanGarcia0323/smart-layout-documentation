import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { logger } from 'redux-logger';
import Landing from './Landing';
import Notifications from '@sp-store/Notifications/Notifications';
import Header from '@sp-store/SideBar/index';

export const store = configureStore({
  reducer: combineReducers({ Landing, Notifications, Header }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
