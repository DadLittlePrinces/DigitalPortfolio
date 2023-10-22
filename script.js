document.addEventListener('DOMContentLoaded', function() {
    var nameElement = document.getElementById('name');
    var changeButton = document.getElementById('changeButton');

    changeButton.addEventListener('click', function() {
        var newName = prompt('Enter a new name:');
        if (newName) {
            nameElement.innerText = newName;
        }
    });
});
