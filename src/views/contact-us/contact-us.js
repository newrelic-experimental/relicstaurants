import { IconsWrapper, Title, ViewWrapper } from 'components/common';
import IconCard from 'components/common/icon-card/icon-card';
import React from 'react';
import { PhoneOutlined, MailOutlined, HomeOutlined } from '@ant-design/icons';

const ContactUs = () => {
  return (
    <ViewWrapper>
      <Title>Contact us</Title>
      <IconsWrapper>
        <IconCard
          icon={<PhoneOutlined />}
          text={
            <>
              <p>Call:</p> <p>555 555 555</p>
            </>
          }
        />
        <IconCard
          icon={<MailOutlined />}
          text={
            <>
              <p>Message us:</p> <p>relicstaurants@nr.com</p>
            </>
          }
        />
        <IconCard
          icon={<HomeOutlined />}
          text={
            <>
              <p>Visit us:</p>
              <p>New York</p>
              <p>Food street 15/3</p>
            </>
          }
        />
      </IconsWrapper>
    </ViewWrapper>
  );
};

export default ContactUs;
