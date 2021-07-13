import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import UserStatistics from './UserStatistics';
import MovieStatistics from './MovieStatistics';
import RevenueStatistics from './RevenueStatistics';
import BookingHistory from './BookingHistory';
import TheMostBookedMovies from './TheMostBookedMovies';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #fff 30%, #03a89d 150%)',
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: "100vh",
  },
  tabs: {
    borderRight: `3px solid ${theme.palette.divider}`,
    
  },
 
}));

export default function DashboardPage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Thống Kê Người Dùng" {...a11yProps(0)}  />
        <Tab label="Thống Kê Phim" {...a11yProps(1)} />
        <Tab label="Thống Kê Doanh Thu" {...a11yProps(2)} />
        <Tab label="Lịch Sử Đặt Vé" {...a11yProps(3)} />
        <Tab label="Top phim được đặt vé nhiều nhất" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
          <UserStatistics/>
      </TabPanel>
      <TabPanel value={value} index={1}>
         <MovieStatistics/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <RevenueStatistics/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <BookingHistory/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <TheMostBookedMovies/>
      </TabPanel>
    </div>
  );
}