import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import ChangeHistoryTwoToneIcon from '@material-ui/icons/ChangeHistoryTwoTone';
import DetailsTwoToneIcon from '@material-ui/icons/DetailsTwoTone'; 
import './table.less';

export default function StickyTable(props) {
    const { columns, 
            rows, 
            page, 
            rowsPerPage,
            handleChangePage,
            handleChangeRowsPerPage,
            handleSortColumn
    }= props;  

    return (
        <div className='tableContainer'>
            <Paper className='paperRoot'>
                <TableContainer className='tableRoot'>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                            {columns.map(column => (
                                <TableCell
                                    key={column.id}                                    
                                    style={{ minWidth: column.minWidth, fontSize:'18px' }}
                                >
                                    <div style={{ display:'flex', 
                                              justifyContent:column.align , 
                                              alignItems:'center',
                                              height:'40px'
                                            }}>{ column.label }
                                        { column.id !== 'number' && <div className='svgWrapper'>
                                            <ChangeHistoryTwoToneIcon 
                                                fontSize='inherit' 
                                                color='primary' 
                                                onClick={()=>handleSortColumn('asc', column.id, column.type)}
                                            />
                                            <DetailsTwoToneIcon 
                                                fontSize='inherit' 
                                                color='primary'
                                                onClick={()=>handleSortColumn('desc', column.id, column.type)}
                                            />
                                        </div>}
                                    </div>
                                </TableCell>
                            ))}
                            </TableRow>
                        </TableHead>
                    { rows && rows.length > 0 && 
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row,index) => {
                                return (
                                    <TableRow hover 
                                        role="checkbox" 
                                        tabIndex={ -1 } 
                                        key={ index } 
                                        style={{backgroundColor:( index % 2 === 0? 'silver': null)}}
                                    >
                                    {columns.map(column => {
                                        const value = row[column.id];
                                        return (  
                                            <TableCell key={column.id} align={column.align}>
                                                { column.id === 'number' ? page * rowsPerPage+index+1 : (column.format && typeof value === 'number' ? column.format(value) : value) }
                                            </TableCell>
                                        );
                                    })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    }
                    </Table>
                </TableContainer>
                
              
        <TablePagination
            rowsPerPageOptions={ [10, 25, 100] }
            component="div"
            count={ (rows && rows.length) || 0 }
            rowsPerPage={ rowsPerPage }
            page={ page }
            onChangePage={ handleChangePage }
            onChangeRowsPerPage={ handleChangeRowsPerPage }
        />
    </Paper>
    </div>
  );
}
