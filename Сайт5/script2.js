var date = new Date()
var Nowyear = date.getFullYear()
var Nowmonth = date.getMonth()
var Monthstart = Nowmonth
var Nowday = date.getDate()
var DateThis = Nowday
var See = Nowday

var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Февраль"]

document.addEventListener('DOMContentLoaded', function()  {
		day()
		MadeCal()
		let mon = document.getElementById("monthname")
		.textContent = months[Nowmonth]
})

function Accaunt() {
	window.location.href = "Форма5.html"
}

function day() {
	const paragraph = document.getElementById("date2")
	paragraph.textContent = See
}

function Pr() {
	See -= 1
	let year = Nowyear
	let month = Nowmonth
	if (See < 1) {
		let date2 = new Date(year, month, 0).getDate()
		See = date2
		month -= 1
		Nowmonth -= 1
	}
	day()
	MadeCal()
}

function Fu() {
	See += 1
	let year = Nowyear
	let month = Nowmonth
	let date2 = new Date(year, month-1, 0).getDate()
	if (See > date2) {
		See = 1
		month += 1
		Nowmonth += 1
	}
	day()
	MadeCal()
}

function choice(i) {
	See = i
	MadeCal()
	day()
}

function prevm() {
	Nowmonth -= 1
	See = 0
	let mon = document.getElementById("monthname")
	mon.textContent = months[Nowmonth]
	MadeCal()
}

function futm() {
	Nowmonth += 1
	See = 0
	let mon = document.getElementById("monthname")
	mon.textContent = months[Nowmonth]
	MadeCal()
}

function MadeCal() {
	let year = Nowyear
	let month = Nowmonth
	let day = Nowday
	let daysInMonth = new Date(year, month + 1, 0).getDate()
	var myDiv = document.getElementById("calenplace")
	myDiv.remove()
	myDiv = document.createElement("div")
	myDiv.className = "calenplace"
	myDiv.setAttribute('id', 'calenplace');
	var Main = document.getElementById("calendar")
	Main.appendChild(myDiv)
	let list = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"]
	for(let i = 1; i<8; i++) {
		let des = document.createElement("p")
		des.textContent = list[i-1]
		if (i == 1) {
			des.style.marginLeft = "0.6vw"
		}
		des.style.width = "3vw"
		des.style.height = "1vh"
		des.style.float = "left"
		des.style.fontSize = "120%"
		des.style.marginTop = "1vh"
		myDiv.appendChild(des)
	}
	let date2 = new Date(year, month, 1)
	let dayOfWeek = date2.getDay()
	if (dayOfWeek == 0) {
		dayOfWeek = 7
	}
	for(let i = 1; i<=daysInMonth; i++) {
		const button1 = document.createElement("button")
		button1.textContent = i
		button1.style.width = "3vw"
		button1.addEventListener('click', function() {
			choice(i)
		})
		//new styles
		button1.addEventListener('mouseenter', function() {
			button1.style.background = "lightgrey"
			button1.style.cursor = "pointer"
		})
		button1.addEventListener('mouseleave', function() {
			button1.style.background = "transparent"
			button1.style.cursor = "auto"
		})
		button1.style.height = "5vh"
		button1.style.border = "none"
		button1.style.background = "transparent"
		button1.style.borderRadius = "5vh"
		//end of new styles
		if (i == Nowday && month == Monthstart) {
			button1.style.border = "4px solid red"
		}
		if (i == 1) {
			let s  = ((dayOfWeek-1)*3).toString() + "vw"
			button1.style.marginLeft = s
		}
		if (i == See) {
			button1.style.border = "3px solid green"
		}
		myDiv.appendChild(button1)
	}
}
