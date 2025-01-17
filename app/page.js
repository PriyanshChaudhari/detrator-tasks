import { Container, Box } from "@mui/material";
import Navbar from "./components/Navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <Container>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'center', alignItems: 'center', gap: 2, marginY: 1}}>
          <Box sx={{ flex: { xs: '1 1 auto', sm: '2 7 auto' }, display: { xs: 'none', sm: 'block' } }} />
          <Box sx={{ flex: { xs: '1 1 auto', sm: '3 7 auto' }, display: 'block', border: '1px solid #1976d2', backgroundColor: 'lightgray', height: { xs: '88vh', sm: '88vh' }, width: { xs: '100%', sm: 'auto' }, textAlign: 'center', alignContent: 'center', color: 'white'}}>
            Main Container
          </Box>
          <Box sx={{ flex: { xs: '0 0 auto', sm: '2 7 auto' }, display: { xs: 'none', sm: 'block' }, justifyContent: 'flex-end', border: '1px solid #1976d2', backgroundColor: 'lightgray', height: { xs: 'auto', sm: '80vh' }, textAlign: 'center', alignContent: 'center', color: 'white' }}>
            Secondary Container
          </Box>
        </Box>
      </Container>
    </>
  );
}