import React, { Component } from 'react';
import List from './components/List';
// import Topic from './components/Topic';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/5000/73fb106b57565c1d79d1a4fb359d77d716aef438.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540" />
                    {/* <Topic></Topic> */}
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;