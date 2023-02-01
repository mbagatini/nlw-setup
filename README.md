<p align="center">Next Level Week - Ignite</p>

<h3 align="center">
  NLW SETUP - One step every day
</h3>

<p align="center">
  <a href="https://rocketseat.com.br">
    <img alt="NLW" src="https://img.shields.io/badge/NLW-11-%2304D361">
  </a>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
</p>

<img alt="" src="https://user-images.githubusercontent.com/17517028/216144509-d7969158-2025-4fb1-a0d6-ff0661d7ea66.png" />

# 📅 About this project

This project was inspired by the code frequency of Github, but instead of commits, it trackers habits!

It's made for you to register the activities you want to do and when to do them. Eg: read for 1 hour per day, practice yoga 3x a week, and drink 2L of water every day...

Then every day you keep the activities on track, crossing the activities you could accomplish off the list and checking the ones still pending. 

This application is divided into three parts: the server, web, and mobile app.


# ⚙ Backend

### Technology Stack

<p align="left">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" />
 </p>
 
 ### How to run it?

Clone the repository to your machine.

Enter on server folder:
```bash
$ cd server
```

Install the dependencies:

```bash
$ npm install
```

Copy the `.env.example` file and change it's content to your environment.
It contains the database file and the JWT token secret.

Now it's time to run the migration:

```bash
$ npx prisma migrate dev
```

A seed file was created to glam up the summary table. So, run the command to seed the database:

```bash
$ npx prisma seed
```

If the configuration is ready and connected to the database, let's start the application:
```bash
$ npm run dev
```

### API routes

Inside server folder, there is a file called `Insomnia-nlw-setup.json`. This file contains all the requests provided by the API.

Import it on Insomnia and it's ready to use.

### Push notifications

This project was a nice opportunity to implement push notifications using the web-push library. 

You can check more details about Push API in the Mozilla [official documentation](https://developer.mozilla.org/en-US/docs/Web/API/PushManager).

The cool thing is that it's possible to send notifications from backend to the user using this API, even though the web application is not opened on the browser. The magic behind it is the use of service workers on frontend side.


![push](https://user-images.githubusercontent.com/17517028/216156841-c0d5c9f6-c9e7-4984-94fa-f208ca03590d.png)


# 💻 Front-end

![web home page](https://user-images.githubusercontent.com/17517028/216154952-02b720c2-7583-4b87-aa6f-1de87a31d49f.png)

### Technology Stack

<p align="left">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" />
 </p>
 
### App purpose

- Create new habits
- Keep habits on track
 
### How to run it?

Enter on web folder:
```bash
$ cd web
```

Install the dependencies:

```bash
$ npm install
```

Let's start the application:
```bash
$ npm run dev
```

# 📱 Mobile

### Technology Stack

<p align="left">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white" /> 
 </p>

### App purpose

The mobile project is still under development due some environment problems with SO. Hope to finish it soon.

### How to run it?

Enter on mobile folder:
```bash
$ cd mobile
```

Install the dependencies:

```bash
$ npm install
```

Let's start the application:
```bash
$ expo start
```

You can run the application directly on your phone, using the Expo Go app, or use an emulator.


# 🎨 Application layout

You can check the layout of this project clicking in the link below:

 - [Check on Figma](https://www.figma.com/file/vJ2z97aKPpBemif1N0Et7K/Habits-(i)-(Community)?node-id=6%3A1628&t=L8HfLh236sRqJNAk-1)

You must have Figma account to access it!

# 📝 License

This project is under MIT license.
