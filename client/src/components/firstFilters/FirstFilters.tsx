import { Button, Grid } from "@mui/material";

export const FirstFilters = () => {
  return (
    <Grid container spacing={2}>
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Button variant="contained" sx={{ m: 2 }}>
          Alquilar
        </Button>
        <Button variant="contained" sx={{ m: 2 }}>
          Comprar
        </Button>
        <Button variant="contained" sx={{ m: 2 }}>
          Vender/rentar
        </Button>
        <Button variant="contained" sx={{ m: 2 }}>
          Tasar
        </Button>
        <Button variant="contained" sx={{ m: 2 }}>
          Proyectar
        </Button>
      </Grid>
    </Grid>
  );
};
