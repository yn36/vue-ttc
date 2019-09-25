import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        list: [],
    },
    mutations: {
        add(state) {
            // console.log(state.list.length)
            state.count = state.list.length;
        },
        jrgwc(state, hehe) {
            // state.list = e
            if (!state.list.length) {
                state.list.push(hehe)
                // console.log(state.list.length)
            } else {


                let arr = []
                for (var i = 0; i < state.list.length; i++) {

                    arr.push(state.list[i][0].aid)

                    //     console.log(state.list[i][0].aid)
                    //     console.log(e[0].aid)

                    //     if (state.list[i][0].aid !== e[0].aid) {
                    //         state.list.push(e);
                    //         return false;
                    //     } else {
                    //         state.list[i][0].num += e[0].num;
                    //         return false;


                }

                // console.log(arr)
                // console.log(arr.includes(hehe[0].aid))
                // console.log(state.list.length)

                if (arr.includes(hehe[0].aid)) {

                    const index = state.list.findIndex((el) => {
                        return el[0].aid == hehe[0].aid
                    })

                    state.list[index][0].num += hehe[0].num;
                    // state.list[index][0].num = hehe[0].num +1;
                    console.log(index)
                    // state.list[index][0].num = 1
                } else {
                    state.list.push(hehe);
                    // console.log(count)
                }





                // if(state.list[i][0].aid !== e[0].aid) {
                //    
                // }else {
                //     state.list[i][0].num += e[0].num;
                // }
                // console.log(state.list[i][0].aid)
                // console.log(e[0].aid)
                // if (state.list[i][0].aid === e[0].aid) {

                //     console.log(123)
                //     state.list[i][0].num += e[0].num;
                //     break;

                // // } else if (state.list[i][0].aid != e[0].aid) {
                // //     console.log(456)
                // }else{
                //     console.log(456)
                //     state.list.push(e);
                //     break;

                // }
                // }

                // state.list.push(e)

            }



            // console.log(state)

            // console.log(a)
        },
       
        // login() {
        //     if (window.localStorage.userArr) {
        //         var array = JSON.parse(window.localStorage.userArr);
        //     } else {
        //         array = [];
        //     }
        //     console.log(array)
        // }
        deles(state){
            state.count--
        }
    }
})
export default store