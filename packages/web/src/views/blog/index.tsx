import React from 'react';
import {Layout, Row, Col, Button, Image} from 'antd';

const { Content } = Layout;
const data = [
  {img:'./img/blog/blog1.png', title: 'How to programmatically bid on English auctions on OpenSea', subtitle: 'September 9, 2021'},
  {img:'./img/blog/blog1.png', title: 'How to programmatically bid on English auctions on OpenSea', subtitle: 'September 9, 2021'},
  {img:'./img/blog/blog1.png', title: 'How to programmatically bid on English auctions on OpenSea', subtitle: 'September 9, 2021'}

]

export const BlogView = () => {
  return (
    <>
      <Content className="content_top" style={{background:'linear-gradient(101.59deg, #5A0077 -2.68%, #006983 99.14%)',minHeight:"676px"}}>
        <div className="section" style={{height:'70%',margin:'auto'}}>
          <Row >
            <div className="blog-title">The Blog</div>
          </Row>
          <Row>
            <Col span={12}>
              <Image src="./img/blog-banner.png" preview={false} />

            </Col>
            <Col span={12}>
              <Row>
                <Button type="primary" size="large" className="Announcement">Announcement</Button>

              </Row>
              <Row>
                <div className="blog-method">How to programmatically bid on English auctions on OpenSea</div>
              </Row>
              <Row>
                <div className="blog-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique justo, tortor sed interdum at ac. Lobortis nulla pretium massa sed.</div>

              </Row>
            </Col>
          </Row>
        </div>
      </Content>
      {/* {data.map((item, index) => (
        <Content className="content" key={index}>
          <div className="section">
            <h1>{item.title}</h1>
            <h4>{item.subtitle}</h4>
            <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dmmy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specien book.
            </h3>
            <Button danger style={{float: 'right', marginTop: '30px'}}>Read more</Button>
          </div>
        </Content>
      ))} */}
      <div className="section" style={{}}>
        <Row>
          <Col span={7}>
            <div>
            <Image src="./img/blog/blog1.png" preview={false} />
            </div>
            <div style={{display:'flex'}}>
              <Button type="primary" size="large" className="Announcement">Announcement</Button>
              <div className='blog-date' style={{color:'black'}}>March 27, 2020</div>
            </div>
            <div className='blog-content'style={{color:'black'}}>How to programmatically bid on English auctions on OpenSea</div>
          </Col>
          <Col span={7}>
            <div>
              <Image src="./img/blog/blog2.png" preview={false} />
            </div>
            <div style={{display:'flex'}}>
              <Button type="primary" size="large" className="Announcement">Announcement</Button>
              <div className='blog-date' style={{color:'black'}}>March 27, 2020</div>
            </div>
            <div className='blog-content'style={{color:'black'}}>How to programmatically bid on English auctions on OpenSea</div>
          </Col>
          <Col span={7}>
              <div>
                <Image src="./img/blog/blog3.png" preview={false} />
              </div>
              <div style={{display:'flex'}}>
                <Button type="primary" size="large" className="Announcement">Announcement</Button>
                <div className='blog-date' style={{color:'black'}}>March 27, 2020</div>
              </div>
              <div className='blog-content'style={{color:'black'}}>How to programmatically bid on English auctions on OpenSea</div>
          </Col>
        </Row>
      </div>

    </>
  )
}
