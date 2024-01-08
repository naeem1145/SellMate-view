// // Import necessary modules from antd
// import { Row, Col, Card } from 'antd';
// import React, { useEffect, useState } from 'react';
// import DefaultLayout from '../components/DefaultLayout';
// import instance from '../config/axios';

// const Dashboard = () => {

//   const [totalCustomers, setTotalCustomers] = useState(0);
//   const [totalProducts, setTotalProducts] = useState(0);
//   const [totalSales, setTotalSales] = useState(0);
 


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await instance.get('/api/dashboard'); // Replace with your actual API endpoint
//         const { totalCustomers, totalProducts, totalSales } = response.data;
//         setTotalCustomers(totalCustomers);
//         setTotalProducts(totalProducts);
//         setTotalSales(totalSales);
//       } catch (error) {
//         console.error('Error fetching dashboard data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <DefaultLayout>
//       <Row gutter={16}>
//         <Col span={6}>
//           <Card title="Total Customers" bordered={false} value= {totalCustomers}>
//             <p>{totalCustomers}</p>
//           </Card>
//         </Col>
//         <Col span={6}>
//           <Card title="Total Products" bordered={false}>
//             <p>{totalProducts}</p>
//           </Card>
//         </Col>
//         <Col span={6}>
//           <Card title="Total Sales" bordered={false}>
//             <p>{totalSales}</p>
//           </Card>
//         </Col>
//         {/* <Col span={6}>
//           <Card title="Total Revenue" bordered={false}>
//             <p>{totalRevenue}</p>
//           </Card>
//         </Col> */}
        
//       </Row>

//     </DefaultLayout>
//   );
// };

// export default Dashboard;
