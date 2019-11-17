import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
  card: 
    {
        display:"center",
        height: '11.85vw',
    },
  title: {
    fontSize: 18,
  },
  content: {  
  }
});
var count = 0;
var a= false;
var b= false;
var c= false;
var d= false;

export default function SimpleCard() {
  const classes = useStyles();
  const [state, setState] = React.useState({
  });
  const handleChange = name => event => {
      if((a===false && event.target.value ==="checkedA")||(b===false && event.target.value==="checkedB")||(c===false && event.target.value ==="checkedC")||
      (d===false && event.target.value ==="checkedD"))
      {
          count = count +1;
      }          
       setState({ ...state, [name]: false });
       console.log(count)
       if(count ===4)
       {
           let message = {
               "message": "Congratulations, You finished all the challenges"
           }
           fetch("https://greendetective-1573928556612.appspot.com/message", {
               method: 'post',
               body : JSON.stringify(message),
               headers: { 'Content-Type': 'application/json' }
           }).then((response) => console.log(response));
       }
  };  
  
  return (
    <div>
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography className={classes.title} color="textSecondary" >
        <Checkbox
        checked={state.checkedA}
        onChange={handleChange('checkedA')}
        value="checkedA"
        inputProps={{
          'aria-label': 'secondary checkbox',
        }}
      />
            Use the public transit 3 times this week
        </Typography>
      </CardContent>
    </Card>
    <Card className={classes.card}>
        <CardContent className={classes.content}>
        <Typography className={classes.title} color="textSecondary" >
        <Checkbox
        checked={state.checkedB}
        onChange={handleChange('checkedB')}
        value="checkedB"
        inputProps={{
          'aria-label': 'secondary checkbox',
        }}
      />Walk 30 km this week
        </Typography>
      </CardContent>
    </Card>
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography className={classes.title} color="textSecondary" >
        <Checkbox
        checked={state.checkedC}
        onChange={handleChange('checkedC')}
        value="checkedC"
        inputProps={{
          'aria-label': 'secondary checkbox',
        }}
      />  Travel less than 200 miles this year
        </Typography>
      </CardContent>
    </Card>
    <Card className={classes.card}>
      <CardContent className={classes.content}>
      <Typography className={classes.title} color="textSecondary" >
      <Checkbox
        checked={state.checkedD}
        onChange={handleChange('checkedD')}
        value="checkedD"
        inputProps={{
          'aria-label': 'secondary checkbox',
        }}

      />Use public transit more than your vehicle
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}