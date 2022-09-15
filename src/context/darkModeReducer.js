const DarkModeReducer = (state, action) =>{
    switch(action.type){
        case "light":{
            return {
                darkMode: false
            };
        }
        case "dark":{
            return {
                darkMode: true
            };
        }
        case "toggle":{
            return {
                darkMode: !state.darkMode
            };
        }
        default:
            return state;
    }
};

export default DarkModeReducer;