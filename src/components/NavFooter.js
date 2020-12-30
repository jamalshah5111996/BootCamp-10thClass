import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
      marginTop:'15px',
      marginBottom:'15px',
  },
});

export default function NavFooter({screenConfig}) {
  const classes = useStyles();

  return (
    <BottomNavigation
      value={screenConfig[0]}
      onChange={(event, newValue) => {
        screenConfig[1](newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Global Stats" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Graph" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Country Stats" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
