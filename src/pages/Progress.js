import { useState, useEffect } from 'react';
import { 
  Container, Typography, Grid, Card, CardContent, Box, Button, 
  CircularProgress, Chip, IconButton, Menu, MenuItem, Divider,
  LinearProgress, Avatar, Badge 
} from '@mui/material';
import { 
  FitnessCenter, Scale, TrendingUp, Timer, LocalFireDepartment,
  MoreVert, EmojiEvents, AddCircleOutline, Share, DirectionsRun,
  MonitorHeart, WhatshotOutlined
} from '@mui/icons-material';

const Progress = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [caloriesBurned, setCaloriesBurned] = useState(0);
  const [heartRate, setHeartRate] = useState(70);
  const [steps, setSteps] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      setCaloriesBurned(prev => prev + Math.random() * 2);
      setHeartRate(prev => Math.max(70, Math.min(150, prev + (Math.random() - 0.5) * 5)));
      setSteps(prev => prev + Math.floor(Math.random() * 3));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Add new stats section
  const dailyStats = [
    {
      icon: <DirectionsRun sx={{ color: '#2196F3' }} />,
      label: 'Steps',
      value: steps.toLocaleString(),
      target: '10,000',
      progress: (steps / 10000) * 100
    },
    {
      icon: <MonitorHeart sx={{ color: '#ff4444' }} />,
      label: 'Heart Rate',
      value: `${Math.round(heartRate)} BPM`,
      status: heartRate > 120 ? 'High' : 'Normal'
    },
    {
      icon: <WhatshotOutlined sx={{ color: '#ff9800' }} />,
      label: 'Active Minutes',
      value: Math.floor(caloriesBurned / 10),
      target: '30',
      progress: (Math.floor(caloriesBurned / 10) / 30) * 100
    }
  ];

  const achievements = [
    {
      title: 'Daily Goal',
      value: Math.min(caloriesBurned, 500),
      total: 500,
      unit: 'cal',
      icon: <LocalFireDepartment sx={{ color: '#ff4444' }} />,
    },
    {
      title: 'Weekly Streak',
      value: 15,
      total: 30,
      unit: 'days',
      icon: <FitnessCenter sx={{ color: '#2196F3' }} />,
    },
    {
      title: 'Monthly Target',
      value: 80,
      total: 100,
      unit: '%',
      icon: <TrendingUp sx={{ color: '#4CAF50' }} />,
    },
  ];

  const recentWorkouts = [
    {
      date: currentTime.toLocaleDateString(),
      type: 'Active Session',
      duration: `${Math.floor(caloriesBurned / 10)} min`,
      intensity: 'Medium',
      calories: Math.floor(caloriesBurned),
      inProgress: true
    },
    {
      date: '2024-01-27',
      type: 'HIIT Cardio',
      duration: '30 min',
      intensity: 'Very High',
      calories: 400,
    },
    {
      date: '2024-01-25',
      type: 'Yoga Flow',
      duration: '60 min',
      intensity: 'Medium',
      calories: 200,
    },
  ];

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ 
      minHeight: '100vh',
      py: 6,
      background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 50%, #0277bd 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background elements */}
      <Box sx={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(33, 150, 243, 0.2) 0%, rgba(33, 150, 243, 0) 70%)',
        animation: 'pulse 15s infinite',
        '@keyframes pulse': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        }
      }} />
      <Box sx={{
        position: 'absolute',
        bottom: '-15%',
        left: '-10%',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(3, 169, 244, 0.1) 0%, rgba(3, 169, 244, 0) 60%)',
        animation: 'float 20s infinite',
        '@keyframes float': {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-30px)' },
          '100%': { transform: 'translateY(0)' },
        }
      }} />

      <Container maxWidth="lg">
        {/* Header with enhanced styling */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          mb: 4,
          p: 3,
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          borderRadius: 3,
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(45deg, #fff 30%, #e3f2fd 90%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
            }}
          >
            Fitness Dashboard
          </Typography>
          <Box>
            <Chip
              icon={<Timer sx={{ color: '#fff' }} />}
              label={currentTime.toLocaleTimeString()}
              sx={{ 
                mr: 2,
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(5px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#fff',
                '& .MuiChip-icon': { color: '#fff' }
              }}
            />
            <IconButton 
              onClick={handleMenuClick}
              sx={{ 
                color: '#fff',
                '&:hover': { 
                  background: 'rgba(255, 255, 255, 0.1)',
                  transform: 'rotate(90deg)',
                  transition: 'all 0.3s ease'
                }
              }}
            >
              <MoreVert />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  backdropFilter: 'blur(10px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  '& .MuiMenuItem-root': {
                    color: '#fff',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }
                  }
                }
              }}
            >
              {/* ... Menu items remain the same ... */}
            </Menu>
          </Box>
        </Box>

        {/* Daily Stats Section */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {dailyStats.map((stat, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ 
                p: 3,
                display: 'flex',
                alignItems: 'center',
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 3,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }
              }}>
                <Avatar sx={{ 
                  width: 64,
                  height: 64,
                  mr: 2,
                  background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.2) 100%)',
                  border: '2px solid rgba(255,255,255,0.2)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}>
                  {stat.icon}
                </Avatar>
                <Box>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 0.5 }}>
                    {stat.label}
                  </Typography>
                  <Typography variant="h5" sx={{ color: '#fff', fontWeight: 600, mb: 1 }}>
                    {stat.value}
                  </Typography>
                  {stat.progress !== undefined && (
                    <LinearProgress 
                      variant="determinate" 
                      value={stat.progress}
                      sx={{ 
                        height: 6, 
                        width: 120,
                        borderRadius: 3,
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        '& .MuiLinearProgress-bar': {
                          background: 'linear-gradient(90deg, #2196F3 0%, #21CBF3 100%)',
                          borderRadius: 3,
                        }
                      }}
                    />
                  )}
                  {stat.status && (
                    <Chip 
                      label={stat.status}
                      size="small"
                      sx={{
                        mt: 1,
                        background: stat.status === 'High' ? 
                          'linear-gradient(45deg, #ff4444 30%, #ff8a80 90%)' : 
                          'linear-gradient(45deg, #4CAF50 30%, #81C784 90%)',
                        color: '#fff',
                        fontWeight: 500,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                      }}
                    />
                  )}
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Achievement Cards */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {achievements.map((achievement) => (
            <Grid item xs={12} md={4} key={achievement.title}>
              <Card sx={{ 
                height: '100%',
                textAlign: 'center',
                p: 3,
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 3,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }
              }}>
                <Box sx={{ position: 'relative', display: 'inline-flex', mb: 3 }}>
                  <CircularProgress
                    variant="determinate"
                    value={(achievement.value / achievement.total) * 100}
                    size={120}
                    thickness={4}
                    sx={{
                      color: 'primary.main',
                      '& .MuiCircularProgress-circle': {
                        strokeLinecap: 'round',
                        stroke: 'url(#gradient)',
                      }
                    }}
                  />
                  <svg width="0" height="0">
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#2196F3" />
                        <stop offset="100%" stopColor="#21CBF3" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <Box sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {achievement.icon}
                  </Box>
                </Box>
                <Typography variant="h6" sx={{ color: '#fff', mb: 1 }}>
                  {achievement.title}
                </Typography>
                <Typography variant="h4" sx={{ 
                  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  mb: 1 
                }}>
                  {achievement.value}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  of {achievement.total} {achievement.unit}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Recent Workouts */}
        <Card sx={{ 
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: 3,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}>
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              mb: 4 
            }}>
              <Typography variant="h5" sx={{ color: '#fff' }}>
                Workout History
              </Typography>
              <Button
                variant="contained"
                startIcon={<AddCircleOutline />}
                sx={{ 
                  borderRadius: 2,
                  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                  boxShadow: '0 3px 5px 2px rgba(33, 150, 243, .3)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #1976D2 30%, #0D47A1 90%)',
                  }
                }}
              >
                New Workout
              </Button>
            </Box>
            <Grid container spacing={2}>
              {recentWorkouts.map((workout, index) => (
                <Grid item xs={12} key={index}>
                  <Card sx={{
                    backdropFilter: 'blur(10px)',
                    backgroundColor: workout.inProgress ? 
                      'rgba(33, 150, 243, 0.15)' : 
                      'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateX(8px)',
                      backgroundColor: workout.inProgress ? 
                        'rgba(33, 150, 243, 0.2)' : 
                        'rgba(255, 255, 255, 0.1)',
                    }
                  }}>
                    <CardContent>
                      <Grid container alignItems="center" spacing={2}>
                        <Grid item xs={12} sm={3}>
                          <Typography sx={{ 
                            color: '#fff',
                            fontWeight: workout.inProgress ? 600 : 400 
                          }}>
                            {workout.date}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                          <Typography sx={{ 
                            color: workout.inProgress ? '#2196F3' : '#fff',
                            fontWeight: workout.inProgress ? 600 : 400 
                          }}>
                            {workout.type}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                          <Typography sx={{ color: '#fff' }}>
                            <Timer sx={{ 
                              fontSize: 16, 
                              mr: 1, 
                              verticalAlign: 'text-bottom',
                              color: 'rgba(255,255,255,0.7)'
                            }}/>
                            {workout.duration}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                          <Chip 
                            label={workout.intensity}
                            size="small"
                            sx={{
                              background: workout.inProgress ? 
                                'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)' :
                                'rgba(255,255,255,0.1)',
                              color: '#fff',
                              border: '1px solid rgba(255,255,255,0.2)'
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                          <Typography sx={{ 
                            display: 'flex', 
                            alignItems: 'center',
                            color: '#fff'
                          }}>
                            <LocalFireDepartment sx={{ 
                              mr: 1, 
                              color: '#ff4444'
                            }} />
                            {workout.calories} cal
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Progress;