import React from 'react';
import {Layout, Row, Col, Image} from 'antd';

const { Content } = Layout;

export const Collections = () => {
  return (
    <Content>
      <div style={{padding: '10px 20px'}}>
        { <Row gutter={16} style={{borderBottom:'solid 1px grey'}}>
          <Col span={12} className="gutter-row" style={{marginBottom: '20px'}}>
            <Col span={12} className="gutter-row" style={{marginBottom: '20px', display: 'flex', paddingLeft:'21px'}}>
              <Image src="./useroffer/user1.png" preview={false} />
              <div style={{color: 'black', fontSize:'21px'}}>Aurory</div>
            </Col>
            <Col span={12} className="gutter-row" style={{marginBottom: '20px'}}>
            <Image src="./useroffer/user1-NFT1.png" preview={false} />

            </Col>
          </Col>
          </Row>
        
          }
      { <Row gutter={16} style={{borderBottom:'solid 1px grey', marginTop:'40px'}}>
        <Col span={12} className="gutter-row" style={{marginBottom: '20px'}}>
            <Row gutter={16} className="gutter-row" style={{marginBottom: '20px', display: 'flex', paddingLeft:'21px'}}>
              <Image src="./useroffer/user2.png" preview={false} />
              <div style={{color: 'black', fontSize:'21px'}}>Cyber Frogs</div>
            </Row>
            <Row gutter={16} className="gutter-row" style={{marginBottom: '20px', display: 'flex'}}>
            <Col span={12} className="gutter-row" style={{marginBottom: '20px'}}>

            <Image src="./useroffer/user2-NFT1.png" preview={false} />
            </Col>
            <Col span={12} className="gutter-row" style={{marginBottom: '20px'}}>

            <Image src="./useroffer/user2-NFT2.png" preview={false} />
            </Col>
            </Row>
          </Col>
          
        </Row>
        
          }
          { <Row gutter={16} style={{borderBottom:'solid 1px grey', marginTop:'40px'}}>
        <Col span={12} className="gutter-row" style={{marginBottom: '20px'}}>
            <Row gutter={16} className="gutter-row" style={{marginBottom: '20px', display: 'flex', paddingLeft:'21px'}}>
              <Image src="./useroffer/user3.png" preview={false} />
              <div style={{color: 'black', fontSize:'21px'}}>Degen Ape Academy</div>
            </Row>
            <Row gutter={16} className="gutter-row" style={{marginBottom: '20px', display: 'flex'}}>
            <Col span={12} className="gutter-row" style={{marginBottom: '20px'}}>

            <Image src="./useroffer/user3-NFT1.png" preview={false} />
            </Col>
            <Col span={12} className="gutter-row" style={{marginBottom: '20px'}}>

            <Image src="./useroffer/user3-NFT2.png" preview={false} />
            </Col>
            </Row>
          </Col>
          
        </Row>
        
          }
          { <Row gutter={16} style={{borderBottom:'solid 1px grey', marginTop:'40px'}}>
        <Col span={12} className="gutter-row" style={{marginBottom: '20px'}}>
            <Col span={12} className="gutter-row" style={{marginBottom: '20px', display: 'flex', paddingLeft:'21px'}}>
              <Image src="./useroffer/user1.png" preview={false} />
              <div style={{color: 'black', fontSize:'21px'}}>Pesky Penguins</div>
            </Col>
            <Col span={12} className="gutter-row" style={{marginBottom: '20px', display: 'flex'}}>
            <Image src="./useroffer/user4-NFT1.png" preview={false} />
            </Col>
          </Col>
          
        </Row>
        
          }
        {/* <Row gutter={16}>
          <Col span={12} className="gutter-row" style={{marginBottom: '20px'}}>
            <Row>
              <Col span={12} className="collect_image">
                <div>
                  <div style={{position: 'absolute', left: '10%', top: '10%', width: '80%', overflowWrap: 'break-word'}}>
                    <h3 style={{fontSize: '20px', textAlign: 'center'}}>Metaverse Blast</h3>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting</span>
                  </div>
                  <Image src="./collection/collect1.svg" preview={false} />
                </div>
                <Image src="./collection/collect3.svg" preview={false} />
              </Col>
              <Col span={12} className="collect_image">
                <Image src="./collection/collect2.svg" preview={false} />
                <Image src="./collection/collect4.svg" preview={false} />
              </Col>
            </Row>
          </Col>
          <Col span={12} className="gutter-row" style={{marginBottom: '20px'}}>
            <Row>
              <Col span={12} className="collect_image">
                <div>
                  <div style={{position: 'absolute', left: '10%', top: '10%', width: '80%', overflowWrap: 'break-word'}}>
                    <h3 style={{fontSize: '20px', textAlign: 'center'}}>Metaverse Blast</h3>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting</span>
                  </div>
                  <Image src="./collection/collect1.svg" preview={false} />
                </div>
                <Image src="./collection/collect3.svg" preview={false} />
              </Col>
              <Col span={12} className="collect_image">
                <Image src="./collection/collect2.svg" preview={false} />
                <Image src="./collection/collect4.svg" preview={false} />
              </Col>
            </Row>
          </Col>
          <Col span={12} className="gutter-row" style={{marginBottom: '20px'}}>
            <Row>
              <Col span={12} className="collect_image">
                <div>
                  <div style={{position: 'absolute', left: '10%', top: '10%', width: '80%', overflowWrap: 'break-word'}}>
                    <h3 style={{fontSize: '20px', textAlign: 'center'}}>Metaverse Blast</h3>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting</span>
                  </div>
                  <Image src="./collection/collect1.svg" preview={false} />
                </div>
                <Image src="./collection/collect3.svg" preview={false} />
              </Col>
              <Col span={12} className="collect_image">
                <Image src="./collection/collect2.svg" preview={false} />
                <Image src="./collection/collect4.svg" preview={false} />
              </Col>
            </Row>
          </Col>
          <Col span={12} className="gutter-row" style={{marginBottom: '20px'}}>
            <Row>
              <Col span={12} className="collect_image">
                <div>
                  <div style={{position: 'absolute', left: '10%', top: '10%', width: '80%', overflowWrap: 'break-word'}}>
                    <h3 style={{fontSize: '20px', textAlign: 'center'}}>Metaverse Blast</h3>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting</span>
                  </div>
                  <Image src="./collection/collect1.svg" preview={false} />
                </div>
                <Image src="./collection/collect3.svg" preview={false} />
              </Col>
              <Col span={12} className="collect_image">
                <Image src="./collection/collect2.svg" preview={false} />
                <Image src="./collection/collect4.svg" preview={false} />
              </Col>
            </Row>
          </Col>
          <Col span={12} className="gutter-row" style={{marginBottom: '20px'}}>
            <Row>
              <Col span={12} className="collect_image">
                <div>
                  <div style={{position: 'absolute', left: '10%', top: '10%', width: '80%', overflowWrap: 'break-word'}}>
                    <h3 style={{fontSize: '20px', textAlign: 'center'}}>Metaverse Blast</h3>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting</span>
                  </div>
                  <Image src="./collection/collect1.svg" preview={false} />
                </div>
                <Image src="./collection/collect3.svg" preview={false} />
              </Col>
              <Col span={12} className="collect_image">
                <Image src="./collection/collect2.svg" preview={false} />
                <Image src="./collection/collect4.svg" preview={false} />
              </Col>
            </Row>
          </Col>
          <Col span={12} className="gutter-row" style={{marginBottom: '20px'}}>
            <Row>
              <Col span={12} className="collect_image">
                <div>
                  <div style={{position: 'absolute', left: '10%', top: '10%', width: '80%', overflowWrap: 'break-word'}}>
                    <h3 style={{fontSize: '20px', textAlign: 'center'}}>Metaverse Blast</h3>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting</span>
                  </div>
                  <Image src="./collection/collect1.svg" preview={false} />
                </div>
                <Image src="./collection/collect3.svg" preview={false} />
              </Col>
              <Col span={12} className="collect_image">
                <Image src="./collection/collect2.svg" preview={false} />
                <Image src="./collection/collect4.svg" preview={false} />
              </Col>
            </Row>
          </Col>
        </Row> */}
      </div>
    </Content>
  )
}