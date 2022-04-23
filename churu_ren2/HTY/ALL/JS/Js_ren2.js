// 全局变量
var DATA_ALL;
var img_file;
$("#CSS_in").html(' <link rel="stylesheet" href="ALL/CSS/CSS_input.css" />');
$("#html_then").hide();

$("#upload_name").on("change", "input[type='file']", function () {
  var filePath = $(this).val();
  var arr = filePath.split("\\");
  var fileName = arr[arr.length - 1];
  $("#showFileName").text(fileName);
});

function postDate() {
  try {
    img_file = document.getElementById("up").files[0];
  } finally {
  }

  $("#CSS_in").empty();
  $("#CSS_in").html('<link rel="stylesheet" href="ALL/CSS/CSS_then.css" />');
  $("#login").hide();
  $("#html_then").show();

  DATA_ALL = {
    first_1_left: $('input[name="first_1_left"]').val(),
    first_1_right: $('input[name="first_1_right"]').val(),
    first_2: $('input[name="first_2"]').val(),
    first_3: $('input[name="first_3"]').val(),
    chu: $('input[name="chu"]').val(),
    ru: $('input[name="ru"]').val(),
    // file: $('input[name="file"]'),
  };

  console.log(DATA_ALL);
  console.log(img_file);

  if ($.isEmptyObject(DATA_ALL.first_1_left)) {
    DATA_ALL.first_1_left = "黄天意 男";
  }
  if ($.isEmptyObject(DATA_ALL.first_1_right)) {
    DATA_ALL.first_1_right = "学生 19041219";
  }
  if ($.isEmptyObject(DATA_ALL.first_2)) {
    DATA_ALL.first_2 = "本科生 | 城市建设学部 土木工程 2019级 19041219";
  }
  if ($.isEmptyObject(DATA_ALL.first_3)) {
    DATA_ALL.first_3 = "联系电话:15177939513";
  }
  if ($.isEmptyObject(DATA_ALL.chu)) {
    DATA_ALL.chu = "离校# 至因其他请补充说明 核酸检查去往北京市垂杨柳医院";
  }
  if ($.isEmptyObject(DATA_ALL.ru)) {
    DATA_ALL.ru = "入校# 因其他请补充说明 核酸检查从北京市垂杨柳医院返回";
  }

  churu_onclick();
}

var churu_dex = 2;
function churu_onclick() {
  try {
    if (img_file) {
      var reader = new FileReader();
      reader.onload = function (event) {
        var txt = event.target.result;
        // var img = document.createElement("img");
        // img.src = txt;
        // img.id = "img_up";
        // img.class = "img_up";
        // document.getElementById("img_id").appendChild(img);
        console.log(txt);

        $("#img_id").attr("src", txt);
      };
    }
    reader.readAsDataURL(img_file);
  } catch (error) {
    $("#img_id").attr("src", "ALL/IMG/Touxiang.png");
  }

  // $("#img_up").appendTo(' data-v-21029715=""');

  document.getElementById("first_1_left").innerHTML = DATA_ALL.first_1_left;
  document.getElementById("first_1_right").innerHTML = DATA_ALL.first_1_right;
  document.getElementById("first_2").innerHTML = DATA_ALL.first_2;
  document.getElementById("first_3").innerHTML = DATA_ALL.first_3;

  if (churu_dex == 2) {
    churu_dex = 1;
    document.getElementById("churu_hanzi").innerHTML = "出";
    document.getElementById("churu_hanzi_shenqintongguo").innerHTML = "出校申请已通过";
    document.getElementById("churu_hanzi_liyou").innerHTML = DATA_ALL.chu;
    document.getElementById("or_one_two").innerHTML = "2/2";
  } else {
    churu_dex = 2;
    document.getElementById("churu_hanzi").innerHTML = "入";
    document.getElementById("churu_hanzi_shenqintongguo").innerHTML = "入校申请已通过";
    document.getElementById("churu_hanzi_liyou").innerHTML = DATA_ALL.ru;
    document.getElementById("or_one_two").innerHTML = "1/2";
  }
}

function show() {
  var now = new Date();
  var year = now.getFullYear(); //得到年份
  var month = (now.getMonth() + 1).toString().padStart(2, "0"); //得到月份
  var date = now.getDate().toString().padStart(2, "0"); //得到日期
  var day = now.getDay().toString().padStart(2, "0"); //得到周几
  var hour = now.getHours().toString().padStart(2, "0"); //得到小时数
  var minute = now.getMinutes().toString().padStart(2, "0"); //得到分钟数
  var second = now.getSeconds().toString().padStart(2, "0"); //得到秒数
  var time = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
  document.getElementById("time").innerHTML = time;
  setInterval("show()", 1000); //定时器一直调用show()函数
}
show();

$("#time").click(function () {
  $("#login").show();
  $("#html_then").hide();
  $("#CSS_in").empty();
  $("#CSS_in").html('<link rel="stylesheet" href="ALL/CSS/CSS_input.css" />');
});
