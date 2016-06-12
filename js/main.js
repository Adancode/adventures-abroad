var url = "https://adventures-abroad.firebaseio.com/";
var dataRef = new Firebase(url);

$(document).ready(function() {

     $(function(){
     	$(".mapcontainer").mapael({
     		map : {
     			name : "world_countries",
     			defaultArea: {
     				attrs : {
     					stroke : "#fff",
     					"stroke-width" : 1
     				}
     			}
     		},
     		legend : {
     			area : {
     				title :"Length of Stay Allowed Upon Arrival",
     				slices : [
                              {
                                   value: "USA",
     						attrs : {
     							fill : "#6aafe1"
     						},
     						label :"U.S.A."
     					},
                              {
                                   value: "30 Days or Less",
     						attrs : {
     							fill : "#D7FC92"
     						},
     						label :"30 Days or Less"
     					},
                              {
                                   value: "31 to 90 Days",
     						attrs : {
     							fill : "#7EE105"
     						},
     						label :"31 to 90 Days"
     					},
                              {
                                   value: "91 to 180 Days",
     						attrs : {
     							fill : "#37AF04"
     						},
     						label :"91 to 180 Days"
     					},
                              {
                                   value: "Complicated",
     						attrs : {
     							fill : "#D14233"
     						},
     						label :"More Complicated Process"
     					},
     					{
     						max :5000000,
     						attrs : {
     							fill : "#CBD0D3"
     						},
     						label :"Country Data Pending"
     					},
     				]
     			},

     		},
     		areas: {
     			"AFGHANISTAN": {
     				"value": "31 to 90 Days",
     				"attrs": {
     					"href": "#"
     				},
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Afghanistan<\/span><br \/>Population : 35320445"
     				}
     			},
                    "GREENLAND": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Greenland (part of Denmark)<\/span><br \/>Population : 55847"
     				}
     			},
                    "SOMALILAND": {
     				"value": "4500000",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Somaliland<\/span><br \/>Population : 4500000"
     				}
     			},
     			"SOUTH AFRICA": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">South Africa<\/span><br \/>Population : 50586757"
     				}
     			},
     			"ALBANIA": {
     				"value": "30 Days or Less",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Albania<\/span><br \/>Population : 3215988"
     				}
     			},
     			"ALGERIA": {
     				"value": "Complicated",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Algeria<\/span><br \/>Population : 35980193"
     				}
     			},
     			"GERMANY": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Germany<\/span><br \/>Population : 81726000"
     				}
     			},
     			"AD": {
     				"value": "86165",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Andorra<\/span><br \/>Population : 86165"
     				}
     			},
     			"AO": {
     				"value": "19618432",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Angola<\/span><br \/>Population : 19618432"
     				}
     			},
     			"AG": {
     				"value": "89612",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Antigua And Barbuda<\/span><br \/>Population : 89612"
     				}
     			},
     			"SAUDI ARABIA": {
     				"value": "Complicated",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Saudi Arabia<\/span><br \/>Population : 28082541"
     				}
     			},
     			"ARGENTINA": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Argentina<\/span><br \/>Population : 40764561"
     				}
     			},
     			"ARMENIA": {
     				"value": "91 to 180 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Armenia<\/span><br \/>Population : 3100236"
     				}
     			},
     			"AUSTRALIA": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Australia<\/span><br \/>Population : 22620600"
     				}
     			},
     			"AUSTRIA": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Austria<\/span><br \/>Population : 8419000"
     				}
     			},
     			"AZERBAIJAN": {
     				"value": "Complicated",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Azerbaijan<\/span><br \/>Population : 9168000"
     				}
     			},
     			"BAHAMAS": {
     				"value": "30 Days or Less",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Bahamas<\/span><br \/>Population : 347176"
     				}
     			},
     			"BH": {
     				"value": "1323535",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Bahrain<\/span><br \/>Population : 1323535"
     				}
     			},
     			"BANGLADESH": {
     				"value": "Complicated",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Bangladesh<\/span><br \/>Population : 150493658"
     				}
     			},
     			"BB": {
     				"value": "273925",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Barbados<\/span><br \/>Population : 273925"
     				}
     			},
     			"BELGIUM": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Belgium<\/span><br \/>Population : 11008000"
     				}
     			},
     			"BELIZE": {
     				"value": "30 Days or Less",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Belize<\/span><br \/>Population : 356600"
     				}
     			},
     			"BJ": {
     				"value": "9099922",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Benin<\/span><br \/>Population : 9099922"
     				}
     			},
     			"BT": {
     				"value": "738267",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Bhutan<\/span><br \/>Population : 738267"
     				}
     			},
     			"BELARUS": {
     				"value": "Complicated",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Belarus<\/span><br \/>Population : 9473000"
     				}
     			},
     			"MYANMAR": {
     				"value": "Complicated",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Myanmar<\/span><br \/>Population : 48336763"
     				}
     			},
     			"BOLIVIA": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Bolivia, Plurinational State Of<\/span><br \/>Population : 10088108"
     				}
     			},
     			"BOSNIA AND HERZEGOVINA": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Bosnia And Herzegovina<\/span><br \/>Population : 3752228"
     				}
     			},
     			"BOTSWANA": {
     				"value": "Complicated",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Botswana<\/span><br \/>Population : 2030738"
     				}
     			},
     			"BRAZIL": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Brazil<\/span><br \/>Population : 196655014"
     				}
     			},
     			"BN": {
     				"value": "405938",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Brunei Darussalam<\/span><br \/>Population : 405938"
     				}
     			},
     			"BULGARIA": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Bulgaria<\/span><br \/>Population : 7476000"
     				}
     			},
     			"BF": {
     				"value": "16967845",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Burkina Faso<\/span><br \/>Population : 16967845"
     				}
     			},
     			"BI": {
     				"value": "8575172",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Burundi<\/span><br \/>Population : 8575172"
     				}
     			},
     			"CAMBODIA": {
     				"value": "30 Days or Less",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Cambodia<\/span><br \/>Population : 14305183"
     				}
     			},
     			"CM": {
     				"value": "20030362",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Cameroon<\/span><br \/>Population : 20030362"
     				}
     			},
     			"CANADA": {
                         "value": "91 to 180 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Canada<\/span><br \/>Population : 34482779"
     				}
     			},
     			"CV": {
     				"value": "500585",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Cape Verde<\/span><br \/>Population : 500585"
     				}
     			},
     			"CF": {
     				"value": "4486837",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Central African Republic<\/span><br \/>Population : 4486837"
     				}
     			},
     			"CHILE": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Chile<\/span><br \/>Population : 17269525"
     				}
     			},
     			"CHINA": {
     				"value": "Complicated",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">China<\/span><br \/>Population : 1344130000"
     				}
     			},
     			"CY": {
     				"value": "1116564",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Cyprus<\/span><br \/>Population : 1116564"
     				}
     			},
     			"COLOMBIA": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Colombia<\/span><br \/>Population : 46927125"
     				}
     			},
     			"KM": {
     				"value": "753943",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Comoros<\/span><br \/>Population : 753943"
     				}
     			},
     			"CG": {
     				"value": "4139748",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Congo<\/span><br \/>Population : 4139748"
     				}
     			},
     			"CD": {
     				"value": "67757577",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Congo, The Democratic Republic Of The<\/span><br \/>Population : 67757577"
     				}
     			},
     			"NORTH KOREA": {
     				"value": "Complicated",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Korea, Democratic People's Republic Of<\/span><br \/>Population : 24451285"
     				}
     			},
     			"SOUTH KOREA": {
     				"value": "30 Days or Less",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Korea, Republic Of<\/span><br \/>Population : 49779000"
     				}
     			},
     			"COSTA RICA": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Costa Rica<\/span><br \/>Population : 4726575"
     				}
     			},
     			"CI": {
     				"value": "20152894",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">C\u00d4te D'ivoire<\/span><br \/>Population : 20152894"
     				}
     			},
     			"CROATIA": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Croatia<\/span><br \/>Population : 4407000"
     				}
     			},
     			"CUBA": {
     				"value": "30 Days or Less",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Cuba<\/span><br \/>Population : 11253665"
     				}
     			},
     			"DENMARK": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Denmark<\/span><br \/>Population : 5574000"
     				}
     			},
     			"DJ": {
     				"value": "905564",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Djibouti<\/span><br \/>Population : 905564"
     				}
     			},
     			"DM": {
     				"value": "67675",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Dominica<\/span><br \/>Population : 67675"
     				}
     			},
     			"EGYPT": {
     				"value": "30 Days or Less",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Egypt<\/span><br \/>Population : 82536770"
     				}
     			},
     			"UNITED ARAB EMIRATES": {
     				"value": "30 Days or Less",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">United Arab Emirates<\/span><br \/>Population : 7890924"
     				}
     			},
     			"ECUADOR": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Ecuador<\/span><br \/>Population : 14666055"
     				}
     			},
     			"ER": {
     				"value": "5415280",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Eritrea<\/span><br \/>Population : 5415280"
     				}
     			},
     			"SPAIN": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Spain<\/span><br \/>Population : 46235000"
     				}
     			},
     			"ESTONIA": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Estonia<\/span><br \/>Population : 1340000"
     				}
     			},
     			"UNITED STATES OF AMERICA": {
     				"value": "USA",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">United States<\/span><br \/>Population : 311591917"
     				}
     			},
     			"ET": {
     				"value": "84734262",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Ethiopia<\/span><br \/>Population : 84734262"
     				}
     			},
     			"FIJI": {
     				"value": "91 to 180 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Fiji<\/span><br \/>Population : 868406"
     				}
     			},
     			"FINLAND": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Finland<\/span><br \/>Population : 5387000"
     				}
     			},
     			"FRANCE": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">France<\/span><br \/>Population : 65436552"
     				}
     			},
     			"GA": {
     				"value": "1534262",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Gabon<\/span><br \/>Population : 1534262"
     				}
     			},
     			"GM": {
     				"value": "1776103",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Gambia<\/span><br \/>Population : 1776103"
     				}
     			},
     			"GEORGIA": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Georgia<\/span><br \/>Population : 4486000"
     				}
     			},
     			"GH": {
     				"value": "24965816",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Ghana<\/span><br \/>Population : 24965816"
     				}
     			},
     			"GREECE": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Greece<\/span><br \/>Population : 11304000"
     				}
     			},
     			"GD": {
     				"value": "104890",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Grenada<\/span><br \/>Population : 104890"
     				}
     			},
     			"GUATEMALA": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Guatemala<\/span><br \/>Population : 14757316"
     				}
     			},
     			"GN": {
     				"value": "10221808",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Guinea<\/span><br \/>Population : 10221808"
     				}
     			},
     			"GQ": {
     				"value": "720213",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Equatorial Guinea<\/span><br \/>Population : 720213"
     				}
     			},
     			"GW": {
     				"value": "1547061",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Guinea-bissau<\/span><br \/>Population : 1547061"
     				}
     			},
     			"GUYANA": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Guyana<\/span><br \/>Population : 756040"
     				}
     			},
     			"HAITI": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Haiti<\/span><br \/>Population : 10123787"
     				}
     			},
     			"HONDURAS": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Honduras<\/span><br \/>Population : 7754687"
     				}
     			},
     			"HUNGARY": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Hungary<\/span><br \/>Population : 9971000"
     				}
     			},
     			"JAMAICA": {
     				"value": "91 to 180 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Jamaica<\/span><br \/>Population : 2709300"
     				}
     			},
     			"JAPAN": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Japan<\/span><br \/>Population : 127817277"
     				}
     			},
     			"MH": {
     				"value": "54816",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Marshall Islands<\/span><br \/>Population : 54816"
     				}
     			},
     			"PW": {
     				"value": "20609",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Palau<\/span><br \/>Population : 20609"
     				}
     			},
     			"SB": {
     				"value": "552267",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Solomon Islands<\/span><br \/>Population : 552267"
     				}
     			},
     			"INDIA": {
     				"value": "30 Days or Less",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">India<\/span><br \/>Population : 1241491960"
     				}
     			},
     			"INDONESIA": {
     				"value": "30 Days or Less",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Indonesia<\/span><br \/>Population : 242325638"
     				}
     			},
     			"JORDAN": {
     				"value": "30 Days or Less",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Jordan<\/span><br \/>Population : 6181000"
     				}
     			},
     			"IRAN": {
     				"value": "Complicated",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Iran, Islamic Republic Of<\/span><br \/>Population : 74798599"
     				}
     			},
     			"IRAQ": {
     				"value": "Complicated",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Iraq<\/span><br \/>Population : 32961959"
     				}
     			},
     			"IRELAND": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Ireland<\/span><br \/>Population : 4487000"
     				}
     			},
     			"ICELAND": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Iceland<\/span><br \/>Population : 319000"
     				}
     			},
     			"ISRAEL": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Israel<\/span><br \/>Population : 7765700"
     				}
     			},
     			"ITALY": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Italy<\/span><br \/>Population : 60770000"
     				}
     			},
                    "KOSOVO": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Kosovo<\/span><br \/>Population : 16558459"
     				}
     			},
     			"KAZAKHSTAN": {
     				"value": "30 Days or Less",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Kazakhstan<\/span><br \/>Population : 16558459"
     				}
     			},
     			"KE": {
     				"value": "41609728",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Kenya<\/span><br \/>Population : 41609728"
     				}
     			},
     			"KYRGYZSTAN": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Kyrgyzstan<\/span><br \/>Population : 5507000"
     				}
     			},
     			"KI": {
     				"value": "101093",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Kiribati<\/span><br \/>Population : 101093"
     				}
     			},
     			"KUWAIT": {
     				"value": "Complicated",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Kuwait<\/span><br \/>Population : 2818042"
     				}
     			},
     			"LAOS": {
     				"value": "30 Days or Less",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Lao People's Democratic Republic<\/span><br \/>Population : 6288037"
     				}
     			},
     			"LESOTHO": {
     				"value": "Complicated",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Lesotho<\/span><br \/>Population : 2193843"
     				}
     			},
     			"LATVIA": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Latvia<\/span><br \/>Population : 2220000"
     				}
     			},
     			"LEBANON": {
     				"value": "30 Days or Less",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Lebanon<\/span><br \/>Population : 4259405"
     				}
     			},
     			"LR": {
     				"value": "4128572",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Liberia<\/span><br \/>Population : 4128572"
     				}
     			},
     			"LIBYA": {
     				"value": "Complicated",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Libya<\/span><br \/>Population : 6422772"
     				}
     			},
     			"LI": {
     				"value": "36304",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Liechtenstein<\/span><br \/>Population : 36304"
     				}
     			},
     			"LITHUANIA": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Lithuania<\/span><br \/>Population : 3203000"
     				}
     			},
     			"LUXEMBOURG": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Luxembourg<\/span><br \/>Population : 517000"
     				}
     			},
     			"MACEDONIA": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Macedonia, The Former Yugoslav Republic Of<\/span><br \/>Population : 2063893"
     				}
     			},
     			"MADAGASCAR": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Madagascar<\/span><br \/>Population : 21315135"
     				}
     			},
     			"MALAYSIA": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Malaysia<\/span><br \/>Population : 28859154"
     				}
     			},
     			"MW": {
     				"value": "15380888",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Malawi<\/span><br \/>Population : 15380888"
     				}
     			},
     			"MV": {
     				"value": "320081",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Maldives<\/span><br \/>Population : 320081"
     				}
     			},
     			"ML": {
     				"value": "15839538",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Mali<\/span><br \/>Population : 15839538"
     				}
     			},
     			"MT": {
     				"value": "419000",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Malta<\/span><br \/>Population : 419000"
     				}
     			},
     			"MOROCCO": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Morocco<\/span><br \/>Population : 32272974"
     				}
     			},
     			"MU": {
     				"value": "1286051",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Mauritius<\/span><br \/>Population : 1286051"
     				}
     			},
     			"MR": {
     				"value": "3541540",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Mauritania<\/span><br \/>Population : 3541540"
     				}
     			},
     			"MEXICO": {
     				"value": "91 to 180 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Mexico<\/span><br \/>Population : 114793341"
     				}
     			},
     			"FM": {
     				"value": "111542",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Micronesia, Federated States Of<\/span><br \/>Population : 111542"
     				}
     			},
     			"MOLDOVA": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Moldova, Republic Of<\/span><br \/>Population : 3559000"
     				}
     			},
     			"MC": {
     				"value": "35427",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Monaco<\/span><br \/>Population : 35427"
     				}
     			},
     			"MONGOLIA": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Mongolia<\/span><br \/>Population : 2800114"
     				}
     			},
     			"MONTENEGRO": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Montenegro<\/span><br \/>Population : 632261"
     				}
     			},
     			"MZ": {
     				"value": "23929708",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Mozambique<\/span><br \/>Population : 23929708"
     				}
     			},
     			"NAMIBIA": {
     				"value": "Complicated",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Namibia<\/span><br \/>Population : 2324004"
     				}
     			},
     			"NEPAL": {
     				"value": "91 to 180 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Nepal<\/span><br \/>Population : 30485798"
     				}
     			},
     			"NICARAGUA": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Nicaragua<\/span><br \/>Population : 5869859"
     				}
     			},
     			"NE": {
     				"value": "16068994",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Niger<\/span><br \/>Population : 16068994"
     				}
     			},
     			"NG": {
     				"value": "162470737",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Nigeria<\/span><br \/>Population : 162470737"
     				}
     			},
     			"NORWAY": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Norway<\/span><br \/>Population : 4952000"
     				}
     			},
     			"NEW ZEALAND": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">New Zealand<\/span><br \/>Population : 4405200"
     				}
     			},
     			"OMAN": {
     				"value": "30 Days or Less",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Oman<\/span><br \/>Population : 2846145"
     				}
     			},
     			"UG": {
     				"value": "34509205",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Uganda<\/span><br \/>Population : 34509205"
     				}
     			},
     			"UZBEKISTAN": {
     				"value": "Complicated",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Uzbekistan<\/span><br \/>Population : 29341200"
     				}
     			},
     			"PAKISTAN": {
     				"value": "Complicated",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Pakistan<\/span><br \/>Population : 176745364"
     				}
     			},
     			"PS": {
     				"value": "4019433",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Palestine, State Of<\/span><br \/>Population : 4019433"
     				}
     			},
     			"PANAMA": {
     				"value": "30 Days or Less",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Panama<\/span><br \/>Population : 3571185"
     				}
     			},
     			"PAPUA NEW GUINEA": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Papua New Guinea<\/span><br \/>Population : 7013829"
     				}
     			},
     			"PARAGUAY": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Paraguay<\/span><br \/>Population : 6568290"
     				}
     			},
     			"NETHERLANDS": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Netherlands<\/span><br \/>Population : 16696000"
     				}
     			},
     			"PERU": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Peru<\/span><br \/>Population : 29399817"
     				}
     			},
     			"PHILIPPINES": {
     				"value": "30 Days or Less",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Philippines<\/span><br \/>Population : 94852030"
     				}
     			},
     			"POLAND": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Poland<\/span><br \/>Population : 38216000"
     				}
     			},
     			"PORTUGAL": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Portugal<\/span><br \/>Population : 10637000"
     				}
     			},
     			"QATAR": {
     				"value": "30 Days or Less",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Qatar<\/span><br \/>Population : 1870041"
     				}
     			},
     			"DOMINICAN REPUBLIC": {
     				"value": "30 Days or Less",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Dominican Republic<\/span><br \/>Population : 10056181"
     				}
     			},
     			"ROMANIA": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Romania<\/span><br \/>Population : 21390000"
     				}
     			},
     			"UNITED KINGDOM": {
     				"value": "91 to 180 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">United Kingdom<\/span><br \/>Population : 62641000"
     				}
     			},
     			"RUSSIA": {
     				"value": "Complicated",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Russian Federation<\/span><br \/>Population : 141930000"
     				}
     			},
     			"RW": {
     				"value": "10942950",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Rwanda<\/span><br \/>Population : 10942950"
     				}
     			},
     			"KN": {
     				"value": "53051",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Saint Kitts And Nevis<\/span><br \/>Population : 53051"
     				}
     			},
     			"SM": {
     				"value": "31735",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">San Marino<\/span><br \/>Population : 31735"
     				}
     			},
     			"VC": {
     				"value": "109365",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Saint Vincent And The Grenadines<\/span><br \/>Population : 109365"
     				}
     			},
     			"LC": {
     				"value": "176000",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Saint Lucia<\/span><br \/>Population : 176000"
     				}
     			},
     			"EL SALVADOR": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">El Salvador<\/span><br \/>Population : 6227491"
     				}
     			},
     			"WS": {
     				"value": "183874",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Samoa<\/span><br \/>Population : 183874"
     				}
     			},
     			"ST": {
     				"value": "168526",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Sao Tome And Principe<\/span><br \/>Population : 168526"
     				}
     			},
     			"SN": {
     				"value": "12767556",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Senegal<\/span><br \/>Population : 12767556"
     				}
     			},
     			"SERBIA": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Serbia<\/span><br \/>Population : 7261000"
     				}
     			},
     			"SC": {
     				"value": "86000",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Seychelles<\/span><br \/>Population : 86000"
     				}
     			},
     			"SL": {
     				"value": "5997486",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Sierra Leone<\/span><br \/>Population : 5997486"
     				}
     			},
     			"SG": {
     				"value": "5183700",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Singapore<\/span><br \/>Population : 5183700"
     				}
     			},
     			"SLOVAKIA": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Slovakia<\/span><br \/>Population : 5440000"
     				}
     			},
     			"SLOVENIA": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Slovenia<\/span><br \/>Population : 2052000"
     				}
     			},
     			"SO": {
     				"value": "6500000",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Somalia<\/span><br \/>Population : 6500000"
     				}
     			},
     			"SD": {
     				"value": "34318385",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Sudan<\/span><br \/>Population : 34318385"
     				}
     			},
     			"SS": {
     				"value": "10314021",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">South Sudan<\/span><br \/>Population : 10314021"
     				}
     			},
     			"SRI LANKA": {
     				"value": "30 Days or Less",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Sri Lanka<\/span><br \/>Population : 20869000"
     				}
     			},
     			"SWEDEN": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Sweden<\/span><br \/>Population : 9453000"
     				}
     			},
     			"SWITZERLAND": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Switzerland<\/span><br \/>Population : 7907000"
     				}
     			},
     			"SURINAME": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Suriname<\/span><br \/>Population : 529419"
     				}
     			},
     			"SWAZILAND": {
     				"value": "Complicated",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Swaziland<\/span><br \/>Population : 1067773"
     				}
     			},
     			"SYRIA": {
     				"value": "Complicated",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Syrian Arab Republic<\/span><br \/>Population : 20820311"
     				}
     			},
     			"TAJIKISTAN": {
     				"value": "Complicated",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Tajikistan<\/span><br \/>Population : 6976958"
     				}
     			},
     			"TZ": {
     				"value": "46218486",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Tanzania, United Republic Of<\/span><br \/>Population : 46218486"
     				}
     			},
     			"TD": {
     				"value": "11525496",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Chad<\/span><br \/>Population : 11525496"
     				}
     			},
     			"CZECH REPUBLIC": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Czech Republic<\/span><br \/>Population : 10546000"
     				}
     			},
                    "TAIWAN": {
     				"value": "30 Days or Less",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">TAIWAN<\/span><br \/>Population : 2324004"
     				}
     			},
     			"THAILAND": {
     				"value": "30 Days or Less",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Thailand<\/span><br \/>Population : 69518555"
     				}
     			},
     			"TL": {
     				"value": "1175880",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Timor-leste<\/span><br \/>Population : 1175880"
     				}
     			},
     			"TG": {
     				"value": "6154813",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Togo<\/span><br \/>Population : 6154813"
     				}
     			},
     			"TO": {
     				"value": "104509",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Tonga<\/span><br \/>Population : 104509"
     				}
     			},
     			"TRINIDAD AND TOBAGO": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Trinidad And Tobago<\/span><br \/>Population : 1346350"
     				}
     			},
     			"TUNISIA": {
     				"value": "91 to 180 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Tunisia<\/span><br \/>Population : 10673800"
     				}
     			},
     			"TURMENISTAN": {
     				"value": "Complicated",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Turkmenistan<\/span><br \/>Population : 5105301"
     				}
     			},
     			"TURKEY": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Turkey<\/span><br \/>Population : 73639596"
     				}
     			},
     			"TV": {
     				"value": "9847",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Tuvalu<\/span><br \/>Population : 9847"
     				}
     			},
     			"VU": {
     				"value": "245619",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Vanuatu<\/span><br \/>Population : 245619"
     				}
     			},
     			"VENEZUELA": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Venezuela, Bolivarian Republic Of<\/span><br \/>Population : 29278000"
     				}
     			},
     			"VIETNAM": {
     				"value": "Complicated",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Viet Nam<\/span><br \/>Population : 87840000"
     				}
     			},
     			"UKRAINE": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Ukraine<\/span><br \/>Population : 45706100"
     				}
     			},
     			"URUGUAY": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Uruguay<\/span><br \/>Population : 3368595"
     				}
     			},
     			"YEMEN": {
     				"value": "Complicated",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Yemen<\/span><br \/>Population : 24799880"
     				}
     			},
     			"ZM": {
     				"value": "13474959",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Zambia<\/span><br \/>Population : 13474959"
     				}
     			},
     			"ZIMBABWE": {
     				"value": "31 to 90 Days",
     				"href" : "#",
     				"tooltip": {
     					"content": "<span style=\"font-weight:bold;\">Zimbabwe<\/span><br \/>Population : 12754378"
     				}
     			}
     		}
     	});
});

$(document).on("click", "path", function(){
    console.log($(this).attr("data-id"));

});

     // On Click button associated with the Search Button
     $(document).on('click', 'path', function(){
          var searchTerm = $(this).attr("data-id");
          if (searchTerm.length > 2) {
     	// Empties the region associated with the articles
     	$("#searchNews").empty();
          $("#searchNews").append("<h3>Current News for " + capitalizeFirstLetter(searchTerm.toLowerCase()) + "</h3>");
     	// Search Term


          var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
          url += '?' + $.param({
            'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
            'q': searchTerm,
            'sort': "newest"
          });
          $.ajax({
            url: url,
            method: 'GET',
          }).done(function(result) {
               for (var i = 0; i < result.response.docs.length; i++) {
                    $("#searchNews").append("<p><a href=" + "'" + result.response.docs[i].web_url + "'" + " target='_blank' ></p>" + result.response.docs[i].snippet + "</p>");
                    console.log(i);
               }
               console.log(result.response.docs[0]);
          }).fail(function(err) {
            throw err;
       });
 }  // Close if statement (eliminates pending African countries)
     });

}); // Closes jQuery

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
