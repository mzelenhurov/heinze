let sumArray = [];
let sumCount1 = 0;
let sumCount2 = 0;
let sumCount3 = 0;
let sumCount4 = 0;
let sumCount5 = 0;
let sumCount6 = 0;
let countArray = [];
let idArray = [];
let procSlide = 0;


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
    document.getElementById('massInput').innerHTML = sum;
            calc = sum*0.49;
            calc = calc.toFixed(2);
        document.getElementById('calcSum').innerHTML = calc + ' ' + '€';
                totalSum()

    } else {
                totalSum();

        label.classList.remove('text-green');
        let filtered_array = sumArray.filter(x=> x !==count
        );
        sumArray = filtered_array;
        let filtered_id = idArray.filter(x=> x !==id );
        idArray =filtered_id;
        sumArray.forEach(x => sum += x);
        addresses = sum + ' ';
        document.getElementById('address').innerHTML = addresses;
        document.getElementById('massInput').innerHTML = sum;
            calc = (sum-inputValue)*0.49;
            calc = calc.toFixed(2);
        document.getElementById('calcSum').innerHTML = calc + ' ' + '€';
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
          document.getElementById('address').innerHTML = responce + ' ';
            let slider = document.getElementById("range-inp");
            let output = document.getElementById("range-val");
            output.innerHTML = slider.value;
            let calc1 = 0;
            calc1 = responce*0.49;
            sumArray = [responce];
            document.getElementById('massInput').innerHTML =  responce;
            document.getElementById('calcSum').innerHTML = calc1 + '€';
            totalSum();
            slider.oninput = function() {
                output.innerHTML = this.value;
                procSlide = Math.round(this.value/100*responce);
                let calc = 0;
                calc = procSlide*0.49;
                document.getElementById('address').innerHTML = procSlide + ' ';
                sumArray = [procSlide];
                document.getElementById('massInput').innerHTML =  procSlide;
                document.getElementById('calcSum').innerHTML = calc + '€';
                totalSum();
            };
           }
       })
   });
});



// });
let inputValue = 0;
$('.addAddress').blur(function () {
   let $input = $('.addAddress');
    let sum = 0;
    let calc = 0;
    sumArray.forEach(x => sum += x);
    inputValue = parseInt($input.val());
    if (Number.isNaN(inputValue)) {
         inputValue = 0;
     document.getElementById('address').innerHTML = inputValue + sum + ' ';
     document.getElementById('massInput').innerHTML =  sum;
     calc = sum *0.49;
     document.getElementById('calcSum').innerHTML = calc;
     document.getElementById('indInput').innerHTML = inputValue;
    } else
        {
        document.getElementById('address').innerHTML = inputValue + sum + ' ';
        document.getElementById('massInput').innerHTML = sum;
        // calc = Math.round((inputValue+sum)*0.49);
            calc = sum*0.49;
            calc = calc.toFixed(2);
        document.getElementById('calcSum').innerHTML = calc + ' ' + '€';
        document.getElementById('indInput').innerHTML = inputValue;

    }
    return inputValue;
});

