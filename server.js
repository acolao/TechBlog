require('dotenv').config()

const express = require('express')
const { join } = require('path')
const session = require('express-session')
const exphbs = require('express-handlebars')

const app = express()

const sequelize = require(./config)