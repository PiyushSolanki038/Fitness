import { Container, Typography, Grid, Card, CardContent, CardMedia, Box, Button, Chip, Rating } from '@mui/material';
import { FitnessCenter, Timer, Speed, AccessTime } from '@mui/icons-material';

const Workouts = () => {
  const workoutPrograms = [
    {
      title: 'Strength Training',
      description: 'Build muscle and increase strength with our comprehensive weight training program.',
      level: 'Intermediate',
      duration: '45-60 min',
      intensity: 'High',
      rating: 4.8,
      image: 'https://source.unsplash.com/800x600/?weightlifting'
    },
    {
      title: 'HIIT Cardio',
      description: 'Burn calories and improve endurance with high-intensity interval training.',
      level: 'Advanced',
      duration: '30-40 min',
      intensity: 'Very High',
      rating: 4.9,
      image: 'https://source.unsplash.com/800x600/?hiit-workout'
    },
    {
      title: 'Yoga Flow',
      description: 'Enhance flexibility and mindfulness with dynamic yoga sequences.',
      level: 'Beginner',
      duration: '50-60 min',
      intensity: 'Low',
      rating: 4.7,
      image: 'https://source.unsplash.com/800x600/?yoga'
    },
    {
      title: 'Core Strength',
      description: 'Develop a strong core with targeted ab and lower back exercises.',
      level: 'Intermediate',
      duration: '20-30 min',
      intensity: 'Medium',
      rating: 4.6,
      image: 'https://source.unsplash.com/800x600/?core-workout'
    }
  ];

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h1"
          sx={{
            mb: 4,
            fontWeight: 700,
            textAlign: 'center',
            color: 'primary.main'
          }}
        >
          Workout Programs
        </Typography>

        <Grid container spacing={4}>
          {workoutPrograms.map((program) => (
            <Grid item xs={12} md={6} key={program.title}>
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
                  height="240"
                  image={program.image}
                  alt={program.title}
                />
                <CardContent>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                      {program.title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Rating value={program.rating} precision={0.1} readOnly />
                      <Typography variant="body2" sx={{ ml: 1 }}>
                        ({program.rating})
                      </Typography>
                    </Box>
                  </Box>

                  <Typography color="text.secondary" paragraph>
                    {program.description}
                  </Typography>

                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                    <Chip
                      icon={<FitnessCenter />}
                      label={program.level}
                      color="primary"
                      variant="outlined"
                    />
                    <Chip
                      icon={<Timer />}
                      label={program.duration}
                      color="primary"
                      variant="outlined"
                    />
                    <Chip
                      icon={<Speed />}
                      label={`Intensity: ${program.intensity}`}
                      color="primary"
                      variant="outlined"
                    />
                  </Box>

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 2,
                      borderRadius: 2,
                      textTransform: 'none',
                      py: 1.5,
                    }}
                  >
                    Start Workout
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

export default Workouts;