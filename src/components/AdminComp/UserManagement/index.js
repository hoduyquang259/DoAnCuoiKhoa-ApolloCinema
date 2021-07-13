import React, {useState,useEffect} from 'react';

import { DataGrid } from '@material-ui/data-grid';

const columns = [
  // { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'taiKhoan',
    headerName: 'Tài Khoản',
    width: 150,
  },
  {
    field: 'hoTen',
    headerName: 'Họ Tên',
    width: 150,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 150,
  },
  {
    field: 'soDt',
    headerName: 'Số Điện Thoại',
    width: 150,
  },
  {
    field: 'matKhau',
    headerName: 'Mật Khẩu',
    width: 150,
  },
  {
    field: 'maLoaiNguoiDung',
    headerName: 'Mã Loại Người Dùng',
    width: 150,
  },
  
];

const rows = [
  { id: 1, taiKhoan: 'Snow', hoTen: 'Jon', email: "email@gmail.com", soDt: "0938126954", matKhau: "123456", maLoaiNguoiDung: "ADMIN" },
  { id: 2, taiKhoan: 'Lannister', hoTen: 'Cersei', email: "email@gmail.com", soDt: "0938126954", matKhau: "123456", maLoaiNguoiDung: "CLIENT" },
  { id: 3, taiKhoan: 'Lannister', hoTen: 'Jaime', email: "email@gmail.com", soDt: "0938126954", matKhau: "123456", maLoaiNguoiDung: "CLIENT" },
  { id: 4, taiKhoan: 'Stark', hoTen: 'Arya', email: "email@gmail.com", soDt: "0938126954", matKhau: "123456", maLoaiNguoiDung: "CLIENT" },
  { id: 5, taiKhoan: 'Targaryen', hoTen: 'Daenerys', email: "email@gmail.com", soDt: "0938126954", matKhau: "123456", maLoaiNguoiDung: "CLIENT" },
  { id: 6, taiKhoan: 'Melisandre', hoTen: null, email: "email@gmail.com", soDt: "0938126954", matKhau: "123456", maLoaiNguoiDung: "CLIENT" },
  { id: 7, taiKhoan: 'Clifford', hoTen: 'Ferrara', email: "email@gmail.com", soDt: "0938126954", matKhau: "123456", maLoaiNguoiDung: "CLIENT" },
  { id: 8, taiKhoan: 'Frances', hoTen: 'Rossini', email: "email@gmail.com", soDt: "0938126954", matKhau: "123456", maLoaiNguoiDung: "CLIENT" },
  { id: 9, taiKhoan: 'Roxie', hoTen: 'Harvey', email: "email@gmail.com", soDt: "0938126954", matKhau: "123456", maLoaiNguoiDung: "CLIENT" },
];

export default function UserManagement() {
 const [tableData, setTableData] = useState([])
 
 useEffect(()=>{
   fetch("https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP08")
   .then((data)=> data.json())
   .then((data)=> setTableData(data))
 },[])
  return (
    <div style={{ height: "80vh", width: '100%' }}>
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
