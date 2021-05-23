import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CardComponent from './Card/Card';
import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Carregando...';
  }

  return (
    <div className={styles.container}>
        <Typography gutterBottom variant="h4" component="h2">Global</Typography>
        <br></br>
      <Grid container spacing={5} justify="center" >
        <CardComponent
          className={styles.infected}
          cardTitle="Infectados"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Numeros de casos ativo com COVID-19."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Recuperados"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Numeros de recuperados COVID-19."
        />
        <br></br>
        <CardComponent
          className={styles.deaths}
          cardTitle="Mortos"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Numeros de mortos COVID-19."
        />
      </Grid>
    </div>
  );
};

export default Info;
