import {Router} from './routes/Router';
import {AppwriteProvider} from './services/appwrite/AppwriteContext';

const App = () => {
  return (
    <AppwriteProvider>
      <Router />
    </AppwriteProvider>
  );
};

export default App;
