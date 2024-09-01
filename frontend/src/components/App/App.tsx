import Header from '../Header';
import AppRouter from '../AppRouter/AppRouter';
import classes from './App.module.scss';

const App = () => {
  return (
    <div className={classes.component}>
      <Header />
      <main>
        <AppRouter />
      </main>
    </div>
  );
};

export default App;
