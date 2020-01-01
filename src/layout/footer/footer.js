import React from 'react';
import FooterSection from './footerSection/footerSection';
import classes from './styles/footer.css';
import globalClasses from '../../shared/styles/globalClasses/globalClasses.css';
import cutter from '../../assets/cutter.svg';

const footer = props => {
    return (
        <footer className={classes.Footer}>
            <div className={globalClasses.container}>
                <img className={classes.FooterCutterImg} src={cutter} alt="" />
                <FooterSection
                    title="Hours"
                    lines={["Mon – Thu , 7 am – midnight", "Fri , 7 am – 4 am", "Sat , 8 am – 4 am", "Sun , 8 am – midnight"]} />

                <FooterSection
                    title="Location"
                    lines={["341 Lenox Avenue", "NW CORNER OF 127TH STREET", "New York, NY 10027"]} />

                <FooterSection
                    title="Contact"
                    lines={["(212) 866-9700", "Info@KatGary.com"]} />

            </div>
        </footer>
    )
}

export default footer;