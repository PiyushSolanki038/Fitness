import { useState } from 'react';
import {
  Box, Container, Grid, Typography, Card, CardContent,
  Avatar, Button, TextField, Divider
} from '@mui/material';
import { Edit, Save } from '@mui/icons-material';

const Profile = () => {
  const [editing, setEditing] = useState(false);

  return (
    <Box sx={{ 
      minHeight: '100vh',
      py: 6,
      background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 50%, #0277bd 100%)',
    }}>
      <Container maxWidth="lg">
        <Card sx={{ 
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: 3,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}>
          <CardContent>
            <Box sx={{ 
              display: 'flex',
              alignItems: 'center',
              mb: 4
            }}>
              <Avatar
                sx={{ 
                  width: 120,
                  height: 120,
                  mr: 3,
                  border: '4px solid rgba(255, 255, 255, 0.2)'
                }}
              />
              <Box>
                <Typography variant="h4" sx={{ color: '#fff', mb: 1 }}>
                  John Doe
                </Typography>
                <Button
                  startIcon={editing ? <Save /> : <Edit />}
                  onClick={() => setEditing(!editing)}
                  sx={{ 
                    color: '#fff',
                    borderColor: 'rgba(255, 255, 255, 0.3)'
                  }}
                  variant="outlined"
                >
                  {editing ? 'Save Changes' : 'Edit Profile'}
                </Button>
              </Box>
            </Box>

            <Grid container spacing={3}>
              {/* Personal Information */}
              <Grid item xs={12}>
                <Typography variant="h6" sx={{ color: '#fff', mb: 2 }}>
                  Personal Information
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      disabled={!editing}
                      defaultValue="John"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: '#fff',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          '& fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.2)',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(255, 255, 255, 0.7)',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      disabled={!editing}
                      defaultValue="Doe"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: '#fff',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          '& fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.2)',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(255, 255, 255, 0.7)',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      disabled={!editing}
                      defaultValue="john.doe@example.com"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: '#fff',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          '& fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.2)',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(255, 255, 255, 0.7)',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone"
                      disabled={!editing}
                      defaultValue="+1 234 567 8900"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: '#fff',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          '& fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.2)',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(255, 255, 255, 0.7)',
                        },
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
              </Grid>

              {/* Fitness Information */}
              <Grid item xs={12}>
                <Typography variant="h6" sx={{ color: '#fff', mb: 2 }}>
                  Fitness Information
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="Height"
                      disabled={!editing}
                      defaultValue="175"
                      InputProps={{
                        endAdornment: <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>cm</Typography>,
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: '#fff',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          '& fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.2)',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(255, 255, 255, 0.7)',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="Weight"
                      disabled={!editing}
                      defaultValue="70"
                      InputProps={{
                        endAdornment: <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>kg</Typography>,
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: '#fff',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          '& fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.2)',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(255, 255, 255, 0.7)',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="Age"
                      disabled={!editing}
                      defaultValue="28"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: '#fff',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          '& fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.2)',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(255, 255, 255, 0.7)',
                        },
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
              </Grid>

              {/* Fitness Goals */}
              <Grid item xs={12}>
                <Typography variant="h6" sx={{ color: '#fff', mb: 2 }}>
                  Fitness Goals
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Your fitness goals"
                  disabled={!editing}
                  defaultValue="I want to improve my overall fitness and build lean muscle mass. My target is to achieve better endurance and strength while maintaining a healthy lifestyle."
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: '#fff',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgba(255, 255, 255, 0.7)',
                    },
                  }}
                />
              </Grid>

              {/* Workout Preferences */}
              <Grid item xs={12}>
                <Typography variant="h6" sx={{ color: '#fff', mb: 2 }}>
                  Workout Preferences
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Preferred Workout Time"
                      disabled={!editing}
                      defaultValue="Morning (6 AM - 9 AM)"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: '#fff',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.2)' },
                        },
                        '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Workout Frequency"
                      disabled={!editing}
                      defaultValue="4-5 times per week"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: '#fff',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.2)' },
                        },
                        '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
              </Grid>

              {/* Membership Details */}
              <Grid item xs={12}>
                <Typography variant="h6" sx={{ color: '#fff', mb: 2 }}>
                  Membership Details
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Membership Type"
                      disabled
                      defaultValue="Premium"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: '#fff',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.2)' },
                        },
                        '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Valid Until"
                      disabled
                      defaultValue="31 Dec 2024"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: '#fff',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.2)' },
                        },
                        '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
              </Grid>

              {/* Emergency Contact */}
              <Grid item xs={12}>
                <Typography variant="h6" sx={{ color: '#fff', mb: 2 }}>
                  Emergency Contact
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Contact Name"
                      disabled={!editing}
                      defaultValue="Jane Doe"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: '#fff',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.2)' },
                        },
                        '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Emergency Phone"
                      disabled={!editing}
                      defaultValue="+1 234 567 8901"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: '#fff',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.2)' },
                        },
                        '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Profile;