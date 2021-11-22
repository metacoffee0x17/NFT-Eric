import React from 'react';
import {
  Layout,
  Row,
  Col,
  Image,
  Button
} from 'antd';
import {LinkOutlined} from '@ant-design/icons';

const { Content } = Layout;

export const Sidebar = () => {
  return (
    <Content style={{color:'black'}}>
      <Row>
        <Image src="./img/Ellipse 94.png" preview={false} width="150px" />

      </Row>
      <Row className="side-artist-info">
        <Row style={{display:'flex', flexDirection:'column', marginTop:'40px'}}>
          <p>Joe Ryba</p>
          <p>@joe_ryba</p>
        </Row>
        <Row style={{marginTop:'44px',justifyContent: 'space-between'}}>
          <Col>
            <div className="follow following">280</div>
            <div style={{fontSize:'18px',color:'black'}}>Following</div>
          </Col>
          <Col>
            <div className="follow followers">1103</div>
            <div style={{fontSize:'18px',color:'black'}}>Followers</div>
          </Col>
          <Col>
            <Button className="follow-button">follow</Button>
          </Col>
        </Row>
        <Row style={{marginTop:'44px'}}>
          <p className="FollowedBy">Followed by</p>
        </Row>
        <Row style={{marginTop:'19px',justifyContent: 'space-between'}}>
          <div className="followUsers" style={{}}>
            <img src="./ArtistFollow/user1.png" />
            <img src="./ArtistFollow/user2.png" />
            <img src="./ArtistFollow/user3.png" />
            <img src="./ArtistFollow/user4.png" />
            <img src="./ArtistFollow/user5.png" />
          </div>
          <div style={{color:'#1342E8', fontSize:''}}>View all</div>
        </Row>
        <Row style={{marginTop:'19px'}}>
          <div className="Side-users" style={{borderRadius:'50px',border:'1px solid #1342E8',display:'flex',height:'44px',width:'179px'}}>
            <img src="./ArtistFollow/vector.png" style={{width:'20px',height:'20px'}}/>
            <p style={{color:'blue'}}>@joe_rybe</p>
            <img src="./ArtistFollow/vector1.png"style={{width:'20px',height:'20px'}} />
          </div>
        </Row>
        <Row style={{marginTop:'19px'}}>
          <div className="Side-users" style={{borderRadius:'50px',border:'1px solid #1342E8',display:'flex',height:'44px',width:'179px'}}>
            <img src="./ArtistFollow/vector.png" style={{width:'20px',height:'20px'}}/>
            <p style={{color:'blue'}}>@joe_rybe</p>
            <img src="./ArtistFollow/vector2.png" style={{width:'20px',height:'20px'}}/>
          </div>
        </Row>
        <Row style={{marginTop:'19px'}}>
          <div className="Side-invite-users" style={{borderRadius:'50px',border:'1px solid #1342E8',display:'flex',height:'44px',width:'264px'}}>
            <p className="invitedUser" style={{color:'blue'}}>invited  by @bri4anh3nry</p>
            <img src="./ArtistFollow/user.png" style={{width:'20px',height:'20px'}}/>
          </div>
        </Row>
        <Row style={{marginTop:'54px'}}>
          <div className="FollowedBy">Bio</div>
        </Row>
        <Row style={{marginTop:'18px',height:'149px',borderStyle: 'solid', borderWidth: '1px 0px 1px 0px',borderColor:'#D7D7D7'}}>
          <div className="Side-art-ani"style={{paddingTop:'16px'}}>Houston based 3d artist and animator. Creator of daily experimental animations.</div>
          <div className="FollowedBy">Links</div>
        </Row>
        <Row >
          <div className="Side-art-ani">Houston based 3d artist and animator. Creator of daily experimental animations.</div>
        </Row>
        <Row style={{marginTop:'16px'}}>
          <img src="./ArtistFollow/vector4.png" />
          <div className='social-link'>josephryba.com</div>
        </Row>
        <Row style={{marginTop:'17px'}}>
          <img src="./ArtistFollow/vector5.png" />
          <div className='social-link'>joerybar#9205</div>
        </Row>
        <Row style={{marginTop:'17px'}}>
          <img src="./ArtistFollow/vector6.png" />
          <div className='social-link'>Youtube</div>
        </Row>
        <Row style={{paddingTop: '16px',marginBottom:'44px',height:'54px', marginTop:'46px', display:'flex',borderStyle: 'solid', borderWidth: '1px 0px 1px 0px',borderColor:'#D7D7D7',justifyContent: 'space-between'}}>
          <p className="Side-Joined">Joined</p>
          <p className="Side-Joined">March 2021</p>
        </Row>
      </Row>
      {/* <div style={{textAlign: 'center'}}>
        <Image src="./img/Ellipse 94.png" preview={false} width="150px" />
        <h2>Tegusu Inc</h2>
        <h4 style={{marginBottom: 0}}>Director, Designer</h4>
        <h4>Tegusu Inc</h4>
        <Button className="start_collecting" style={{width: '100%', marginTop: '30px'}}>Follow</Button>
        <br />
        <Button className="message">Message</Button>
        <Row style={{marginTop: '50px'}}>
          <Col span={12} style={{textAlign: 'left'}}>
            <p>Project Views</p>
            <p>Appreciations</p>
            <p>Followers</p>
            <p>Following</p>
          </Col>
          <Col span={12} style={{textAlign: 'right'}}>
            <p>1,909,194</p>
            <p>125,830</p>
            <p>52,503</p>
            <p>162</p>
          </Col>
        </Row>
        <div style={{marginTop: '40px'}}>
          <h4 style={{color: '#9A9A9A', textAlign: 'left'}}>On the web</h4>
          <Button className="message">Esty</Button>
          <Button className="message">Facebook</Button>
          <Button className="message">Instagram</Button>
        </div>
        <div style={{marginTop: '40px'}}>
          <h4 style={{color: '#9A9A9A', textAlign: 'left'}}>LINKS</h4>
          <Button className="links">
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              tegusu web
              <LinkOutlined style={{marginTop: '5px'}} />
            </div>
          </Button>
          <Button className="links">
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              tegusu instagram
              <LinkOutlined style={{marginTop: '5px'}} />
            </div>
          </Button>
        </div>
      </div> */}
    </Content>
  )
}