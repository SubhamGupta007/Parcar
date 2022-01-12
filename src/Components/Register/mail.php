<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$address=$_POST['address'];
$city=$_POST['city'];
$state=$_POST['state'];
$country=$_POST['country'];
$pincode=$_POST['pincode'];
$phone=$_POST['phone'];
$areaps=$_POST['areaps'];
$capacityps=$_POST['capacityps'];
$floorscap=$_POST['floorscap'];
$slotspf=$_POST['slotspf'];
$ipcamera=$_POST['ipcamera'];
$to = $email;
$subject = "Thank you for Registering with Parcar!";
$txt ="Thank you for your interest in using ParCar solutions for your Parking Space! We will be processing your application and getting back to you soon. Here is a copy of your registration responses, if you think there is a change please contact us by replying to this mail.".
"\r\nName = ". $name . "\r\n  Email = " . $email . "\r\n Address =" . $address. "\r\n City =" . $city
. "\r\n State =" . $state. "\r\n Country =" . $country. "\r\n Pincode =" . $pincode. "\r\n Phone =" . $phone
. "\r\n Area of your parking Space =" . $areaps. "\r\n Capacity of your parking space =" . $capacityps
. "\r\n Number of Floors =" . $floorscap. "\r\n Slots per Floor =" . $slotspf. "\r\n Have IP Camera at your parking system? =" . $ipcamera;
$headers = "From: goyaldevansh19991999@gmail.com" . "\r\n" .
"CC: goyaldevansh19991999@gmail.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
?>