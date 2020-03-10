let sumArray = [];
let sumCount = 0;
let idArray = [];

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

function cheackboxValueLabelControl($event, count, id) {
    let value_id = $event.id;
    console.log(value_id);
    let sum = 0;
    let label = document.querySelector(`label[for="${$event.id}"]`);
    if ($event.checked === true) {
        label.classList.add('text-green');
        sumArray = [...sumArray, count];
        idArray = [...idArray, id];
    sumArray.forEach(x => sum += x);
    console.log(sum);
    addresses = sum + ' ';
    document.getElementById('address').innerHTML = addresses;
    } else {
        label.classList.remove('text-green');
        let filtered_array = sumArray.filter(x=> x !==count
        );
        sumArray = filtered_array;
        let filtered_id = idArray.filter(x=> x !==id );
        idArray =filtered_id;
        sumArray.forEach(x => sum += x);
        addresses = sum + ' ';
        document.getElementById('address').innerHTML = addresses;
    }
    console.log(sumArray);
    return idArray;

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


$(function () {
   let $input = $('.postcode');
   $input.on('input',function (evt) {
       $.ajax({
      type: 'POST',
      url: 'endpoint',
      data: {'search_string': $input.val(),
                'arr': idArray},
           success: function (responce) {
           }
       })
   });
});

$(function () {
    let $input = $('.addAddresses');

});

function adressSum1($event){
let label = document.querySelector(`label[for="${$event.id}"]`);

    if ($event.checked === true) {
        label.classList.add('btn-success');
        label.classList.remove('btn-outline-success');
        let summ = document.getElementById('address').innerHTML;
        sumCount = summ*0.14;
    } else {
        label.classList.remove('btn-success');
        label.classList.add('btn-outline-success');
        sumCount = 0;
    }
    console.log(sumCount);
}
function adressSum2($event){
let label = document.querySelector(`label[for="${$event.id}"]`);

    if ($event.checked === true) {
        label.classList.add('btn-success');
        label.classList.remove('btn-outline-success');
        let summ = document.getElementById('address').innerHTML;
        sumCount = summ*20;
    } else {
        label.classList.remove('btn-success');
        label.classList.add('btn-outline-success');
        sumCount = 0;
    }
    console.log(sumCount);
}

function adressSum3($event){
let label = document.querySelector(`label[for="${$event.id}"]`);

    if ($event.checked === true) {
        label.classList.add('btn-success');
        label.classList.remove('btn-outline-success');
        let summ = document.getElementById('address').innerHTML;
        sumCount = summ*0.31;
    } else {
        label.classList.remove('btn-success');
        label.classList.add('btn-outline-success');
        sumCount = 0;
    }
    console.log(sumCount);
}

function adressSum4($event){
let label = document.querySelector(`label[for="${$event.id}"]`);

    if ($event.checked === true) {
        label.classList.add('btn-success');
        label.classList.remove('btn-outline-success');
        let summ = document.getElementById('address').innerHTML;
        sumCount = summ*0.31;
    } else {
        label.classList.remove('btn-success');
        label.classList.add('btn-outline-success');
        sumCount = 0;
    }
    console.log(sumCount);
}

function adressSum5($event){
let label = document.querySelector(`label[for="${$event.id}"]`);

    if ($event.checked === true) {
        label.classList.add('btn-success');
        label.classList.remove('btn-outline-success');
        let summ = document.getElementById('address').innerHTML;
        sumCount = summ*0.20;
    } else {
        label.classList.remove('btn-success');
        label.classList.add('btn-outline-success');
        sumCount = 0;
    }
    console.log(sumCount);
}

function adressSum6($event){
let label = document.querySelector(`label[for="${$event.id}"]`);

    if ($event.checked === true) {
        label.classList.add('btn-success');
        label.classList.remove('btn-outline-success');
        let summ = document.getElementById('address').innerHTML;
        sumCount = summ*0.26;
    } else {
        label.classList.remove('btn-success');
        label.classList.add('btn-outline-success');
        sumCount = 0;
    }
    console.log(sumCount);
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

