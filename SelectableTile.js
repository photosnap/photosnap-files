!function(){function t(t){Talker.call(this),AttributeHelper.call(this,t),this.toggleTiles=[],this.selectBtn=t.querySelector(".btn-select"),this.infoBtn=t.querySelector(".btn-info"),this._init()}AttributeHelper.empowerPrototype(t.prototype),Talker.empowerPrototype(t.prototype),t.prototype.select=function(t){var e=void 0===t||t;e&&this.unselectTheRest(),this.setAttribute("select",e,AttributeHelper.Types.BOOL),this.selectBtn.classList.toggle("btn-default",!e),this.selectBtn.classList.toggle("btn-success",e),this.root.classList.toggle("selected",e),this.selectBtn.innerHTML=this.selectBtn.getAttribute(e?"data-text-selected":"data-text-select"),this.fireEvent("change",{item_id:this.getId(),selected:e})},t.prototype.unselectTheRest=function(){for(var t=this.getId(),e=0;e<this.toggleTiles.length;e++)this.toggleTiles[e].getId()!==t&&this.toggleTiles[e].select(!1)},t.prototype.getId=function(){return this.getAttribute("id",AttributeHelper.Types.STRING)},t.prototype.isSelected=function(t){return this.getAttribute("select",AttributeHelper.Types.BOOL)},t.prototype._init=function(){var t=this;this.selectBtn.addEventListener("click",function(e){e.preventDefault();var i=t.isSelected();t.select(!i)})},t.initAndGetTiles=function(e,i){for(var s=void 0===i||!i,l=[],n=document.querySelectorAll(e),r=0;r<n.length;r++){var o=new t(n[r]);s&&(o.toggleTiles=l),l.push(o)}return l},window.SelectableTile=t}();