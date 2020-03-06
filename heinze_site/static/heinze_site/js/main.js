function cheackboxLabelControl($event) {
    let label = document.querySelector(`label[for="${$event.id}"]`);

    if ($event.checked === true) {
        label.classList.add('text-green');
    } else {
        label.classList.remove('text-green');
    }

    console.log($event);
    console.log(label);
}


function cheackboxServiceControl($event) {
    let label = document.querySelector(`label[for="${$event.id}"]`);

    if ($event.checked === true) {
        label.classList.add('btn-success');
        label.classList.remove('btn-outline-success');
    } else {
        label.classList.remove('btn-success');
        label.classList.add('btn-outline-success');
    }

    console.log($event);
    console.log(label);
}

let videos = [
    '<iframe class="youtube-frame" src="https://www.youtube.com/embed/gAX37NUk-bM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe class="youtube-frame" src="https://www.youtube.com/embed/NjSPtxRhm0w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe class="youtube-frame" src="https://www.youtube.com/embed/ROq1POGAARU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe class="youtube-frame" src="https://www.youtube.com/embed/08j-sUl2wTc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',

];

function loadVideo(index) {
    document.getElementById('player').innerHTML = videos[index];
}


$('#video1').on('hidden.bs.modal', function (e) {
    document.getElementById('player').innerHTML = '';
});


var slider = document.getElementById("range-inp");
var output = document.getElementById("range-val");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}

