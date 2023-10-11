import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  InitialStateNotifications,
  INotificationData,
  IPayloadUpdateStateNotification,
  IErrorTracker,
} from '@sp-interfaces';

const initialState: InitialStateNotifications = {
  error: {
    componentName: '',
    value: '',
  },
  succes: {
    componentName: '',
    value: '',
  },
  warning: {
    componentName: '',
    value: '',
  },
  errorTracker: {
    success: {},
    warning: {},
    error: {},
  },
};

const Notifications = createSlice({
  name: 'Notifications',
  initialState: initialState,
  reducers: {
    cleanStateNotifications: (
      state,
      { payload }: PayloadAction<'warning' | 'error' | 'success'>
    ) => {
      state[payload] = {
        componentName: '',
        value: '',
      };
    },
    handleUpdateState: (
      state,
      { payload }: PayloadAction<IPayloadUpdateStateNotification>
    ) => {
      if (
        state.errorTracker[payload.stateName][payload.componentName] ===
        payload.value
      ) {
        return;
      }
      state[payload.stateName] = {
        value: payload.value,
        componentName: payload.componentName,
      };
      state.errorTracker[payload.stateName] = {
        ...state.errorTracker[payload.stateName],
        [payload.componentName]: payload.value,
      };
    },
    setError: (state, { payload }: PayloadAction<INotificationData>) => {
      const newPayload = {
        ...payload,
        stateName: 'error' as keyof IErrorTracker,
      };
      Notifications.caseReducers.handleUpdateState(state, {
        payload: newPayload,
        type: 'Notifications/handleUpdateState',
      });
    },
    setWarning: (state, { payload }: PayloadAction<INotificationData>) => {
      const newPayload = {
        ...payload,
        stateName: 'warning' as keyof IErrorTracker,
      };
      Notifications.caseReducers.handleUpdateState(state, {
        payload: newPayload,
        type: 'Notifications/handleUpdateState',
      });
    },
    setSucces: (state, { payload }: PayloadAction<INotificationData>) => {
      const newPayload = {
        ...payload,
        stateName: 'success' as keyof IErrorTracker,
      };
      Notifications.caseReducers.handleUpdateState(state, {
        payload: newPayload,
        type: 'Notifications/handleUpdateState',
      });
    },
  },
});
export const { setError, setSucces, setWarning, cleanStateNotifications } =
  Notifications.actions;
export default Notifications.reducer;
