import React, { useEffect } from 'react';
import { CheckCircleOutlined } from '@ant-design/icons';
import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Sucess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the cart page after 5 seconds
    const timeoutId = setTimeout(() => {
      
      navigate('/cart');
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Result
        icon={<CheckCircleOutlined style={{ color: '#52c41a', fontSize: '3em' }} />}
        title="Payment Successful"
        subTitle="Thank you for your purchase!"
        extra={[
          <Button type="primary" key="goToCart" onClick={() => navigate('/cart')}>
            Go to Cart
          </Button>,
        ]}
      />
    </div>
  );
}

export default Sucess