import React, { useEffect, useState } from "react";
import axios from 'axios'
import "./ToShowStaff.css";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function ToShowStaffS() {

  const [staff, setStaff] = useState([]);

  const [forImage, setforImage] = useState([]);

  let urlForStaff = "http://localhost:3456/user/getStaffData";
  
  const dataFromStaffes = async () => {
    try {
      const responceForStaff = await axios.get(urlForStaff);

      let convertedForStaff = JSON.parse(JSON.stringify(responceForStaff.data));

      setStaff(convertedForStaff);
      console.dir(staff)
    } catch (err) {
      console.log({ "its error": err });
    }
  };
  useEffect(() => {
    dataFromStaffes();
  }, []);
// * Table section from material UI
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: "string",
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  picture:string
) {
  return { name, calories, fat, carbs, protein,picture };
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0,"photoOne"),
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0,"photoOne"),
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0,"photoOne"),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3,"photoOne"),
//   createData('Eclair', 262, 16.0, 24, 6.0,"photoOne"),
//   createData('Cupcake', 305, 3.7, 67, 4.3,"photoOne"),
//   createData('Gingerbread', 356, 16.0, 49, 3.9,"photoOne"),
// ];


//  *end of material UI table 


  return (
    <div className="toShowStaffForward">
{/* ------------------------------------------------------- */}
<TableContainer className="toShowStaffForward" component={Paper}>
      <h1 className="TitleFromStaff">List Of Information Forwarded From Staffs</h1>
    
      <Table  sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead className="background">
          <TableRow className="background">
            <StyledTableCell className="border" align="right">Forwarded From</StyledTableCell>
            <StyledTableCell align="right">Phase</StyledTableCell>
            <StyledTableCell className="border" align="right">Title of the course</StyledTableCell>
            <StyledTableCell align="right">Correction on</StyledTableCell>
            <StyledTableCell className="border" align="right">Passed note on correction</StyledTableCell>
            <StyledTableCell align="right"> passed Screenshot</StyledTableCell>
            <StyledTableCell  align="right">Hover On Image For Zooming</StyledTableCell>
          </TableRow>
        </TableHead>
        {staff.map((data,j) => {
          console.log(data)
      let staffDataDisplay = (
        <TableBody key={j}>
            <StyledTableRow >
              <StyledTableCell className="border" align="right">{data.forwarded_from}</StyledTableCell>
              <StyledTableCell align="right">{data.phase}</StyledTableCell>
              <StyledTableCell className="border" align="right">{data.title_of_the_course}</StyledTableCell>
              <StyledTableCell align="right">{data.correction_is_on}</StyledTableCell>
              <StyledTableCell className="border"  align="right">{data.note_on_correction}</StyledTableCell>
              <StyledTableCell   align="right">{data.screenshoot2}</StyledTableCell>
              <img className="passedImage"  src={`http://localhost:3456/${data.screenshot1}`} alt="" />
            </StyledTableRow>
        </TableBody>
    
      )
      return staffDataDisplay;
    })}
      </Table>
   
    </TableContainer>
   

  
    </div>
  );
}

export default ToShowStaffS;


