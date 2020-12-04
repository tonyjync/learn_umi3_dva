import React, { useState } from 'react'
import { TabBar, Carousel, WhiteSpace } from 'antd-mobile';
import TabsPage from './components/TabsPage'


const RenderContent = (props) => {
    const { pageText, fullScreenchange, hiddenchange } = props
    const state = {
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
        imgHeight: 176,
    }
    return (
        <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
            <WhiteSpace />
            <Carousel
                autoplay={true}
                infinite
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}
            >
                {state.data.map(val => (
                    <a
                        key={val}
                        href="http://www.alipay.com"
                        style={{ display: 'inline-block', width: '100%', height: state.imgHeight }}
                    >
                        <img
                            src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                // this.setState({ imgHeight: 'auto' });
                            }}
                        />
                    </a>
                ))}
            </Carousel>
            <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
            <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
                onClick={() => {
                    hiddenchange();
                }}
            >
                Click to show/hide tab-bar
        </a>
            <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
                onClick={() => {
                    // console.log(e)
                    // e.preventDefault();
                    fullScreenchange();
                }}
            >
                Click to switch fullscreen
        </a>

        </div>
    );
}

const TabBarExample = (props) => {
    const { location: { pathname } } = props
    const [selectedTab, setSelectedTab] = useState('redTab')
    const [hidden, setHidden] = useState(false)
    const [fullScreen, setFullScreen] = useState(true)
    const fullScreenchange = () => {
        setFullScreen(!fullScreen)
    }

    const hiddenchange = () => {
        setHidden(!hidden)
    }


    return (
        <div style={fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }} >
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                hidden={hidden}
            >
                <TabBar.Item
                    title="Life"
                    key="Life"
                    icon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                    }}
                    />
                    }
                    selectedIcon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                    }}
                    />
                    }
                    selected={pathname === '/phone'}
                    badge={1}
                    onPress={() => {
                        setSelectedTab('blueTab')
                        props.history.push("/users")
                    }}
                    data-seed="logId"
                >
                    <TabsPage></TabsPage>
                    {/* <RenderContent pageText={'Life'} fullScreenchange={fullScreenchange} hiddenchange={hiddenchange}></RenderContent> */}
                </TabBar.Item>
                <TabBar.Item
                    icon={
                        <div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                    }
                    selectedIcon={
                        <div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                    }
                    title="Friend"
                    key="Friend"
                    dot
                    selected={selectedTab === 'greenTab'}
                    onPress={() => {
                        setSelectedTab('greenTab')
                    }}
                >
                    <RenderContent pageText={'Friend'} fullScreenchange={fullScreenchange} hiddenchange={hiddenchange}></RenderContent>
                </TabBar.Item>
                <TabBar.Item
                    icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                    selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                    title="My"
                    key="my"
                    selected={selectedTab === 'yellowTab'}
                    onPress={() => {
                        setSelectedTab('yellowTab')
                    }}
                >
                    <RenderContent pageText={'My'} fullScreenchange={fullScreenchange} hiddenchange={hiddenchange}></RenderContent>
                </TabBar.Item>
            </TabBar>
        </div>
    );
}

export default TabBarExample;