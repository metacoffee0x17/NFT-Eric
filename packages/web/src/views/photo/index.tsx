import React, { useState } from 'react';
import {
  Button,
  Layout,
  Row,
  Col
} from 'antd'
import {Sidebar} from '../../components/Sidebar';
import {ThoughtView} from '../../components/ThoughtView';
import {Work} from '../../components/Work';
import {Collections} from '../../components/Collections';
import { Applications } from '../../components/Applications';
import { Nft } from '../../components/Nft';

const {Content} = Layout;


export const PhotoView = () => {
  const [tabIndex, setTabIndex] = useState(1);
  return (
    <Content>
      <Row >
        <Col span={24} className="rectangle2" style={{height: '18vw'}}>
          <img src='./Rectangle 905.png' style={{width:'100%',height:'100%'}}/>
        </Col>
      </Row>
      <Row style={{width:'90%', margin:'auto',display:'flex', flexDirection:'row',flexWrap: 'unset'}}>
        <Col span={8} className="gutter-row" style={{minWidth: '16vw', marginTop: -70}}>
          <Sidebar />
        </Col>
        <Col span={16} className="gutter-row" style={{display:'flex',flexDirection:'column',paddingLeft:'62px'}}>
          <Row style={{alignSelf:'flex-end'}}>
            <Col className="ColletedBy" style={{display:'flex',margin:'auto',marginTop:'-36px',justifyContent:'space-around'}}>
              <p>Colleted by</p>
              <div className="followUsers" style={{}}>
                <img src="./ArtistFollow/user1.png" />
                <img src="./ArtistFollow/user2.png" />
                <img src="./ArtistFollow/user3.png" />
                <img src="./ArtistFollow/user4.png" />
                <img src="./ArtistFollow/user5.png" />
              </div>
              <p>View All</p>
            </Col>
          </Row>
          <Row style={{marginTop:'47px',height: '81px',background: '#FFFFFF',border: '2px solid rgba(245, 255, 254, 0.5)',boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',borderRadius: '18px'}}>
            <Col className='Artist-follow-user' style={{
              height: 'fit-content',
              display: 'flex',
              justifyContent: 'space-between!important',
              alignSelf: 'center',
              width: '100%',
              padding:'0px 20px 0px 20px'
              }}
            >
              <div  className="Artist-all" style={{}} onClick={() => setTabIndex(1)}>Feed</div>
              <div  className="Artist-all" style={{}} onClick={() => setTabIndex(2)}>Favourite</div>
              <div  className="Artist-all" onClick={() => setTabIndex(5)}>NFTs I Own</div>

              <div  className="Artist-all" style={{}} onClick={() => setTabIndex(3)}>Offers Made</div>
              <div  className="Artist-all" style={{}} onClick={() => setTabIndex(4)}>Offers Received</div>
            </Col>
          </Row>
          <Row style={{marginTop:'30px'}}>
            { tabIndex == 1 &&
              <ThoughtView />
            }
            { tabIndex == 2 &&
              <Work />
            }
            { tabIndex == 3 &&
              <Collections />
            }
            { tabIndex == 4 &&
              <Applications />
            }
            { tabIndex == 5 &&
              <Nft />
            }
          </Row>
        </Col>
      </Row>
    </Content>
  )
}