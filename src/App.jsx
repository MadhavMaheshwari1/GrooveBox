import './App.css'
import { Button, Card, CardContent, Typography } from '@mui/material';

function App() {

  return (
    <div style={{ padding: '20px' }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            Hello, Material UI!
          </Typography>
          <Typography variant="body2">
            This is an example of a card using Material UI components.
          </Typography>
        </CardContent>
      </Card>
      <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
        Click Me
      </Button>
    </div>
  )
}

export default App
