function  validation()								 
{ 
	var fname = document.forms["RegForm"]["FName"];	
	var lname = document.forms["RegForm"]["LName"];
	var age = document.forms["RegForm"]["age"];	 
	var phone = document.forms["RegForm"]["phone"];
	var email = document.forms["RegForm"]["EMail"]; 
	var password = document.forms["RegForm"]["Password"];
	var confpassword = document.forms["RegForm"]["confirmPassword"];
	var address=document.forms["RegForm"]["Address"];
	
	var letters = /^[A-Za-z]+$/;
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    var error=0;
	document.getElementById('name_error').innerHTML = '';
	document.getElementById('lname_error').innerHTML = '';
	document.getElementById('age_error').innerHTML = '';
	document.getElementById('phone_error').innerHTML = '';
	document.getElementById('email_error').innerHTML = '';
	document.getElementById('pass_error').innerHTML = '';
	document.getElementById('conf_error').innerHTML = '';
	document.getElementById('add_error').innerHTML = '';
	

   
	if (fname.value == "")
	{
		document.getElementById('name_error').innerHTML = 'Please enter first name ';
    	error++;

	}
	if(!fname.value.match(letters))
    {
    	document.getElementById('name_error').innerHTML = 'Please enter valid first name ';
    	error++;
    }
	if (lname.value == "" )
	{
		document.getElementById('lname_error').innerHTML = 'Please enter  last name ';
    	error++;

	}

	if(!lname.value.match(letters))
    {
    	document.getElementById('lname_error').innerHTML = 'Please enter valid last name ';
    	error++;
    }

	if(age.value<=18)
	{
	
    	document.getElementById('age_error').innerHTML = 'Age should be greater than 18';
    	error++;
	}
	if(age.value=="")
	{
	
    	document.getElementById('age_error').innerHTML = 'Enter Age ';
    	error++;
	}


	var phoneno = /^\d{10}$/;
	if(!(phone.value.match(phoneno)))
	{
	 
    	document.getElementById('phone_error').innerHTML = 'Invalid phone number';
    	error++;
    }
  

    if(!(email.value.match(mailformat)))
    {
    	document.getElementById('email_error').innerHTML = 'Invalid email';
    	error++;
    }
   

    if((password.value).length<6)
	{
    	document.getElementById('pass_error').innerHTML = 'Length of the password should be atleast 6';
    	error++;
	}

	if((password.value)!=(confpassword).value)
	{

		
    	document.getElementById('conf_error').innerHTML = 'confirm password should be same as password';
    	error++;


	}
	if(address.value=="")
	{
		document.getElementById('add_error').innerHTML = 'Enter Address ';
    	error++;

	}

   if(error==0)
   {
	t1=" "+String(document.forms["RegForm"]["tech1"].value);
	t2=" "+String(document.forms["RegForm"]["tech2"].value);
    t3=" "+String(document.forms["RegForm"]["tech3"].value);
    t4=" "+String(document.forms["RegForm"]["tech4"].value);
    t5=" "+String(document.forms["RegForm"]["tech5"].value);
    t6=" "+String(document.forms["RegForm"]["tech6"].value);
    t7=" "+String(document.forms["RegForm"]["tech7"].value);
    t8=" "+String(document.forms["RegForm"]["tech8"].value);
    t9=" "+String(document.forms["RegForm"]["tech9"].value);
    t10=" "+String(document.forms["RegForm"]["tech10"].value);



	message = "<b>Data you Entered </b>:<br>";
	message += "<ul><li>FIRST NAME: " + document.forms["RegForm"]["FName"].value;
	message += "<li> LAST NAME:" + document.forms["RegForm"]["LName"].value;
	message += "<li> AGE: </b>" + document.forms["RegForm"]["age"].value.toString();
	message += "<li> GENDER: </b>" + document.forms["RegForm"]["gender"].value.toString();
 	message += "<li> PHONE: " + String(document.forms["RegForm"]["phone"].value);
	message += "<li> EMAIL: </b>" + String(document.forms["RegForm"]["EMail"].value);
	message += "<li> ADDRESS: </b>" + String(document.forms["RegForm"]["Address"].value);
	message += "<li> COURSE: </b>" + String(document.forms["RegForm"]["course"].value);
    message += "<li> TECHNOLOGY: </b>" + t1 + t2 + t3  + t4 + t5 + t6 + t7 + t8 + t9 + t10 ;
    message += "<li> PASSWORD: </b>" + String(document.forms["RegForm"]["Password"].value);

	document.write(message);

	return true; 
 }
 return false ;
}
