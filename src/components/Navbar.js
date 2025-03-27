import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Fitness App
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/workouts">Workouts</Button>
          <Button color="inherit" component={Link} to="/nutrition">Nutrition</Button>
          <Button color="inherit" component={Link} to="/progress">Progress</Button>
          <Button color="inherit" component={Link} to="/profile">Profile</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;