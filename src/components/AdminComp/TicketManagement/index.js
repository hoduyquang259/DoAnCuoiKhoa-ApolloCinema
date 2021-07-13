import React, {useState,useEffect} from "react"
import {DataGrid} from "@material-ui/data-grid"
import MaterialTable from 'material-table'

const rows = [
    { id: 1,  taiKhoan: 'Snow', hoTen: 'Jon', email: "email@gmail.com", soDt: "0938126954", matKhau: "123456", maLoaiNguoiDung: "ADMIN" },
    { id: 2,  taiKhoan: 'Lannister', hoTen: 'Cersei', email: "email@gmail.com", soDt: "0938126954", matKhau: "123456", maLoaiNguoiDung: "CLIENT" },
    { id: 3, taiKhoan: 'Lannister', hoTen: 'Jaime', email: "email@gmail.com", soDt: "0938126954", matKhau: "123456", maLoaiNguoiDung: "CLIENT" },
    { id: 4, taiKhoan: 'Stark', hoTen: 'Arya', email: "email@gmail.com", soDt: "0938126954", matKhau: "123456", maLoaiNguoiDung: "CLIENT" },
    { id: 5, taiKhoan: 'Targaryen', hoTen: 'Daenerys', email: "email@gmail.com", soDt: "0938126954", matKhau: "123456", maLoaiNguoiDung: "CLIENT" },
    { id: 6, taiKhoan: 'Melisandre', hoTen: null, email: "email@gmail.com", soDt: "0938126954", matKhau: "123456", maLoaiNguoiDung: "CLIENT" },
    { id: 7, taiKhoan: 'Clifford', hoTen: 'Ferrara', email: "email@gmail.com", soDt: "0938126954", matKhau: "123456", maLoaiNguoiDung: "CLIENT" },
    { id: 8, taiKhoan: 'Frances', hoTen: 'Rossini', email: "email@gmail.com", soDt: "0938126954", matKhau: "123456", maLoaiNguoiDung: "CLIENT" },
    { id: 9, taiKhoan: 'Roxie', hoTen: 'Harvey', email: "email@gmail.com", soDt: "0938126954", matKhau: "123456", maLoaiNguoiDung: "CLIENT" },
  ];
const TicketManagementPage =() =>{

    const [data,setData] = useState(rows)
    useEffect(()=>{
        fetch("https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP08")
        .then((data)=> data.json())
        .then((data)=> setData(data))
    },[])
    const columns = [
        // {field: "id", title: "ID", width: 90},
        {field: "taiKhoan", title: "Tài Khoản",width: 200},
        {field: "hoTen", title: "Họ Tên",width: 200},
        {field: "email", title: "Email",width: 200},
        {field: "soDt", title: "Số Điện Thoại",width: 200},
        {field: "matKhau", title: "Mật Khẩu",width: 200},
        {field: "maLoaiNguoiDung", title: "Mã Loại Người Dùng",width: 200},
    ]
    return(<div style={{height:"80vh", width:"100%"}}>
        <MaterialTable
        title="Employee Data"
        data={data}
        columns={columns}
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            const updatedRows = [...data,{newRow }]
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          }),
          onRowDelete: selectedRow => new Promise((resolve, reject) => {
            const index = selectedRow.tableData.id;
            const updatedRows = [...data]
            updatedRows.splice(index, 1)
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          }),
          onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
            const index=oldRow.tableData.id;
            const updatedRows=[...data]
            updatedRows[index]=updatedRow
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          })

        }}
        options={{
          actionsColumnIndex: -1, addRowPosition: "first"
        }}
      />
    </div>);
}
export default TicketManagementPage;