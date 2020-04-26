function validateCNP()
{
	var cnp = document.getElementById("cnp");
	var zi = document.getElementById("zi");
	var luna = document.getElementById("luna");
	var an = document.getElementById("an");
	var result = document.getElementById("result");
	var alerts = document.getElementById("alerts");
	
	if (cnp.value === "" || zi.value === "" || luna.value==="" || an.value === "")
	{
		alerts.innerHTML = "Ati uitat sa completati un camp!";
		return;
	}
	
	if (parseInt(zi.value) < 1 || parseInt(zi.value) > 31)
	{
		alerts.innerHTML = "Ziua introdusa nu este valida!";
		return;
	}
	
	if (parseInt(luna.value) < 1 || parseInt(luna.value) > 12)
	{
		alerts.innerHTML = "Luna introdusa nu este valida!";
		return;
	}
	
	if (parseInt(an.value) < 1900 || parseInt(an.value) > (new Date()).getFullYear())
	{
		alerts.innerHTML = "Anul introdus nu este valid!";
		return;
	}
	
	if (cnp.value.length < 13)
	{
		alerts.innerHTML = "CNP-ul este prea scurt!";
		return;
	}

	if (cnp.value.length > 13)
	{
		alerts.innerHTML = "CNP-ul este prea lung!";
		return;
	}
	
	var cnpyear = cnp.value.substr(1,2);
	var cnpmonth = cnp.value.substr(3,2);
	var cnpday = cnp.value.substr(5,2);
	
//	var result = document.getElementById("result");
	if (an.value.search(cnpyear)>=0 && cnpmonth.search(luna.value) >=0 
		&& cnpday.search(zi.value)>=0)
		result.innerHTML = "CNP-ul este valid";
	else
		result.innerHTML = "CNP-ul este invalid";
}