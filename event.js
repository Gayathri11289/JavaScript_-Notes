// -------------Events--------------------
// ------ONCLICK EVENT-----
function display()
{
    alert("This is an onclick event")
}

// -----HTML code -------------
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Varibles in js</title>
    <script src="event.js"></script>
</head>
<body>
    <input type="submit" onclick="display()">
</body>
</html>

{/* /* -----------ONMOUSEOVER EVENT---------- */ */}
function display()
{
    alert("This is an onmouseover event")
}

{/* // -------HTML Code-------------- */}
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Varibles in js</title>
    <script src="event.js"></script>
</head>
<body>
    <input type="submit" onmouseover="display()">
</body>
</html>


{/* //-----------ONMOUSEOUT EVENT-------- */}
function display()
{
    alert("This is an onmouseout event")
}
{/* 
//-------HTML code------ */}
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Varibles in js</title>
    <script src="event.js"></script>
</head>
<body>
    <input type="submit" onmouseout="display()">
</body>
</html>

{/* //--------ONCHANGE EVENT----------- */}
function display(inpt)
 {
     alert("This is changed Name"+" "+inpt)
 }
{/* 
//----- HTML code------- */}
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Varibles in js</title>
    <script src="event.js"></script>
</head>
<body>
    <!-- <input type="submit" onmouseout="display()"> -->
    Name: <input type="text" value="Ram" onchange="display(this.value)">
</body>
</html>

