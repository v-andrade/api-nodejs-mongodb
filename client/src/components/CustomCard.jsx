import React from 'react';
import styles from '../styles/Card.module.css';
import { ArrowForward, Star } from '@mui/icons-material';

function CustomCard({ 
  title, 
  subtitle, 
  content, 
  icon, 
  onPrimaryAction, 
  onSecondaryAction,
  primaryActionText = 'Saiba Mais',
  secondaryActionText = 'Compartilhar',
  isDark = false,
  animated = true 
}) {
  const cardClasses = [
    styles.card,
    isDark && styles.cardDark,
    animated && styles.animated
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses}>
      <div className={styles.cardHeader}>
        <div className={styles.cardIcon}>
          {icon || <Star />}
        </div>
        <div>
          <h3 className={styles.cardTitle}>{title}</h3>
          {subtitle && <p className={styles.cardSubtitle}>{subtitle}</p>}
        </div>
      </div>
      
      <div className={styles.cardContent}>
        {content}
      </div>
      
      <div className={styles.cardActions}>
        <button 
          className={`${styles.cardButton} ${styles.primaryButton}`}
          onClick={onPrimaryAction}
        >
          {primaryActionText}
          <ArrowForward fontSize="small" />
        </button>
        
        <button 
          className={`${styles.cardButton} ${styles.secondaryButton}`}
          onClick={onSecondaryAction}
        >
          {secondaryActionText}
        </button>
      </div>
    </div>
  );
}

export default CustomCard;