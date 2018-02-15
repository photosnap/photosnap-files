!function(){function e(e,t){Talker.call(this),AttributeHelper.call(this,e),this.distancePriceInfo=t,this.addressInput=this.root.querySelector(".address-autocomplete"),this.addressMap=this.root.querySelector(".address-map"),this.explainBadge=this.root.querySelector(".price-explain"),this.explainPrice=this.explainBadge.querySelector(".amount"),this.explainMiles=this.explainBadge.querySelector(".miles"),this.errorBadge=this.root.querySelector(".badge-error"),this.processingBadge=this.root.querySelector(".badge-processing"),this._init()}AttributeHelper.empowerPrototype(e.prototype),Talker.empowerPrototype(e.prototype),e.prototype.getId=function(){return this.getAttribute("id",AttributeHelper.Types.STRING)},e.prototype.getInputValue=function(){return this.addressInput.value},e.prototype.handleAddressInput=function(e,t){this.setErrorMessage(""),this.setIsProcessing(!1),this.showPricingChange(!1);var r=e.length>0?e[0]:{},s=r.formatted_address;if(r.geometry&&"OK"===t){r.geometry.location.lat(),r.geometry.location.lng();var i=encodeURIComponent("size:lg|color:red|label:|"+s);this.addressMap.src="https://maps.googleapis.com/maps/api/staticmap?size=400x400&autoscale=false&key=AIzaSyCgUzqmiez5BMk6aqbmh31majTQ7JEK3kg&markers="+i,this.calculateDistance()}else this.setErrorMessage('<i class="fa fa-warning"></i> Unable to find the location you specified')},e.prototype._init=function(){var e=this;e.autocomplete=new google.maps.places.Autocomplete(e.addressInput,{}),e.directionsService=new google.maps.DirectionsService,e.geocoder=new google.maps.Geocoder,e.autocomplete.addListener("place_changed",function(){var t=e.autocomplete.getPlace(),r=t.formatted_address,s=(t.geometry.location.lat(),t.geometry.location.lng(),encodeURIComponent("size:lg|color:red|label:|"+r));e.addressMap.src="https://maps.googleapis.com/maps/api/staticmap?size=400x400&zoom=15&autoscale=false&key=AIzaSyCgUzqmiez5BMk6aqbmh31majTQ7JEK3kg&markers="+s,e.calculateDistance()})},e.prototype.calculateDistance=function(){var e=this;this.setIsProcessing(!0);var t={origin:this.getAttribute("start-address"),destination:this.addressInput.value,travelMode:"DRIVING"};this.directionsService.route(t,function(t,r){if(e.setIsProcessing(!1),e.showPricingChange(!0),e.setErrorMessage(""),"OK"===r){var s=t.routes[0].legs[0].distance.value,i=Math.floor(s/1609.34),a=e.calculateDistanceCharge(i);e.fireEvent("change",{miles:i,extraCharge:a.extraCharge,eventAddress:e.addressInput.value}),e.explainMiles.innerHTML="("+i+" miles)",e.explainPrice.innerHTML=a.extraCharge.toFixed(2)}else e.setErrorMessage('<i class="fa fa-warning"></i> Our apologies; we were unable to get directions to your location.')})},e.prototype.calculateDistanceCharge=function(e){var t=e-this.distancePriceInfo.max_free_miles;return{extraMiles:t,extraCharge:t<0?0:Math.floor(t*this.distancePriceInfo.price_per_extra_mile)}},e.prototype.showPricingChange=function(e){this.explainBadge.classList.toggle("hide",!e)},e.prototype.setIsProcessing=function(e){this.processingBadge.classList.toggle("hide",!e)},e.prototype.setErrorMessage=function(e){this.errorBadge.innerHTML=e,this.errorBadge.classList.toggle("hide",0===e.length)},e.initAndGetTiles=function(t,r){for(var s=[],i=document.querySelectorAll(t),a=0;a<i.length;a++){var o=new e(i[a],r);s.push(o)}return s},window.DistanceTile=e}();