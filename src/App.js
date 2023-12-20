import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

const App = () => {
  return (
    <div>
      <h1>These is my first react app</h1>
      <Stack direction='horizontal' gap={2}>
        <Button as='a' variant='primary'>
          Button as link
        </Button>
        <Button as='a' variant='success'>
          Button as link
        </Button>
        <Button as='a' variant='warning'>
          Button as link
        </Button>
      </Stack>
    </div>
  );
};

export default App;
