# Pypestream: Email Subscription App

Let’s build a small email app that lets users subscribe to receive Broadcast emails  about specific Topics.

## frontend

| dependencies | links |
| ------ | ----- |
| axios | [link](https://github.com/axios/axios#readme) |
| querystring | [link](https://github.com/sindresorhus/query-string#readme) |
| react | [link](https://reactjs.org/) |
| react-dom | [link](https://reactjs.org/docs/react-dom.html) |
| react-scripts | [link](https://github.com/facebook/create-react-app#readme) |

CSS Style - (html tags on index.html): [Materialize](https://materializecss.com/)

### `npm start`
Start react app.
Port: http://localhost:3000

<br>

## backend

| dependencies | links |
| ------ | ----- |
| cors | [link](https://github.com/expressjs/cors#readme) |
| express | [link](https://expressjs.com/) |
| sequelize | [link](https://sequelize.org/) |
| sqlite3 | [link](https://github.com/mapbox/node-sqlite3) |
| dotenv | [link](https://www.npmjs.com/package/dotenv) |
| http-codes | [link](https://www.npmjs.com/package/http-codes) |
| moment | [link](https://www.npmjs.com/package/moment) |
| nodemailer | [link](​https://nodemailer.com/about) |

| dev-dependencies | links |
| ------ | ----- |
| nodemon | [link](https://nodemon.io/) |
| sequelize-cli | [link](https://github.com/sequelize/cli#readme) |

### `npm start`
Start api server.
Port: http://localhost:3333

<br>

Database in: database/database.sqlite

The database.sqlite already contains some data.

### Api routes:

| verb | route |
| ------ | ------ |
| get | /api/user |
| post | /api/user |
| put | /api/user/:id |
| delete | /api/user/:id |
| get | /api/topic |
| post | /api/subscribe |
| post | /api/broadcast |
| get | /api/broadcast |
| get | /api/broadcast/:id |

### Project Requirements:

 ● It should be made available as a git repository (github, gitlab, bitbucket, etc).
 <br>
 ● It should have a README that discusses what you did, why you did it, etc.
 <br>
 ● It should build/run with minimal setup after cloning. 
 <br>
 ● The frontend should be written in React, preferably with hooks.  
 <br>
 &nbsp;&nbsp;○ The UI should give helpful feedback to the user ​(email already subscribed  to topic, fields are required/empty, topic does not exist, email failed to  send, etc). Can be a toast, message, etc.  
 <br>
 ● Please use the following technologies/packages: 
 <br>
  &nbsp;&nbsp;○ express or some other nodejs based server (can use graphql, sockets, or  REST)
  <br>
  &nbsp;&nbsp;○ nodemailer (​https://nodemailer.com/about/​)
  <br>
  &nbsp;&nbsp;○ mailtrap.io (​https://mailtrap.io/​) (​Instructions below​)  
  <br>
  &nbsp;&nbsp;○ sequelize ORM with sqlite file db  (​https://sequelize.org/master/manual/getting-started.html#installing​,  check option 2 for sqlite file)  
      <br>
      &nbsp;&nbsp;&nbsp;&nbsp;■ We would prefer not to spin up a separate db instance for testing,  but if you are most familiar with another DB and would be most  productive, feel free to use it.   
      <br>
      &nbsp;&nbsp;&nbsp;&nbsp;■ As a last resort, you can build the app with in-memory storage. 


### What I did here
1. Subscribe page.
<br />
&nbsp;&nbsp;- Form validation
<br />
&nbsp;&nbsp;- Subscribe email to the topic
<br />
&nbsp;&nbsp;- After clicking on the subscribe button, the form is submitted and reset.
<br />
&nbsp;&nbsp;- If a topic does not exist in the database, it is created.
<br />
&nbsp;&nbsp;- If email was already subscribed to the topic, the error message is displayed.
<br />
&nbsp;&nbsp;- You can subscribe an email to different topics.
<br />
2. Publish page
<br />
&nbsp;&nbsp;- Load all topics.<br />
&nbsp;&nbsp;- Form validation<br />
&nbsp;&nbsp;- message is broadcasted to all the users who are registered to the topic.<br />
&nbsp;&nbsp;- List the broadcast history<br />
&nbsp;&nbsp;&nbsp;&nbsp;● If you click on topic title, then you go to broadcast detail page.<br />
&nbsp;&nbsp;&nbsp;&nbsp;● If you click on `more` or `less`, the broadcast message gets expanded so that you can see the full content.<br />
&nbsp;&nbsp;&nbsp;&nbsp;● If you click on the other part of item, the detail view drawer is showed on the right side.<br />

3. Broadcast Detail page
<br />
&nbsp;&nbsp;- Load individual broadcast message including topic, created date and subscribers.