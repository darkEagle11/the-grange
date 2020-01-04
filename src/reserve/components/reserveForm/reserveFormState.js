import { createInputConfig } from '../../../shared/util/input';
import classes from './styles/reserveForm.css';

const reserveForm = {
    name: {
        legend: "Name",
        inputGroupClass: classes.InputGroupName,
        inputs: {
            firstName: createInputConfig({
                label: "First Name"
            }),
            lastName: createInputConfig({
                label: "Last Name"
            }),
        }
    },
    phone: {
        legend: "Phone",
        inputGroupClass: classes.InputGroupPhone,
        inputs: {
            box1: createInputConfig({
                label: "(###)",
                elementConfig: {
                    maxLength: '3',
                }
            }),
            box2: createInputConfig({
                label: "###",
                elementConfig: {
                    maxLength: '3',
                }
            }),
            box3: createInputConfig({
                label: "####",
                elementConfig: {
                    maxLength: '4',
                }
            }),

        }
    },
    email: {
        legend: "Email",
        inputs: {
            email: createInputConfig({
                type: "email",
            })
        }
    },
    date: {
        legend: "Date",
        inputGroupClass: classes.InputGroupDate,
        inputs: {
            month: createInputConfig({
                label: "MM",
                elementConfig: {
                    maxLength: '2',
                }
            }),
            day: createInputConfig({
                label: "DD",
                elementConfig: {
                    maxLength: '2',
                }
            }),
            year: createInputConfig({
                label: "YYYY",
                elementConfig: {
                    maxLength: '4',
                }
            })

        }
    },
    time: {
        legend: "Time",
        inputGroupClass: classes.InputGroupTime,
        inputs: {
            hour: createInputConfig({
                label: "hour",
                elementConfig: {
                    maxLength: 2,
                }
            }),
            day: createInputConfig({
                label: "minute",
                elementConfig: {
                    maxLength: 2,
                }
            }),
            second: createInputConfig({
                label: "second",
                elementConfig: {
                    maxLength: 2,
                }
            }),
            daySection: createInputConfig({
                inputType: 'select',
                elementConfig: {
                    options: [
                        { value: 'am', displayValue: 'AM' },
                        { value: 'pm', displayValue: 'PM' }
                    ]
                }
            }),

        }
    },
    numOfGuest: {
        legend: "Number of Guest",
        inputs: {
            numOfGuest: createInputConfig({
                elementConfig: {
                    maxLength: 2,
                }
            })
        }
    },
    comments: {
        legend: "Comments",
        inputs: {
            comments: createInputConfig({
                inputType: 'textarea'
            })
        }
    },


}

export default reserveForm;