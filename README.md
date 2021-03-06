# SteamLevels
### *Description*

This web app will get the user input ( User - Wanted level ) then call the Steam API to get more information about the user ( Current Level - XP - and some other basic info ...) then calculate the sets and the cost to get to the wanted level.

If you want to clone the project make sure to change the Steam_API_Key on the index.js and i recommend using dotenv before deploying your project so you dont share your api key publicly.

Steam max level cap is 5099 now so if you enterd more then that in the wanted level it will not calculate and will just give back 0.

### *Demo*

This application is deployed on Heroku. Please check it out [Here](https://steamlevelcalculator.herokuapp.com/)


![demo](/demo.png)



### *Technologies & Tools*
##### *Front End*
> Reactjs, jsx, javascript, styled-components
##### *Back End*
>Node/Express
##### *API's Used*
>Steam API [Documentation](https://partner.steamgames.com/doc/webapi/IPlayerService)

>REST Countries API [Documentation](https://restcountries.eu/)

### to run

1. clone repo
2. install dependencies of server and client
`yarn && cd client && yarn && cd ..`
3. build client
`yarn build-client`
4. go to steams [api key page](https://steamcommunity.com/dev/apikey) and register the domain this is going to run on (can just be localhost)
5. put the generated api key in a .env file in the root of the repo with Steam_API_Key=
6. start server
`yarn start`
