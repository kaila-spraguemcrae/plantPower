import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { stateControl, feed, blueFood, hydrate, superWater, giveSun, growLamp } from '../src/js/plantPower.js';

$(document).ready(function() {

  $('#feed').click(function(){
    let input = $('#feed-type').val();
    if(input === "feed"){
      const newState = stateControl(feed);
      $('#soil-value').text(`Soil: ${newState.soil}`);
    } else if(input === "blueFood") {
      const newState = stateControl(blueFood);
      $('#soil-value').text(`Soil: ${newState.soil}`);
    }
  });
  $('#hydrate').click(() => {
    let input = $('#hydration-type').val();
    if (input === "hydrate"){
      const newState = stateControl(hydrate);
      $('#hydraValue').text(`Water: ${newState.water}`);
    }else if (input === "superWater"){
      const newState = stateControl(superWater);
      $('#hydraValue').text(`Water: ${newState.water}`);
    }
  });
  $('#light').click(() => {
    let input = $('#light-type').val();
    if (input === "giveSun"){
      const newState = stateControl(giveSun);
      $('#lightValue').text(`Light: ${newState.light}`);
    }else if (input === "growLamp"){
      const newState = stateControl(growLamp);
      $('#lightValue').text(`Light: ${newState.light}`);
    }
  });

});