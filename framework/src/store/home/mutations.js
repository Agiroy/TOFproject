export default {
    handleHomeData(state,params){
        state.banners = params.banners;
        state.others = params.others;
        state.presets = params.presets;
        state.tabs = params.tabs;
    },
    searchChange(state,params){
        state.searchList=params;
    },
    handleHis(state){
        state.searchhistory.unshift(state.searchList);
        state.searchList="";
        if(state.searchhistory.length>8){
            state.searchhistory.splice(8.1);
        }
    },
    historyDel(state){
        state.searchhistory=[];
    }
    
}