function adressSum1($event){
let label = document.querySelector(`label[for="${$event.id}"]`);
    let sum = 0;
    let calc = 0;
    sumArray.forEach(x => sum += x);
    calc = (sum+inputValue);
let htmlData = " <td>DSGVO-konform und reichweitenstark </td>\n" +
            "                            <td id=\"1Input\">0</td>\n" +
            "                            <td>0,14 €</td>\n" +
            "                            <td id=\"1Sum\">0 €</td>";
let htmlData2 ="<td colspan=\"3\">Einmalige Setup-Kosten</td>\n" +
            "   <td>900,00 € </td>";

    if ($event.checked === true) {
        label.classList.add('btn-success');
        label.classList.remove('btn-outline-success');
        let summ = document.getElementById('address').innerHTML;
        parseInt(summ);
        sumCount1 = summ*0.14+900;
        sumCount1 = Number(sumCount1.toFixed(2));
        $('#plan1').append(htmlData);
        $('#subplan1').append(htmlData2);
        document.getElementById('1Input').innerHTML = calc;
        document.getElementById('1Sum').innerHTML = Number((sumCount1-900).toFixed(2)) + '€';
        countArray = [...countArray, sumCount1];
          totalSum()

    } else {
        let filtered_array = countArray.filter(x=> x !==sumCount1
        );
        countArray = filtered_array;
        label.classList.remove('btn-success');
        label.classList.add('btn-outline-success');
        $('#plan1').html('');
        $('#subplan1').html('');
                  totalSum();



        sumCount1 = 0;
    }
    return sumCount1;
}
function adressSum2($event){
let label = document.querySelector(`label[for="${$event.id}"]`);
let sum = 0;
    let calc = 0;
    sumArray.forEach(x => sum += x);
    calc = (sum+inputValue);
let htmlData = " <td> Inhouse Telefonmarketing für mehr Termine </td>\n" +
            "                            <td id=\"2Input\">0</td>\n" +
            "                            <td>20 €</td>\n" +
            "                            <td id=\"2Sum\">0 €</td>\n";
let htmlData2 ="<td colspan=\"3\">Einmalige Kosten</td>\n" +
            "   <td>1.500,00 €</td>";
    if ($event.checked === true) {
        label.classList.add('btn-success');
        label.classList.remove('btn-outline-success');
        let summ = document.getElementById('address').innerHTML;
        sumCount2 = summ*20+1500;
        sumCount2 = Number(sumCount2.toFixed(2));
        $('#plan2').append(htmlData);
        $('#subplan2').append(htmlData2);
        document.getElementById('2Input').innerHTML = calc;
        document.getElementById('2Sum').innerHTML =  Number((sumCount2-1500).toFixed(2)) + '€';
                countArray = [...countArray, sumCount2];
              totalSum()

    } else {
         let filtered_array = countArray.filter(x=> x !==sumCount2
        );
        countArray = filtered_array;
        label.classList.remove('btn-success');
        label.classList.add('btn-outline-success');
        $('#plan2').html('');
        $('#subplan2').html('');
                  totalSum();

        sumCount2 = 0;
    }
    console.log(sumCount2);
    return sumCount2;
}

function adressSum3($event){
let label = document.querySelector(`label[for="${$event.id}"]`);
let sum = 0;
    let calc = 0;
    sumArray.forEach(x => sum += x);
    calc = (sum+inputValue);
let htmlData = " <td> Prozessunterstützung von der Einladung <br> bis zur Teilnahmebestätigung  </td>\n" +
            "                            <td id=\"3Input\">0</td>\n" +
            "                            <td>0.31 €</td>\n" +
            "                            <td id=\"3Sum\">0 €</td>\n";
    if ($event.checked === true) {
        label.classList.add('btn-success');
        label.classList.remove('btn-outline-success');
        let summ = document.getElementById('address').innerHTML;
        sumCount3 = summ*0.31;
        sumCount3 = Number(sumCount3.toFixed(2));
        $('#plan3').append(htmlData);
        document.getElementById('service-4').classList.remove('btn-success');
        document.getElementById('service-4').classList.add('btn-outline-success');
           $('#plan4').html('');
           $('#subplan4').html('');
        // document.getElementById('4Sum').innerHTML = 0 + '€';
        let filtered_array2 = countArray.filter(x=> x !==sumCount4
        );
        countArray = filtered_array2;
        document.getElementById('3Input').innerHTML = calc;
        document.getElementById('3Sum').innerHTML = sumCount3 + '€';
                countArray = [...countArray, sumCount3];
                          totalSum()

    } else{
         let filtered_array = countArray.filter(x=> x !==sumCount3
        );
        countArray = filtered_array;
        if (label.classList.contains('btn-outline-success')){
            label.classList.add('btn-success');
        label.classList.remove('btn-outline-success');
        let summ = document.getElementById('address').innerHTML;
        sumCount3 = summ*0.31;
        sumCount3 = Number(sumCount3.toFixed(2));
        $('#plan3').append(htmlData);
        document.getElementById('service-4').classList.remove('btn-success');
        document.getElementById('service-4').classList.add('btn-outline-success');
           $('#plan4').html('');
           $('#subplan4').html('');
        // document.getElementById('4Sum').innerHTML = 0 + '€';
        let filtered_array2 = countArray.filter(x=> x !==sumCount4
        );
        countArray = filtered_array2;
        document.getElementById('3Input').innerHTML = calc;
        document.getElementById('3Sum').innerHTML = sumCount3 + '€';
                countArray = [...countArray, sumCount3];
                          totalSum()
        } else{
            label.classList.remove('btn-success');
        label.classList.add('btn-outline-success');
                $('#plan3').html('');
                           totalSum();

        sumCount3 = 0;
        }

    }
    console.log(sumCount3);
    return sumCount3;
}

