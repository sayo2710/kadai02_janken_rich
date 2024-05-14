const pics_src = new Array(
  "./img/stone.png",
  "./img/scissors.png",
  "./img/paper.png"
);

const shohai_message = new Array("あなたの勝ち", "あいこ", "あなたの負け");

function otherHand() {
  // 相手の手
  const other = Math.floor(Math.random() * 3);
  const other_hand_pic = document.querySelector(".other_hand_pic");
  const other_pic_url = pics_src[other];
  other_hand_pic.src = other_pic_url;
}

$(".btn_rock").on("click", function () {
  // 自分の手
  const my_hand_pic = document.querySelector(".my_hand_pic");
  const my_pic_url = pics_src[0];
  my_hand_pic.src = my_pic_url;
  // 相手の手
  const other = Math.floor(Math.random() * 3);
  const other_hand_pic = document.querySelector(".other_hand_pic");
  const other_pic_url = pics_src[other];
  other_hand_pic.src = other_pic_url;
  // 結果メッセージ
  if (0 === other) {
    $(".shohai_msg").html(shohai_message[1]);
  } else if (1 === other) {
    $(".shohai_msg").html(shohai_message[0]);
  } else if (2 === other) {
    $(".shohai_msg").html(shohai_message[2]);
  }
});

$(".btn_scissors").on("click", function () {
  // 自分の手
  const my_hand_pic = document.querySelector(".my_hand_pic");
  const my_pic_url = pics_src[1];
  my_hand_pic.src = my_pic_url;
  // 相手の手
  const other = Math.floor(Math.random() * 3);
  const other_hand_pic = document.querySelector(".other_hand_pic");
  const other_pic_url = pics_src[other];
  other_hand_pic.src = other_pic_url;
  // 結果メッセージ
  if (0 === other) {
    $(".shohai_msg").html(shohai_message[2]);
  } else if (1 === other) {
    $(".shohai_msg").html(shohai_message[1]);
  } else if (2 === other) {
    $(".shohai_msg").html(shohai_message[0]);
  }
});

$(".btn_paper").on("click", function () {
  // 自分の手
  const my_hand_pic = document.querySelector(".my_hand_pic");
  const my_pic_url = pics_src[2];
  my_hand_pic.src = my_pic_url;
  // 相手の手
  const other = Math.floor(Math.random() * 3);
  const other_hand_pic = document.querySelector(".other_hand_pic");
  const other_pic_url = pics_src[other];
  other_hand_pic.src = other_pic_url;
  // 結果メッセージ
  if (0 === other) {
    $(".shohai_msg").html(shohai_message[0]);
  } else if (1 === other) {
    $(".shohai_msg").html(shohai_message[2]);
  } else if (2 === other) {
    $(".shohai_msg").html(shohai_message[1]);
  }
});

// 音声入力用のAPIを取得
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// 言語の設定
recognition.lang = "ja-JP";

// ボタンのクリック時に音声入力をOn
const btn = document.querySelector(".btn_mic");
btn.addEventListener("click", () => {
  recognition.start();
});

// 音声入力の結果が入る
recognition.onresult = (event) => {
  const speech = event.results[0][0].transcript;
  $(".onsei_text").html(speech);

  // 自分の手
  if ("じゃんけんグー" === speech) {
    const my_hand_pic = document.querySelector(".my_hand_pic");
    const my_pic_url = pics_src[0];
    my_hand_pic.src = my_pic_url;
  } else if ("じゃんけん チョキ" === speech) {
    const my_hand_pic = document.querySelector(".my_hand_pic");
    const my_pic_url = pics_src[1];
    my_hand_pic.src = my_pic_url;
  } else if ("じゃんけんパー") {
    const my_hand_pic = document.querySelector(".my_hand_pic");
    const my_pic_url = pics_src[2];
    my_hand_pic.src = my_pic_url;
  } else {
    alert("もう一度お願いします");
  }
  // 相手の手
  const other = Math.floor(Math.random() * 3);
  const other_hand_pic = document.querySelector(".other_hand_pic");
  const other_pic_url = pics_src[other];
  other_hand_pic.src = other_pic_url;
  // 結果メッセージ
  if (0 === other) {
    $(".shohai_msg").html(shohai_message[0]);
  } else if (1 === other) {
    $(".shohai_msg").html(shohai_message[2]);
  } else if (2 === other) {
    $(".shohai_msg").html(shohai_message[1]);
  }
};
