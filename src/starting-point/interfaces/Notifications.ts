interface INotificationData {
  componentName: string;
  value: string;
}

interface IPayloadUpdateStateNotification {
  componentName: string;
  value: string;
  stateName: keyof IErrorTracker;
}

interface IErrorTrackerData {
  [key: string]: string;
}
type IErrorTracker = {
  [key in 'error' | 'warning' | 'success']: IErrorTrackerData;
};

interface InitialStateNotifications {
  [key: string]: INotificationData | object;
  errorTracker: IErrorTracker;
}

export type {
  InitialStateNotifications,
  INotificationData,
  IPayloadUpdateStateNotification,
  IErrorTracker,
  IErrorTrackerData,
};
