import React from 'react';
import globalClasses from '../../../shared/styles/globalClasses/globalClasses.css';
import MenuItem from '../../../shared/components/menuItem/menuItem';
import classes from './styles/menuLayout.css';

const menuLayout = props => {
    let menuItems = props.items.map((item, index) => {
        return <MenuItem
            key={index}
            name={item.name}
            price={item.price}
            descrip={item.descrip} />
    })
    if (!props.items || props.items.length <= 0) {
        menuItems = <p className={classes.NoItems}>No Items</p>
    }
    return (
        <React.Fragment>
            <header className={[globalClasses.Container, classes.Header].join(' ')}>
                <h2 className={classes.HeaderTitle}>{props.pageName}</h2>
                <p className={classes.HeaderDescrip}>{props.pageDescrip}</p>
            </header>

            <section className={classes.MenuItems}>
                <div className={globalClasses.Container}>
                    {menuItems}
                </div>
            </section>
        </React.Fragment>
    )
}

export default menuLayout;