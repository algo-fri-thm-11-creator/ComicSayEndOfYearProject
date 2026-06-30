function report() {
    alert("Thank you for reporting this comic, our team will have a look and see whether it violates ComicSay's rules.")
}

function postComment() {
    var userComment = document.getElementById("commentInput").value;
    document.getElementById("userCommentSpace").textContent = userComment;
    document.getElementById("commentInput").style.display = "none";
    document.getElementById("commentButton").style.display = "none";
}

var areTheyLiked = {
    "LikeButtonHeart1": false,
    "LikeButtonHeart2": false,
    "LikeButtonHeart3": false,
    "LikeButtonHeart4": false,
    "LikeButtonHeart5": false,
    "LikeButtonHeart6": false,
    "LikeButtonHeart7": false,
    "LikeButtonHeart8": false,
    "LikeButtonHeart9": false,
    "LikeButtonHeart10": false,
    "LikeButtonHeart11": false,
    "LikeButtonHeart12": false,
    "LikeButtonHeart13": false,
    "LikeButtonHeart14": false,
}



function changeImage1() {
    if (areTheyLiked.LikeButtonHeart1 == false) {
        document.getElementById("LikeButtonHeart1").src = "HeartGraphicFull.png";
        areTheyLiked.LikeButtonHeart1 = true
        var count = Number(document.getElementById("likeCount1").textContent);
        document.getElementById("likeCount1").textContent = count + 1;
    }
    else {
        document.getElementById("LikeButtonHeart1").src = "HeartGraphicNotFull.png";
        areTheyLiked.LikeButtonHeart1 = false;
        var count = Number(document.getElementById("likeCount1").textContent);
        document.getElementById("likeCount1").textContent = count - 1;
    }
}
function changeImage2() {
    if (areTheyLiked.LikeButtonHeart2 == false) {
        document.getElementById("LikeButtonHeart2").src = "HeartGraphicFull.png";
        areTheyLiked.LikeButtonHeart2 = true
        var count = Number(document.getElementById("likeCount2").textContent);
        document.getElementById("likeCount2").textContent = count + 1;
    }
    else {
        document.getElementById("LikeButtonHeart2").src = "HeartGraphicNotFull.png";
        areTheyLiked.LikeButtonHeart2 = false
        var count = Number(document.getElementById("likeCount2").textContent);
        document.getElementById("likeCount2").textContent = count - 1;
    }
}
function changeImage3() {
    if (areTheyLiked.LikeButtonHeart3 == false) {
        document.getElementById("LikeButtonHeart3").src = "HeartGraphicFull.png";
        areTheyLiked.LikeButtonHeart3 = true
        var count = Number(document.getElementById("likeCount3").textContent);
        document.getElementById("likeCount3").textContent = count + 1;
    }
    else {
        document.getElementById("LikeButtonHeart3").src = "HeartGraphicNotFull.png";
        areTheyLiked.LikeButtonHeart3 = false
        var count = Number(document.getElementById("likeCount3").textContent);
        document.getElementById("likeCount3").textContent = count - 1;
    }
}
function changeImage4() {
    if (areTheyLiked.LikeButtonHeart4 == false) {
        document.getElementById("LikeButtonHeart4").src = "HeartGraphicFull.png";
        areTheyLiked.LikeButtonHeart4 = true
    }
    else {
        document.getElementById("LikeButtonHeart4").src = "HeartGraphicNotFull.png";
        areTheyLiked.LikeButtonHeart4 = false
    }
}

