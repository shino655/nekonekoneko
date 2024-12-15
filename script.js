// 画像のパスの配列
const images = [
    'neko1.png',
    'neko2.png',
    'neko3.png',
    'neko4.png',
    'neko5.png',
    'neko6.png',
    'neko7.png',
    'neko8.png',
    'neko9.png',
    'neko10.png',
    'neko11.png',
    'neko12.png',
    'neko13.png',
    'neko14.png',
    'neko15.png'
];

// 特別な画像
const specialImages = {
    gold: 'nekogold.png',
    silver: 'nekosilver.png',
    bronze: 'nekobronze.png'
};

// 画面タップ時の処理
document.body.addEventListener('click', function(event) {
    let selectedImage;

    // ランダムに特別な画像が出るか判定
    const randomChance = Math.random() * 100; // 0〜99.999...
    if (randomChance < 1) {
        selectedImage = specialImages.nekogold; // 1/100の確率
    } else if (randomChance < 3) {
        selectedImage = specialImages.nekosilver; // 2/100の確率 (50分の1)
    } else if (randomChance < 8) {
        selectedImage = specialImages.nekobronze; // 5/100の確率 (20分の1)
    } else {
        // 通常画像
        selectedImage = images[Math.floor(Math.random() * images.length)];
    }

    // 画像要素を作成
    const imgElement = document.createElement('img');
    imgElement.src = selectedImage;

    // 画像読み込みエラー時の処理
    imgElement.onerror = function() {
        imgElement.src = 'default.png'; // デフォルト画像を設定
    };

    // クリックされた場所に画像を表示
    imgElement.style.left = `${event.pageX - 50}px`; // 画像の中心をタップ位置にする
    imgElement.style.top = `${event.pageY - 50}px`;

    // 画像をコンテナに追加
    document.getElementById('image-container').appendChild(imgElement);

    // 一定時間後に画像を削除
    setTimeout(() => {
        imgElement.style.opacity = '0';
        setTimeout(() => imgElement.remove(), 500); // フェードアウト後に削除
    }, 2000);
});

