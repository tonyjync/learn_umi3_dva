import React, { useState } from 'react'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';

const RenderContent = props => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '500px', backgroundColor: '#fff' }}>
            <p>Content of {props.context}</p>
        </div>
    )

}


const TabExample = () => {
    const tabs = [
        { title: '首页' },
        { title: '秒杀' },
        { title: '发现' },
    ];
    const [tabName, setTabName] = useState('Second Tab');
    const tabClick = (tab, index) => {
        console.log(tab)
        console.log(index)
    }
    return (
        < div >
            <Tabs tabs={tabs}
                initialPage={1}
                onTabClick={tabClick}
            >
                <RenderContent context={tabName}></RenderContent>
                <div>aaaaaaaaaaaaa</div>
                <div>bbbbbbbbbbbbb</div>
            </Tabs>
            <WhiteSpace />
        </div >
    )
};

export default TabExample;