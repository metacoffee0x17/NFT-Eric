import { Layout, Col, Row, Button, Image } from 'antd';
import { Link } from 'react-router-dom';
import React, {useState, useRef} from 'react';
import useWindowDimensions from '../../utils/layout';
import Slider from "react-slick";
import {Form, Input } from 'antd';
import { SendOutlined } from '@ant-design/icons';
const { Content } = Layout
export const LandingView = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
      
  const { width } = useWindowDimensions();
  const top_collectibles = [
    {
      count: '1', image: './img/top-collectibles/Top-collectibles1.png',checkimg: './img/top-collectibles/check.png', NftName: 'CryptoPunks', Sol: './img/sol.png', price: '9,769.39', percentage: '+26.52%'
      
    },
    {
      count: '2', image: './img/top-collectibles/Top-collectibles2.png',checkimg: './img/top-collectibles/check.png', NftName: 'CryptoPunks', Sol: './img/sol.png', price: '9,769.39', percentage: '+26.52%'
      
    },
    {
      count: '2', image: './img/top-collectibles/Top-collectibles3.png',checkimg: './img/top-collectibles/check.png', NftName: 'CryptoPunks', Sol: './img/sol.png', price: '9,769.39', percentage: '+26.52%'
      
    },
    {
      count: '2', image: './img/top-collectibles/Top-collectibles4.png',checkimg: './img/top-collectibles/check.png', NftName: 'CryptoPunks', Sol: './img/sol.png', price: '9,769.39', percentage: '+26.52%'
      
    },
    {
      count: '2', image: './img/top-collectibles/Top-collectibles5.png',checkimg: './img/top-collectibles/check.png', NftName: 'CryptoPunks', Sol: './img/sol.png', price: '9,769.39', percentage: '+26.52%'
      
    },
  ];
  const Tranding_Artworks = [
    {
      count: '1', image: './img/TrandingArt1.png', ArwOnwer: './img/ArtOwner.png', artName: 'KingCrypto', property: 'Pixel Giraffe #5829'
      
    },
    {
      count: '2', image: './img/TrandingArt2.png', ArwOnwer: './img/ArtOwner.png', artName: 'KingCrypto', property: 'Pixel Giraffe #5829'
      
    },
    {
      count: '2', image: './img/TrandingArt3.png', ArwOnwer: './img/ArtOwner.png', artName: 'KingCrypto', property: 'Pixel Giraffe #5829'
      
    },
    {
      count: '2', image: './img/TrandingArt1.png', ArwOnwer: './img/ArtOwner.png', artName: 'KingCrypto', property: 'Pixel Giraffe #5829'
      
    },
    {
      count: '2', image: './img/TrandingArt2.png', ArwOnwer: './img/ArtOwner.png', artName: 'KingCrypto', property: 'Pixel Giraffe #5829'
      
    },
  ];
  return (
    <div className="landingPage" style={{width:'100%', background:'linear-gradient(101.59deg, #5A0077 -2.68%, #006983 99.14%)'}}>
    <Content style={{}}>
      {width > 992 ? (
        <>
          <div className="content" style={{paddingTop:'60px'}}>
            <div className="section">
              <Row>
                <Col span={12} className='Create-NFT-Title'>
                  <h1 className="title">Easily Create Your NFTs on Solana</h1>
                  <h3 className='title-description'>Join the thousands of artists currency using solaminer to upload their NFTs to the blockchain</h3>
                  <Link to={`/art/create`}>
                    <Button type="primary" size="large" className="create_button">Create New</Button>
                  </Link>
                </Col>
                <Col span={12} className="pic">
                  <Image src="./img/banner.png" preview={false} />
                </Col>
              </Row>
            </div>
          </div>
          <div className="content">
            <div className="section">
            <Row  style={{justifyContent:'center', margin:'58.688px', color:'white'}}>
              <h1 className="title Tranding-Title">Tranding Artwork</h1>
            </Row>
              <div style={{textAlign:'center'}}>
                <Slider {...settings}>
                {Tranding_Artworks.map((collection, index) =>
              <div className='Tranding-Art' style={{}}>
                <div >
                    <Image className='TrandingArt-Image' src={collection.image} preview={false} />
                </div>
                <div className='ArtWonerInfo' style={{display:'flex'}}>
                    <Image className='ArtOwner' src={collection.ArwOnwer} preview={false} />
                <div style={{marginLeft:'10px'}}>
                  <p className='ArtOwner-Name'>{collection.artName}</p>
                  <p className='Art-Info'>{collection.property}</p>
                </div>
                </div>
              </div>
            )}
               
              </Slider>
            </div>
            </div>
          </div>
          <div className="content" style={{backgroundImage: 'linear-gradient(to right,#632286, #226d8e)'}}>
            <div className="section" style={{marginTop:'50px',}}>
            <Row>
                <Col span={12} className='Create-NFT-Title'>
                  <h2 className="title">Minting</h2>
                  <h1 className="title" style={{marginTop:'20px'}}>Made Easy</h1>

                  <h3 className='title-description' style={{marginTop:'20px'}}>You shouldn't have to struggle minting Solona NFTs. On Solaminter your NFT is moments away from being on the blockchain. </h3>
                  <Link to={`/art/create`}>
                    <Button type="primary" size="large" className="create_button">Create New</Button>
                  </Link>
                </Col>
                <Col span={12} className="pic">
                  {/* <Image src="./img/NFT-logo.png" style={{width:'494.47px', marginTop:'-33px'}} preview={false} /> */}
                  <Image src="./img/NFT.png" preview={false} />
                </Col>
              </Row>
            </div>
          </div>
          <div className="content" >
            <div className="section">
              <Row  style={{justifyContent:'center', margin:'58.688px', color:'white'}}>
                <h1 className="title Tranding-Title">Top 5 collections</h1>
              </Row>
              <div style={{textAlign: 'center'}}>

          {
            top_collectibles.map((collection, index) =>
              <Row gutter={16} className="gutter-row" style={{justifyContent:'center', height:'128px',borderBottom: '1px solid #5691BE',margin:'auto'}} key={index}>
                {/* <Image src={collection.image} preview={false} className="rectangle6" /> */}
                  {/* <h3 style={{color: 'black', fontSize: '20px'}}>{collection.name1}</h3> */}
                  {/* <Row> */}
                    <Col style={{alignSelf:'center'}}>
                      <p className="collection-count" style={{width:'13px',height:'33px',fontSize: '32px', padding:'auto',margin:'auto'}}>{collection.count}</p>
                    </Col>
                    <Col style={{alignSelf:'center',marginLeft:'4px'}}>
                      {/* <Image src={collection.image} preview={false} className="collection-image" />       */}
                      <Image src={collection.image} style={{marginLeft:'20px',width:'84px',margin:'auto'}} preview={false} />
                    </Col>
                    <Col style={{alignSelf:'center',marginLeft:'14px'}}>
                      <p className="collection-count" style={{width:'155px',height:'25px',fontSize: '24px',margin:'auto'}}>{collection.NftName}</p>
                    </Col>
                    <Col style={{alignSelf:'center',marginLeft:'176.36px'}}>
                      <Image src={collection.Sol} style={{margin:'auto',paddingTop: '3px'}} preview={false} className="collection-sol" />                      
                    </Col>
                    <Col style={{alignSelf:'center'}}>
                      <p className="collection-count" style={{width:'113px',height:'29px',fontSize: '28px',marginLeft:'13.36px',margin:'auto'}}>{collection.price}</p>
                    </Col>
                    <Col style={{alignSelf:'center',marginLeft:'116px'}}>
                      <p className="collection-count" style={{width:'114px',height:'29px',fontSize: '28px',marginLeft:'132px',margin:'auto',color:'#13FFE0'}}>{collection.percentage}</p>
                    </Col>
                    
                  {/* </Row> */}
              </Row>
            )
          }
          </div>
              <div style={{width:'100%',textAlign:'center',marginTop:'52px'}}>
                 <Link to={`/art/ranking`}>
                  <Button type="primary" size="large" className="create_button" style={{}}>Go to Rankings</Button>
                 </Link>
              </div>

              {/* <Row>
                <Col span={12} className="pic">
                  <Image src="./img/Take Control.png" preview={false} />
                </Col>
                <Col span={12}>
                  <h1>Take Control</h1>
                  <h3>Unlike other minting platforms that try to trap your NFTs, Solaminter uploads directly to your wallet. Now
                      it's your choice which marketplace you want to upload to. Take control of your NFT strategy.</h3>
                  <Link to={`/art/create`}>
                    <Button type="primary" size="large" className="create_button">Create New</Button>
                  </Link>
                </Col>
              </Row> */}
            </div>
          </div>
          <div className="content" style={{backgroundImage: 'linear-gradient(to left,#1c758e, #5f2986)',marginTop: '60px',height: '692px'}}>
            <div className="section" style={{paddingTop:'91px'}}>
            <Row  style={{justifyContent:'center', color:'white'}}>
              <h1 className="title Tranding-Title">Blog</h1>
            </Row>
            {/* <Row style={{justifyContent:'space-between', display: 'flex', borderRadius:'35px', marginTop:'30px',margin:'55.344px'}}>
              {Tranding_Artworks.map((collection, index) =>
              <Col span='16px' style={{width: '323px', height:'392px', background: '#FFFFFF',border: '6px solid #938eb7',borderRadius: '28.0982px', marginLeft:'10px'}} key={index}>
                <div >
                    <Image className='TrandingArt-Image' src={collection.image} preview={false} />
                </div>
                <div className='ArtWonerInfo' style={{display:'flex'}}>
                    <Image className='ArtOwner' src={collection.ArwOnwer} preview={false} />
                <div style={{marginLeft:'10px'}}>
                  <p className='ArtOwner-Name'>{collection.artName}</p>
                  <p className='Art-Info'>{collection.property}</p>
                </div>
                </div>
              </Col>
            )}
            </Row> */}
             <div style={{textAlign:'center', marginTop:'62px '}}>
                <Slider {...settings}>
                {Tranding_Artworks.map((collection, index) =>
              <div className='Tranding-Art' style={{}}>
                <div >
                    <Image className='TrandingArt-Image' src={collection.image} preview={false} />
                </div>
                <div className='ArtWonerInfo' style={{display:'flex'}}>
                    <Image className='ArtOwner' src={collection.ArwOnwer} preview={false} />
                <div style={{marginLeft:'10px'}}>
                  <p className='ArtOwner-Name'>{collection.artName}</p>
                  <p className='Art-Info'>{collection.property}</p>
                </div>
                </div>
              </div>
            )}
                {/* <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div> */}
                </Slider>
            </div>
            </div>
          </div>
        
        </>
      ) : (
        <>
          <div className="content" style={{ overflow: 'scroll',
            backgroundImage: "url('./img/banner1.png')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}>
            <div className="section" style={{backgroundImage: 'linear-gradient(to right,#632286, #226d8e)'}}>
              <Row>
                <Col span={24} style={{
                  marginTop: '30px'
                }}>
                  <h1 className="title">Easily</h1>
                  <h1 className="title">Create Your</h1>
                  <h1 className="title">NFTs on Solana</h1>
                  <h3>Join the thousands of artists currency using solaminer to upload their NFTs to the blockchain</h3>
                  <Link to={`/art/create`}>
                    <Button type="primary" size="large" className="create_button">Create New</Button>
                  </Link>
                </Col>
              </Row>
            </div>
          </div>
          <div className="content">
            <div className="section">
              <Row>
                <Col span={24} className="pic">
                  <Image src="./img/NFT.png" preview={false} />
                </Col>
                <Col span={24}>
                  <h1>Minting Made Easy</h1>
                  <h3>You shouldn't have to struggle minting Solana NFTs. On Solaminter your NFT is moments away from being on the blockchain.</h3>
                  <Link to={`/art/create`}>
                    <Button type="primary" size="large" className="create_button">Create New</Button>
                  </Link>
                </Col>
              </Row>
            </div>
          </div>
          <div className="content_control">
            <div className="section_control">
              <Row>
                <Col span={24} className="pic">
                  <Image src="./img/Take Control.png" preview={false} />
                </Col>
                <Col span={24}>
                  <h1>Take Control</h1>
                  <h3>Unlike other minting platforms that try to trap your NFTs, Solaminter uploads directly to your wallet. Now
                      it's your choice which marketplace you want to upload to. Take control of your NFT strategy.</h3>
                  <Link to={`/art/create`}>
                    <Button type="primary" size="large" className="create_button">Create New</Button>
                  </Link>
                </Col>
              </Row>
            </div>
          </div>
          <div className="content">
            <div className="section">
              <Row>
                <Col span={24} className="pic">
                  <Image src="./img/Privacy Lock.png" preview={false} />
                </Col>
                <Col span={24}>
                  <h1>Our Philosophy</h1>
                  <h3>We don't collect personal information from you. We will never ask you to "sign up" or ask for sensitive personal data. Enjoy your autonomy.</h3>
                  <Link to={`/art/create`}>
                    <Button type="primary" size="large" className="create_button">Create New</Button>
                  </Link>
                </Col>
              </Row>
            </div>
          </div>
        </>
      )}
    </Content>
    </div>
  );
};