function changeImage5() {
    if (areTheyLiked.LikeButtonHeart5 == false) {
        document.getElementById("LikeButtonHeart5").src = "HeartGraphicFull.png";
        areTheyLiked.LikeButtonHeart5 = true
        var count = Number(document.getElementById("likeCount5").textContent);
        document.getElementById("likeCount5").textContent = count + 1;
    }
    else {
        document.getElementById("LikeButtonHeart5").src = "HeartGraphicNotFull.png";
        areTheyLiked.LikeButtonHeart5 = false
        var count = Number(document.getElementById("likeCount5").textContent);
        document.getElementById("likeCount5").textContent = count - 1;
    }
}
function changeImage6() {
    if (areTheyLiked.LikeButtonHeart6 == false) {
        document.getElementById("LikeButtonHeart6").src = "HeartGraphicFull.png";
        areTheyLiked.LikeButtonHeart6 = true
        var count = Number(document.getElementById("likeCount6").textContent);
        document.getElementById("likeCount6").textContent = count + 1;
    }
    else {
        document.getElementById("LikeButtonHeart6").src = "HeartGraphicNotFull.png";
        areTheyLiked.LikeButtonHeart6 = false
        var count = Number(document.getElementById("likeCount6").textContent);
        document.getElementById("likeCount6").textContent = count - 1;
    }
}
function changeImage7() {
    if (areTheyLiked.LikeButtonHeart7 == false) {
        document.getElementById("LikeButtonHeart7").src = "HeartGraphicFull.png";
        areTheyLiked.LikeButtonHeart7 = true
        var count = Number(document.getElementById("likeCount7").textContent);
        document.getElementById("likeCount7").textContent = count + 1;
    }
    else {
        document.getElementById("LikeButtonHeart7").src = "HeartGraphicNotFull.png";
        areTheyLiked.LikeButtonHeart7 = false
        var count = Number(document.getElementById("likeCount7").textContent);
        document.getElementById("likeCount7").textContent = count - 1;
    }
}
function changeImage8() {
    if (areTheyLiked.LikeButtonHeart8 == false) {
        document.getElementById("LikeButtonHeart8").src = "HeartGraphicFull.png";
        areTheyLiked.LikeButtonHeart8 = true
    }
    else {
        document.getElementById("LikeButtonHeart8").src = "HeartGraphicNotFull.png";
        areTheyLiked.LikeButtonHeart8 = false
    }
}
function changeImage9() {
    if (areTheyLiked.LikeButtonHeart9 == false) {
        document.getElementById("LikeButtonHeart9").src = "HeartGraphicFull.png";
        areTheyLiked.LikeButtonHeart9 = true
    }
    else {
        document.getElementById("LikeButtonHeart9").src = "HeartGraphicNotFull.png";
        areTheyLiked.LikeButtonHeart9 = false
    }
}
function changeImage10() {
    if (areTheyLiked.LikeButtonHeart10 == false) {
        document.getElementById("LikeButtonHeart10").src = "HeartGraphicFull.png";
        areTheyLiked.LikeButtonHeart10 = true
        var count = Number(document.getElementById("likeCount10").textContent);
        document.getElementById("likeCount10").textContent = count + 1;
    }
    else {
        document.getElementById("LikeButtonHeart10").src = "HeartGraphicNotFull.png";
        areTheyLiked.LikeButtonHeart10 = false
        var count = Number(document.getElementById("likeCount10").textContent);
        document.getElementById("likeCount10").textContent = count - 1;
    }
}
function changeImage11() {
    if (areTheyLiked.LikeButtonHeart11 == false) {
        document.getElementById("LikeButtonHeart11").src = "HeartGraphicFull.png";
        areTheyLiked.LikeButtonHeart11 = true
        var count = Number(document.getElementById("likeCount11").textContent);
        document.getElementById("likeCount11").textContent = count + 1;
    }
    else {
        document.getElementById("LikeButtonHeart11").src = "HeartGraphicNotFull.png";
        areTheyLiked.LikeButtonHeart11 = false
        var count = Number(document.getElementById("likeCount11").textContent);
        document.getElementById("likeCount11").textContent = count - 1;
    }
}
function changeImage12() {
    if (areTheyLiked.LikeButtonHeart12 == false) {
        document.getElementById("LikeButtonHeart12").src = "HeartGraphicFull.png";
        areTheyLiked.LikeButtonHeart12 = true
        var count = Number(document.getElementById("likeCount12").textContent);
        document.getElementById("likeCount12").textContent = count + 1;
    }
    else {
        document.getElementById("LikeButtonHeart12").src = "HeartGraphicNotFull.png";
        areTheyLiked.LikeButtonHeart12 = false
        var count = Number(document.getElementById("likeCount12").textContent);
        document.getElementById("likeCount12").textContent = count - 1;
    }
}
function changeImage13() {
    if (areTheyLiked.LikeButtonHeart13 == false) {
        document.getElementById("LikeButtonHeart13").src = "HeartGraphicFull.png";
        areTheyLiked.LikeButtonHeart13 = true
        var count = Number(document.getElementById("likeCount13").textContent);
        document.getElementById("likeCount13").textContent = count + 1;
    }
    else {
        document.getElementById("LikeButtonHeart13").src = "HeartGraphicNotFull.png";
        areTheyLiked.LikeButtonHeart13 = false
        var count = Number(document.getElementById("likeCount13").textContent);
        document.getElementById("likeCount13").textContent = count - 1;
    }
}
function changeImage14() {
    if (areTheyLiked.LikeButtonHeart14 == false) {
        document.getElementById("LikeButtonHeart14").src = "HeartGraphicFull.png";
        areTheyLiked.LikeButtonHeart14 = true
        var count = Number(document.getElementById("likeCount14").textContent);
        document.getElementById("likeCount14").textContent = count + 1;
    }
    else {
        document.getElementById("LikeButtonHeart14").src = "HeartGraphicNotFull.png";
        areTheyLiked.LikeButtonHeart14 = false
        var count = Number(document.getElementById("likeCount14").textContent);
        document.getElementById("likeCount14").textContent = count - 1;
    }
}


function redirectHome() {
    window.location.replace("../../index.html")
}

function redirect1() {
    window.location.replace("allComicWebPages/alonaComicWebPage/alonaComicWebPage.html")
}

function redirect2() {
    window.location.replace("allComicWebPages/yardenComicWebPage/yardenComicWebPage.html")
}

function redirect3() {
    window.location.replace("allComicWebPages/otherPeoplesGraphicsComicWebPage/otherPeoplesGraphicsComicWebPage.html")
}

function redirect5() {
    window.location.replace("allComicWebPages/fiveWorldsComicWebPage/fiveWorldsComicWebPage.html")
}

function redirect6() {
    window.location.replace("allComicWebPages/tintinComicWebPage/tintinComicWebPage.html")
}

function redirect7() {
    window.location.replace("allComicWebPages/amuletComicWebPage/amuletComicWebPage.html")
}

function redirect10() {
    window.location.replace("allComicWebPages/asterixComicWebPage/asterixComicWebPage.html")
}

function redirect11() {
    window.location.replace("allComicWebPages/understandingComicsComicWebPage/understandingComicsComicWebPage.html")
}

function redirect12() {
    window.location.replace("allComicWebPages/ospComicWebPage/ospComicWebPage.html")
}

function redirect13() {
    window.location.replace("allComicWebPages/xkcdComicWebPage/xkcdComicWebPage.html")
}

function redirect14() {
    window.location.replace("allComicWebPages/whoInventedSchoolComicWebPage/whoInventedSchoolComicWebPage.html")
}

function redirect15() {
    window.location.replace("comicUploadPage/comicUploadPage.html")
}