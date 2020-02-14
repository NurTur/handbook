import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';
import TextInput from '../inputs/textInput.jsx';
import DatePicker from '../datepicker/datePicker.jsx';
import { columns, rows } from '../../pages/homePage/homePage.model'
import './modal.less';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
    },
}));

      
export default function SimpleModal({ columns, isOpenModal, closeModal }) {
    let NewGlobalUser = {};
    const classes = useStyles();
    const [open, setOpen] = React.useState(isOpenModal);   

    const handleClose = () => {
        NewGlobalUser = {};
        setOpen(false);
        closeModal(false);        
    };

    const handleInputEvent = (value, id) => {
        Object.assign(NewGlobalUser, {[id]:value});
    }

    const saveNewUser=()=> {
        console.log(Object.values(NewGlobalUser).length,'  ',columns.length-1);
        let count = 0;
        let copyOfUser = {...NewGlobalUser};

        for (let key in NewGlobalUser) {
            if (NewGlobalUser[key]) ++count;
            if (key === 'dateOfBirth') {
                copyOfUser[key]= `${String(NewGlobalUser[key]).slice(8,10)}.${String(NewGlobalUser[key]).slice(5,7)}.${String(NewGlobalUser[key]).slice(0,4)}`;
            }
        }
        if (count !== columns.length-1) {
            alert('Все поля необходимо заполнить, так как валидаций полей пока нет, пожалуйста введите корректные данные');
        } else {          
            rows.unshift(copyOfUser);
            handleClose();
        }
        
    }
    
    function renderField(field) {     
        if ( field.id !== 'number' ) {
            switch (field.type) {
                case 'number':
                case 'string': 
                    return  <TextInput 
                                field={ field } 
                                key={ field.id } 
                                handleInputEvent = { handleInputEvent }
                                required = { true }
                            />; 
                case 'date': 
                    return  <DatePicker 
                                field={ field } 
                                key={ field.id }
                                handleInputEvent = { handleInputEvent }
                                required = { true }
                            />;                
                default: return <div />;
            }   
        }    
    }
    
    useEffect(() => {
        setOpen(isOpenModal);
    });

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open} style={{ width:"800px", height:"550px"}} >
                    <main className={classes.paper}>
                        <div className='modalHeader'>
                            <p className='modalTitle'>Ввести данные клиента</p>
                            <HighlightOffTwoToneIcon 
                                onClick = { handleClose }
                                fontSize = 'small' 
                                color = 'primary'
                            />
                        </div>
                        
                        { columns &&
                            columns.map((field) => {
                                return renderField(field);
                            }) 
                        }
                    <div className='modalFooter'>
                        <Button variant="contained"  size='large' onClick={saveNewUser}>Сохранить</Button>
                    </div>    
                         
                    </main>                   
                </Fade>
                
            </Modal>
        </div>
    );
}