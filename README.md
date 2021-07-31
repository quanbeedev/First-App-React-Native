# Foodie App Using React-Native🎉
[![Build Status](https://reactnative.dev/)](https://travis-ci.org/joemccann/dillinger)
## Technology 
- React-native
## Feature 
- Watch product.

## Structure in repo
```
 Quick test

        ├── public/         #assets
        │   ├── css/        #styles
        │   ├── fonts/      #fonts
        │   ├── images/     #images
        │   ├── js/         #javascripts
        ├── src├── action/      #action
        │      ├── api/         #connnect api
        │      ├── common/      #define vairiable common
        │      ├── components/  #includeUI
        │      ├── constant/    #define vairiable constant
        │      ├── reducer/     #implemement action
        │      ├── utils/                
        ├──  App.js/       #app.js
        ├── Index.js/      #wrap app
        │       
        ├── setupTest.js.   #include file set up
```
if you want to clone this repostory open cmd control in your computer and run this: 

```
    git clone <parse link here>
```

## Available Scripts

In project directory , you can run 

The first you must take file nodemodules :  
```
  npm install
```
Run aplication : 
```
  option : npm start
	    npm run ios
	    npm run android
```
## Install dependences
```
    npm install --save axios history moment react react-dom react-moment react-router-dom react-toastify redux redux-thunk slick-carouse web-vitals
```
## Guide use Action in Redux
```
    #Create action for redux
    export const fetchDataByToken = (data) => {
        return {
            type: Types.GET_USER_BY_TO_KEN_SUCESSES,
            payload : {
                data
            }
        }
    }
 ```
## Guide use  Reducer 
```
let initialState = []
 const answers = (state = initialState, action ) =>{
    switch(action.type){
        case Types.GET_DATA_ANSWER :
            state = action.payload
            return [...action.payload]
        default: return [...state]
    }
}
```
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

If you have any confusion in this repo. please contact me : **quanbee.dev@gmail.com**
### Lisence 
MIT
**🎉Free Software, Nguyen Hong Quan!**
