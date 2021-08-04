import Vue from 'vue'

let NavTemplate = Vue.extend({
    template: "<div id='ga-nav'>{{title}}</div>",
    props: {
        title: {
            type: String,
            default: "2"
        }
    }
})

class Nav {
    constructor(title = "导航") {

        this.title = title;

        let navWrap = document.createElement('div');
        navWrap.setAttribute("id", "ga-nav-template");
        document.body.appendChild(navWrap);
        new NavTemplate({
            propsData: {
                title: this.mTitle
            },
            data() {
                return {

                }
            }
        }).$mount("#ga-nav-template");

        this.show();
    }

    get title() {
        return this.mTitle;
    }

    set title(v) {
        this.mTitle = v;
        console.log(v);

    }

    show(title) {
        this.title = title;
    }

    hide() {
        console.log("隐藏");
        let navWrap = document.getElementById("ga-nav");

        navWrap.style.display = "none";
    }
}

let nav = new Nav();

function showNav(title) {
    nav.show(title);
}
function hideNav() {
    nav.hide();
}

Vue.prototype.$showNav = showNav;
Vue.prototype.$hideNav = hideNav;
Vue.prototype.$nav = nav;
