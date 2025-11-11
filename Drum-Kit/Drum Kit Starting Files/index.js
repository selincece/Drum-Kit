
var numberOfDrumButtons= document.querySelectorAll(".drum").length;

// CALLBACK ÖRNEĞİ 1: Basit Callback Fonksiyonu
function greetUser(name, callback) {
  console.log("Merhaba " + name + "!");
  // Callback fonksiyonu çağrılıyor
  if (callback) {
    callback(name);
  }
}

// Callback fonksiyonu tanımlanıyor
function welcomeMessage(name) {
  console.log(name + ", davul setine hoş geldin!");
}

// Callback kullanımı
greetUser("Kullanıcı", welcomeMessage);

// CALLBACK ÖRNEĞİ 2: playSound fonksiyonuna callback ekleniyor
function playSound(key, callback) {
  var audio;
  switch (key) {
    case "w":
      audio = new Audio('sounds/crash.mp3');
      break;
    case "a":
      audio = new Audio('sounds/kick-bass.mp3');
      break;
    case "s":
      audio = new Audio('sounds/snare.mp3');
      break;
    case "d":
      audio = new Audio('sounds/tom-1.mp3');
      break;
    case "j":
      audio = new Audio('sounds/tom-2.mp3');
      break;
    case "k":
      audio = new Audio('sounds/tom-3.mp3');
      break;
    case "l":
      audio = new Audio('sounds/tom-4.mp3');
      break;
    default:
      console.log(key);
      if (callback) callback(false);
      return;
  }
  
  if (audio) {
    audio.play();
    // Ses çalma işlemi başladıktan sonra callback çağrılıyor
    if (callback) {
      callback(true, key);
    }
  }
}

// Callback fonksiyonu: Ses çalındıktan sonra konsola mesaj yazdırır
function onSoundPlayed(success, key) {
  if (success) {
    console.log(key.toUpperCase() + " tuşu için ses çalındı!");
  }
}



// Callback fonksiyonu: Animasyon bittikten sonra çalışır
function onAnimationComplete(key) {
  console.log(key.toUpperCase() + " butonu animasyonu tamamlandı!");
}

// Click event listeners (callback örneği ile)
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    this.style.color = "white";
    var buttonInnerHTML = this.innerHTML;
    // Callback fonksiyonları ile kullanım
    playSound(buttonInnerHTML, onSoundPlayed);
    buttonAnimation(buttonInnerHTML, onAnimationComplete);
  });
}

// Keyboard event listener (callback örneği ile)
document.addEventListener("keypress", function(event) {
  var keyPressed = event.key.toLowerCase();
  // Callback fonksiyonları ile kullanım
  playSound(keyPressed, onSoundPlayed);
  buttonAnimation(keyPressed, onAnimationComplete);
});

// CALLBACK ÖRNEĞİ 3: setTimeout ile callback
function delayedMessage(message, delay, callback) {
  setTimeout(function() {
    console.log(message);
    // Callback çağrılıyor
    if (callback) {
      callback();
    }
  }, delay);
}

// Callback ile kullanım
delayedMessage("Davul seti hazır!", 1000, function() {
  console.log("Artık çalmaya başlayabilirsiniz!");
});

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    
    if (activeButton) {
        // pressed class'ını ekle
        activeButton.classList.add("pressed");
        
        // 2 saniye (2000ms) sonra pressed class'ını kaldır
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 1000);
    }
}



