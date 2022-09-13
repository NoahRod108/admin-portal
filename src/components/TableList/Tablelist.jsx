import React from 'react'
import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

export const Tablelist = () => {

    const rows = [
        {
            id: 123456789,
            img: "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "user 1",
            email: "test@test.com",
            pronoun: "He/Him",
            athlete: true,
        },
        {
            id: 987654321,
            img: "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "user 2",
            email: "test2@test.com",
            pronoun: "She/Her",
            athlete: false,
        },
        {
            id: 852963741,
            img: "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "user 3",
            email: "test3@test.com",
            pronoun: "He/Him",
            athlete: true,
        },
        {
            id: 369258147,
            img: "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "user 4",
            email: "tes4t@test.com",
            pronoun: "They/Them",
            athlete: false,
        },
        {
            id: 113355889,
            img: "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "user 5",
            email: "test5@test.com",
            pronoun: "",
            athlete: false,
        },
    ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tablecell'>ID</TableCell>
            <TableCell className='tablecell'>User</TableCell>
            <TableCell className='tablecell'>Email</TableCell>
            <TableCell className='tablecell'>Pronoun</TableCell>
            <TableCell className='tablecell'>Athlete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className='tablecell'>{row.id}</TableCell>
              <TableCell className='tablecell'>
                <div className="cell--wrapper">
                    <img src={row.img} alt="" className='image'/>
                    {row.name}
                </div>
              </TableCell>
              <TableCell className='tablecell'>{row.email}</TableCell>
              <TableCell className='tablecell'>{row.pronoun}</TableCell>
              <TableCell className='tablecell'>{row.athlete === false ? <CheckIcon className="status athlete"/> :  <CloseIcon className="status non--athlete"/>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}