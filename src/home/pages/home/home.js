import React, { Component } from 'react';
import classes from './styles/home.css';
import globalClasses from '../../../shared/styles/globalClasses/globalClasses.css';

import Menu from '../../components/menu/menu';

import cutter from '../../../assets/cutter.svg';
import corneredBorder from '../../../assets/corner-border.png';



class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <header className={classes.Header}>
                    <div className={[globalClasses.container, classes.HeaderContent].join(' ')}>
                        <h1>The<br /> Grange</h1>
                        <div className={classes.HeaderButtons}>
                            <button className={classes.ButtonOrder}>Order Now</button>
                            <button className={classes.ButtonReserve}>Reserve</button>
                        </div>
                    </div>
                    <img className={classes.HeaderCutterImg} src={cutter} alt="" />
                </header>

                <section className={classes.SectionAbout}>
                    <div className={[globalClasses.container, classes.AboutContent].join(' ')}>
                        <p className={classes.Text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
                        <img className={classes.TextBorder} src={corneredBorder} alt="" />
                    </div>
                </section>

                <section className={classes.SectionMenus}>
                    <Menu name="Breakfast" menuStyles={classes.Breakfast} bgImg={"https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"} />
                    <Menu name="Lunch" menuStyles={classes.Lunch} reverse bgImg={"https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"} />
                    <Menu name="Dinner" menuStyles={classes.Dinner} bgImg={"https://images.unsplash.com/photo-1534070189982-818bb5622474?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"} />
                    <Menu name="Drinks" menuStyles={classes.Drinks} reverse bgImg={"https://images.unsplash.com/photo-1516600164266-f3b8166ae679?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"} />
                </section>
            </React.Fragment>
        )
    }
}

export default Home;