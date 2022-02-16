import React from "react";

function Information(productName, ProductPrice, ProductDescription, ProductID) {
    productName = "Test"
    return (
        <div id="modal-example" uk-modal='' uk-animation-scale-down=''>
            <div class="uk-modal-dialog uk-modal-body">
                <h2 class="uk-modal-title">{productName}</h2>
                <p>Product Information goes here!</p>
                <p class="uk-text-right">
                    <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                    <button class="uk-button uk-button-primary" type="button">Add to cart</button>
                </p>
            </div>
        </div>
    )
}

export default Information