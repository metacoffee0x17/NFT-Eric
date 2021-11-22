import React from 'react';
import {
  Layout,
  Row,
  Col,
  Image,
  Button,
  Input,
  Space,
} from 'antd';
import {LinkOutlined} from '@ant-design/icons';

const { Content } = Layout;
const {TextArea} = Input;

export const ThoughtView = () => {
  return (
    <Content style={{}}>
      <Row className="rectangle2" style={{}}>
        <Col span={24}>
          <div className="space-align-block" style={{padding: '15px 0px 15px 0px'}}>
            <Space align="center" style={{display:'flex'}}>
              <Image src="./img/Ellipse 94.png" preview={false} style={{width: '60px',height:'60px'}} />
              <div style={{display:'flex',flexDirection:'column'}}>
                <span className="mock-block" style={{color: 'black'}}>Title</span>
                <span className="mock-block1" style={{color: 'black'}}>Enter text here...</span>
              </div>

            </Space>
            <Input placeholder="" size="large" style={{border:'0 solid #F5F5F5!important', borderBottom:'1px!important'}}/>
            {/* <TextArea showCount maxLength={100} style={{border:'0px 0px 1px 0px'}}/> */}
            <div style={{justifyContent: 'space-between', display: 'flex', padding: "0 20px", marginTop: '20px'}}>
              
              <div style={{marginTop: '5px'}}>
                <Image src="./ArtistFollow/feed1.png" preview={false} style={{paddingRight: '10px'}} />
                <Image src="./ArtistFollow/feed2.png" preview={false} style={{paddingRight: '10px'}} />
                <Image src="./ArtistFollow/feed3.png" preview={false} style={{paddingRight: '10px'}}/>
                <Image src="./ArtistFollow/feed4.png" preview={false} />

              </div>
              <div>
                <Image src="./ArtistFollow/feed5.png" preview={false} style={{paddingRight: '10px'}} />
                <Button className="start_collecting" style={{marginTop: 0,width:'101px',height:'40px'}}>Post</Button>
              </div>
            </div>
          </div>
          <div className="space-align-block1" style={{padding: '15px 0px 0px 0px', marginTop: '30px'}}>
            <Space align="center" style={{display:'flex'}}>
              <Image src="./img/Ellipse 94.png" preview={false} style={{width: '60px',height:'60px'}} />
              <div style={{display:'flex',flexDirection:'column'}}>
                <span className="mock-block" style={{color: 'black'}}>Hamoye Team</span>
                <span className="mock-block1" style={{color: 'black'}}>1 week ago</span>
              </div>

            </Space>
            <div style={{width: '100%',marginTop:'5px'}}>
              <img src="./ArtistFollow/NFT1.png" style={{width:'100%'}} />

              {/* <Image src="./ArtistFollow/NFT1.png" preview={false} style={{width:'100%'}} /> */}
            </div>
            <div style={{justifyContent:'space-between', display:'flex',padding:'30px'}}>
              <Col span={10} style={{justifyContent:'space-between',display:'flex'}}>
                  <Col span={8} style={{display:'flex'}}>
                      <img src="./ArtistFollow/Like.png" style={{}} />
                      <span style={{marginLeft:'8.5px'}}>Like 30</span>
                  </Col>
                  <Col span={8} style={{display:'flex'}}>
                    <img src="./ArtistFollow/Comment.png" style={{}} />
                    <span style={{marginLeft:'8.5px'}}>Comment</span>
                  </Col>
                  <Col span={8} style={{display:'flex'}}>
                    <img src="./ArtistFollow/Share.png" style={{}} />
                    <span style={{marginLeft:'8.5px'}}>34</span>
                  </Col>
              </Col>
              <Col span={14} style={{color:'blue',textAlign:'end'}}>
                <span className="Artist-reply"> Reply </span>
              </Col>
            </div>
          </div>
          <div className="space-align-block1" style={{padding: '15px 0px 0px 0px', marginTop: '30px'}}>
            <Space align="center" style={{display:'flex'}}>
              <Image src="./img/Ellipse 94.png" preview={false} style={{width: '60px',height:'60px'}} />
              <div style={{display:'flex',flexDirection:'column'}}>
                <span className="mock-block" style={{color: 'black'}}>Hamoye Team</span>
                <span className="mock-block1" style={{color: 'black'}}>1 week ago</span>
              </div>

            </Space>
            <div className="Artist-feedback" style={{width: '100%', padding:'0px 12px 35px 12px',marginTop:'30px',borderBottom:'1px solid #F5F5F5' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            <div style={{justifyContent:'space-between', display:'flex',padding:'30px'}}>
              <Col span={10} style={{justifyContent:'space-between',display:'flex'}}>
                  <Col span={8} style={{display:'flex'}}>
                      <img src="./ArtistFollow/Like.png" style={{}} />
                      <span style={{marginLeft:'8.5px'}}>Like 30</span>
                  </Col>
                  <Col span={8} style={{display:'flex'}}>
                    <img src="./ArtistFollow/Comment.png" style={{}} />
                    <span style={{marginLeft:'8.5px'}}>Comment</span>
                  </Col>
                  <Col span={8} style={{display:'flex'}}>
                    <img src="./ArtistFollow/Share.png" style={{}} />
                    <span style={{marginLeft:'8.5px'}}>34</span>
                  </Col>
              </Col>
              <Col span={14} style={{color:'blue',textAlign:'end'}}>
                <span className="Artist-reply"> Reply </span>
              </Col>
            </div>
          </div>
        </Col>
      </Row>
    </Content>
  )
}