// import Mock from 'mockjs'
const Mock = require('mockjs')

let data = Mock.mock({
    "data|5":[
        {
            "id|+1": 0,
            "goodsName": "@ctitle(10)",
            "goodsAuthor":"@ctitle(4)",
            "price": 88,
            "num": 1,
            "img": "@Image('200x100','#123456','black','mock')"
        }
    ]
})

export default data;