import { NotificationsProvider } from './Notifications';

type GlobalContextProps = {
  children: JSX.Element | JSX.Element[];
};

const GlobalContext = ({ children }: GlobalContextProps) => {
  return (
    <NotificationsProvider>{children}</NotificationsProvider>
  )
}

export default GlobalContext