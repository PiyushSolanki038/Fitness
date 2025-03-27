import { Container, Typography, Grid, Card, CardContent, Box, Button, CardMedia } from '@mui/material';
import { FitnessCenter, Restaurant, Timeline, Person } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Personalized Workouts',
      description: 'Access custom workout plans tailored to your fitness goals and experience level.',
      icon: <FitnessCenter sx={{ fontSize: 40 }} />,
      path: '/workouts',
      image: 'https://source.unsplash.com/800x600/?fitness'
    },
    {
      title: 'Nutrition Planning',
      description: 'Get detailed meal plans and track your daily nutrition intake with our advanced tools.',
      icon: <Restaurant sx={{ fontSize: 40 }} />,
      path: '/nutrition',
      image: 'https://source.unsplash.com/800x600/?healthy-food'
    },
    {
      title: 'Progress Tracking',
      description: 'Monitor your fitness journey with detailed analytics and progress reports.',
      icon: <Timeline sx={{ fontSize: 40 }} />,
      path: '/progress',
      image: 'https://source.unsplash.com/800x600/?workout-progress'
    }
  ];

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', pt: 4, pb: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
            }}
          >
            Transform Your Fitness Journey
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            Your personal fitness companion for a healthier lifestyle
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/profile')}
            sx={{
              borderRadius: 2,
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              textTransform: 'none',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            Get Started
          </Button>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature) => (
            <Grid item xs={12} md={4} key={feature.title}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={feature.image}
                  alt={feature.title}
                />
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Box sx={{ mb: 2, color: 'primary.main' }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary" paragraph>
                    {feature.description}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => navigate(feature.path)}
                    sx={{
                      mt: 2,
                      borderRadius: 2,
                      textTransform: 'none',
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;