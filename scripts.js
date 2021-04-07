"use strict";var nationInfo={united_states:{name:"United States",info:"Primarily located in North America, the <strong>USA</strong> consists of 50 states, a federal district, five major self-governing territories, 326 Indian reservations, and some minor possessions.",flags:[{img:"img/flags/us.svg",name:"USA"}]},canada:{name:"Canada",info:"The world's second-largest country by total area. Its southern and western border with the <strong>United States</strong>, stretching 8,891 kilometres (5,525 mi), is the world's longest bi-national land border.",flags:[{img:"img/flags/ca.svg",name:"Canada"}]},mexico:{name:"Mexico",info:"A country in the southern portion of North America. It is the country with the most native spanish speakers in the world.",flags:[{img:"img/flags/mx.svg",name:"Mexico"}]},panama:{name:"Panama",info:"A transcontinental country in Central America and South America. ",flags:[{img:"img/flags/pa.svg",name:"Panama"}]},haiti:{name:"Haiti",info:"A country located on the island of Hispaniola in the Greater Antilles archipelago of the Caribbean Sea. It occupies the western three-eighths of the island which it shares with the <strong>Dominican Republic</strong>.",flags:[{img:"img/flags/ht.svg",name:"Haiti"}]},jamaica:{name:"Jamaica",info:"An island country situated in the Caribbean Sea. ",flags:[{img:"img/flags/jm.svg",name:"Jamaica"}]},peru:{name:"Peru",info:"A country in western South America. <strong>Peru</strong> is home to Machu Picchu, one of the new seven wonders of the world.",flags:[{img:"img/flags/pe.svg",name:"Peru"}]},dominican_republic:{name:"Dominican Republic",info:"A country located on the island of Hispaniola in the Greater Antilles archipelago of the Caribbean sea. The <strong>Dominican Republic</strong> occupies the eastern five-eighths of the island, which it shares with <strong>Haiti</strong>, making Hispaniola one of only two Caribbean islands, along with Saint Martin, that are shared by two sovereign states.",flags:[{img:"img/flags/do.svg",name:"Dominican Republic"}]},cuba:{name:"Cuba",info:"The main island of Cuba is the largest island in the Caribbean, with an area of 104,556 km&sup2; (40,369 sq mi).",flags:[{img:"img/flags/cu.svg",name:"Cuba"}]},caribbean:{name:"Caribbean",info:"The Caribbean is a sea, presumably mentioned to cover several island nations not mentioned in the song such as <strong>St. Kitts and Nevis</strong>, <strong>St. Lucia</strong>, <strong>Grenada</strong>, <strong>Dominica</strong>, <strong>Antigua and Barbuda</strong>, and so on.",flags:[]},greenland:{name:"Greenland",info:"An autonomous territory within the Kingdom of Denmark. Greenland is the world's largest island (not including Australia and continental mainlands).",flags:[{img:"img/flags/gl.svg",name:"Greenland"}]},el_salvador:{name:"El Salvador",info:"A country in Central America.",flags:[{img:"img/flags/sv.svg",name:"El Salvador"}]},puerto_rico:{name:"Puerto Rico",info:"",flags:[]},Colombia:{name:"Colombia",info:"",flags:[]},Venezuela:{name:"Venezuela",info:"",flags:[]},Honduras:{name:"Honduras",info:"",flags:[]},Guyana:{name:"Guyana",info:"",flags:[]},Guatemala:{name:"Guatemala",info:"",flags:[]},Bolivia:{name:"Bolivia",info:"",flags:[]},Argentina:{name:"Argentina",info:"",flags:[]},Ecuador:{name:"Ecuador",info:"",flags:[]},Chile:{name:"Chile",info:"",flags:[]},Brazil:{name:"Brazil",info:"",flags:[]},costa_rica:{name:"Costa Rica",info:"",flags:[]},Belize:{name:"Belize",info:"",flags:[]},Nicaragua:{name:"Nicaragua",info:"",flags:[]},Bermuda:{name:"Bermuda",info:"",flags:[]},Bahamas:{name:"Bahamas",info:"",flags:[]},Tobago:{name:"Tobago",info:"",flags:[]},san_juan:{name:"San Juan",info:"",flags:[]},Paraguay:{name:"Paraguay",info:"",flags:[]},Uruguay:{name:"Uruguay",info:"",flags:[]},Surinam:{name:"Surinam",info:"",flags:[]},french_guiana:{name:"French Guiana",info:"",flags:[]},Barbados:{name:"Barbados",info:"",flags:[]},Guam:{name:"Guam",info:"",flags:[]},Norway:{name:"Norway",info:"",flags:[]},Sweden:{name:"Sweden",info:"",flags:[]},Iceland:{name:"Iceland",info:"",flags:[]},Finland:{name:"Finland",info:"",flags:[]},germany:{name:"Germany / West Germany",info:"",flags:[]},Switzerland:{name:"Switzerland",info:"",flags:[]},Austria:{name:"Austria",info:"",flags:[]},Czechoslovakia:{name:"Czechoslovakia",info:"",flags:[]},Italy:{name:"Italy",info:"",flags:[]},Turkey:{name:"Turkey",info:"",flags:[]},Greece:{name:"Greece",info:"",flags:[]},Poland:{name:"Poland",info:"",flags:[]},Romania:{name:"Romania",info:"",flags:[]},Scotland:{name:"Scotland",info:"",flags:[]},Albania:{name:"Albania",info:"",flags:[]},Ireland:{name:"Ireland",info:"",flags:[]},Russia:{name:"Russia",info:"",flags:[]},Oman:{name:"Oman",info:"",flags:[]},Bulgaria:{name:"Bulgaria",info:"",flags:[]},saudi_arabia:{name:"Saudi Arabia",info:"",flags:[]},Hungary:{name:"Hungary",info:"",flags:[]},Cyprus:{name:"Cyprus",info:"",flags:[]},Iraq:{name:"Iraq",info:"",flags:[]},Iran:{name:"Iran",info:"",flags:[]},Syria:{name:"Syria",info:"",flags:[]},Lebanon:{name:"Lebanon",info:"",flags:[]},Israel:{name:"Israel",info:"",flags:[]},Jordan:{name:"Jordan",info:"",flags:[]},yemen:{name:"North Yemen / South Yemen",info:"Before Yemen was unified into the present-day Republic of Yemen in 1990, it existed as two states: North Yemen (Yemen Arab Republic) and South Yemen (the People's Democratic Republic of Yemen).",flags:[{img:"img/flags/north-yemen.png",name:"Zaire"},{img:"img/flags/south-yemen.png",name:"Zaire"}]},Kuwait:{name:"Kuwait",info:"",flags:[]},Bahrain:{name:"Bahrain",info:"",flags:[]},netherlands:{name:"The Netherlands",info:"",flags:[]},Luxembourg:{name:"Luxembourg",info:"",flags:[]},Belgium:{name:"Belgium",info:"",flags:[]},Portugal:{name:"Portugal",info:"",flags:[]},France:{name:"France",info:"",flags:[]},England:{name:"England",info:"",flags:[]},Denmark:{name:"Denmark",info:"",flags:[]},Spain:{name:"Spain",info:"",flags:[]},India:{name:"India",info:"",flags:[]},Pakistan:{name:"Pakistan",info:"",flags:[]},Burma:{name:"Burma",info:"",flags:[]},Afghanistan:{name:"Afghanistan",info:"",flags:[]},Thailand:{name:"Thailand",info:"",flags:[]},Nepal:{name:"Nepal",info:"",flags:[]},Bhutan:{name:"Bhutan",info:"",flags:[]},Kampuchea:{name:"Kampuchea",info:"",flags:[]},Malaysia:{name:"Malaysia",info:"",flags:[]},bangladesh:{name:"Bangladesh",info:"",flags:[]},China:{name:"China",info:"",flags:[]},Korea:{name:"Korea",info:"",flags:[]},Japan:{name:"Japan",info:"",flags:[]},Mongolia:{name:"Mongolia",info:"",flags:[]},Laos:{name:"Laos",info:"",flags:[]},Tibet:{name:"Tibet",info:"",flags:[]},Indonesia:{name:"Indonesia",info:"",flags:[]},philippines:{name:"The Philippines",info:"",flags:[]},Taiwan:{name:"Taiwan",info:"",flags:[]},sri_lanka:{name:"Sri Lanka",info:"",flags:[]},new_guinea:{name:"New Guinea",info:"",flags:[]},Sumatra:{name:"Sumatra",info:"",flags:[]},new_zealand:{name:"New Zealand",info:"",flags:[]},Borneo:{name:"Borneo",info:"",flags:[]},Vietnam:{name:"Vietnam",info:"",flags:[]},Tunisia:{name:"Tunisia",info:"",flags:[]},Morocco:{name:"Morocco",info:"",flags:[]},Uganda:{name:"Uganda",info:"",flags:[]},Angola:{name:"Angola",info:"",flags:[]},Zimbabwe:{name:"Zimbabwe",info:"",flags:[]},Djibouti:{name:"Djibouti",info:"",flags:[]},Botswana:{name:"Botswana",info:"",flags:[]},Mozambique:{name:"Mozambique",info:"",flags:[]},Zambia:{name:"Zambia",info:"",flags:[]},Swaziland:{name:"Swaziland",info:"",flags:[]},Gambia:{name:"Gambia",info:"",flags:[]},Guinea:{name:"Guinea",info:"",flags:[]},Algeria:{name:"Algeria",info:"",flags:[]},Ghana:{name:"Ghana",info:"",flags:[]},Burundi:{name:"Burundi",info:"",flags:[]},Lesotho:{name:"Lesotho",info:"",flags:[]},Malawi:{name:"Malawi",info:"",flags:[]},Togo:{name:"Togo",info:"",flags:[]},spanish_sahara:{name:"The Spanish Sahara",info:"",flags:[]},Niger:{name:"Niger",info:"",flags:[]},Nigeria:{name:"Nigeria",info:"",flags:[]},Chad:{name:"Chad",info:"",flags:[]},Liberia:{name:"Liberia",info:"",flags:[]},Egypt:{name:"Egypt",info:"",flags:[]},Benin:{name:"Benin",info:"",flags:[]},Gabon:{name:"Gabon",info:"",flags:[]},Tanzania:{name:"Tanzania",info:"",flags:[]},Somalia:{name:"Somalia",info:"",flags:[]},Kenya:{name:"Kenya",info:"",flags:[]},Mali:{name:"Mali",info:"",flags:[]},sierra_leone:{name:"Sierra Leone",info:"",flags:[]},Algiers:{name:"Algiers",info:"",flags:[]},Dahomey:{name:"Dahomey",info:"",flags:[]},Namibia:{name:"Namibia",info:"",flags:[]},Senegal:{name:"Senegal",info:"",flags:[]},Libya:{name:"Libya",info:"",flags:[]},Cameroon:{name:"Cameroon",info:"",flags:[]},congo:{name:"Republic of the Congo",info:"A country located in the western coast of Central Africa. 'Congo' can sometimes refer to the neighbouring <strong>Democratic Republic of the Congo</strong>, but at the time of this song it was named <strong>Zaire</strong>. The Congo River forms much of the border between these two countries.",flags:[{img:"img/flags/cr.svg",name:"Republic of the Congo"}]},zaire:{name:"Zaire",info:"A sovereign state between 1971 and 1997 in Central Africa. Now known as the <strong>Democratic Republic of the Congo</strong> (Not to be confused with the neighboring <strong>Republic of the Congo</strong>.",flags:[{img:"img/flags/zr.png",name:"Zaire"}]},Ethiopia:{name:"Ethiopia",info:"",flags:[]},guinea_bissau:{name:"Guinea-Bissau",info:"",flags:[]},Madagascar:{name:"Madagascar",info:"",flags:[]},Rwanda:{name:"Rwanda",info:"",flags:[]},Mahore:{name:"Mahore",info:"",flags:[]},Cayman:{name:"Cayman",info:"",flags:[]},hong_kong:{name:"Hong Kong",info:"",flags:[]},abu_dhabi:{name:"Abu Dhabi",info:"",flags:[]},Qatar:{name:"Qatar",info:"",flags:[]},Yugoslavia:{name:"Yugoslavia",info:"",flags:[]},Crete:{name:"Crete",info:"",flags:[]},Mauritania:{name:"Mauritania",info:"",flags:[]},Transylviania:{name:"Transylviania",info:"",flags:[]},Monaco:{name:"Monaco",info:"",flags:[]},Liechtenstein:{name:"Liechtenstein",info:"",flags:[]},Malta:{name:"Malta",info:"",flags:[]},Palestine:{name:"Palestine",info:"",flags:[]},Fiji:{name:"Fiji",info:"",flags:[]},Australia:{name:"Australia",info:"",flags:[]},Sudan:{name:"Sudan",info:"",flags:[]}};
"use strict";var app=new Vue({el:"#app",data:{windowHeight:"100vh",nationInfo:nationInfo,message:"test",currentNation:!1},methods:{getNationInfo:function(t){this.currentNation=this.nationInfo[t],this.$refs.info.scrollTop=0},clearNationInfo:function(){this.currentNation=!1},getWindowHeight:function(t){this.windowHeight=window.innerHeight+"px"}},mounted:function(){this.$nextTick(function(){window.addEventListener("resize",this.getWindowHeight),this.getWindowHeight()})},beforeDestroy:function(){window.removeEventListener("resize",this.getWindowHeight)}});