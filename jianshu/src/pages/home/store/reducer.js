import { fromJS } from 'immutable';

const defaultState = fromJS ({
    articleList: [{
        id: 1,
        title: '《三十而已》：王漫妮八年沪漂没房子，真正的原因在于她的精致穷',
        desc: '本文由【深情解读】原创出品，抄袭必究！ 01. 《三十而已》沪漂代表王漫妮，今年30岁，大龄剩女，没房没车没存款，超前消费，面临涨房租，不得不被...',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/17180993-38f64531580789a1?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id: 2,
        title: '《三十而已》：王漫妮八年沪漂没房子，真正的原因在于她的精致穷',
        desc: '本文由【深情解读】原创出品，抄袭必究！ 01. 《三十而已》沪漂代表王漫妮，今年30岁，大龄剩女，没房没车没存款，超前消费，面临涨房租，不得不被...',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/17180993-38f64531580789a1?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id: 3,
        title: '《三十而已》：王漫妮八年沪漂没房子，真正的原因在于她的精致穷',
        desc: '本文由【深情解读】原创出品，抄袭必究！ 01. 《三十而已》沪漂代表王漫妮，今年30岁，大龄剩女，没房没车没存款，超前消费，面临涨房租，不得不被...',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/17180993-38f64531580789a1?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id: 4,
        title: '《三十而已》：王漫妮八年沪漂没房子，真正的原因在于她的精致穷',
        desc: '本文由【深情解读】原创出品，抄袭必究！ 01. 《三十而已》沪漂代表王漫妮，今年30岁，大龄剩女，没房没车没存款，超前消费，面临涨房租，不得不被...',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/17180993-38f64531580789a1?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },]
})

export default (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}