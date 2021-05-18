//подключение используемых пакетов, установленных посредством npm install
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require('mysql');
const swig = require('swig');

const app = express();

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);

//промежуточное ПО для получения данных из формы
const urlencodedParser = bodyParser.urlencoded({extended: true});

//для работы стилей и картинок при разворачивании сайта на сервере
app.use('/public', express.static('public'));

//какую страницу отображать при данном url
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/main_draft.html");
});

app.get("/main_draft.html", (req, res) => {
    res.sendFile(__dirname + "/main_draft.html");
});

app.get("/reg.html", (req, res) => {
    res.sendFile(__dirname + "/reg.html");
});

app.get("/office.html", (req, res) => {
    //res.sendFile(__dirname + "/office.html");
    if (person.people_id == -1) {
    	res.render('office', {});
    } else {
    	res.render('office_1', {name: person.name, surname: person.surname, nation: person.nation, email: person.email,
    							breed: dog.breed, nickname: dog.nickname, gender: dog.gender, birthdate: dog.birthdate,
    							weight: dog.weight, height: dog.height, color: dog.color});
    }
});

app.get("/office_1.html", (req, res) => {
    //res.sendFile(__dirname + "/office_1.html");
    res.render('office_1', {});
});

let person = {
	name: '',
	surname: '',
	nation: '',
	email: '',
	password: '',
	people_id: -1
}

let dog = {
	breed: '',
	nickname: '',
	gender: '',
	birthdate: '',
	weight: '',
	height: '',
	color: ''
}

let sql;


function getDBPersonData() {
	return new Promise(function(resolve, reject) {

		const connection = mysql.createConnection({
		  database: "reg",
		  host: "localhost",
		  user: "root",
		  password: ""
		});

		sql = `SET NAMES 'utf8'`;

		connection.query(sql, function(err, res) {
		    if (err) {
		    	console.log(err);
		    }
		    console.log(res);
		});

		sql = `SELECT * FROM people WHERE email = '${person.email}'`;
		
		connection.query(sql, function(err, res) {
		    if (err) {
		    	reject(err);
		    	console.log(err);
		    }
		    resolve(res);
		    console.log(res);
			person.name = res[0].name;
			person.surname = res[0].surname;
			person.nation = res[0].nation;
			person.email = res[0].email;
			person.password = res[0].password;
			person.people_id = res[0].people_id;
		});	

	});				
}


//отправляем данные со страницы в БД
app.post("/reg.html", urlencodedParser, (req, res) => {
    if(!req.body) return res.sendStatus(400);
    //выводим полученные в результате запроса данные в коносль (node)
    console.log(req.body);
    //посылаем и отображаем данные на странице (клиент)
    //res.send(`${req.body.secondName} - ${req.body.firstName}`);

	person.name = req.body.name;
	person.surname = req.body.surname;
	person.nation = req.body.nation;
	person.email = req.body.email;
	person.password = req.body.password;
	dog.breed = req.body.breed;
	dog.nickname = req.body.nickname;
	dog.gender = req.body.gender;
	dog.birthdate = req.body.birthdate;
	dog.weight = req.body.weight;
	dog.height = req.body.height;
	dog.color = req.body.color;

	//подключаемся к БД
	const connection = mysql.createConnection({
	  database: "reg",
	  host: "localhost",
	  user: "root",
	  password: ""
	});

	//сохраняем sql-запрос в переменную, задавай кодировку.
	sql = `SET NAMES 'utf8'`;

	/*
		Отправка sql-запроса на выполнение,
		если sql-запрос выполнился без ошибок, выводим результат выполнения,
		иначе - данные об ошибке	
	*/
	connection.query(sql, function(err, res) {
	    if (err) console.log(err);
	    console.log(res);
	});

	//сохраняем sql-запрос в переменную для добавления полученных данных в БД в таблицу
	sql = `INSERT INTO people (name, surname, nation, email, password) VALUES('${person.name}', '${person.surname}', 
					'${person.nation}', '${person.email}', '${person.password}')`;

	connection.query(sql, function(err, res) {
	    if (err) console.log(err);
	    console.log(res);
	});

	sql = `SELECT * FROM people WHERE email = '${person.email}'`;

	(function insertData() {
		return new Promise(function(resolve, reject) {
			connection.query(sql, function(err, res) {
			    if (err) {
			    	reject(err);
			    	console.log(err);
			    }
			    resolve(res);
			    console.log(res);
			    person.people_id = res[0].people_id;
			});			
		});
	}())
	.then(() => {
		sql = `INSERT INTO dogs (people_id, name, breed, gender, birthdate, weight, height, color) VALUES('${person.people_id}', '${dog.nickname}', '${dog.breed}', 
						'${dog.gender}', '${dog.birthdate}', '${dog.weight}', '${dog.height}', '${dog.color}')`;
		console.log(person.people_id);
		connection.query(sql, function(err, res) {
		    if (err) console.log(err);
		    console.log(res);
		});
		connection.end();
	})

    //res.sendFile(__dirname + "/office_1.html");
    res.render('office_1', {});
});

let isSuccessAuth = false;

app.post("/office.html", urlencodedParser, (req, res) => {
    if(!req.body) return res.sendStatus(400);
    console.log(req.body);

	person.email = req.body.email;
	person.password = req.body.password;

	const connection = mysql.createConnection({
	  database: "reg",
	  host: "localhost",
	  user: "root",
	  password: ""
	});

	sql = `SET NAMES 'utf8'`;

	connection.query(sql, function(err, res) {
	    if (err) console.log(err);
	    console.log(res);
	});

	sql = `SELECT * FROM people WHERE email = '${person.email}' and password = '${person.password}'`;

	(function isCorrectValue() {
		return new Promise(function(resolve, reject) {
			connection.query(sql, function(err, res) {
			    if (err) {
			    	reject(err);
			    	console.log(err);
			    }
			    resolve(res);
			    console.log(res);
			    isSuccessAuth = true;
			    if (!res.length) {
			    	isSuccessAuth = false;
			    	console.log('Неверное имя пользователя или пароль!');
			    }
			});			
		});
	}())
	.then(() => {
		if (isSuccessAuth) {
			getDBPersonData()
			.then(() => {
				sql = `SELECT * FROM dogs WHERE people_id = '${person.people_id}'`;
				connection.query(sql, function(err, res) {
				    if (err) {
				    	console.log(err);
				    }
				    console.log(res);
					dog.breed = res[0].breed;
					dog.nickname = res[0].name;
					dog.gender = res[0].gender;
					dog.birthdate = res[0].birthdate.toISOString().substr(0, 10);
					dog.weight = res[0].weight;
					dog.height = res[0].height;
					dog.color = res[0].color;
				});
				res.render('office_1', {name: person.name, surname: person.surname, nation: person.nation, email: person.email,
    							breed: dog.breed, nickname: dog.nickname, gender: dog.gender, birthdate: dog.birthdate,
    							weight: dog.weight, height: dog.height, color: dog.color});
    			connection.end();						
			})
		} else {
			res.render('office', {errMsg: 'Неверное имя пользователя или пароль!'});
		}
	});

});

//"слушаем" запросы на порте 3000
app.listen(3000);
