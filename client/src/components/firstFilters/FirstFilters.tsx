import { Button, Grid, useTheme, useMediaQuery } from "@mui/material";

export const FirstFilters = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Grid container spacing={2} sx={{ display: "flex" }}>
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: isMediumScreen ? "row" : "column",
        }}
      >
        <Button variant="contained" sx={{ m: 2 }}>
          Alquilar
        </Button>
        <Button variant="contained" sx={{ m: 2 }}>
          Comprar
        </Button>
        <Button variant="contained" sx={{ m: 2 }}>
          Vender
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
