import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    margin-top: 20px;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        vertical-align: middle;
        display: block;
        width: 150px;
        height: 100px;
        float: right;
        border-radius: 4px;
        border: 1px solid #f0f0f0;
    }
`;

export const ListInfo = styled.div`
    width: 458px;
    float: left;
    .title {
        margin: -7px 0 4px;
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`;

export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`;

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png)
`;