function adressSum4($event){
let label = document.querySelector(`label[for="${$event.id}"]`);
let sum = 0;
    let calc = 0;
    sumArray.forEach(x => sum += x);
    calc = (sum+inputValue);
let htmlData = " <td> Prozessunterstützung von der Einladung <br> bis zur Teilnahmebestätigung  </td>\n" +
            "                            <td id=\"4Input\">0</td>\n" +
            "                            <td>0.31 €</td>\n" +
            "                            <td id=\"4Sum\">0 €</td>\n";
let htmlData2 ="<td colspan=\"3\">Einmalige Setup-Kosten</td>\n" +
            "   <td>1000,00 € </td>";

    if ($event.checked === true) {
        label.classList.add('btn-success');
        label.classList.remove('btn-outline-success');
        let summ = document.getElementById('address').innerHTML;
        sumCount4 = summ*0.31+1000;
        sumCount4 = Number(sumCount4.toFixed(2));
        $('#plan4').append(htmlData);
        $('#subplan4').append(htmlData2);
        document.getElementById('service-3').classList.remove('btn-success');
        document.getElementById('service-3').classList.add('btn-outline-success');
        $('#plan3').html('');
        document.getElementById('4Input').innerHTML = calc;
        document.getElementById('4Sum').innerHTML = Number((sumCount4-1000).toFixed(2)) + '€';
                countArray = [...countArray, sumCount4];
              totalSum()

    } else {
         let filtered_array = countArray.filter(x=> x !==sumCount4
        );
        countArray = filtered_array;
        if (label.classList.contains('btn-outline-success')){
            label.classList.add('btn-success');
        label.classList.remove('btn-outline-success');
        let summ = document.getElementById('address').innerHTML;
        sumCount4 = summ*0.31+1000;
        sumCount4 = Number(sumCount4.toFixed(2));
        $('#plan4').append(htmlData);
        $('#subplan4').append(htmlData2);
        document.getElementById('service-3').classList.remove('btn-success');
        document.getElementById('service-3').classList.add('btn-outline-success');
        $('#plan3').html('');
        document.getElementById('4Input').innerHTML = calc;
        document.getElementById('4Sum').innerHTML = Number((sumCount4-1000).toFixed(2)) + '€';
                countArray = [...countArray, sumCount4];
              totalSum()
        } else {
            label.classList.remove('btn-success');
        label.classList.add('btn-outline-success');
                $('#plan4').html('');
                $('#subplan4').html('');
                          totalSum();

        sumCount4 = 0;
        }

    }
    console.log(sumCount4);
    return sumCount4;
}

