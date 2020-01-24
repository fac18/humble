# humble
- dan running the UX hype
- judith devving the ops
- kin mastering the scrum
- reggie keeping the quality high

---

## Stack

We are building an app that has a React frontend (see the client folder) with an node/Express backend that serves the React as well as a pSQL store, accessible to the frontend as an API.

---

## Installation

First, clone the repo as usual.

In order to enable deployment but separate concerns as much as possible, we actually have three different npm environments - one at the _root_, one in the _client_ folder, and one in the _server_ folder. To handle installation for all of this, run the following code:

```javascript
npm i && cd client && npm i && cd ../server && npm i && cd ..
```

---

### Scripts

You can then run `npm run dev:start` or `npm run dev:build` from any directory.

The former will run the Express server on port 3001, and listen for changes.

The latter will first do a fresh production build of the React app in the client folder, and then do the same as above.

Therefore, any changes to the client side code will require a full rebuild in order to see in the browser.

We are not currently using the React development server (booted by running `npm start` from the client folder) since it breaks without the Express server making the database API available - however, this would not be the case if we were handling our errors properly, so we aim to be able to at a later stage.

Running `npm test` in the _client_ and _server_ folders will run their respective test suites, while running it from the root of the project will run first the _client_ tests, and then the _server_ tests.

---

## Goals

![](https://i.imgur.com/af8AV4w.jpg)

---

#### initial design phase

![](https://i.imgur.com/bnHbh77.jpg)

---

![](https://i.imgur.com/OxwwKRO.jpg)

---

![](https://i.imgur.com/eCZVTZy.jpg)

#### rapid prototyping

![](https://i.imgur.com/sZ5myhC.jpg)

---

![](https://i.imgur.com/wQWFzJL.jpg)

#### definition workshop

![](https://i.imgur.com/i3lW5D7.jpg?1)

---

![](https://i.imgur.com/6dCQWv3.jpg?1)

---

![](https://i.imgur.com/bWywMAU.jpg?1)

#### prototyping

![](https://i.imgur.com/pcKR4eO.jpg?1)

---

#### humble sign-up user journey

1.	As a user I would like to be able to sign up and make an account on 	humble.

2.	As a user a user I would like to know what is expected from me and 	what I can expect from others on the humble platform.

3.	As a user I would like to be able to know that my data is secure and 	my privacy will be respected.

---

4.	As a user I would like to be able to create a profile that includes my 	name and postcode and a picture.

5. 	As a user I would like to be able to upload skills, experience or 	knowledge that I have to offer.

6.	As a user I would like to be able to upload a problem that I would 	like help with to solve.

---

7.	As a user I would like to be able to see a community map that shows 	what skills, experience or knowledge is on offer in my area.

8.	As a user I would like to be able to search for by category for skills, 	experience and knowledge that is on offer in my area.

9. 	As a user I would like to be able to search by category for any 	problems that people have in my area that I might be able to help 	with.

---

10.	As a user I would like to be able to sort my search results by trust  or 	location.

11.	As a user I would like to be able to look at another users profile and 	see their name, location and trust rating and history of their 	connections on the platform, and be able to make contact with them.

12.	A a user I would like to be able to see my own profile, edit and delete 	it.

---

#### pre-user test

![](https://i.imgur.com/Pmn6uMR.png)

---

![](https://i.imgur.com/HO5aeIM.png)

---

![](https://i.imgur.com/TjuALUT.png)

---

![](https://i.imgur.com/9XEkf89.png)

---

### user testing/insights

---

#### 1) consistency of styling and UI elements (caps, buttons, teach/learn toggle)

![](https://i.imgur.com/9CjHMWN.png)

![](https://i.imgur.com/wplWp1B.png =270x)


---

#### 2) wording/language (make contact, teach/learn/skills/problems, onboarding)

![](https://i.imgur.com/9CjHMWN.png) ![](https://i.imgur.com/msx2Swt.png)

![](https://i.imgur.com/8w3U0xn.png)



---

#### 3) map/list view default

![](https://i.imgur.com/46SXjyk.png) ![](https://i.imgur.com/Fmo9LXh.png)


---

#### 4) navigation (mostly very easy, add skills/problems menu)

![](https://i.imgur.com/8cvDunj.png)

---

#### 5) not understanding the app's concept??




---

### post-user test

refinements were made 

![](https://i.imgur.com/tGYSXqs.jpg?1)

![](https://i.imgur.com/9rJzdgr.jpg)

![](https://i.imgur.com/nx3ZeKE.jpg)

updates were applied



---

### Final Figma

![](https://i.imgur.com/oMOwQgi.png)

---

## Style Guide

See our [style guide](https://github.com/fac18/humble/issues/2) here

---

## Sprint #1

### Architecture 

![](https://i.imgur.com/bXMCoZR.jpg)

---

### Schema

[![](https://i.imgur.com/b8p0unB.png)](https://dbdiagram.io/d/5e2844749e76504e0ef0896f)

---

## Style Guide

See our [style guide](https://github.com/fac18/humble/issues/2) here

---

![](https://i.imgur.com/ksp4zw1.jpg)
