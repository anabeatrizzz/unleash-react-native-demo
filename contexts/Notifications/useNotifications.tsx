import * as React from 'react';

import NotificationsContext from './Context';

const useNotifications = () => React.useContext(NotificationsContext);
export default useNotifications;
