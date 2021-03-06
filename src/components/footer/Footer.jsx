import React from 'react'
import { Link, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import styles from './Footer.module.css';


const Footer = () => {

  return (
    <footer className="footer">
    <div className={styles.footer}>
      <Typography align="center">Willyam Santos ©
       </Typography>
        <Link href="https://github.com/willyamsann">     <GitHubIcon fontSize="small"/> Github: </Link>/
  
        <Link href="https://www.linkedin.com/in/willyamsantos/">     <LinkedInIcon fontSize="small"/> Linkedin: </Link>
        
  </div>
  </footer>
    )
  }
export default Footer;