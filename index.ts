// This example requires the Visualization library. Include the libraries=visualization
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDx4q_AR_07NDfzfGwvUyfFG35sRHRFRCM&libraries=visualization">

let map: google.maps.Map, heatmap: google.maps.visualization.HeatmapLayer;

function initMap(): void {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    zoom: 5,
    center: { lat: 40.68591152915883, lng: 14.528731882178715 },
    mapTypeId: "satellite",
  });

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map,
  });

  document
    .getElementById("toggle-heatmap")!
    .addEventListener("click", toggleHeatmap);
  document
    .getElementById("change-gradient")!
    .addEventListener("click", changeGradient);
  document
    .getElementById("change-opacity")!
    .addEventListener("click", changeOpacity);
  document
    .getElementById("change-radius")!
    .addEventListener("click", changeRadius);
}

function toggleHeatmap(): void {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient(): void {
  const gradient = [
    "rgba(0, 255, 255, 0)",
    "rgba(0, 255, 255, 1)",
    "rgba(0, 191, 255, 1)",
    "rgba(0, 127, 255, 1)",
    "rgba(0, 63, 255, 1)",
    "rgba(0, 0, 255, 1)",
    "rgba(0, 0, 223, 1)",
    "rgba(0, 0, 191, 1)",
    "rgba(0, 0, 159, 1)",
    "rgba(0, 0, 127, 1)",
    "rgba(63, 0, 91, 1)",
    "rgba(127, 0, 63, 1)",
    "rgba(191, 0, 31, 1)",
    "rgba(255, 0, 0, 1)",
  ];

  heatmap.set("gradient", heatmap.get("gradient") ? null : gradient);
}

function changeRadius(): void {
  heatmap.set("radius", heatmap.get("radius") ? null : 20);
}

function changeOpacity(): void {
  heatmap.set("opacity", heatmap.get("opacity") ? null : 0.2);
}

// Heatmap data: 500 Points
function getPoints() {
  return [
  new google.maps.LatLng(40.6344229, 14.5483229),
  new google.maps.LatLng(40.7018381, 14.520688),
  new google.maps.LatLng(40.694777, 14.5362976),
  new google.maps.LatLng(40.697383, 14.535202),
  new google.maps.LatLng(40.6979529, 14.5245174),
  new google.maps.LatLng(40.6970099, 14.5384512),
  new google.maps.LatLng(40.6986315, 14.5258272),
  new google.maps.LatLng(40.7026628, 14.5227225),
  new google.maps.LatLng(40.695002, 14.53186),
  new google.maps.LatLng(40.7028474, 14.5225848),
  new google.maps.LatLng(40.6951326, 14.5297507),
  new google.maps.LatLng(40.694777, 14.5362976),
  new google.maps.LatLng(40.694777, 14.5362976),
  new google.maps.LatLng(40.6940651, 14.5287113),
new google.maps.LatLng(40.7044638, 14.5216542),
new google.maps.LatLng(40.6969931, 14.5278323),
new google.maps.LatLng(40.6981444, 14.5309925),
new google.maps.LatLng(40.6968325, 14.5270293),
new google.maps.LatLng(40.6963642, 14.4950921),
new google.maps.LatLng(40.6923777, 14.4981946),
new google.maps.LatLng(40.690771, 14.4907722),
new google.maps.LatLng(40.6984766, 14.4898001),
new google.maps.LatLng(40.6941044, 14.4973942),
new google.maps.LatLng(40.6878447, 14.4958038),
new google.maps.LatLng(40.6912556, 14.4911176),
new google.maps.LatLng(40.6957862, 14.4828435),
new google.maps.LatLng(40.6878447, 14.4958038),
new google.maps.LatLng(40.6968915, 14.4968765),
new google.maps.LatLng(40.6878662, 14.4886567),
new google.maps.LatLng(40.6957862, 14.4828435),
new google.maps.LatLng(40.6940506, 14.4996252),
new google.maps.LatLng(40.7087619, 14.4816369),
new google.maps.LatLng(40.6968321, 14.4971706),
new google.maps.LatLng(40.7059001, 14.4827354),
new google.maps.LatLng(40.6957862, 14.4828435),
new google.maps.LatLng(40.6956634, 14.492985),
new google.maps.LatLng(40.69903, 14.4931599),
new google.maps.LatLng(40.688133, 14.4932793),
new google.maps.LatLng(40.724079, 14.4847385),
new google.maps.LatLng(40.6907031, 14.4907523),
new google.maps.LatLng(40.6974765, 14.4842368),
new google.maps.LatLng(40.6884926, 14.4772722),
new google.maps.LatLng(40.7282303467719, 14.4872608968412),
new google.maps.LatLng(40.7012604, 14.4850652),
new google.maps.LatLng(40.6878447, 14.4958038),
new google.maps.LatLng(40.6968114, 14.4977416),
new google.maps.LatLng(40.6989322, 14.4974101),
new google.maps.LatLng(40.7012313, 14.4966134),
new google.maps.LatLng(40.6966892, 14.4966256),
new google.maps.LatLng(40.6963642, 14.4950921),
new google.maps.LatLng(40.6962367, 14.4981049),
new google.maps.LatLng(40.6968321, 14.4971706),
new google.maps.LatLng(40.6912556, 14.4911176),
new google.maps.LatLng(40.6878447, 14.4958038),
new google.maps.LatLng(40.7153177, 14.4787432),
new google.maps.LatLng(40.7153177, 14.4787432),
new google.maps.LatLng(40.695756, 14.4965792),
new google.maps.LatLng(40.6966892, 14.4966256),
new google.maps.LatLng(40.692559, 14.4932876),
new google.maps.LatLng(40.6966297, 14.4964828),
new google.maps.LatLng(40.6969166, 14.5177409),
new google.maps.LatLng(40.6982949, 14.5240544),
new google.maps.LatLng(40.6799691, 14.5297514),
new google.maps.LatLng(40.6903245, 14.5176909),
new google.maps.LatLng(40.6883723, 14.5243465),
new google.maps.LatLng(40.7013546, 14.5195821),
new google.maps.LatLng(40.6883723, 14.5243465),
new google.maps.LatLng(40.6921419, 14.5198501),
new google.maps.LatLng(40.6935792, 14.5071361),
new google.maps.LatLng(40.675747, 14.513754),
new google.maps.LatLng(40.6851013, 14.5212422),
new google.maps.LatLng(40.6945901, 14.5104433),
new google.maps.LatLng(40.6799279, 14.5297566),
new google.maps.LatLng(40.6825776, 14.5363969),
new google.maps.LatLng(40.6930421, 14.5087503),
new google.maps.LatLng(40.6944448, 14.5004285),
new google.maps.LatLng(40.6825776, 14.5363969),
new google.maps.LatLng(40.6910517, 14.5208038),
new google.maps.LatLng(40.6830149, 14.5402959),
new google.maps.LatLng(40.6883057, 14.529365),
new google.maps.LatLng(40.6825776, 14.5363969),
new google.maps.LatLng(40.6948934, 14.5248662),
new google.maps.LatLng(40.6916945, 14.5141583),
new google.maps.LatLng(40.6914827, 14.5039618),
new google.maps.LatLng(40.6925171, 14.5197443),
new google.maps.LatLng(40.6884869, 14.5212752),
new google.maps.LatLng(40.6905902, 14.5141687),
new google.maps.LatLng(40.6905902, 14.5141687),
new google.maps.LatLng(40.6941424, 14.5071584),
new google.maps.LatLng(40.6941296, 14.5024949),
new google.maps.LatLng(40.7012779, 14.5196478),
new google.maps.LatLng(40.6940703, 14.5186311),
new google.maps.LatLng(40.6825776, 14.5363969),
new google.maps.LatLng(40.6921145, 14.5087731),
new google.maps.LatLng(40.696071, 14.4979623),
new google.maps.LatLng(40.6928156, 14.5131567),
new google.maps.LatLng(40.694962, 14.5207156),
new google.maps.LatLng(40.6942433, 14.5112681),
new google.maps.LatLng(40.6880233, 14.5229739),
new google.maps.LatLng(40.6928156, 14.5131567),
new google.maps.LatLng(40.6879981, 14.5201459),
new google.maps.LatLng(40.6800224, 14.5297947),
new google.maps.LatLng(40.6949317, 14.5133502),
new google.maps.LatLng(40.6946932, 14.5051319),
new google.maps.LatLng(40.6948006, 14.5244061),
new google.maps.LatLng(40.6925151277605, 14.519743268647),
new google.maps.LatLng(40.7021526, 14.5056361),
new google.maps.LatLng(40.6883191, 14.5229787),
new google.maps.LatLng(40.675857, 14.5135101),
new google.maps.LatLng(40.6867312, 14.4990513),
new google.maps.LatLng(40.707983, 14.5074211),
new google.maps.LatLng(40.6879981, 14.5201459),
new google.maps.LatLng(40.6883191, 14.5229787),
new google.maps.LatLng(40.6956252, 14.5010388),
new google.maps.LatLng(40.6927903, 14.5125093),
new google.maps.LatLng(40.6925207, 14.4868404),
new google.maps.LatLng(40.7073387, 14.5141602),
new google.maps.LatLng(40.6929031, 14.5196352),
new google.maps.LatLng(40.6936611, 14.5051563),
new google.maps.LatLng(40.6931332, 14.5093674),
new google.maps.LatLng(40.6931332, 14.5093674),
new google.maps.LatLng(40.6937191, 14.5233756),
new google.maps.LatLng(40.6936542, 14.5214511),
new google.maps.LatLng(40.6921472, 14.5202273),
new google.maps.LatLng(40.6949317, 14.5133502),
new google.maps.LatLng(40.6793028, 14.529719),
new google.maps.LatLng(40.6941229, 14.5199578),
new google.maps.LatLng(40.6851013, 14.5212422),
new google.maps.LatLng(40.6995351, 14.5074686),
new google.maps.LatLng(40.6851013, 14.5212422),
new google.maps.LatLng(40.6900353, 14.5232196),
new google.maps.LatLng(40.6926728, 14.512401),
new google.maps.LatLng(40.695864, 14.5208507),
new google.maps.LatLng(40.7033143, 14.5131116),
new google.maps.LatLng(40.696257, 14.51935),
new google.maps.LatLng(40.6911035, 14.5208317),
new google.maps.LatLng(40.6912817, 14.5252852),
new google.maps.LatLng(40.6939819, 14.502271),
new google.maps.LatLng(40.6901123, 14.5256886),
new google.maps.LatLng(40.6928695, 14.502851),
new google.maps.LatLng(40.6949317, 14.5133502),
new google.maps.LatLng(40.706954, 14.5104488),
new google.maps.LatLng(40.6830149, 14.5402959),
new google.maps.LatLng(40.6825776, 14.5363969),
new google.maps.LatLng(40.6941579, 14.5043219),
new google.maps.LatLng(40.6825776, 14.5363969),
new google.maps.LatLng(40.6967478, 14.5190241),
new google.maps.LatLng(40.6834794, 14.5364914),
new google.maps.LatLng(40.687862, 14.5169958),
new google.maps.LatLng(40.6942433, 14.5112681),
new google.maps.LatLng(40.689439, 14.52176),
new google.maps.LatLng(40.6935991, 14.5261752),
new google.maps.LatLng(40.7003596, 14.5067944),
new google.maps.LatLng(40.6908874, 14.5230253),
new google.maps.LatLng(40.6903622, 14.5181651),
new google.maps.LatLng(40.6958656, 14.5192075),
new google.maps.LatLng(40.6928997, 14.5105424),
new google.maps.LatLng(40.6901423, 14.5256198),
new google.maps.LatLng(40.6871312, 14.5315736),
new google.maps.LatLng(40.6825776, 14.5363969),
new google.maps.LatLng(40.6936611, 14.5051563),
new google.maps.LatLng(40.684574, 14.5379424),
new google.maps.LatLng(40.6959036, 14.5047397),
new google.maps.LatLng(40.7060154, 14.510299),
new google.maps.LatLng(40.6924873, 14.5222637),
new google.maps.LatLng(40.6924873, 14.5222637),
new google.maps.LatLng(40.6907772, 14.5170784),
new google.maps.LatLng(40.6941296, 14.5024949),
new google.maps.LatLng(40.6928156, 14.5131567),
new google.maps.LatLng(40.69671, 14.51916),
new google.maps.LatLng(40.693197, 14.5027517),
new google.maps.LatLng(40.6975555, 14.5162489),
new google.maps.LatLng(40.6851013, 14.5212422),
new google.maps.LatLng(40.6924873, 14.5222637),
new google.maps.LatLng(40.6795276, 14.5365495),
new google.maps.LatLng(40.6916507, 14.5110647),
new google.maps.LatLng(40.697907, 14.5100126),
new google.maps.LatLng(40.6894914, 14.5239765),
new google.maps.LatLng(40.6951285, 14.5190068),
new google.maps.LatLng(40.7012972, 14.5142605),
new google.maps.LatLng(40.6977249, 14.5154655),
new google.maps.LatLng(40.6977891, 14.5154941),
new google.maps.LatLng(40.6977249, 14.5154655),
new google.maps.LatLng(40.6914827, 14.5039618),
new google.maps.LatLng(40.6846182, 14.5385701),
new google.maps.LatLng(40.6944894, 14.5091308),
new google.maps.LatLng(40.69458, 14.513268),
new google.maps.LatLng(40.690857, 14.516678),
new google.maps.LatLng(40.6932415, 14.5117365),
new google.maps.LatLng(40.6948934, 14.5248662),
new google.maps.LatLng(40.6992865, 14.5109352),
new google.maps.LatLng(40.6948026, 14.5242863),
new google.maps.LatLng(40.6844295, 14.5251307),
new google.maps.LatLng(40.6825776, 14.5363969),
new google.maps.LatLng(40.690695, 14.517734),
new google.maps.LatLng(40.693978, 14.5017475),
new google.maps.LatLng(40.6921145, 14.5087731),
new google.maps.LatLng(40.6913651, 14.5216048),
new google.maps.LatLng(40.6958252, 14.5048108),
new google.maps.LatLng(40.6914676, 14.5129892),
new google.maps.LatLng(40.6914385, 14.5250646),
new google.maps.LatLng(40.6951361, 14.5244145),
new google.maps.LatLng(40.6951361, 14.5244145),
new google.maps.LatLng(40.6883057, 14.529365),
new google.maps.LatLng(40.6924571, 14.52267),
new google.maps.LatLng(40.6900107, 14.5183908),
new google.maps.LatLng(40.6949317, 14.5133502),
new google.maps.LatLng(40.6940457, 14.5044432),
new google.maps.LatLng(40.6949317, 14.5133502),
new google.maps.LatLng(40.6939998, 14.504157),
new google.maps.LatLng(40.6932416, 14.511734),
new google.maps.LatLng(40.6955412, 14.5012866),
new google.maps.LatLng(40.7004528, 14.5062677),
new google.maps.LatLng(40.6918875, 14.5087523),
new google.maps.LatLng(40.691677, 14.501905),
new google.maps.LatLng(40.6851013, 14.5212422),
new google.maps.LatLng(40.6857815, 14.5194808),
new google.maps.LatLng(40.6915006, 14.5205346),
new google.maps.LatLng(40.6939819, 14.502271),
new google.maps.LatLng(40.6941532, 14.501779),
new google.maps.LatLng(40.701, 14.5066857),
new google.maps.LatLng(40.6967211, 14.5287767),
new google.maps.LatLng(40.7004272, 14.5066667),
new google.maps.LatLng(40.7062692, 14.5080331),
new google.maps.LatLng(40.68443, 14.52513),
new google.maps.LatLng(40.695253, 14.5189994),
new google.maps.LatLng(40.692674, 14.5117173),
new google.maps.LatLng(40.6918566, 14.5110604),
new google.maps.LatLng(40.6912279, 14.5131706),
new google.maps.LatLng(40.6880774, 14.530508),
new google.maps.LatLng(40.6939819, 14.502271),
new google.maps.LatLng(40.6934655, 14.5215307),
new google.maps.LatLng(40.695541, 14.5008715),
new google.maps.LatLng(40.6936611, 14.5051563),
new google.maps.LatLng(40.6849492, 14.5238395),
new google.maps.LatLng(40.6948026, 14.5242863),
new google.maps.LatLng(40.6875366, 14.5180865),
new google.maps.LatLng(40.6916841, 14.5171427),
new google.maps.LatLng(40.6901263, 14.5180438),
new google.maps.LatLng(40.691216, 14.514133),
new google.maps.LatLng(40.6914385, 14.5250646),
new google.maps.LatLng(40.6967478, 14.5190241),
new google.maps.LatLng(40.7006437, 14.5065723),
new google.maps.LatLng(40.6883191, 14.5229787),
new google.maps.LatLng(40.6945452, 14.5216297),
new google.maps.LatLng(40.6883191, 14.5229787),
new google.maps.LatLng(40.69458, 14.513268),
new google.maps.LatLng(40.6883057, 14.529365),
new google.maps.LatLng(40.6886256, 14.5154616),
new google.maps.LatLng(40.6846182, 14.5385701),
new google.maps.LatLng(40.6884869, 14.5212752),
new google.maps.LatLng(40.6883723, 14.5243465),
new google.maps.LatLng(40.70463, 14.50981),
new google.maps.LatLng(40.6880456, 14.5223862),
new google.maps.LatLng(40.6988543, 14.5015408),
new google.maps.LatLng(40.6940928, 14.503131),
new google.maps.LatLng(40.6905159, 14.5176134),
new google.maps.LatLng(40.6925171, 14.5197443),
new google.maps.LatLng(40.6893986, 14.5211666),
new google.maps.LatLng(40.6940928, 14.503131),
new google.maps.LatLng(40.687396, 14.5182463),
new google.maps.LatLng(40.6941185, 14.5009876),
new google.maps.LatLng(40.6894575, 14.5189207),
new google.maps.LatLng(40.6939819, 14.502271),
new google.maps.LatLng(40.7003522, 14.5063271),
new google.maps.LatLng(40.6955471, 14.5133935),
new google.maps.LatLng(40.6953501, 14.5189741),
new google.maps.LatLng(40.6945065, 14.511243),
new google.maps.LatLng(40.6915861, 14.5099368),
new google.maps.LatLng(40.6941532, 14.501779),
new google.maps.LatLng(40.6913408, 14.5245746),
new google.maps.LatLng(40.6898696, 14.5182467),
new google.maps.LatLng(40.6881313, 14.5299715),
new google.maps.LatLng(40.6883057, 14.529365),
new google.maps.LatLng(40.6851013, 14.5212422),
new google.maps.LatLng(40.6985905, 14.5149709),
new google.maps.LatLng(40.69058, 14.51765),
new google.maps.LatLng(40.6945065, 14.511243),
new google.maps.LatLng(40.6985905, 14.5149709),
new google.maps.LatLng(40.689439, 14.52176),
new google.maps.LatLng(40.6941296, 14.5024949),
new google.maps.LatLng(40.6948755, 14.5049972),
new google.maps.LatLng(40.6921419, 14.5198501),
new google.maps.LatLng(40.6931126, 14.5231034),
new google.maps.LatLng(40.6979263, 14.5103437),
new google.maps.LatLng(40.6947829, 14.5257858),
new google.maps.LatLng(40.700777, 14.5096094),
new google.maps.LatLng(40.6928156, 14.5131567),
new google.maps.LatLng(40.6793125, 14.5357928),
new google.maps.LatLng(40.69458, 14.513268),
new google.maps.LatLng(40.6849492, 14.5238395),
new google.maps.LatLng(40.6883696, 14.5285734),
new google.maps.LatLng(40.6916841, 14.5171427),
new google.maps.LatLng(40.6914674, 14.5129918),
new google.maps.LatLng(40.6916841, 14.5171427),
new google.maps.LatLng(40.6893722, 14.5265686),
new google.maps.LatLng(40.6968956, 14.5191238),
new google.maps.LatLng(40.6952083, 14.5004924),
new google.maps.LatLng(40.6916841, 14.5171427),
new google.maps.LatLng(40.6917163, 14.5133233),
new google.maps.LatLng(40.6916841, 14.5171427),
new google.maps.LatLng(40.6888758, 14.5196817),
new google.maps.LatLng(40.674116, 14.513333),
new google.maps.LatLng(40.6944293, 14.5091104),
new google.maps.LatLng(40.6947829, 14.5257858),
new google.maps.LatLng(40.7043901, 14.5089903),
new google.maps.LatLng(40.6953413, 14.4993082),
new google.maps.LatLng(40.6892462, 14.5144767),
new google.maps.LatLng(40.6938549, 14.5190644),
new google.maps.LatLng(40.6958634494668, 14.5208501198851),
new google.maps.LatLng(40.6915006, 14.5205346),
new google.maps.LatLng(40.6943514, 14.500458),
new google.maps.LatLng(40.6882874, 14.5290135),
new google.maps.LatLng(40.6825776, 14.5363969),
new google.maps.LatLng(40.6934655, 14.5215307),
new google.maps.LatLng(40.680083, 14.5566494),
new google.maps.LatLng(40.7006267, 14.5065489),
new google.maps.LatLng(40.6941181, 14.500998),
new google.maps.LatLng(40.6892454, 14.5192678),
new google.maps.LatLng(40.6911038, 14.5235299),
new google.maps.LatLng(40.6937191, 14.5233756),
new google.maps.LatLng(40.690604, 14.5181479),
new google.maps.LatLng(40.69471, 14.5215757),
new google.maps.LatLng(40.6892462, 14.5144767),
new google.maps.LatLng(40.7003596, 14.5067944),
new google.maps.LatLng(40.6901173, 14.5179885),
new google.maps.LatLng(40.6901173, 14.5179885),
new google.maps.LatLng(40.6924873, 14.5222637),
new google.maps.LatLng(40.6924571, 14.52267),
new google.maps.LatLng(40.690725, 14.522693),
new google.maps.LatLng(40.6825776, 14.5363969),
new google.maps.LatLng(40.6846182, 14.5385701),
new google.maps.LatLng(40.6841341, 14.529227),
new google.maps.LatLng(40.6884869, 14.5212752),
new google.maps.LatLng(40.6988543, 14.5015408),
new google.maps.LatLng(40.6956254, 14.5188837),
new google.maps.LatLng(40.6936604, 14.5189721),
new google.maps.LatLng(40.7045835, 14.50866),
new google.maps.LatLng(40.6932846, 14.5080529),
new google.maps.LatLng(40.6941267, 14.5075517),
new google.maps.LatLng(40.6851013, 14.5212422),
new google.maps.LatLng(40.6970022, 14.5265804),
new google.maps.LatLng(40.6844295, 14.5251307),
new google.maps.LatLng(40.681608, 14.5305601),
new google.maps.LatLng(40.6880454, 14.5223754),
new google.maps.LatLng(40.694118, 14.5009986),
new google.maps.LatLng(40.7012976, 14.5142601),
new google.maps.LatLng(40.6970022, 14.5265804),
new google.maps.LatLng(40.6989604, 14.5018699),
new google.maps.LatLng(40.6903841, 14.5187849),
new google.maps.LatLng(40.6940703, 14.5186311),
new google.maps.LatLng(40.6921419, 14.5198501),
new google.maps.LatLng(40.6939819, 14.502271),
new google.maps.LatLng(40.6941891, 14.5236218),
new google.maps.LatLng(40.6939819, 14.502271),
new google.maps.LatLng(40.6778857, 14.548611),
new google.maps.LatLng(40.6890088, 14.5263688),
new google.maps.LatLng(40.6897537, 14.5187807),
new google.maps.LatLng(40.6890088, 14.5263688),
new google.maps.LatLng(40.6930733, 14.5266338),
new google.maps.LatLng(40.6821985, 14.5362353),
new google.maps.LatLng(40.69556, 14.5019805),
new google.maps.LatLng(40.6941841, 14.5136343),
new google.maps.LatLng(40.6964129, 14.5131331),
new google.maps.LatLng(40.6931569, 14.5027161),
new google.maps.LatLng(40.6964129, 14.5131331),
new google.maps.LatLng(40.6886637, 14.523601),
new google.maps.LatLng(40.6851013, 14.5212422),
new google.maps.LatLng(40.6923352, 14.5156867),
new google.maps.LatLng(40.6932416, 14.511734),
new google.maps.LatLng(40.6757771, 14.5350611),
new google.maps.LatLng(40.6880454, 14.5223754),
new google.maps.LatLng(40.6958634494668, 14.5208501198851),
new google.maps.LatLng(40.6771894, 14.5325719),
new google.maps.LatLng(40.6955281, 14.5007871),
new google.maps.LatLng(40.6970361, 14.5189669),
new google.maps.LatLng(40.6940457, 14.5044432),
new google.maps.LatLng(40.694243, 14.513388),
new google.maps.LatLng(40.6914676, 14.5129892),
new google.maps.LatLng(40.7050146, 14.5121162),
new google.maps.LatLng(40.6936054, 14.5120452),
new google.maps.LatLng(40.6914352, 14.5253114),
new google.maps.LatLng(40.6919698, 14.5189746),
new google.maps.LatLng(40.6915781, 14.5191667),
new google.maps.LatLng(40.6924571, 14.52267),
new google.maps.LatLng(40.6915731, 14.5078733),
new google.maps.LatLng(40.6973862, 14.5185996),
new google.maps.LatLng(40.6844295, 14.5251307),
new google.maps.LatLng(40.6939998, 14.504157),
new google.maps.LatLng(40.6882874, 14.5290135),
new google.maps.LatLng(40.6905902, 14.5141687),
new google.maps.LatLng(40.6970526656285, 14.5178200768238),
new google.maps.LatLng(40.6919342, 14.5159252),
new google.maps.LatLng(40.6934666, 14.5276855),
new google.maps.LatLng(40.675747, 14.513754),
new google.maps.LatLng(40.6937491, 14.5015844),
new google.maps.LatLng(40.6941579, 14.5043219),
new google.maps.LatLng(40.6906979, 14.5177092),
new google.maps.LatLng(40.6941296, 14.5024949),
new google.maps.LatLng(40.6955528, 14.5018936),
new google.maps.LatLng(40.6931569, 14.5027161),
new google.maps.LatLng(40.6945122, 14.5235619),
new google.maps.LatLng(40.6940703, 14.5186311),
new google.maps.LatLng(40.69696, 14.5155578),
new google.maps.LatLng(40.6933518, 14.5230762),
new google.maps.LatLng(40.6779438, 14.5307934),
new google.maps.LatLng(40.6911035, 14.5208317),
new google.maps.LatLng(40.6955527, 14.5003708),
new google.maps.LatLng(40.6958158, 14.5048149),
new google.maps.LatLng(40.6892687, 14.5215898),
new google.maps.LatLng(40.696634, 14.5190281),
new google.maps.LatLng(40.6974219, 14.5178752),
new google.maps.LatLng(40.6908592, 14.5168425),
new google.maps.LatLng(40.6908874, 14.5230253),
new google.maps.LatLng(40.6942951, 14.50578),
new google.maps.LatLng(40.7045331, 14.5149523),
new google.maps.LatLng(40.6958281, 14.5048095),
new google.maps.LatLng(40.7060256, 14.5060987),
new google.maps.LatLng(40.6914827, 14.5039618),
new google.maps.LatLng(40.690725, 14.522693),
new google.maps.LatLng(40.6932045, 14.5027247),
new google.maps.LatLng(40.7104412, 14.513862),
new google.maps.LatLng(40.674116, 14.513333),
new google.maps.LatLng(40.688124, 14.5222531),
new google.maps.LatLng(40.6811616, 14.5296181),
new google.maps.LatLng(40.6935765, 14.5190926),
new google.maps.LatLng(40.6883568, 14.5220386),
new google.maps.LatLng(40.6956387, 14.5028282),
new google.maps.LatLng(40.7091574, 14.5099252),
new google.maps.LatLng(40.6928695, 14.502851),
new google.maps.LatLng(40.6948006, 14.5244061),
new google.maps.LatLng(40.6892454, 14.5192678),
new google.maps.LatLng(40.6851013, 14.5212422),
new google.maps.LatLng(40.6990974, 14.505943),
new google.maps.LatLng(40.6977813, 14.5113776),
new google.maps.LatLng(40.6883181, 14.5219499),
new google.maps.LatLng(40.6988543, 14.5015408),
new google.maps.LatLng(40.6805972, 14.54334),
new google.maps.LatLng(40.6845694, 14.5383847),
new google.maps.LatLng(40.694635, 14.508983),
new google.maps.LatLng(40.6970022, 14.5265804),
new google.maps.LatLng(40.6939819, 14.502271),
new google.maps.LatLng(40.6939819, 14.502271),
new google.maps.LatLng(40.6851013, 14.5212422),
new google.maps.LatLng(40.6941296, 14.5024949),
new google.maps.LatLng(40.6900349, 14.5181612),
new google.maps.LatLng(40.682236, 14.5318744),
new google.maps.LatLng(40.6953547, 14.4995955),
new google.maps.LatLng(40.6825776, 14.5363969),
new google.maps.LatLng(40.692322, 14.5116015),
new google.maps.LatLng(40.6998733, 14.5197361),
new google.maps.LatLng(40.6968524, 14.5191307),
new google.maps.LatLng(40.692674, 14.5117173),
new google.maps.LatLng(40.709295, 14.5079162),
new google.maps.LatLng(40.6953501, 14.5189741),
new google.maps.LatLng(40.699482, 14.513723),
new google.maps.LatLng(40.6823566, 14.5297825),
new google.maps.LatLng(40.6811064, 14.5303423),
new google.maps.LatLng(40.7006568, 14.5095081),
new google.maps.LatLng(40.6828461, 14.5297616),
new google.maps.LatLng(40.6898719, 14.5182518),
new google.maps.LatLng(40.6844298, 14.5251303),
new google.maps.LatLng(40.7019928, 14.5127704),
new google.maps.LatLng(40.6917062, 14.5110697),
new google.maps.LatLng(40.6932846, 14.5080529),
new google.maps.LatLng(40.6917062, 14.5110697),
new google.maps.LatLng(40.7091574, 14.5099252),
new google.maps.LatLng(40.6981892, 14.5107632),
new google.maps.LatLng(40.6930782, 14.5217833),
new google.maps.LatLng(40.6743626, 14.5135949),
new google.maps.LatLng(40.6793125, 14.5357928),
new google.maps.LatLng(40.6970361, 14.5189669),
new google.maps.LatLng(40.6970361, 14.5189669),
new google.maps.LatLng(40.69458, 14.513268),
new google.maps.LatLng(40.6911151, 14.5144634),
new google.maps.LatLng(40.6903841, 14.5187849),
new google.maps.LatLng(40.700899, 14.5034211),
new google.maps.LatLng(40.6932417, 14.5196442),
new google.maps.LatLng(40.6777298, 14.5488349),
new google.maps.LatLng(40.6935064, 14.504121),
new google.maps.LatLng(40.6954578, 14.5206011),
new google.maps.LatLng(40.6941308, 14.5005078),
new google.maps.LatLng(40.6915107, 14.5226416),
new google.maps.LatLng(40.6943228, 14.5004646),
new google.maps.LatLng(40.6941579, 14.5043219),
new google.maps.LatLng(40.6787131, 14.5351516),
new google.maps.LatLng(40.689439, 14.52176),
new google.maps.LatLng(40.6907313, 14.5181623),
new google.maps.LatLng(40.6916841, 14.5171427),
new google.maps.LatLng(40.6942244, 14.5007996),
new google.maps.LatLng(40.6916841, 14.5171427),
new google.maps.LatLng(40.6932916, 14.5026165),
new google.maps.LatLng(40.6967478, 14.5190241),
new google.maps.LatLng(40.6941296, 14.5024949),
new google.maps.LatLng(40.6994177, 14.5069098),
new google.maps.LatLng(40.69942, 14.5069168),
new google.maps.LatLng(40.691697, 14.5098576),
new google.maps.LatLng(40.6928156, 14.5131567),
new google.maps.LatLng(40.6825776, 14.5363969),
new google.maps.LatLng(40.6825776, 14.5363969),
new google.maps.LatLng(40.6825776, 14.5363969),
new google.maps.LatLng(40.7030709, 14.5132343),
new google.maps.LatLng(40.6915878, 14.5109067),
new google.maps.LatLng(40.6942265, 14.5014934),
new google.maps.LatLng(40.6947509, 14.52692),
new google.maps.LatLng(40.6892687, 14.5215898),
new google.maps.LatLng(40.6967211, 14.5287767),
new google.maps.LatLng(40.7021526, 14.5056361),
new google.maps.LatLng(40.6916999, 14.5110277),
new google.maps.LatLng(40.6941626, 14.5208252),
new google.maps.LatLng(40.690815, 14.5114173),
new google.maps.LatLng(40.7043901, 14.5089903),
new google.maps.LatLng(40.6939872, 14.505122),
new google.maps.LatLng(40.6844295, 14.5251307),
new google.maps.LatLng(40.6905902, 14.5141687),
new google.maps.LatLng(40.696587, 14.519302),
new google.maps.LatLng(40.7012779, 14.5196478),
new google.maps.LatLng(40.6892071, 14.5193355),
new google.maps.LatLng(40.6787431, 14.5351553),
new google.maps.LatLng(40.6948026, 14.5242863),
new google.maps.LatLng(40.6848754, 14.5277655),
new google.maps.LatLng(40.7090275, 14.5221537),
new google.maps.LatLng(40.6825776, 14.5363969),
new google.maps.LatLng(40.7001993, 14.5162701),
new google.maps.LatLng(40.6937491, 14.5015844),
new google.maps.LatLng(40.6936611, 14.5051563),
new google.maps.LatLng(40.6918566, 14.5110604),
new google.maps.LatLng(40.693802, 14.5069259),
new google.maps.LatLng(40.70442, 14.5150581),
new google.maps.LatLng(40.6931332, 14.5093674),
new google.maps.LatLng(40.6927903, 14.5125093),
new google.maps.LatLng(40.6916174, 14.5238654),
new google.maps.LatLng(40.685938, 14.522187),
new google.maps.LatLng(40.7033464, 14.5144973),
new google.maps.LatLng(40.6952083, 14.5004924),
new google.maps.LatLng(40.7030709, 14.5132343),
new google.maps.LatLng(40.6757771, 14.5350611),
new google.maps.LatLng(40.693978, 14.5017475),
new google.maps.LatLng(40.6964153, 14.5205607),
new google.maps.LatLng(40.6885724, 14.5211638),
new google.maps.LatLng(40.700436, 14.5062776),
new google.maps.LatLng(40.6818605, 14.5374551),
new google.maps.LatLng(40.6844295, 14.5251307),
new google.maps.LatLng(40.7030891, 14.5132503),
new google.maps.LatLng(40.6891274, 14.5263239),
new google.maps.LatLng(40.693978, 14.5017475),
new google.maps.LatLng(40.696634, 14.5190281),
new google.maps.LatLng(40.6981127, 14.5105597),
new google.maps.LatLng(40.6962283, 14.5219018),
new google.maps.LatLng(40.6925171, 14.5197443),
new google.maps.LatLng(40.6941296, 14.5024949),
new google.maps.LatLng(40.695967, 14.502648),
new google.maps.LatLng(40.6778857, 14.548611),
new google.maps.LatLng(40.6803823, 14.5414958),
new google.maps.LatLng(40.7037828, 14.5093153),
new google.maps.LatLng(40.6822522182513, 14.5364918885208),
new google.maps.LatLng(40.6941021, 14.5012752),
new google.maps.LatLng(40.6952071, 14.5217436),
new google.maps.LatLng(40.6935991, 14.5261752),
new google.maps.LatLng(40.6837213640993, 14.5362957792982),
new google.maps.LatLng(40.7025933, 14.509667),
new google.maps.LatLng(40.6787431, 14.5351553),
new google.maps.LatLng(40.6795276, 14.5365495),
new google.maps.LatLng(40.693978, 14.5017475),
new google.maps.LatLng(40.6940703, 14.5186311),
new google.maps.LatLng(40.7006181, 14.506554),
new google.maps.LatLng(40.6934056, 14.5210109),
new google.maps.LatLng(40.6954032, 14.499686),
new google.maps.LatLng(40.6892454, 14.5192678),
new google.maps.LatLng(40.6913543, 14.5245367),
new google.maps.LatLng(40.6901999, 14.5199687),
new google.maps.LatLng(40.6883057, 14.529365),
new google.maps.LatLng(40.7021526, 14.5056361),
new google.maps.LatLng(40.6830166, 14.5297699),
new google.maps.LatLng(40.6845831, 14.5378697),
new google.maps.LatLng(40.6936771, 14.5222611),
new google.maps.LatLng(40.6905173272689, 14.5146706739797),
new google.maps.LatLng(40.69556, 14.5019805),
new google.maps.LatLng(40.6928997, 14.5105424),
new google.maps.LatLng(40.6969396, 14.5173404),
new google.maps.LatLng(40.6825776, 14.5363969),
new google.maps.LatLng(40.6849934, 14.5238418),
new google.maps.LatLng(40.7043901, 14.5089903),
new google.maps.LatLng(40.6851013, 14.5212422),
new google.maps.LatLng(40.6953405, 14.4986357),
new google.maps.LatLng(40.7043901, 14.5089903),
new google.maps.LatLng(40.6898178, 14.5236005),
new google.maps.LatLng(40.6883194, 14.5239062),
new google.maps.LatLng(40.6875365708865, 14.5180892310179),
new google.maps.LatLng(40.6917163, 14.5133233),
new google.maps.LatLng(40.6967478, 14.5190241),
new google.maps.LatLng(40.6915006, 14.5205346),
new google.maps.LatLng(40.6867287, 14.5322763),
new google.maps.LatLng(40.6830149, 14.5402959),
new google.maps.LatLng(40.6880454, 14.5223754),
new google.maps.LatLng(40.6844295, 14.5251307),
new google.maps.LatLng(40.694118, 14.5009986),
new google.maps.LatLng(40.6942682, 14.5010157),
new google.maps.LatLng(40.6907803, 14.5137333),
new google.maps.LatLng(40.6936682, 14.5058706),
new google.maps.LatLng(40.6913408, 14.5245746),
new google.maps.LatLng(40.686641, 14.4990429),
new google.maps.LatLng(40.6926408, 14.5132685),
new google.maps.LatLng(40.6883057, 14.529365),
new google.maps.LatLng(40.6883057, 14.529365),
new google.maps.LatLng(40.6909606, 14.5146293),
new google.maps.LatLng(40.6789227, 14.5454563),
new google.maps.LatLng(40.6943228, 14.5004646),
new google.maps.LatLng(40.7019928, 14.5127704),
new google.maps.LatLng(40.6941267, 14.5075517),
new google.maps.LatLng(40.6932713, 14.508105),
new google.maps.LatLng(40.6942265, 14.5014934),
new google.maps.LatLng(40.6935064, 14.504121),
new google.maps.LatLng(40.69458, 14.513268),
new google.maps.LatLng(40.6917163, 14.5133233),
new google.maps.LatLng(40.6901999, 14.5199687),
new google.maps.LatLng(40.6983381, 14.5005393),
new google.maps.LatLng(40.6952083, 14.5004924),
new google.maps.LatLng(40.6955138, 14.5043506),
new google.maps.LatLng(40.6859138, 14.5229267),
new google.maps.LatLng(40.6916514, 14.5016908),
new google.maps.LatLng(40.6825776, 14.5363969),
new google.maps.LatLng(40.7066468, 14.5096783),
new google.maps.LatLng(40.6825776, 14.5363969),
new google.maps.LatLng(40.6940703, 14.5186311),
new google.maps.LatLng(40.6903841, 14.5187849),
new google.maps.LatLng(40.7006451, 14.5065381),
new google.maps.LatLng(40.6894914, 14.5239765),
new google.maps.LatLng(40.6937282, 14.5113064),
new google.maps.LatLng(40.6908874, 14.5230253),
new google.maps.LatLng(40.6918545, 14.5147316),
new google.maps.LatLng(40.6941579, 14.5043219),
new google.maps.LatLng(40.6916174, 14.5238654),
new google.maps.LatLng(40.6956072, 14.5020592),
new google.maps.LatLng(40.693753, 14.5233838),
new google.maps.LatLng(40.6948796, 14.5109722),
new google.maps.LatLng(40.69696, 14.5155578),
new google.maps.LatLng(40.6981229, 14.5105869),
new google.maps.LatLng(40.7077051, 14.5003332),
new google.maps.LatLng(40.6851013, 14.5212422),
new google.maps.LatLng(40.693978, 14.5017475),
new google.maps.LatLng(40.6886091, 14.5205866),
new google.maps.LatLng(40.6981331, 14.510614),
new google.maps.LatLng(40.6932417, 14.5196442),
new google.maps.LatLng(40.6812255, 14.5317155),
new google.maps.LatLng(40.6946607, 14.5218729),
new google.maps.LatLng(40.6877245, 14.5176169),
new google.maps.LatLng(40.6952218, 14.5257729),
new google.maps.LatLng(40.6825776, 14.5363969),
new google.maps.LatLng(40.6844812, 14.5404849),
new google.maps.LatLng(40.6890088, 14.5263688),
new google.maps.LatLng(40.688124, 14.5222531),
new google.maps.LatLng(40.68225, 14.5364668),
new google.maps.LatLng(40.693978, 14.5017475),
new google.maps.LatLng(40.6942433, 14.5112681),
new google.maps.LatLng(40.6962317, 14.5222202),
new google.maps.LatLng(40.6928695, 14.502851),
new google.maps.LatLng(40.6931828, 14.5088529),
new google.maps.LatLng(40.6914385, 14.5250646),
new google.maps.LatLng(40.6943023, 14.4997335),
new google.maps.LatLng(40.6844295, 14.5251307),
new google.maps.LatLng(40.6947509, 14.52692),
new google.maps.LatLng(40.6917386, 14.5156214),
new google.maps.LatLng(40.6917386, 14.5156214),
new google.maps.LatLng(40.6921419, 14.5198501),
new google.maps.LatLng(40.6936054, 14.5120452),
new google.maps.LatLng(40.6924571, 14.52267),
new google.maps.LatLng(40.6803823, 14.5414958),
new google.maps.LatLng(40.6894339, 14.5239994),
new google.maps.LatLng(40.6919641, 14.5159943),
new google.maps.LatLng(40.6936611, 14.5051563),
new google.maps.LatLng(40.7021971, 14.5057676),
new google.maps.LatLng(40.6921472, 14.5202273),
new google.maps.LatLng(40.6951285, 14.5190068),
new google.maps.LatLng(40.6900349, 14.5181612),
new google.maps.LatLng(40.6912279, 14.5131706),
new google.maps.LatLng(40.6879768, 14.5221748),
new google.maps.LatLng(40.6881254, 14.5300385),
new google.maps.LatLng(40.6954464, 14.5190454),
new google.maps.LatLng(40.6844295, 14.5251307),
new google.maps.LatLng(40.6935991, 14.5261752),
new google.maps.LatLng(40.6844295, 14.5251307),
new google.maps.LatLng(40.6868513, 14.4990669),
new google.maps.LatLng(40.6928695, 14.502851),
new google.maps.LatLng(40.6932915, 14.5118044),
new google.maps.LatLng(40.7042886, 14.5089494),
new google.maps.LatLng(40.6932915, 14.5118044),
new google.maps.LatLng(40.6851013, 14.5212422),
new google.maps.LatLng(40.694929, 14.505059),
new google.maps.LatLng(40.694635, 14.508983),
new google.maps.LatLng(40.694635, 14.508983),
new google.maps.LatLng(40.690725, 14.522693),
new google.maps.LatLng(40.6981535, 14.5106682),
new google.maps.LatLng(40.6956252, 14.5010388),
new google.maps.LatLng(40.6860514, 14.527874),
new google.maps.LatLng(40.6844295, 14.5251306),
new google.maps.LatLng(40.6892462, 14.5144767),
new google.maps.LatLng(40.6883141, 14.5220083),
new google.maps.LatLng(40.6914926, 14.5073221),
new google.maps.LatLng(40.6916333, 14.5012091),
new google.maps.LatLng(40.69458, 14.513268),
new google.maps.LatLng(40.6745479, 14.5140926),
new google.maps.LatLng(40.6883723, 14.5243465),
new google.maps.LatLng(40.6901638, 14.5256123),
new google.maps.LatLng(40.718873, 14.5116037),
new google.maps.LatLng(40.6958656, 14.5192075),
new google.maps.LatLng(40.6942433, 14.5112681),
new google.maps.LatLng(40.6933446, 14.5027486),
new google.maps.LatLng(40.69458, 14.513268),
new google.maps.LatLng(40.6937491, 14.5015844),
new google.maps.LatLng(40.693978, 14.5017475),
new google.maps.LatLng(40.6787431, 14.5351553),
new google.maps.LatLng(40.6848754, 14.5277655),
new google.maps.LatLng(40.6874418, 14.5312834),
new google.maps.LatLng(40.7021526, 14.5056361),
new google.maps.LatLng(40.6829929, 14.53634),
new google.maps.LatLng(40.69, 14.518253),
new google.maps.LatLng(40.69304, 14.511255),
new google.maps.LatLng(40.69058, 14.51765),
new google.maps.LatLng(40.6867287, 14.5322763),
new google.maps.LatLng(40.696634, 14.5190281),
new google.maps.LatLng(40.6967478, 14.5190241),
new google.maps.LatLng(40.689439, 14.52176),
new google.maps.LatLng(40.6874002, 14.5319641),
new google.maps.LatLng(40.6886091, 14.5205866),
new google.maps.LatLng(40.6912279, 14.5131706),
new google.maps.LatLng(40.6853711, 14.5246102),
new google.maps.LatLng(40.6851013, 14.5212422),
new google.maps.LatLng(40.6943228, 14.5004646),
new google.maps.LatLng(40.6931634, 14.5229943),
new google.maps.LatLng(40.6883141, 14.5220083),
new google.maps.LatLng(40.6916333, 14.5012091),
new google.maps.LatLng(40.70347, 14.54004),
new google.maps.LatLng(40.7007144463646, 14.5390640225217),
new google.maps.LatLng(40.7065935613065, 14.5504927677786),
new google.maps.LatLng(40.7025695407182, 14.5394094891777),
new google.maps.LatLng(40.7054618, 14.5376768),
new google.maps.LatLng(40.5476261, 14.2501003),
new google.maps.LatLng(40.7050641862172, 14.5431595239721),
new google.maps.LatLng(40.7035489, 14.5323464),
new google.maps.LatLng(40.5476261, 14.2501003),
new google.maps.LatLng(40.6984438601069, 14.5406059685544),
new google.maps.LatLng(40.704148230431, 14.5286488833171),
new google.maps.LatLng(40.706588448222, 14.549883274898),
new google.maps.LatLng(40.5902583, 14.3399405),
new google.maps.LatLng(40.6088754, 14.3413852),
new google.maps.LatLng(40.6734027, 14.5120589),
new google.maps.LatLng(40.6789623, 14.5096152),
new google.maps.LatLng(40.6692007, 14.5145804),
new google.maps.LatLng(40.680321, 14.507619),
new google.maps.LatLng(40.7185623, 14.5104977),
new google.maps.LatLng(40.7182204, 14.5101844),
new google.maps.LatLng(40.7155345, 14.5170396),
new google.maps.LatLng(40.7171415, 14.5125985),
new google.maps.LatLng(40.7113805, 14.5060554),
new google.maps.LatLng(40.7135349, 14.5051149),
new google.maps.LatLng(40.7135995, 14.5109144),
new google.maps.LatLng(40.7101614, 14.5066124),
new google.maps.LatLng(40.7150458, 14.5209066),
new google.maps.LatLng(40.7150458, 14.5209066),
new google.maps.LatLng(40.7117628, 14.5199662),
new google.maps.LatLng(40.7204978, 14.5145273),
new google.maps.LatLng(40.7189822, 14.504197),
new google.maps.LatLng(40.7212466, 14.5411034),
new google.maps.LatLng(40.7103231, 14.5224018),
new google.maps.LatLng(40.7145925, 14.5334208),
new google.maps.LatLng(40.7172119, 14.5253906),
new google.maps.LatLng(40.7128491, 14.5245819),
new google.maps.LatLng(40.7287576, 14.5437242),
new google.maps.LatLng(40.717758, 14.53571),
new google.maps.LatLng(40.7490499, 14.5408902),
  ];
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
