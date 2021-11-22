import React from 'react';
import {Layout, Row, Col, Image} from 'antd';
import {Form, Tabs, Input, Button, Checkbox, Slider, Select, Space, DatePicker} from 'antd';
import { useEffect, useState} from 'react';
import Masonry from 'react-masonry-css';
import { useMeta } from '../../contexts';
import { CardLoader } from '../../components/MyLoader';
import { useWallet } from '@solana/wallet-adapter-react';
import { useCreatorArts, useUserArts } from '../../hooks';
import { Link } from 'react-router-dom';
import { ArtCard } from '../../components/ArtCard';

const { Content } = Layout;
const { TabPane } = Tabs;
const images = [
  {items: ['work/Rectangle.svg', 'work/Rectangle.svg', 'work/Rectangle.svg']},
  {items: ['work/Rectangle.svg', 'work/Rectangle.svg', 'work/Rectangle.svg']},
  {items: ['work/Rectangle.svg', 'work/Rectangle.svg', 'work/Rectangle.svg']}
];
export enum MarketViewState {
  Metaplex = '0',
  Owned = '1',
  Created = '2',
}
export const Work = () => {
  const [activeKey, setActiveKey] = useState(MarketViewState.Metaplex);
  const { metadata, isLoading } = useMeta();
  const { connected, publicKey } = useWallet();
  const ownedMetadata = useUserArts();
  const createdMetadata = useCreatorArts(publicKey?.toBase58() || '');
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  const items =
    activeKey === MarketViewState.Owned
      ? ownedMetadata.map(m => m.metadata)
      : activeKey === MarketViewState.Created
      ? createdMetadata
      : metadata;

  useEffect(() => {
    if (connected) {
      setActiveKey(MarketViewState.Owned);
    } else {
      setActiveKey(MarketViewState.Metaplex);
    }
  }, [connected, setActiveKey]);

  const artworkGrid = (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {!isLoading
        ? items.map((m, idx) => {
            const id = m.pubkey;
            return (
              <Link to={`/art/${id}`} key={idx}>
                <ArtCard
                  key={id}
                  pubkey={m.pubkey}
                  preview={false}
                  height={250}
                  width={250}
                />
              </Link>
            );
          })
        : [...Array(10)].map((_, idx) => <CardLoader key={idx} />)}
    </Masonry>
  );

  const marketAllGrid = (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {!isLoading
        ? items.map((m, idx) => {
            const id = m.pubkey;
            return (
              <Link to={`/marketall/${id}`} key={idx}>
                <ArtCard
                  key={id}
                  pubkey={m.pubkey}
                  preview={false}
                  height={250}
                  width={250}
                />
              </Link>
            );
          })
        : [...Array(10)].map((_, idx) => <CardLoader key={idx} />)}
    </Masonry>
  );

  return (
    <Layout style={{ margin: 0, marginTop: 30, background:'transparent' }}>
        <Content style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Col style={{ width: '100%', marginTop: 10 }}>
            <Row>
              <Tabs
                activeKey={activeKey}
                onTabClick={key => setActiveKey(key as MarketViewState)}
              >
                <TabPane
                  tab={<span className="tab-title">All</span>}
                  key={MarketViewState.Metaplex}
                >
                  {marketAllGrid}
                </TabPane>
                {connected && (
                  <TabPane
                    tab={<span className="tab-title">Owned</span>}
                    key={MarketViewState.Owned}
                  >
                    {artworkGrid}
                  </TabPane>
                )}
                {connected && (
                  <TabPane
                    tab={<span className="tab-title">Created</span>}
                    key={MarketViewState.Created}
                  >
                    {artworkGrid}
                  </TabPane>
                )}
              </Tabs>
            </Row>
          </Col>
        </Content>
      </Layout>
    // <Content>
    //   <div style={{padding: '10px 20px'}}>
    //     <Row gutter={16}>
    //       {
    //         images.map((image, index) =>
    //           <Col span={8} className="gutter-row" key={index}>
    //             {
    //               image.items.map((item, key) =>
    //                 <div key={key}>
    //                   <Image src={item} preview={false} className="rectangle6" />
    //                   <div style={{textAlign: 'center'}}>
    //                     <h3 style={{color: 'black', fontSize: '20px'}}>Metaverse Blast</h3>
    //                     <Row>
    //                       <Col span={12}>
    //                         <p style={{color: '#2D8E69', fontSize: '12px'}}>8.24Ξ ($25,089)</p>
    //                         <p style={{color: '#2D8E69', fontSize: '10px'}}>15Ξ ($9,160)</p>
    //                       </Col>
    //                       <Col span={12}>
    //                         <p style={{color: '#2D8E69', fontSize: '12px'}}>List Price</p>
    //                         <p style={{color: '#2D8E69', fontSize: '10px'}}>Last sale price</p>
    //                       </Col>
    //                     </Row>
    //                   </div>
    //                 </div>
    //               )
    //             }
    //           </Col>
    //         )
    //       }
    //     </Row>
    //   </div>
    // </Content>
  )
}