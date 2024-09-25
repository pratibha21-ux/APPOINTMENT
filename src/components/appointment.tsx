import React from 'react';
import styles from './appointment.module.css';
import Image from 'next/image';

const Appointment: React.FC = () => {
    
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h1>MAKE AN <span>APPOINTMENT</span></h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className={styles.buttonGroup}>
          <button className={styles.button}>LOREM IPSUM</button>
          <button className={styles.button}>SIT DOLOR</button>
        </div>
        <div className={styles.iconSection}>
        <div className={styles.icon}>
          <Image src="/calendar-icon.svg" alt="calendar" width={60} height={60} />
          <p>Click Here</p>
        </div>
        <div className={styles.icon}>
          <Image src="/clock-icon.svg" alt="clock" width={60} height={60} />
          <p>Click Here</p>
        </div>
        <div className={styles.icon}>
          <Image src="/checklist-icon.svg" alt="checklist" width={60} height={60} />
          <p>Click Here</p>
        </div>
        <div className={styles.icon}>
          <Image src="/message-icon.svg" alt="message" width={60} height={60} />
          <p>Click Here</p>
        </div>
      </div>
      </div>

      <div className={styles.rightSide}>
        <h2>IT’S QUICK & EASY</h2>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email" />
          </div>
          <div className={styles.formGroup}>
            <input type="Number"  maxLength={10} placeholder="Phone"/>
            <input type="text" placeholder="Address" />
          </div>
          <div className={styles.formGroup}>
            <input type="Text" placeholder="City"/>
            <input type="Number" placeholder="Postal Code" />
          </div>
           {/* <input type="email" className={styles.input} placeholder="Email"/>
           <input type="Number" placeholder="Contact" className={styles.input}/> */}
          <textarea placeholder="Message" className={styles.textarea}></textarea>
          <div className={styles.formGroup}>
            <input className={styles.input} type="date" placeholder="Date " />
          </div>
          <button className={styles.submitButton}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
