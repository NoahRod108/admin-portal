import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

export const userColumns = [
    { field: 'id', headerName: 'ID', width: 120 },
    { 
        field: 'user', 
        headerName: 'USER',
        width: 230, 
        renderCell: (params)=>{
            return(
                <div className="avatar--cell">
                    <img src={params.row.img} alt="" className="cell--image" />
                    {params.row.name}
                </div>
            );
        }
    },
    { field: 'email', headerName: 'EMAIL', width: 150 },
    { field: 'pronoun', headerName: 'PRONOUN', width: 100 },
    { field: 'athlete', headerName: 'ATHLETE', width: 100, 
        renderCell: (params)=>{
            return(
                <div className="athlete--status">
                    { params.row.athlete === false ? <CheckIcon className="status athlete"/> :  <CloseIcon className="status non--athlete"/> }
                </div>
            );
        }
    },
];

export const userRows = [
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
        email: "test4@test.com",
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