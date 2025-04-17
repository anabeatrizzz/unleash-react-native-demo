import React, { useState, ReactNode } from 'react';

import NotificationsContext from './Context';

const NotificationsProvider = ({ children }: { children: ReactNode }) => {
  const [hasNotification, setHasNotification] = useState<boolean>(false);
  const [hasNotificationPending, setHasNotificationPending] = useState<boolean>(false);
  const [hasNotificationAppointment, setHasNotificationAppointment] = useState<boolean>(false);
  const [isReadyHome, setIsReadyHome] = useState<boolean>(false);
  const [dataNotification, setDataNotification] = useState<any>();

  const cleanUpNotificationsContext = () => {
    setHasNotification(false);
    setHasNotificationPending(false);
    setIsReadyHome(false);
    setDataNotification(null);
  };

  return (
    <NotificationsContext.Provider
      value={{
        setHasNotification,
        hasNotification,
        hasNotificationPending,
        setHasNotificationPending,
        hasNotificationAppointment,
        setHasNotificationAppointment,
        isReadyHome,
        dataNotification,
        setIsReadyHome,
        setDataNotification,
        cleanUpNotificationsContext
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};

export default NotificationsProvider;
