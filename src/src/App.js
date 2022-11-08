
import { BrowserRouter } from 'react-router-dom';
import Pathing from './data/routes/routes';
import { Box } from '@mui/system';

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{m:1}}>
        <Pathing/>
      </Box>
    </BrowserRouter>
  );
}

export default App;
