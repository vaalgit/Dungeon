Dungeon 2
===========

# vue

> Vue source of Dungeon 2

## Build Setup

``` bash
# install dependencies  or unzip node_modules.rar
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

# python

> Please use python<=3.6.4 or python==2.7
``` bash
# install dependencies
pip install -r requirements.txt
```

# Running Locally

``` bash
python manage.py runserver localhost:8080 --nostatic

```
Your app should now be running on [localhost:8080](http://localhost:8080/).


## Deploying to Heroku

> You can add remote configuration in .git\config
Sample:

```bash
[remote "heroku"]
	url = https://git.heroku.com/[heroku-instance-name].git
	fetch = +refs/heads/*:refs/remotes/heroku/*
```

```bash
heroku create
git push heroku master

heroku open
```