function adressSum5($event){
let label = document.querySelector(`label[for="${$event.id}"]`);
let sum = 0;
    let calc = 0;
    sumArray.forEach(x => sum += x);
    calc = (sum+inputValue);
let htmlData = " <td> Der Klassiker in der Architektenansprache </td>\n" +
            "                            <td id=\"5Input\">0</td>\n" +
            "                            <td>0.20 €</td>\n" +
            "                            <td id=\"5Sum\">0 €</td>\n";
    if ($event.checked === true) {
        label.classList.add('btn-success');
        label.classList.remove('btn-outline-success');

        let summ = document.getElementById('address').innerHTML;
        sumCount5 = summ*0.20;
        sumCount5 = Number(sumCount5.toFixed(2));
        $('#plan5').append(htmlData);
        document.getElementById('service-6').classList.remove('btn-success');
        document.getElementById('service-6').classList.add('btn-outline-success');
        $('#plan6').html('');
        document.getElementById('5Input').innerHTML = calc;
        document.getElementById('5Sum').innerHTML = sumCount5 + '€';
                countArray = [...countArray, sumCount5];
              totalSum()

    } else {
         let filtered_array = countArray.filter(x=> x !==sumCount5
        );
        countArray = filtered_array;
        if (label.classList.contains('btn-outline-success')){
            label.classList.add('btn-success');
            label.classList.remove('btn-outline-success');

        let summ = document.getElementById('address').innerHTML;
        sumCount5 = summ*0.20;
        sumCount5 = Number(sumCount5.toFixed(2));
        $('#plan5').append(htmlData);
        document.getElementById('service-6').classList.remove('btn-success');
        document.getElementById('service-6').classList.add('btn-outline-success');
        $('#plan6').html('');
        document.getElementById('5Input').innerHTML = calc;
        document.getElementById('5Sum').innerHTML = sumCount5 + '€';
                countArray = [...countArray, sumCount5];
              totalSum()
        } else {
             label.classList.remove('btn-success');
             label.classList.add('btn-outline-success');
                $('#plan5').html('');
          totalSum();

        sumCount5 = 0;
        }

    }
    return sumCount5;
}

function adressSum6($event){
let label = document.querySelector(`label[for="${$event.id}"]`);
let sum = 0;
    let calc = 0;
    sumArray.forEach(x => sum += x);
    calc = (sum+inputValue);
let htmlData = " <td> Der Klassiker in der Architektenansprache </td>\n" +
            "                            <td id=\"6Input\">0</td>\n" +
            "                            <td>0.26 €</td>\n" +
            "                            <td id=\"6Sum\">0 €</td>\n";
    if ($event.checked === true) {
        label.classList.add('btn-success');
        label.classList.remove('btn-outline-success');
        let summ = document.getElementById('address').innerHTML;
        sumCount6 = summ*0.26;
        sumCount6 = Number(sumCount6.toFixed(2));
        $('#plan6').append(htmlData);
        document.getElementById('service-5').classList.remove('btn-success');
        document.getElementById('service-5').classList.add('btn-outline-success');
        $('#plan5').html('');
        document.getElementById('6Input').innerHTML = calc;
        document.getElementById('6Sum').innerHTML = sumCount6 + '€';
                countArray = [...countArray, sumCount6];
              totalSum()

    } else {
         let filtered_array = countArray.filter(x=> x !==sumCount6
        );
        countArray = filtered_array;
                if (label.classList.contains('btn-outline-success')){
                       label.classList.add('btn-success');
        label.classList.remove('btn-outline-success');
        let summ = document.getElementById('address').innerHTML;
        sumCount6 = summ*0.26;
        sumCount6 = Number(sumCount6.toFixed(2));
        $('#plan6').append(htmlData);
        document.getElementById('service-5').classList.remove('btn-success');
        document.getElementById('service-5').classList.add('btn-outline-success');
        $('#plan5').html('');
        document.getElementById(    '6Input').innerHTML = calc;
        document.getElementById('6Sum').innerHTML = sumCount6 + '€';
                countArray = [...countArray, sumCount6];
              totalSum()
                } else {
               label.classList.remove('btn-success');
               label.classList.add('btn-outline-success');
                $('#plan6').html('');
              totalSum();

        sumCount6 = 0;
                }

    }
    console.log(sumCount6);
    return sumCount6;
}
function totalSum(){
        let sum = 0;
        let calc = 0;
        let total = 0;
        sumArray.forEach(x => sum += x);
        countArray.forEach(x => calc += x);
        total = (sum*0.49)+parseInt(calc);
        document.getElementById('totalSum').innerHTML = total + '€';
    console.log(countArray);
    console.log(calc);
    console.log(total);
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


