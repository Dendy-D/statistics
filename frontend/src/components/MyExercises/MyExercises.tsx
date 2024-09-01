import PlusIcon from '../../assets/icons/plus.svg';
import classes from './MyExercises.module.scss';

const MyExercises = () => {
  return (
    <div className={classes.component}>
      <div className={classes.rightPart}>
        <h2 className={classes.title}>My exercises</h2>
        <button className={classes.addExercise}>
          <PlusIcon />
        </button>
      </div>
    </div>
  );
};

export default MyExercises;
