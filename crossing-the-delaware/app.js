var Index = (function() {

    var o = {};

    o.enlistMeClick = function() {
        window.location.href = 'council-of-war.html';
    };

    return o;

})();

var CouncilOfWar = (function() {

    var o = {};

    o.checkAnswer = function(userInput) {
        if (userInput.toLowerCase().replace(' ', '') === '9') {
            alert('Excellent! Continue on to the next map.');
            window.location.href = 'prepare-the-boats.html';
        }
        else {
            alert('Sorry, that is incorrect. Hurry, there is no time to waste!');
        }
    }

    return o;

})();

var PrepareTheBoats = (function() {

    var o = {};

    o.checkAnswer = function(boat1Input, boat2Input) {

        if (boat1Input.toLowerCase() === 'the ship of hagoth' || boat1Input.toLowerCase() === 'loading the ship' && boat2Input.toLowerCase() === 'the ship of hagoth' || boat2Input.toLowerCase() === 'loading the ship') {
            alert('Excellent! Continue on to the next map.');
            window.location.href = 'cross-the-river.html';
        }
        else {
            alert('Sorry, that is incorrect. Hurry, there is no time to waste!');
        }
    }

    return o;

})();

var CrossTheRiver = (function() {

    var o = {};

    o.checkAnswer = function(sevenLetterWord, fourLetterPalindrome) {

        if (sevenLetterWord.toLowerCase() === 'ductile' && fourLetterPalindrome.toLowerCase() === 'assa') {
            alert('Excellent! Continue on to the next map.');
            window.location.href = 'attack-trenton.html';
        }
        else {
            alert('Sorry, that is incorrect. Hurry, there is no time to waste!');
        }
    }

    return o;

})();

var AttackTrenton = (function() {

    var o = {};

    o.checkAnswer = function(flagInput, ghanaInput) {

        if (flagInput.toLowerCase() === 'flag' && ghanaInput.toLowerCase() === 'ghana') {
            alert('Excellent! Trenton is won! Continue on to hear the final report and instructions.');
            window.location.href = 'victory.html';
        }
        else {
            alert('Sorry, that is incorrect. Hurry, there is no time to waste!');
        }
    }

    return o;

})();
