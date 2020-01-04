import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

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
                    <div className={[globalClasses.Container].join(' ')}>
                        <div className={classes.HeaderContent}>
                            <h1>The<br /> Grange</h1>
                            <div className={classes.HeaderButtons}>
                                <button
                                    className={classes.ButtonOrder}
                                    onClick={() => this.props.history.push('/menu/lunch')}>Order Now</button>
                                <button
                                    className={classes.ButtonReserve}
                                    onClick={() => this.props.history.push('/reserve')}>Reserve</button>
                            </div>
                        </div>
                    </div>
                    <img className={classes.HeaderCutterImg} src={cutter} alt="" />
                </header>

                <section className={classes.SectionAbout}>
                    <div className={[globalClasses.Container, classes.AboutContent].join(' ')}>
                        <p className={classes.Text}>Here at The Grange, we are committed to giving you the best experience possible. And a unqiue vibe that you will find nowhere else. All of our produce are grown locally, so we reduce our carbon footprint. In addition, we admire small startups to come to our cafe to dine </p>
                        <img className={classes.TextBorder} src={corneredBorder} alt="" />
                    </div>
                </section>

                <section className={classes.SectionMenus}>
                    <div className={classes.TopCutterBorder}></div>
                    <img className={classes.TopCutter} src={cutter} alt="" />
                    <div className={[globalClasses.ContainerMed, classes.MenuMedGroup].join(' ')}>
                        <Menu
                            name="Breakfast"
                            menuPath="/menu/breakfast"
                            bgImg={"https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"} />
                        <Menu
                            name="Lunch"
                            menuPath="/menu/lunch"
                            reverse
                            bgImg={"https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"} />
                        <Menu
                            name="Dinner"
                            menuPath="/menu/dinner"
                            bgImg={"https://images.unsplash.com/photo-1534070189982-818bb5622474?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"} />
                        <Menu name="Drinks"
                            menuPath="/menu/drinks"
                            reverse
                            bgImg={"https://images.unsplash.com/photo-1516600164266-f3b8166ae679?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"} />
                    </div>
                    <img className={classes.BottomCutter} src={cutter} alt="" />

                </section>
            </React.Fragment>
        )
    }
}

export default withRouter(Home);