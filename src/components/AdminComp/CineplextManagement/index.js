import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Image } from '@material-ui/icons';

const columns = [
  { field: 'id', headerName: 'STT', width: 90 },
  {
    field: 'logo',
    headerName: 'Hình Ảnh Rạp',
    width: 500,
    height: 150,
    type:'string',
    editable: true,
  },
  {
    field: 'maHeThongRap',
    headerName: 'Mã Hệ Thống Rạp',
    width: 150,
    editable: true,
  },
  {
    field: 'tenHeThongRap',
    headerName: 'Tên Hệ Thống Rạp',
    width: 200,
    editable: true,
  },
  {
    field: 'biDanh',
    headerName: 'Bí Danh',
    width: 200,
    editable: true,
  },
  
];

const rows = [
  { id: 1,logo: <img src="http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png"></img>  ,maHeThongRap: 'Snow', tenHeThongRap: 'Jon', biDanh:"Bí Danh" },
  { id: 2,logo:"http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png"  ,maHeThongRap: 'Lannister', tenHeThongRap: 'Cersei', biDanh:"Bí Danh" },
  { id: 3,logo:"http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png"  ,maHeThongRap: 'Lannister', tenHeThongRap: 'Jaime', biDanh:"Bí Danh" },
  { id: 4,logo:"http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png"  ,maHeThongRap: 'Stark', tenHeThongRap: 'Arya', biDanh:"Bí Danh" },
  { id: 5,logo:"http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png"  ,maHeThongRap: 'Targaryen', tenHeThongRap: 'Daenerys', biDanh:"Bí Danh" },
  { id: 6,logo:"http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png"  ,maHeThongRap: 'Melisandre', tenHeThongRap: null, biDanh:"Bí Danh"  },
  { id: 7,logo:"http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png"  ,maHeThongRap: 'Clifford', tenHeThongRap: 'Ferrara', biDanh:"Bí Danh" },
  { id: 8,logo:"http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png"  ,maHeThongRap: 'Frances', tenHeThongRap: 'Rossini', biDanh:"Bí Danh" },
  { id: 9,logo:"http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png"  ,maHeThongRap: 'Roxie', tenHeThongRap: 'Harvey', biDanh:"Bí Danh" },
];

export default function CineplextManagement() {
  return (
    <div style={{ height: "90vh", width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
