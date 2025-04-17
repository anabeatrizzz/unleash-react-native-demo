import React from 'react';

type Context = {
  hasNotification: boolean;
  setHasNotification: React.Dispatch<React.SetStateAction<boolean>>;
  hasNotificationPending: boolean;
  setHasNotificationPending: React.Dispatch<React.SetStateAction<boolean>>;
  hasNotificationAppointment: boolean;
  setHasNotificationAppointment: React.Dispatch<React.SetStateAction<boolean>>;
  isReadyHome: boolean;
  setIsReadyHome: React.Dispatch<React.SetStateAction<boolean>>;
  dataNotification: any;
  setDataNotification: React.Dispatch<React.SetStateAction<any>>;
  cleanUpNotificationsContext: () => void;
};

const NotificationsContext = React.createContext<Context>({} as Context);

export default NotificationsContext;
