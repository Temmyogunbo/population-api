# population-api

## Description
- Population Management System that contains a list of locations and the total number of residents in each location broken down by gender. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

Before this application can work, you need the following:
- [NodeJS](https://nodejs.org/en/) -A platform to run javascript, not in the browser
- Postgres An SQL database that would persist data

### INSTALLING
1. Download or clone the project [here](https://github.com/Temmyogunbo/population-api.git)
2. Run `npm install` to install packages. 
3. Rename the .env.sample file to .env and edit
4. Create a `locations` database for development not compulsory
5. Run sequelize db:migrate to create table
3. Start the server by running `npm run start:dev` or `yarn start:dev`.


 Test the API using `postman` or `insomnia`

 ### Tech
The app is built using the following tech:
1. [Hapijs](https://hapijs.com/) as server-side framework
2. [Postgresql](https://www.postgresql.org/) as database
3. [JOI](https://github.com/hapijs/joi) as object schema validator

## Author

* **Emmanuel Ogunbo** 

## License

Incidencia-API is  [MIT licensed](https://github.com/Temmyogunbo/population-api/blob/master/LICENSE) 
