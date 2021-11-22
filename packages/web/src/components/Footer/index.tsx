import React from 'react';
import { SendOutlined } from '@ant-design/icons';
import { footerConf } from './footerData';
import { LABELS } from '../../constants';
import {Form, Col, Row, Tabs, Layout, Input, Button, Checkbox, Slider, Select, Space, DatePicker, Image} from 'antd';

export const Footer = () => {
  // const validateMessages = {
  //   types: {
  //     email: 'Input is not a valid email!',
  //   },
  // };

  // const CustomForm = (props: {
  //   status: any;
  //   message: any;
  //   onValidated: any;
  // }) => {
  //   let email: any;
  //   const submit = (values: any) => {
  //     email = values.user.email;
  //     email &&
  //       email.indexOf('@') > -1 &&
  //       props.onValidated({
  //         EMAIL: email,
  //         // NAME: name.value
  //       });
  //   };
  //   return (
  //     <>
  //       <Form
  //         className={'footer-sign-up'}
  //         onFinish={submit}
  //         validateMessages={validateMessages}
  //       >
  //         <Form.Item
  //           name={['user', 'email']}
  //           rules={[
  //             {
  //               type: 'email',
  //             },
  //           ]}
  //           style={{ display: 'flex !important' }}
  //         >
  //           <Input
  //             className={'footer-input'}
  //             type="text"
  //             id="input"
  //             placeholder="Email Address"
  //             bordered={false}
  //           />
  //           <Button className={'footer-button'} htmlType="submit">
  //             <SendOutlined />
  //           </Button>
  //         </Form.Item>
  //       </Form>
  //       {props.status ? (
  //         <div
  //           style={{
  //             background: 'rgb(217,217,217)',
  //             borderRadius: 2,
  //             padding: 10,
  //             display: 'inline-block',
  //           }}
  //         >
  //           {props.status === 'sending' && (
  //             <div style={{ color: 'blue' }}>Loading...</div>
  //           )}
  //           {props.status === 'error' && (
  //             <div
  //               style={{ color: 'red' }}
  //               dangerouslySetInnerHTML={{ __html: props.message }}
  //             />
  //           )}
  //           {props.status === 'success' && (
  //             <div
  //               style={{ color: 'green' }}
  //               dangerouslySetInnerHTML={{ __html: props.message }}
  //             />
  //           )}
  //         </div>
  //       ) : null}
  //     </>
  //   );
  // };

  // const NewsLetterForm = () => (
  //   <CustomForm status={status} message={''} onValidated={() => {}} />
  // );
  const validateMessages = {
    types: {
      email: 'Input is not a valid email!',
    },
  };

  const CustomForm = (props: {
    status: any;
    message: any;
    onValidated: any;
  }) => {
    let email: any;
    const submit = (values: any) => {
      email = values.user.email;
      email &&
        email.indexOf('@') > -1 &&
        props.onValidated({
          EMAIL: email,
          // NAME: name.value
        });
    };
    return (
      <>
        <Form
          className={'footer-sign-up'}
          onFinish={submit}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={['user', 'email']}
            rules={[
              {
                type: 'email',
              },
            ]}
            style={{ display: 'flex !important' }}
          >
            <Input
              className={'footer-input'}
              type="text"
              id="input"
              placeholder="Email Address"
              bordered={false}
              style={{width:'346px', height:'60px', backgroundColor:'#20478C', borderRadius:'12px'}}
            />
            <Button className={'footer-button'} htmlType="submit" style={{width:'138px',height:'60px', padding: '10px 20px',backgroundColor: '#1342E8!important',borderRadius: '12px',marginLeft:'30px'}}>
              Sign up
              {/* <SendOutlined /> */}
            </Button>
          </Form.Item>
        </Form>
        {props.status ? (
          <div
            style={{
              background: 'rgb(217,217,217)',
              borderRadius: 2,
              padding: 10,
              display: 'inline-block',
            }}
          >
            {props.status === 'sending' && (
              <div style={{ color: 'blue' }}>Loading...</div>
            )}
            {props.status === 'error' && (
              <div
                style={{ color: 'red' }}
                dangerouslySetInnerHTML={{ __html: props.message }}
              />
            )}
            {props.status === 'success' && (
              <div
                style={{ color: 'green' }}
                dangerouslySetInnerHTML={{ __html: props.message }}
              />
            )}
          </div>
        ) : null}
      </>
    );
  };

  const NewsLetterForm = () => (
    <CustomForm status={status} message={''} onValidated={() => {}} />
  );
  return (
    
    <div className="footer-container" >
      <Row>
        <div className="content" style={{height:'156px',background: '#133673',width:'100%'}}>
                <div className="section" style={{paddingTop:'24px'}}>
                <Row>
                    <Col span={12} className='Signup-title'>
                      <h1 className="title" style={{fontSize: '32px!important',lineHeight:'0px!important'}}>Stay in the loop</h1>
                      <h3 className='title-description' style={{fontSize:'14px!important'}}>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea.</h3>
                    
                    </Col>
                    <Col span={12} className="pic" style={{alignSelf: 'flex-end'}}>
                    <NewsLetterForm />
                    {/* <Link to={`/art/create`}>
                        <Button type="primary" size="large" className="create_button">Create New</Button>
                      </Link> */}
                    </Col>
                  </Row>
                </div>
              </div>
              
      </Row>
      <div className="footer-info" style={{maxWidth:'1441px', padding:'40px 200px 0px 0px', margin:'auto', justifyContent:'space-between',width:'66%'}}>
        {footerConf.showShopName ? (
          <div className="footer-community">
            <div className="sub-header">
              {LABELS.STORE_NAME} Market Place
            </div>
            <div className="footer-link">All NFTs</div>
            <div className="footer-link">New</div>
            <div className="footer-link">Art</div>
            <div className="footer-link">Sports</div>
            <div className="footer-link">Utility</div>
            <div className="footer-link">Music</div>
            <div className="footer-link">Domain Name</div>

          </div>
        ) : null}
        {footerConf.components.map(component => (
          <div className="footer-section-container">
            <div className="sub-header">{component.title}</div>
            {component.links.map(link => (
              <div className="body-text">
                <a href={link.url} target="_blank" className="footer-link">
                  {link.label}
                </a>
              </div>
            ))}
          </div>
        ))}
        {footerConf.showEmailSubscriber ? (
          <div className="footer-section-container subscriber-container">
            <div className="subscriber-text">
              {/* {footerConf.emailSubscriberText} */}
            </div>
            {/* <NewsLetterForm /> */}
          </div>
        ) : null}
      </div>
      <div className="footer-foot" style={{maxWidth:'1441px', padding:'0px 200px 0px 0px', margin:'auto'}}>
        <div className="small-body footer-link">
          2021 {LABELS.STORE_NAME} LLC, All rights reserved
        </div>
      </div>
    </div>
  );
};
