import React from 'react';
import StickyTable from '../../components/table/table.jsx';
import Loader from '../../components/loader/loader.jsx';
import Button from '@material-ui/core/Button';
import SimpleModal from "../../components/modal/modal.jsx";
import { formatDate } from './homePage.model';
import { columns, rows } from './homePage.model.js';
import './homePage.less';

class HomePage extends React.Component 
{
    state= { page: 0, rowsPerPage: 10, data: null, isOpenModal: false };
  
    handleChangePage = (event, newPage) => {
      this.setState({ page: newPage });
    };
  
    handleChangeRowsPerPage = event => {
      this.setState({ rowsPerPage: Number(event.target.value), page: 0 });
    };
   
    handleSortColumn = (direction, id, type) => {
        const dataSave = [...this.state.data];

        switch (type) {
           case 'number' : dataSave.sort((a, b) => { 
                return (
                    direction === 'asc' ? ( Number(a[id])-Number(b[id]) ) : (Number(b[id])-Number(a[id])) 
                );
            }); break;
            case 'string': dataSave.sort((a, b) => { 
                const A=a[id].toLowerCase(); 
                const B=b[id].toLowerCase();
                return (
                    direction === 'asc' ? ( A>B ? 1 : -1 ) : ( A>B ? -1 : 1 ) 
                );
            }); break;
            case 'date': dataSave.sort((a, b) => { 
                const A = formatDate(a[id]); 
                const B = formatDate(b[id]);
                return ( 
                    direction === 'asc' ? (A-B) : (B-A) 
                );
            });  
        }             
        this.setState({ data: dataSave });
    }

    closeModal=()=>{
        this.setState({isOpenModal:false, data: rows});
    }

    render() {
        const { page, rowsPerPage, data, isOpenModal }=this.state;
        return (
            <div className='homePageContainer'>
                { !data && <Loader loaderText='Идет загрузка данных ...'/> }
                <SimpleModal 
                    columns={ columns }
                    isOpenModal={ isOpenModal }
                    closeModal = { this.closeModal }
                />
                <div className='buttonGrid'>
                    <Button variant="contained"  size='large' onClick={()=>this.setState({ isOpenModal: true })}>Добавить нового клиента</Button>
                </div>
                <StickyTable 
                    columns={ columns } 
                    rows={ data } 
                    page={ page }
                    rowsPerPage={ rowsPerPage } 
                    handleChangePage= { this.handleChangePage }
                    handleChangeRowsPerPage = { this.handleChangeRowsPerPage }
                    handleSortColumn = { this.handleSortColumn }
                />
            </div>
        )    
    }
    
    componentDidMount() {
        setTimeout(() => this.setState({ data: rows }), 10000);
    }
}


export default HomePage;