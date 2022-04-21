# Express-Sequelize-API boilerplate

This is a simple boilerplate for creating APIs with NodeJs express framework.
Here API access token encapsulated/encrypted with JWT token based system.

## Getting Started

You can download this repo or clone using below command. (folder-name will be project folder in which you want to start your project).
```
git clone https://github.com/gauravgitgithub/express-restapi-mysql-sequelize-boilerplate.git <folder-name>
```
or from **Download Zip**
```
https://github.com/gauravgitgithub/express-restapi-mysql-sequelize-boilerplate.git
```
### Project Setup
Once you clone or download project go into you folder

>now copy **.env.local** file to **.env** file

### Installing
```
> npm install or yarn install  (this will install all dependent libraries)
```

### Database Config Setup
Create new database (let's say i'm going to use mysql and my database name is **express-api**).
so in my **.env** file will set below parameters.
```
DB_HOST=localhost               # database connection host
DB_USER=root                    # database username
DB_PASS=secret@123              # database password
DB_NAME=express-api             # database name
DB_DIALECT=mysql                # database dialect
DB_PORT=3306                    # database port
```
some other inportant parameters/keys in **.env** file
```
APP_HOST=localhost      # application host name
APP_PORT=8000           # application port
SECRET=secret           # secret key for encrypt/decrypt JWT token
```

are you going to user google captcha while register? then also add/update in .env 
```
IS_GOOGLE_AUTH_ENABLE=true          # enable google captcha
GOOGLE_CAPTCHA_SECRET_CLIENT=secret
GOOGLE_CAPTCHA_SECRET_SERVER=secret
GOOGLE_CAPTCHA_URL=https://www.google.com/recaptcha/api/siteverify
```


### Migration and Seeders run
After creating database and updating .env file run below commands
```
> node_modules/.bin/sequelize db:migrate
> node_modules/.bin/sequelize db:seed:all
```
Migration will create table users and seed some default users
* **users** - this is normal user table with some required fields like (firstName, lastName, email, password, and isAdmin)
Seeders will create one new client entry in application and 2 users entry one admin and one normal user.

`npm start` to run your project 
>Everythig is setup and you are good to go now. Happy Coding :)

## Detailed Documentation
>Go through the url below to see the detailed documentation
>https://documenter.getpostman.com/view/6446110/UyrADw5d

## Example APIs
>here attached link of postman collection you can download and check in local
>https://www.postman.com/collections/a98570e3a8e37582b5f6

### Contact 
* Connect with [@me](https://www.linkedin.com/in/gauravrajsinha/) on LinkedIn 
* Email <gauravraj.1998.sinha@gmail.com>

<a href="https://www.buymeacoffee.com/gauravgitgithub" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>
