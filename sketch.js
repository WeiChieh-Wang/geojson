let jsobj;
let img;
let btn;
let txt;
function preload() {
   txtval=document.getElementById("txtE").value;
  jsobj=loadJSON("https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-10-01&endtime=2020-11-02&minmagnitude="+txtval);
  img=loadImage("wgs84.png");//匯入圖片
  btn=document.getElementById("btnS");
  
  btn.addEventListener('click',()=>{   
    window.location.reload();
  });
}


function setup() {
  createCanvas(360, 180);//根據經緯度設定畫布大小
  image(img,0,0,360,180);
  print(jsobj);
  //把每一筆資料取出，並暫時用v來稱呼該筆資料的內容
  jsobj.features.forEach((v)=>{
    //print(v.geometry.coordinates[0]);
    let lon=v.geometry.coordinates[0]+180;
    let lat=180-(v.geometry.coordinates[1]+90);
    let ma=v.properties.mag;
    noStroke();
    fill(150,150,50,5);
    circle(lon,lat,ma*5);
  });
  //經緯度
  /*print(jsobj.features[2].geometry.coordinates[0]);
  print(jsobj.features[2].geometry.coordinates[1]);
  
  print(jsobj.features[2].properties.mag);*/
}

function draw() {
  //background(220);
}