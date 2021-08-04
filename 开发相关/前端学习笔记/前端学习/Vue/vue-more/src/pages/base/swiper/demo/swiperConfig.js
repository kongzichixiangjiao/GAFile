export const swiperOptions = {
    pagination: { // 分页器
        el: ".swiper-pagination",
        // type: 'bullets',
        // type: 'fraction',
        // type: 'progressbar',
        // type: 'custom',
        clickable: true,
        bulletClass: 'my-bullet',//需设置.my-bullet样式
        bulletActiveClass: 'my-bullet-active',
    },
    autoplay: { // 自动播放
        delay: 1000,
        stopOnLastSlide: false,
    },
    zoom: { // 聚焦 缩放
        minRatio: 1,
        maxRatio: 2,
        toggle: false,
    },
    initialSlide: 1, // 设定初始化时slide的索引
    direction: "horizontal", // 水平方向切换(horizontal)或垂直方向切换(vertical)
    // speed: 2000, // 切换速度，即slider自动滑动开始到结束的时间（单位ms）
    grabCursor: true, // 设置为true时，鼠标覆盖Swiper时指针会变成手掌形状
    parallax: true, // 切换效果
    breakpoints: {
        // 适配不同尺寸
        320: {
            //当屏幕宽度大于等于320
            slidesPerView: 1, // 一屏幕展示几个
            spaceBetween: 10, // sliderItem之间的距离
        },
        768: {
            //当屏幕宽度大于等于768
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1280: {
            //当屏幕宽度大于等于1280
            slidesPerView: 3,
            spaceBetween: 30,
        },
        autoHeight: true, //高度随内容变化
    },
    loop: true,
    runCallbacksOnInit: true, //开启loop或者设置了initialSlide会触发一次。如果不想触发，将此设置为false

    init: true, // 设置为false需要手动初始化 使用mySwiper.init()
    preloadImages: true, // 默认为true，Swiper会强制加载所有图片后才初始化。
    // cssMode: true, // 启用后，它将使用现代CSS Scroll Snap API。它不支持Swiper的很多功能，但可能会带来更好的性能。开启后不能监听事件
    updateOnWindowResize: true, // 屏幕发生改变 重新计算swiper大小
    watchSlidesProgress: true, // 监听滚动位置
    freeMode: false, // 是否分页 false分页 true不分页
}

export const swiperSonOptions = {
    pagination: {
        el: ".swiper-pagination1",
        type: 'bullets',
        clickable: true,
    },
    // autoplay: {//可选选项，自动滑动
    //     delay: 1000,//1秒切换一次
    //     stopOnLastSlide: false,
    //     disableOnInteraction: true,
    // },
    initialSlide: 1, // 设定初始化时slide的索引
    direction: "horizontal", // 水平方向切换(horizontal)或垂直方向切换(vertical)
    slidesPerView: 1,
    nested: true, // 用于嵌套相同方向的swiper时，当切换到子swiper时停止父swiper的切换。请将子swiper的nested设置为true。由于需要在slideChangeEnd时判断作用块，因此快速滑动时这个选项无效。
    updateOnWindowResize: true,

}

import { Swiper as SwiperClass, Pagination, Mousewheel, Autoplay, Navigation, EffectFade } from "swiper/core";
import getAwesomeSwiper from "vue-awesome-swiper/dist/exporter";
import "swiper/swiper-bundle.min.css";
SwiperClass.use([Pagination, Mousewheel, Autoplay, Navigation, EffectFade]);
export const { Swiper } = getAwesomeSwiper(SwiperClass);