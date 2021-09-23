<div align="center">
  <h1>Turing API</h1>

  <p>The application programming interface of Turing Project</p>
</div>

---


**Table of contents**

- [About the project](#about-the-project)
  - [About Turing API](#about-turing-api)
- [Running Turing API](#running-turing-api)

## About the project

The Turing Cinemas project is a software develepment project implented at Cambodia Academy of Digital Technology (CADT) for the ‘Project I’ subject between July and September 2021.

The project comprises of 5 systems:

- Turing API (this repo): the REST API and central source-of-truth for all systems.
- [Turing Web](https://github.com/CSG6Project1/turing-web): the website for Turing Cinemas’ customers.
- [Turing API](https://github.com/CSG6Project1/Movie-Theater): the REST API and central source-of-truth for all systems.
- [Turing Admin](https://github.com/CSG6Project1/turing-admin): the admin web portal for cinema employees.
- [Turing Mobile](https://github.com/CSG6Project1/turing-mobile): the mobile app for Turing Cinema’s customers.
- [Turing Check-in](https://github.com/CSG6Project1/ScannerTuring): the mobile app used by cinema employees to check-in movie tickets.

The project was implemented by [Hy Sothyrith](https://github.com/hysothyrith), [Chhoun Sophanon](https://github.com/SophanonChhoun), [Chhun KimHong](https://github.com/ChhunKimHong), [Leav Chandara](https://leavchandara-profile.netlify.app/), and [Chorn Rithborey](https://boreyjr.tech/), under the advisory of Lecturer Kong Kannika.

### About Turing API

Turing API is the application programming interface which implemented in Laravel. It includes all the functionalities of Turing project which allow all the application to communicate.

# Running Turing API  
- Clone
```shell
 git clone https://github.com/CSG6Project1/Movie-Theater.git
```
- Set Environment Variables
```shell
cp .env.example .env
```
Turing Api requires a working telegram token key for sending messages in Telegram, stripe key for verify payment cards and paying fess, and email address for sending email to get verify code for reset password.

- You have to input email and password in env file 
```shell
MAIL_USERNAME={Your email}
```
```shell
MAIL_PASSWORD={Your email password}
```

- You have to input telegram token and chat id
```shell
TELEGRAM_TOKEN={Your telegram token}
```
```shell
TELEGRAM_CHAT_ID={Your telegram chat id}
```
You can follow [this Link](https://www.alphr.com/find-chat-id-telegram/) in order to get telegram token and chat id

- You have to input stripe key and secret
```shell
STRIPE_KEY={Your stripe key}
```
```shell
STRIPE_SECRET={Your stripe secret}
```
You can follow [this Link](https://www.appinvoice.com/en/s/documentation/how-to-get-stripe-publishable-key-and-secret-key-23) in order to get stripe key and secret

- Install & update Composer package 
```php
composer install & composer update 
```
- Genrate Application Key 
```php
php artisan key:generate
```
- Migrate Database 
```php 
php artisan migrate
``` 
- Generate seeders 
```php
php artisan db:seed
```
After you run this command, there will be some data in your database such as users, role, permission, currency and other more.
User email: admin@Admin.com
User password: password
- Run project in local server 
```php
php artisan serve 
```

- You need to have sub folder name as uploads in public. Furthermore, you also need to have sub folder name as images in uploads. Folder images contains other folders such as original, w154, w185, w300, and w500.


