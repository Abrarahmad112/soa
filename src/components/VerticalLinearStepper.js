import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Select Region', 'Select warehouse', 'Select Date'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
        {/* <h1>select region</h1> */}
        <select class="form-select form-select-lg mb-3 shadow-sm p-3 mb-5 bg-white rounded" aria-label=".form-select-lg example">
            <option selected>Select Region</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
      </>
      );
    case 1:
      return (
        
        <>
          {/* <h1>select wherehouse</h1> */}
          <select class="form-select form-select-lg mb-3 shadow-sm p-3 mb-5 bg-white rounded" aria-label=".form-select-lg example">
            <option selected>Select warehouse</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

        </>
      );
    case 2:
      return (
        <>
      
        <div className="container">
          <div className="row">
            <div className="col-md-4">
            <select class="form-select form-select-md mb-3 shadow-sm p-3 mb-5 bg-white rounded" aria-label=".form-select-lg example">
            <option selected>Month</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
            </div>
            <div className="col-md-4">
            <select class="form-select form-select-md mb-3 shadow-sm p-3 mb-5 bg-white rounded" aria-label=".form-select-lg example">
            <option selected>Quarter</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
            </div>
            <div className="col-md-4">
            <select class="form-select form-select-md mb-3 shadow-sm p-3 mb-5 bg-white rounded" aria-label=".form-select-lg example">
            <option selected>Days</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
            </div>
          </div>
        </div>
       
        </>
        
      );
    default:
      return 'Unknown step';
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography style={{color:"green", fontSize:"20px"}}>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button} variant="outlined" color="primary">
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}