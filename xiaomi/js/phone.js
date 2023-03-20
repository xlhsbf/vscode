const app = Vue.createApp({
    template:'#root',
    data(){
        return {
            phoneList:[
            	{id:"1",img:"images/phone1.png",title:"Redmi K50 电竞版",desc:"全线拉满的冷血旗舰",price:"3299"},
            	{id:"2",img:"images/phone2.png",title:"Xiaomi 12 Pro",desc:"全新骁龙8｜2K AMOLED屏幕",price:"4699"},
            	{id:"3",img:"images/phone3.png",title:"Xiaomi 12",desc:"全新骁龙8｜5000万主摄",price:"3699"},
            	{id:"4",img:"images/phone4.png",title:"Xiaomi 12X",desc:"骁龙870｜5000万主摄",price:"2999"},
            	{id:"5",img:"images/phone5.png",title:"Xiaomi 11 青春活力版",desc:"轻薄5G，内外皆出彩",price:"1899"},
            	{id:"6",img:"images/phone6.png",title:"Redmi Note 11 Pro系列",desc:"三星AMOLED高刷屏",price:"1799"},
            	{id:"7",img:"images/phone7.png",title:"Redmi Note 11 5G",desc:"5000mAh大电量",price:"1199"},
            	{id:"8",img:"images/phone8.png",title:"Redmi Note 11 4G",desc:"5000mAh大电量",price:"969"},
            ]
        }
    },
})
app.mount('#app')