import { cleanStateNotifications } from '@sp-store/Notifications/Notifications';
import { useAppSelector, useAppDispatch } from '@store';
import { App } from 'antd';
import { ReactNode, useEffect } from 'react';

// Global modal to handle errors and notification on the application
// It usses App.useApp() from antdesign and redux to keep track of the global state
const UseNotificationHandler = ({ children }: { children: ReactNode }) => {
  const { success, error, warning } = useAppSelector(
    (state) => state.Notifications
  );
  const { message, notification } = App.useApp();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (success?.value) {
      message.success(success?.value);
      dispatch(cleanStateNotifications('success'));
    }
    if (error?.value || warning?.value) {
      notification.info({
        message: 'Error',
        description: error.value ?? warning.value,
        placement: 'topRight',
      });
      dispatch(cleanStateNotifications(error ? 'error' : 'warning'));
    }
  }, [dispatch, error, message, notification, success?.value, warning]);

  return <>{children}</>;
};

export default UseNotificationHandler;
