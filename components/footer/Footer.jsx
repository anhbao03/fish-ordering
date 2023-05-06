import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer className={classes.footer}>
    <div className={classes.wrapper}>
      <div className={classes.col}>
        <h2>About the App</h2>
        <p>
        The company itself is a very successful company. he does not bother to refuse, he spares himself because they forsake other duties with a great desire for labor and that! Guilt is the result of bliss.
        </p>
      </div>
      <div className={classes.col}>
        <h2>Contacts</h2>
        <span>Phone 0773644123</span>
        <span>FaceBook: https://www.facebook.com/eckbao</span>
        <span>GitHub: https://github.com/anhbao03</span>
      </div>
      <div className={classes.col}>
        <h2>Location</h2>
        <span>Continent: Asia</span>
        <span>Country: VietNam</span>
        <span>Current Location: AnyWhere</span>
      </div>
    </div>
  </footer>
  )
}

export default Footer
