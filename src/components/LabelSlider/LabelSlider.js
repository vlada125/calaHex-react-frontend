import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "0 10px"
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: '1x',
  },
  {
    value: 10,
    label: '5x',
  },
  {
    value: 20,
    label: '10x',
  },
  {
    value: 30,
    label: '20x',
  },
  {
    value: 40,
    label: '35x',
  },
  {
    value: 50,
    label: '50x',
  },
  {
    value: 60,
    label: '100x',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default function LabelSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Typography id="discrete-slider-custom" gutterBottom>
        Custom marks
      </Typography> */}
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={10}
        max={60}
        valueLabelDisplay="off"
        marks={marks}
      />
    </div>
  );
}